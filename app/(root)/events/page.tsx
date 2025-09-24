import Events from '@/components/pages/Events'
import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata = {
    title : 'Events'
}

const EventsPage = () => {
    return <Events />
}

export default EventsPage