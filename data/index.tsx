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

// New members for the second team
import kawtar from "../public/images/team/kawtar.jpg";
import kawtarB from "../public/images/team/KawtarB.jpg";
import basma from "../public/images/team/Basma.jpg";
import assmaa from "../public/images/team/asmaa.jpg";
import anass from "../public/images/team/anas.jpg";
import meriem from "../public/images/team/meriem.jpg";
import riad from "../public/images/team/riad.jpg";
import abderrahmane from "../public/images/team/abderrahmane.jpg";
import youssef from "../public/images/team/Yusouf.jpg";
import ilham from "../public/images/team/ilhame.jpg";

import hero from "../public/images/hero.jpg";

import founded from "../public/images/founded.jpg";

import ai_data from "../public/images/events/ai-data.png";
import geeks from "../public/images/events/geeks.png";
import id_to_pd from "../public/images/events/id-to-pd.png";
import pod from "../public/images/events/pod.jpg";
import pr_solv from "../public/images/events/pr-solv.png";
import { StaticImageData } from "next/image";

import fake_profile from "../public/images/fake-profile1.png"

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

export const fakeTeamInfo: TeamProps[] = [
    {
        "id": 1,
        "name": "Team Member",
        "title": "Position",
        "desc": "Brief description of role and expertise.",
        "profile": fake_profile,
        "linkedIn": "#",
        "gitHub": "#",
    },
    {
        "id": 2,
        "name": "Team Member",
        "title": "Position",
        "desc": "Brief description of role and expertise.",
        "profile": fake_profile,
        "linkedIn": "#",
        "gitHub": "#",
    },
    {
        "id": 3,
        "name": "Team Member",
        "title": "Position",
        "desc": "Brief description of role and expertise.",
        "profile": fake_profile,
        "linkedIn": "#",
        "gitHub": "#",
    },
    {
        "id": 4,
        "name": "Team Member",
        "title": "Position",
        "desc": "Brief description of role and expertise.",
        "profile": fake_profile,
        "linkedIn": "#",
        "gitHub": "#",
    },
]

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
                "gitHub": "https://github.com/ahmed-benahmed",
            },
            {
                "id": 2,
                "name": "Chaimaa Dhah",
                "title": "Secrétaire Générale",
                "desc": "Managing club communications and administrative tasks.",
                "profile": chaimaa,
                "linkedIn": "https://www.linkedin.com/in/chaimaa-dhah-671324224/",
            },
            {
                "id": 3,
                "name": "Aya Farmati",
                "title": "Trésorière",
                "desc": "Handling club finances and budget planning.",
                "profile": aya,
                "linkedIn": "https://www.linkedin.com/in/aya-farmati-bb1705226/",
            },
            {
                "id": 4,
                "name": "Sabti Riad",
                "title": "Manager",
                "desc": "Coordinating club activities and operations.",
                "profile": sabti,
                "linkedIn": "linkedin.com/in/riad-sabti-459186306",
            },
            {
                "id": 5,
                "name": "Wissal Cheikh",
                "title": "Chef de Protocole",
                "desc": "Overseeing event organization and official procedures.",
                "profile": wissal,
                "linkedIn": "https://www.linkedin.com/in/wissal-cheikh/",
            },
            {
                "id": 6,
                "name": "Asmaa Talal",
                "title": "Chef de Protocole Adjointe",
                "desc": "Assisting in event planning and protocol management.",
                "profile": asmaa,
                "linkedIn": "https://www.linkedin.com/in/asmaa-talal",
            },
            {
                "id": 7,
                "name": "Ait Elhaj Ghizlane",
                "title": "Responsable Événementielle",
                "desc": "Planning and executing club events and activities.",
                "profile": aitlhaj,
                "linkedIn": "linkedin.com/in/ait-elhaj-ghizlane",
            },
            {
                "id": 8,
                "name": "Eljazouly Fatima Zahra",
                "title": "Responsable de Formation",
                "desc": "Developing and coordinating training programs.",
                "profile": eljazouly,
                "linkedIn": "linkedin.com/in/eljazouly-fatima-zahra/",
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
                "name": "Soufiane Hamouche",
                "title": "Responsable Multimédia",
                "desc": "Creating and managing club's digital content.",
                "profile": soufian,
                "linkedIn": "linkedin.com/in/soufiane-hamouche",
            },
            {
                "id": 11,
                "name": "Zouhair Serrar",
                "title": "Vice Président",
                "desc": "Supporting club leadership and overseeing project execution.",
                "profile": zouhir,
                "linkedIn": "https://www.linkedin.com/in/zouhair-serrar/",
            },
            {
                "id": 12,
                "name": "Achraf Abdelfadel",
                "title": "Responsable Design",
                "desc": "Leading the visual identity and design projects.",
                "profile": achraf,
                "linkedIn": "https://www.linkedin.com/in/achraf-abdelfadel",
            },
            {
                "id": 13,
                "name": "Elwalid Aboulaakoul",
                "title": "Shadow Member",
                "desc": "Assisting the team in the development parts.",
                "profile": elwalid,
                "linkedIn": "https://www.linkedin.com/in/aboulaakoul/",
            },
            {
                "id": 14,
                "name": "Sara Mesnaoui",
                "title": "Photographer et Réseaux Sociaux",
                "desc": "Managing the club's social media presence and photography.",
                "profile": sara,
                "linkedIn": "linkedin.com/in/sara-mesnaoui",
            },
        ],
    },
    {
        "id": 2026,
        "team": [
            {
                "id": 1,
                "name": "Ahmed Ben Ahmed",
                "title": "Président",
                "desc": "Computer Engineering student leading our club's vision and operations.",
                "profile": ahmed,
                "linkedIn": "https://www.linkedin.com/in/ahmed-ben-ahmed/",
                "gitHub": "https://github.com/ahmed-benahmed"
            },
            {
                "id": 2,
                "name": "Kawtar El Bahaoui",
                "title": "Vice Président",
                "desc": "Supporting club leadership and overseeing project execution.",
                "profile": kawtarB,
                "linkedIn": "https://www.linkedin.com/in/kawtar-elbahaoui-542002356"
            },
            {
                "id": 3,
                "name": "Anass Choraichi",
                "title": "Chef de Protocole Adjointe",
                "desc": "Assisting in event planning and protocol management.",
                "profile": anass,
                "linkedIn": "https://www.linkedin.com/in/anass-choraichi-80a403267/",
                "gitHub" : "https://github.com/ATechproC"
            },
            {
                "id": 4,
                "name": "ER.RAHMOUNI Meriem",
                "title": "Responsable Événementielle",
                "desc": "Planning and executing club events and activities.",
                "profile": meriem,
                "linkedIn": "http://linkedin.com/in/meriem-errahmouni-44a47b355"
            },
            {
                "id": 5,
                "name": "Kawtar Boutaskiouin",
                "title": "Secrétaire Générale",
                "desc": "Managing club communications and administrative tasks.",
                "profile": kawtar,
                "linkedIn": "https://www.linkedin.com/in/kawtar-boutaskiouin-1a9557356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            },
            {
                "id": 6,
                "name": "Achraf Abdelfadel",
                "title": "Trésorière",
                "desc": "Handling club finances and budget planning.",
                "profile": achraf,
                "linkedIn": "https://www.linkedin.com/in/achraf-abdelfadel-6b67282a6/"
            },
            {
                "id": 7,
                "name": "Basma El mghari",
                "title": "Manager",
                "desc": "Coordinating club activities and operations.",
                "profile": basma,
                "linkedIn": "https://www.linkedin.com/in/basma-el-mghari/"
            },
            {
                "id": 8,
                "name": "Assmaa azaroual",
                "title": "Chef de Protocole",
                "desc": "Overseeing event organization and official procedures.",
                "profile": assmaa,
                "linkedIn": "https://www.linkedin.com/in/assmaa-azaroual"
            },
            {
                "id": 9,
                "name": "Sabti Riad",
                "title": "Responsable de Formation",
                "desc": "Developing and coordinating training programs.",
                "profile": riad,
                "linkedIn": "https://www.linkedin.com/in/riad-sabti-459186306/"
            },
            {
                "id": 10,
                "name": "Abderrahmane Khbabez",
                "title": "Responsable de Formation Adjoint",
                "desc": "Assisting with workshop planning and educational initiatives.",
                "profile": abderrahmane,
                "linkedIn": "https://www.linkedin.com/in/4bderrahmane/"
            },
            {
                "id": 11,
                "name": "Youssef Elkandart",
                "title": "Responsable Multimédia",
                "desc": "Creating and managing club's digital content.",
                "profile": youssef,
                "linkedIn": "https://www.linkedin.com/in/youssef-elkandart-459533324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            },
            {
                "id": 12,
                "name": "Imran Hajji",
                "title": "Responsable Design",
                "desc": "Leading the visual identity and design projects.",
                "profile": fake_profile,
                "linkedIn": "/"
            },
            {
                "id": 13,
                "name": "Elbastami ilham",
                "title": "Photographer et Réseaux Sociaux",
                "desc": "Managing the club's social media presence and photography.",
                "profile": ilham,
                "linkedIn": "https://www.linkedin.com/in/elbastami-ilham?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            }
        ]
    }
];

export interface EventsProps {
    id: number;
    picture: StaticImageData | "/placeholder.svg";
    title: string;
    date: string;
    status: string;
    desc: string;
    speakers?: string[];
    modalTitle?: string;
    modalDescription?: string;
}

interface EventsCECProps {
    id: number;
    events: EventsProps[];
}

export const fakeEventsInfo: EventsProps[] = [
    {
        id: 1,
        picture: "/placeholder.svg",
        title: "No Events Yet",
        date: "—",
        status: "—",
        desc: "There are currently no events available. Please check back later.",
    },
]

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
                "modalTitle": "Advanced Problem Solving Techniques",
                "modalDescription": "Join us for an intensive session where we dive deep into systematic problem-solving methodologies. Learn how to break down complex programming challenges, apply critical thinking frameworks, and develop efficient solutions. This session is perfect for developers looking to enhance their technical problem-solving skills and tackle real-world coding challenges with confidence."
            },
            {
                "id": 2,
                "picture": pod,
                "title": "Hackathons: Where It All Began",
                "date": "December 27, 2024",
                "status": "Online",
                "speakers": ["Hicham Maghraoui", "Othman Moussaoui", "Ismail Hamdach"],
                "desc": "Exploring the origins and impact of hackathons with industry experts.",
                "modalTitle": "The Evolution of Hackathons",
                "modalDescription": "Discover the fascinating history and evolution of hackathons with our panel of industry experts. Learn how hackathons have transformed from small coding gatherings to global innovation platforms. Our speakers will share insights on how hackathons have launched successful startups, fostered community collaboration, and become powerful tools for skill development and networking in the tech industry."
            },
            {
                "id": 3,
                "picture": id_to_pd,
                "title": "From Idea to Product",
                "date": "April 30, 2025",
                "status": "Google Meet",
                "speakers": ["Bachir Cherrat", "Chakib Dekik"],
                "desc": "A workshop detailing the journey from a concept to a market-ready product.",
                "modalTitle": "Product Development Masterclass",
                "modalDescription": "This comprehensive workshop guides you through the entire product development lifecycle. From initial ideation and market research to prototyping, testing, and final launch, our experienced speakers will share practical frameworks and real-world case studies. Perfect for aspiring entrepreneurs, product managers, and developers looking to transform their ideas into successful market-ready products."
            },
            {
                "id": 4,
                "picture": geeks,
                "title": "Geeksblabla On Campus",
                "date": "February 26, 2025",
                "status": "ENSA Berrechid",
                "speakers": ["Youssef El Azizi", "Mohamed Daoudi"],
                "desc": "An engaging on-campus session in collaboration with Geeksblabla.",
                "modalTitle": "Geeksblabla Campus Collaboration",
                "modalDescription": "We're excited to host the renowned Geeksblabla team for a special on-campus event! This collaborative session brings together students and industry professionals for an interactive discussion on current tech trends, career opportunities, and the future of technology. Expect engaging talks, Q&A sessions, and valuable networking opportunities with leading figures in the Moroccan tech community."
            },
            {
                "id": 5,
                "picture": pr_solv,
                "title": "Unlock the Power of Data and AI",
                "date": "December 18, 2024",
                "status": "Room D7, ENSA",
                "speakers": ["Hafid (AI)", "Marwa (Data)"],
                "desc": "An introductory session to the fascinating worlds of Data and Artificial Intelligence.",
                "modalTitle": "Data & AI Fundamentals Workshop",
                "modalDescription": "Dive into the exciting realms of Data Science and Artificial Intelligence in this beginner-friendly workshop. Our experts will demystify core concepts, showcase real-world applications, and provide hands-on examples of how data and AI are transforming industries. Whether you're new to the field or looking to strengthen your foundation, this session offers valuable insights into one of technology's most dynamic areas."
            },
        ]
    },
];

