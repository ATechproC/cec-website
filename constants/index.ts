interface LinksProps {
    link: string;
    name: string;
}

export const links: LinksProps[] = [
    {
        "link": "/",
        "name": "Home"
    },
    {
        "link": "/about",
        "name": "About"
    },
    {
        "link": "/events",
        "name": "Events"
    },
    {
        "link": "/projects",
        "name": "Projects"
    },
    {
        "link": "/contact",
        "name": "Contact"
    }
]

interface MissionProps {
    id: number;
    title: string;
    desc: string;
}

interface MissionInfoProps {
    id : number;
    title : string;
    desc1 : string;
    desc2 : string;
    missions : MissionProps[];
}

export const missionInfo: MissionInfoProps[] = [
    {
        "id": 1,
        "title": "Our Mission",
        "desc1": "CEC Club is dedicated to fostering innovation, collaboration, and technological excellence among students and professionals. We believe in the power of technology to transform lives and create meaningful impact in our community.",
        "desc2": "Through workshops, projects, and events, we provide a platform for learning, sharing knowledge, and building the next generation of tech leaders.",
        "missions": [
            {
                "id": 1,
                "title": "Innovation",
                "desc": "We encourage creative thinking and innovative solutions to real-world problems through technology.",
            },
            {
                "id": 2,
                "title": "Collaboration",
                "desc": "Building a strong community where members support each other and work together on exciting projects.",
            },
            {
                "id": 3,
                "title": "Excellence",
                "desc": "Striving for the highest standards in everything we do, from code quality to event organization.",
            }
        ]
    }
]

interface ImpactsProps {
    id: number;
    number: string;
    title: string;
    desc: string;
}
interface StatisticsProps {
    id : number;
    title : string;
    impacts : ImpactsProps[];
}

export const statistics: StatisticsProps[] = [
    {
        "id" : 1,
        "title" : "Our Impact",
        "impacts" : [
            {
                "id": 1,
                "number": "50+",
                "title": "Active Members",
                "desc": "Passionate students and professionals from diverse backgrounds",
            },
            {
                "id": 2,
                "number": "20+",
                "title": "Projects Completed",
                "desc": "Innovative solutions and applications built by our community",
            },
            {
                "id": 3,
                "number": "15+",
                "title": "Events Organized",
                "desc": "Workshops, hackathons, and tech talks throughout the years",
            }
        ]
    },
]

interface ActivitiesProps {
    id: number;
    icon: string;
    title: string;
    desc: string;
}
interface MainActivitiesProps {
    id : number;
    title : string;
    desc : string;
    activities : ActivitiesProps[];
}

export const mainActivities: MainActivitiesProps[] = [
    {
        "id" : 1,
        "title" : "What We Do",
        "desc" : "Explore the various activities and initiatives we organize",
        "activities" : [
            {
                "id": 1,
                "icon": "BookOpen",
                "title": "Workshops & Courses",
                "desc": "We organize and participate in coding competitions, hackathons, and tech challenges to foster innovationand teamwork.",
            },
            {
                "id": 2,
                "icon": "Trophy",
                "title": "Competitions",
                "desc": "We organize and participate in coding competitions, hackathons, and tech challenges to foster innovation and teamwork."
            },
            {
                "id": 3,
                "icon": "Mic",
                "title": "Conferences",
                "desc": "Our speaker series brings industry experts and academics to share insights on emerging technologies and career paths.",
            },
            {
                "id": 4,
                "icon": "Settings",
                "title": "Projects",
                "desc": "We facilitate collaborative projects that solve real problems while building practical experience for members.",
            },
            {
                "id": 5,
                "icon": "Users",
                "title": "Networking",
                "desc": "Our mixers and industry visits help students build connections that lead to internships and job opportunities.",
            },
            {
                "id": 6,
                "icon": "GraduationCap",
                "title": "Mentorship",
                "desc": "We pair experienced members with newcomers to provide guidance, support, and knowledge transfer.",
            }
        ]
    },
]
