import { Dispatch, SetStateAction } from "react";

export interface CardInfoProps {
    title: string;
    description: string;
}

export interface GetIconsProps {
    type: string;
    className : string;
    size : number;
}

export interface LinksProps {
    link: string;
    name: string;
}

export interface MissionProps {
    id: number;
    title: string;
    desc: string;
}

export interface MissionInfoProps {
    id : number;
    title : string;
    desc1 : string;
    desc2 : string;
    missions : MissionProps[];
}

export interface ImpactsProps {
    id: number;
    number: string;
    title: string;
    desc: string;
}

export interface StatisticsProps {
    id : number;
    title : string;
    impacts : ImpactsProps[];
}

export interface ActivitiesProps {
    id: number;
    icon: string;
    title: string;
    desc: string;
}

export interface MainActivitiesProps {
    id : number;
    title : string;
    desc : string;
    activities : ActivitiesProps[];
}

export interface FaqsProps {
    question : string;
    answer : string;
}

export interface StatesProps {
    title: string;
    description: string;
    isEventsModalOpen: boolean;
}

export interface SetStatesProps {
    setTitle: Dispatch<SetStateAction<string>>;
    setDescription: Dispatch<SetStateAction<string>>;
    setIsEventsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export interface EventsModalProps {
    states: StatesProps;
    setStates: SetStatesProps;
}

export interface LoadingProps {
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>
}

export interface MobileMenuProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: React.Dispatch<SetStateAction<boolean>>
}

export interface SelectYearProps {
    year : number;
    setYear : React.Dispatch<SetStateAction<number>>
}