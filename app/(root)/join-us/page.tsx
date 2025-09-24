import { JoinUs } from '@/components/pages/JoinUs'
import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata = {
    title : 'Join-us'
}

const JoinPage = () => {
    return <JoinUs />
}

export default JoinPage