"use client";

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface StatesProps {
    title: string;
    description: string;
    isEventsModalOpen: boolean;
}

interface SetStatesProps {
    setTitle: Dispatch<SetStateAction<string>>;
    setDescription: Dispatch<SetStateAction<string>>;
    setIsEventsModalOpen: Dispatch<SetStateAction<boolean>>;
}

interface EventsModalProps {
    states: StatesProps;
    setStates: SetStatesProps;
}

const EventsModalContext = createContext({} as EventsModalProps)

const EventsModalProvider = ({ children }: { children: React.ReactNode }) => {

    const [title, setTitle] = useState<string>("");

    const [description, setDescription] = useState<string>("");

    const [isEventsModalOpen, setIsEventsModalOpen] = useState<boolean>(false)

    const states: StatesProps = {
        title,
        description,
        isEventsModalOpen
    }

    const setStates: SetStatesProps = {
        setTitle,
        setDescription,
        setIsEventsModalOpen
    }

    return <EventsModalContext.Provider value={{ states, setStates }}>
        {children}
    </EventsModalContext.Provider>
}

export default EventsModalProvider

export const useEventsModal = () => useContext(EventsModalContext)