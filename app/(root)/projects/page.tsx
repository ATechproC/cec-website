import Projects from '@/components/pages/Projects'
import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata = {
    title : 'Projects'
}

const ProjectsPage = () => {
    return <Projects />
}

export default ProjectsPage