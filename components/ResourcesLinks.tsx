"use client";

import { resourcesLinks } from '@/constants'
import { usePathname } from 'next/navigation';

const ResourcesLinks = () => {

    const pathName = usePathname();

    return <div>
        <h3 className="mb-4 text-lg font-semibold">Resources</h3>
        <ul className="space-y-2">
            {
                resourcesLinks.map(({ link, name }) => <li key={name}>
                    <a
                        style={{ color: pathName === link ? "#ffd60a" : "" }}
                        href={link}
                        className="text-[#444444] hover:text-[#ffd60a] transition-colors"
                    >
                        {name}
                    </a>
                </li>)
            }
        </ul>
    </div>
}

export default ResourcesLinks