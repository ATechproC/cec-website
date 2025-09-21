// Start of the 2025's data

// start of team members :

import ahmed from "../public/images/team/ahmed.png";
import achraf from "../public/images/team/achraf.png";
import aitlhaj from "../public/images/team/aitlhaj.png";
import asmaa from "../public/images/team/asmaa.png";
import aya from "../public/images/team/aya.png";
import chaimaa from "../public/images/team/chaimaa.png";
import eljazouly from "../public/images/team/eljazouly.png";
import elwalid from "../public/images/team/elwalid.jpg";
import hamz from "../public/images/team/hamz.png";
import sabti from "../public/images/team/sabti.png";
import sara from "../public/images/team/sara.png";
import soufian from "../public/images/team/soufian.png";
import wissal from "../public/images/team/wissal.png";
import zouhir from "../public/images/team/zouhir.png";

import hero from "../public/images/hero.jpg";

import founded from "../public/images/founded.jpg";

import ai_data from "../public/images/events/ai-data.png";
import geeks from "../public/images/events/geeks.png";
import id_to_pd from "../public/images/events/id-to-pd.png";
import pod from "../public/images/events/pod.jpg";
import pr_solv from "../public/images/events/pr-solv.png";
import { StaticImageData } from "next/image";

export interface TeamProps {
    id: number;
    name: string;
    title: string;
    desc: string;
    profile: StaticImageData;
    linkedIn?: string;
    gitHub?: string;
}

interface MembersProps {
    id: number;
    team: TeamProps[];
}

export const teamMembers: MembersProps[] = [
    {
        "id": 2025,
        "team": [
            {
                "id": 1,
                "name": "Ahmed Ben Ahmed",
                "title": "Président",
                "desc": "Computer Engineering student leading our club's vision and operations.",
                "profile": ahmed,
                "linkedIn": "https://www.linkedin.com/in/ahmed-ben-ahmed/",
                "gitHub": "https://github.com/Ahmed-BenAhmed",
            },
            {
                "id": 2,
                "name": "Achraf Abdelfadel",
                "title": "Responsable Design",
                "desc": "Leading the visual identity and design projects.",
                "profile": achraf,
                "linkedIn": "https://www.linkedin.com/in/achraf-abdelfadel",
            },
            {
                "id": 3,
                "name": "Asmaa Talal",
                "title": "Chef de Protocole Adjointe",
                "desc": "Assisting in event planning and protocol management.",
                "profile": asmaa,
                "linkedIn": "https://www.linkedin.com/in/asmaa-talal",
            },
            {
                "id": 4,
                "name": "Ait Elhaj Ghizlane",
                "title": "Responsable Événementielle",
                "desc": "Planning and executing club events and activities.",
                "profile": aitlhaj,
                "linkedIn": "linkedin.com/in/ait-elhaj-ghizlane",
            },
            {
                "id": 5,
                "name": "Aya Farmati",
                "title": "Trésorière",
                "desc": "Handling club finances and budget planning.",
                "profile": aya,
                "linkedIn": "https://www.linkedin.com/in/aya-farmati-bb1705226/",
            },
            {
                "id": 6,
                "name": "Chaimaa Dhah",
                "title": "Secrétaire Générale",
                "desc": "Managing club communications and administrative tasks.",
                "profile": chaimaa,
                "linkedIn": "https://www.linkedin.com/in/chaimaa-dhah-671324224/",
            },
            {
                "id": 7,
                "name": "Eljazouly Fatima Zahra",
                "title": "Responsable de Formation",
                "desc": "Developing and coordinating training programs.",
                "profile": eljazouly,
                "linkedIn": "linkedin.com/in/eljazouly-fatima-zahra/",
            },
            {
                "id": 8,
                "name": "Elwalid Aboulaakoul",
                "title": "Shadow Member",
                "desc": "Assisting the team in the development parts.",
                "profile": elwalid,
                "linkedIn": "https://www.linkedin.com/in/aboulaakoul/",
            },
            {
                "id": 9,
                "name": "Hamza Mousrij",
                "title": "Responsable de Formation Adjoint",
                "desc": "Assisting with workshop planning and educational initiatives.",
                "profile": hamz,
                "linkedIn": "https://www.linkedin.com/in/hamza-mousrij/",
            },
            {
                "id": 10,
                "name": "Sabti Riad",
                "title": "Manager",
                "desc": "Coordinating club activities and operations.",
                "profile": sabti,
                "linkedIn": "linkedin.com/in/riad-sabti-459186306",
            },
            {
                "id": 11,
                "name": "Sara Mesnaoui",
                "title": "Photographer et Réseaux Sociaux",
                "desc": "Managing the club's social media presence and photography.",
                "profile": sara,
                "linkedIn": "linkedin.com/in/sara-mesnaoui",
            },
            {
                "id": 12,
                "name": "Soufiane Hamouche",
                "title": "Responsable Multimédia",
                "desc": "Creating and managing club's digital content.",
                "profile": soufian,
                "linkedIn": "linkedin.com/in/soufiane-hamouche",
            },
            {
                "id": 13,
                "name": "Wissal Cheikh",
                "title": "Chef de Protocole",
                "desc": "Overseeing event organization and official procedures.",
                "profile": wissal,
                "linkedIn": "https://www.linkedin.com/in/wissal-cheikh/",
            },
            {
                "id": 14,
                "name": "Zouhair Serrar",
                "title": "Vice Président",
                "desc": "Supporting club leadership and overseeing project execution.",
                "profile": zouhir,
                "linkedIn": "https://www.linkedin.com/in/zouhair-serrar/",
            },
        ],
    },
];

