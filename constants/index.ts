import spinner from "../public/images/spinner.svg";
import cec_icon from "../public/images/cec-icon.jpg";
import { FaqsProps, LinksProps, MainActivitiesProps, MissionInfoProps, StatisticsProps } from "@/types";

export const assets = {
    spinner,
    cec_icon,
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

export const mainActivities : MainActivitiesProps[] = [
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


export const faqs : FaqsProps[] = [
    {
        question: "Is there a membership fee?",
        answer:
            "No, CEC CLUB membership is completely free for all enrolled students at CEC Narowal. We believe in making tech education and networking accessible to everyone.",
    },
    {
        question: "Do I need prior experience to join?",
        answer:
            "Not at all! We welcome students of all skill levels, from complete beginners to advanced programmers. Our community is designed to help everyone learn and grow together.",
    },
    {
        question: "How often does the club meet?",
        answer:
            "We hold regular meetings twice a month, along with special workshops, hackathons, and tech talks throughout the semester. All events are announced in advance through our communication channels.",
    },
    {
        question: "Can I join if I'm not a computer engineering student?",
        answer:
            "Yes! While we're based in the Computer Engineering department, we welcome students from all disciplines who have an interest in technology and want to learn programming, web development, or other tech skills.",
    },
]
