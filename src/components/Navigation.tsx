'use client'
import {usePathname} from "next/navigation"
import Link from "next/link"
import {Button} from "@mui/material"

type NavLink = {
    label: string
    href: string
}
type Props = {
    navLinks: NavLink[]
}

const Navigation = ({navLinks}: Props) => {
    const pathname = usePathname()

    return (
        <>
            {navLinks.map((link) => {
                const isActive = pathname === link.href

                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={isActive ? 'active' : ''}
                    >
                        <Button>
                            {link.label}
                        </Button>
                    </Link>
                )
            })}
        </>
    )
}

export default Navigation