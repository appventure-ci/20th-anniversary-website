export interface TimelineEvent {
    date: string;
    event: string;
    description: string;
    term: number;
    isHomecoming?: boolean;
}

export const timelineEvents: TimelineEvent[] = [
    {
        term: 1,
        date: "3-Jan",
        event: "Launch of NUS High Mascot",
        description: "High's mascot, the white-bellied sea eagle, is officially launched!"
    },
    {
        term: 1,
        date: "14-Mar",
        event: "Games Day",
        description: "Watch out for the Alumni and Parents Exhibition Team Match"
    },
    {
        term: 1,
        date: "1-Mar",
        event: "Launch of Nanosatellite",
        description: "Singapore's first nanosatellite by a high school, will be launched!"
    },
    {
        term: 1,
        date: "19-Feb",
        event: "Research Congress",
        description: "TBC"
    },
    {
        term: 2,
        date: "11-Apr",
        event: "Speech Day cum 20th Anniv Celebrations",
        description: "Public announcement of the launch of the nanosatellite"
    },
    {
        term: 3,
        date: "1-Aug",
        event: "Giving Back and Homecoming Day",
        description: "Fundraising\nHomecoming - we welcome back our 17 cohorts of alumni",
        isHomecoming: true
    },
    {
        term: 4,
        date: "14-Nov",
        event: "Convocation",
        description: "Launch of Curriculum Commemorative Book"
    }
]; 