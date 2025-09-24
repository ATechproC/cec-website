import { BlogSection } from '@/components/pages/Blog'
import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata = {
    title : 'Blog'
}

const BlogPage = () => {
    return <BlogSection />
}

export default BlogPage