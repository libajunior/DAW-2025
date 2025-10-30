import type { ReactNode } from "react"

type FooterLinkProps = {
    children: ReactNode
}

export function FooterLink({
    children
}: FooterLinkProps) {

    return (
        <a className="text-[#a0a0a0] hover:text-white" href="#">
            { children }
        </a>
    )

}