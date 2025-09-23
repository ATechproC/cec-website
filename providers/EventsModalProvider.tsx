"use client";

import { EventsModalProps, SetStatesProps, StatesProps } from "@/types";
import { createContext, useContext, useState } from "react";

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