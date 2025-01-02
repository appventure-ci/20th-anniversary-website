import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import type { Message } from '@/types';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// In-memory message store
let messages: Message[] = [
    {
        id: 1,
        title: 'Unforgettable Memories',
        subtitle: 'ALUMNI, CLASS OF 2021',
        content: 'From late nights in the research lab to winning the International Science Olympiad, NUSH shaped who I am today. The rigorous academic environment and supportive teachers prepared me well for university. Proud to see how far we\'ve come in 20 years!'
    },
    {
        id: 2,
        title: 'Foundation of Innovation',
        subtitle: 'ALUMNI, CLASS OF 2018',
        content: 'Starting my own tech company was inspired by the entrepreneurial spirit I developed during our school\'s innovation program. The hands-on projects and mentorship from industry professionals were invaluable. Happy 20th anniversary to my alma mater!'
    }
];

// Content analysis using OpenAI
async function analyzeContent(title: string, content: string) {
    try {
        const prompt = `
    Analyze the following message for a school's message board. The message should be:
    1. Appropriate and free of harmful content
    2. Genuine appreciation or congratulations for NUS High School
    3. Non-sarcastic and positive in tone
    
    Title: ${title}
    Message: ${content}
    
    Please provide a JSON response with the following structure:
    {
      "isAppropriate": boolean,
      "isRelevant": boolean,
      "isSarcastic": boolean,
      "confidence": number (0-1),
      "reason": "string explaining the analysis"
    }
    `;

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: prompt
            }],
            response_format: {
                type: "json_object"
            },
            temperature: 0.1,
            max_tokens: 300
        });

        const response = completion.choices[0].message?.content;
        console.log(response)
        return JSON.parse(response || '{"isAppropriate": false, "isRelevant": false, "isSarcastic": true, "confidence": 0, "reason": "Failed to analyze content"}');
    } catch (error) {
        console.error('OpenAI API Error:', error);
        throw new Error('Content analysis failed');
    }
}

export async function GET() {
    try {
        return NextResponse.json(
            { messages, status: 'success' },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch messages', status: 'error' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate required fields
        if (!body.title || !body.subtitle || !body.content) {
            return NextResponse.json(
                { message: 'Missing required fields', status: 'error' },
                { status: 400 }
            );
        }

        // Analyze content using OpenAI
        const analysis = await analyzeContent(body.title, body.content);

        // Check if content meets all criteria
        if (!analysis.isAppropriate) {
            return NextResponse.json(
                {
                    message: 'Message contains inappropriate content',
                    status: 'error',
                    details: analysis.reason
                },
                { status: 400 }
            );
        }

        if (!analysis.isRelevant) {
            return NextResponse.json(
                {
                    message: 'Message must be relevant to NUS High School',
                    status: 'error',
                    details: analysis.reason
                },
                { status: 400 }
            );
        }

        if (analysis.isSarcastic) {
            return NextResponse.json(
                {
                    message: 'Message appears to be sarcastic or insincere',
                    status: 'error',
                    details: analysis.reason
                },
                { status: 400 }
            );
        }

        // Create new message if all checks pass
        const newMessage: Message = {
            id: messages.length + 1,
            title: body.title.trim(),
            subtitle: body.subtitle.trim(),
            content: body.content.trim()
        };

        // Add to messages array
        messages.push(newMessage);

        return NextResponse.json(
            {
                message: 'Message added successfully',
                status: 'Approved',
                data: newMessage
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error processing message:', error);
        return NextResponse.json(
            { message: 'Failed to add message', status: 'error' },
            { status: 500 }
        );
    }
}