import { GetIconsProps } from '@/types';
import { BookOpen, GraduationCap, Mic, Settings, Trophy, User } from 'lucide-react';
import React from 'react';

const GetIcons = ({type, className, size} : GetIconsProps) => {
    switch(type) {
        case "BookOpen" : return <BookOpen className={className} size={size} />
        case "Trophy" : return <Trophy className={className} size={size} />
        case "Mic" : return <Mic className={className} size={size} />
        case "Settings" : return <Settings  className={className} size={size}/>
        case "Users" : return <User className={className} size={size} />
        default : return <GraduationCap className={className} size={size} />
    }
}

export default GetIcons