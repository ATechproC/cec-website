"use client";

import { cn } from '@/lib/utils';
import { useEventsModal } from '@/providers/EventsModalProvider'
import { FaTimes } from "react-icons/fa";

const EventsModal = () => {

    const { states: { title, description, isEventsModalOpen }, setStates : {setIsEventsModalOpen} } = useEventsModal();

    return (
        <div 
        className={cn("hidden",
            isEventsModalOpen && "block")}
            >
            <div
            onClick={() => setIsEventsModalOpen(false)}
            className='fixed top-0 left-0 w-full h-screen backdrop-blur-md' />
            <div className='fixed max-sm:w-[80%] md:w-[650px] p-5 pt-8 text-black -translate-x-1/2 -translate-y-1/2 md: m left-1/2 top-1/2 rounded-md bg-main'>
            <FaTimes 
            size={18}
            cursor={"pointer"}
            onClick={() => setIsEventsModalOpen(!isEventsModalOpen)}
            className='absolute right-4 top-4'/>
                <p className='font-bold text-[20px] text-white mb-3'> {title} </p>
                <p className='font-semibold text-md'> {description} </p>
            </div>
        </div>
    )
}

export default EventsModal