'use client'

import Link from 'next/link'
import React from 'react'
import { RiHomeOfficeLine } from "react-icons/ri";
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const NavBar = () => {

    const currentPath = usePathname();
    console.log(currentPath)

    const links =[
        {label: 'Dashboard', href: '/'},
        {label: 'Projects', href: '/projects'},
    ]

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
        <Link href="/"> <RiHomeOfficeLine /></Link>
        <ul className="flex space-x-6">
            {links.map(link => <Link key={link.href} 
            href={link.href} 
            className={classNames({
                'text-zinc-900' : link.href === currentPath,
                'text-zinc-500' : link.href !== currentPath,
                'hover:text-zinc-800 transition-colors': true
            })}>{link.label}</Link>)}
        </ul>
    </nav>
  )
}

export default NavBar