import healthy from "../public/images/projects/healthy.jpg";
import cityguide from "../public/images/projects/cityguide.png";
import palestine from "../public/images/projects/palestine.jpg";
import weather from "../public/images/projects/weather.jpg";
import books from "../public/images/projects/books.jpg";
import restaurant from "../public/images/projects/restaurant.jpg";
import ensalon from '../public/images/projects/ensalon.jpg'

import { StatisticsProps } from "@/types";

export interface ProjectsProps {
    id: number;
    title: string;
    desc: string;
    link: string;
    src: StaticImageData | "/placeholder.svg"
}

interface CECProjectsProps {
    id: number;
    projects: ProjectsProps[];
}

export const fakeProjectsInfo: ProjectsProps[] = [
    {
        id: 1,
        title: "No Projects Yet",
        desc: "There are currently no projects available. Please check back later.",
        link: "#",
        src: "/placeholder.svg"
    },
    {
        id: 2,
        title: "No Projects Yet",
        desc: "There are currently no projects available. Please check back later.",
        link: "#",
        src: "/placeholder.svg"
    },
    {
        id: 3,
        title: "No Projects Yet",
        desc: "There are currently no projects available. Please check back later.",
        link: "#",
        src: "/placeholder.svg"
    },
]

export const CECProjects: CECProjectsProps[] = [
    {
        "id": 2025,
        "projects": [
            {
                "id": 1,
                "title": "Restaurant Ovibes",
                "desc": "A warm place dedicated to culinary pleasure, offering delicious and diverse cuisine, carefully prepared to provide a gourmet and friendly experience.",
                "link": "#",
                "src": restaurant
            },
            {
                "id": 2,
                "title": "Weather App",
                "desc": "A web application providing real-time weather updates and forecasts. Users can search for cities to view temperature, conditions, and hourly predictions.",
                "link": "#",
                "src": weather,
            },
            {
                "id": 3,
                "title": "CityGuide+",
                "desc": "A web application for discovering and navigating popular cities. Features city information and QR code integration for enhanced exploration.",
                "link": "https://cityguideplus.netlify.app/",
                "src": cityguide
            },
            {
                "id": 4,
                "title": "Palestine",
                "desc": "A web application for discoverinA news portal dedicated to events, history, and information related to Palestine. Offers categorized news for easy browsing.",
                "link": "#",
                "src": palestine
            },
            {
                "id": 5,
                "title": "Stay.Healthy Platform",
                "desc": "A web application promoting a balanced lifestyle by helping users track health metrics like BMI and BMR, and offering guidance on well-being.",
                "link": "#",
                "src": healthy
            },
            {
                "id": 6,
                "title": "CheckBook",
                "desc": "A web platform for personal development book enthusiasts. Allows users to discover books, manage reading lists, and access summaries to boost their potential.",
                "link": "#",
                "src": books
            },
            {
                "id": 7,
                "title": "Ensalon",
                "desc": "A space dedicated to beauty and well-being, offering a variety of hairdressing, aesthetic, and care services designed to provide a unique and personalized experience.",
                "link": "https://assmaa-aza.github.io/Ensalon/",
                "src": ensalon
            },
        ]
    }
]

interface AssetsProps {
    id: number;
    hero: StaticImageData;
    founded: StaticImageData;
}

export const assets: AssetsProps[] = [
    {
        id: 2025,
        hero,
        founded,
    }
]

export interface StatistcisProps {
    value: number
    label: string
    suffix: string
}


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
    {
        "id": 2,
        "title": "Our Impact",
        "impacts": [
            {
                "id": 1,
                "number": "13+",
                "title": "Active Members",
                "desc": "Passionate students and professionals from diverse backgrounds",
            },
            {
                "id": 2,
                "number": "0",
                "title": "Projects Completed",
                "desc": "Innovative solutions and applications built by our community",
            },
            {
                "id": 3,
                "number": "0",
                "title": "Events Organized",
                "desc": "Workshops, hackathons, and tech talks throughout the years",
            }
        ]
    },
]

// end of 2025's data :
