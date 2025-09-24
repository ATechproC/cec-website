
import { ResourcesSection } from '@/components/pages/Resources'
import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata = {
    title : 'Resources'
}

const ResourcesPage = () => {
    return <ResourcesSection />
}

export default ResourcesPage