import ProjectIdeaSection from '@/components/pages/ProjectIdeaSection'
import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata = {
    title : 'Project-idea'
}

const ProjectIdeaPage = () => {
    return <ProjectIdeaSection />
}

export default ProjectIdeaPage