export interface EventsProps {
    id: number;
    picture: StaticImageData;
    title: string;
    date: string;
    status: string;
    desc: string;
    speakers?: string[]
}

interface EventsCECProps {
    id: number;
    events: EventsProps[];
}

export const eventsCEC: EventsCECProps[] = [
    {
        "id": 2025,
        "events": [
            {
                "id": 1,
                "picture": ai_data,
                "title": "Problem Solving",
                "date": "April 24,2025",
                "status": "Google Meet",
                "desc": "A session focused on problem-solving techniques and critical thinking. Discover advanced approaches to tackle complex programming challenges.",
            },
            {
                "id": 2,
                "picture": pod,
                "title": "Hackathons: Where It All Began",
                "date": "December 27, 2024",
                "status": "Online",
                "speakers": ["Hicham Maghraoui", "Othman Moussaoui", "Ismail Hamdach"],
                "desc": "Exploring the origins and impact of hackathons with industry experts.",
            },
            {
                "id": 3,
                "picture": id_to_pd,
                "title": "From Idea to Product",
                "date": "April 30, 2025",
                "status": "Google Meet",
                "speakers": ["Bachir Cherrat", "Chakib Dekik"],
                "desc": "A workshop detailing the journey from a concept to a market-ready product.",
            },
            {
                "id": 4,
                "picture": geeks,
                "title": "Geeksblabla On Campus",
                "date": "February 26, 2025",
                "status": "ENSA Berrechid",
                "speakers": ["Youssef El Azizi", "Mohamed Daoudi"],
                "desc": "An engaging on-campus session in collaboration with Geeksblabla.",
            },
            {
                "id": 5,
                "picture": pr_solv,
                "title": "Unlock the Power of Data and AI",
                "date": "December 18, 2024",
                "status": "Room D7, ENSA",
                "speakers": ["Hafid (AI)", "Marwa (Data)"],
                "desc": "An introductory session to the fascinating worlds of Data and Artificial Intelligence.",
            },
        ]
    },
];

import healthy from "../public/images/projects/healthy.jpg";
import cityguide from "../public/images/projects/cityguide.png";
import palestine from "../public/images/projects/palestine.jpg";
import weather from "../public/images/projects/weather.jpg";
import books from "../public/images/projects/books.jpg";

export interface ProjectsProps {
    id: number;
    title: string;
    desc: string;
    link: string;
    src: StaticImageData
}

interface CECProjectsProps {
    id : number;
    projects : ProjectsProps[];
}

export const CECProjects: CECProjectsProps[] = [
    {
        "id": 2025,
        "projects": [
            {
                "id": 1,
                "title": "Weather App",
                "desc": "A web application providing real-time weather updates and forecasts. Users can search for cities to view temperature, conditions, and hourly predictions.",
                "link": "#",
                "src": weather
            },
            {
                "id": 2,
                "title": "CityGuide+",
                "desc": "A web application for discovering and navigating popular cities. Features city information and QR code integration for enhanced exploration.",
                "link": "#",
                "src": cityguide
            },
            {
                "id": 3,
                "title": "Palestine",
                "desc": "A web application for discoverinA news portal dedicated to events, history, and information related to Palestine. Offers categorized news for easy browsing.",
                "link": "#",
                "src": palestine
            },
            {
                "id": 4,
                "title": "Stay.Healthy Platform",
                "desc": "A web application promoting a balanced lifestyle by helping users track health metrics like BMI and BMR, and offering guidance on well-being.",
                "link": "#",
                "src": healthy
            },
            {
                "id": 5,
                "title": "CheckBook",
                "desc": "A web platform for personal development book enthusiasts. Allows users to discover books, manage reading lists, and access summaries to boost their potential.",
                "link": "#",
                "src": books
            },
        ]
    }
]

export const assets = {
    hero,
    founded,
}

// end of 2025's data :
