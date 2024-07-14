import React from 'react';
import { Link } from 'react-router-dom';
import {
    MdHomeFilled,
    MdOutlineSlowMotionVideo,
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineWatchLater,
} from 'react-icons/md';

import { LuThumbsUp } from 'react-icons/lu';

export default function Sidebar() {
    const mainLinks = [
        {
            icon: <MdHomeFilled className='text-xl' />,
            name: 'Home',
            path: 'http://localhost:3003/'
        },
        {
            icon: <MdOutlineSlowMotionVideo className='text-xl' />,
            name: 'Shorts',
            path: 'http://localhost:3003/watch/gXrM28NowmY'
        },
        {
            icon: <MdSubscriptions className='text-xl' />,
            name: 'Subscriptions',
            path: 'http://localhost:3003/'
        }
    ];

    const otherLinks = [
        {
            icon: <MdOutlineVideoLibrary className='text-xl' />,
            name: 'Library',
            path: 'http://localhost:3003/'
        },
        {
            icon: <MdHistory className='text-xl' />,
            name: 'History',
            path: 'http://localhost:3003/'
        },
        {
            icon: <MdOutlineWatchLater className='text-xl' />,
            name: 'Watch Later',
            path: 'http://localhost:3003/'
        },
        {
            icon: <LuThumbsUp className='text-xl' />,
            name: 'Liked Video',
            path: 'http://localhost:3003/'
        }
    ];

    return (
        <div className='w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 sidebar'>
            <ul className='flex flex-col border-b-2 border-gray-700'>
                {mainLinks.map(({ icon, name, path }) => (
                    <li key={name} className={`pl-6 py-3 hover:bg-zinc-700 ${name === 'Home' ? 'bg-zinc-600' : ''} rounded-xl`}>
                        <Link to={path} className='flex items-center gap-5'>
                            {icon}
                            <span className='text-sm tracking-wider'>{name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className='flex flex-col border-b-2 border-gray-800'>
                {otherLinks.map(({ icon, name, path }) => (
                    <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 `}>
                        <Link to={path} className='flex items-center gap-5'>
                            {icon}
                            <span className='text-sm tracking-wider'>{name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
