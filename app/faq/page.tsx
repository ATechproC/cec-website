import { FaqSection } from '@/components/JoinUs/faq-section'
import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata = {
    title : 'Faqs'
}

const FaqsPage = () => {
    return <FaqSection />
}

export default FaqsPage