import spinner from "../public/images/spinner.svg";
import cec_icon from "../public/images/cec-icon.jpg";
import mission1 from "../public/image.png"
import { FaqsProps, LinksProps, MainActivitiesProps, MissionInfoProps, StatisticsProps } from "@/types";

export const assets = {
    spinner,
    cec_icon,
    mission1
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
        "id": 1,
        "title": "Our Impact",
        "impacts": [
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

export const mainActivities: MainActivitiesProps[] = [
    {
        "id": 1,
        "title": "What We Do",
        "desc": "Explore the various activities and initiatives we organize",
        "activities": [
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


export const faqs: FaqsProps[] = [
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

interface ResourcesProps {
    title: string;
    description: string;
    link: string;
    href: string;
}

export const resources: ResourcesProps[] = [
    {
        title: "1. Recommended Playlist — YouTube:",
        description:
            "A curated list of coding videos to teach and develop skills in HTML, CSS, JavaScript, as well as modern frameworks, React, CSS, and other essential technologies. This playlist is designed for both beginners and those who are strengthening their skills and exploring new enhancements.",
        link: "→ Start Learning",
        href: "https://www.youtube.com/c/Freecodecamp"
    },
    {
        title: "2. Club YouTube Page:",
        description:
            "Welcome to the YouTube page of the Computer Engineering Club — discover our webinars, our projects, and join us to share the passion for computer culture.",
        link: "→ Start Learning Club",
        href: "https://www.youtube.com/watch?v=fy2OgI0CkHE"
    },
    {
        title: "3. Collaborative Design — Figma:",
        description:
            "An online design tool that allows you to create mockups and work together in real time. Perfect for designing your website or app interface before creating its code.",
        link: "→ Start Learning Club",
        "href": "https://www.figma.com/files/team/1411273961643118868/recents-and-sharing?fuid=1411273959361739376"
    },
    {
        title: "4. Collaborative Work — GitHub:",
        description:
            "If you want to work in others' Team Git, use collaborative efficiently set a project. GitHub is the essential platform to manage projects and grow together.",
        link: "→ GitHub",
        "href": "https://github.com/?utm_source=chatgpt.com"
    },
    {
        title: "5. Interactive Coding Platforms:",
        description:
            "Websites where you can practice coding challenges, improve algorithms, and get real-time feedback to sharpen your skills.",
        link: "→ LeetCode",
        href: "https://leetcode.com/?utm_source=chatgpt.com",
    },

    {
        title: "6. Resources to Improve Your Resume:",
        description:
            "These resources help with your resume? Use this link require to career and optimize professional resources.",
        link: "→ Improve",
        "href": "https://www.fiverr.com/categories/writing-translation/resume-writing"
    },
    {
        title: "7. Build a 3D Portfolio:",
        description:
            "To showcase your projects in a unique way, you can create an interactive 3D portfolio. These platforms allow you to build and share your creations.",
        link: "→ Portfolio",
        "href": "https://sketchfab.com/?utm_source=chatgpt.com"
    },
    {
        title: "8. Typing Challenge — Monkeytype:",
        description:
            "Improve your typing speed and keyboard efficiency with customizable exercises. A fun and useful training to code faster!",
        link: "→ Try to Monkeytype",
        "href": "https://monkeytype.com/?utm_source=chatgpt.com"
    },
]


interface ResourcesLinksProps {
    name: string;
    link: string;
}


export const resourcesLinks: ResourcesLinksProps[] = [
    { name: "Blog", link: "/blog" },
    { name: "Resources", link: "/resources" },
    { name: "Join Us", link: "/join-us" },
    { name: "FAQ", link: "/faq" },
]