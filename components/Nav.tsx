import Link from "next/link"
import Image from "next/image"
import Navitems from "./Navitems"

export default function Nav() {
    return (
        <nav className="navbar">
            <Link href='/'>
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <Image
                        src='/images/logo.svg'
                        alt='logo'
                        width={46}
                        height={44}>
                    </Image>
                </div>
            </Link>
            <div className="flex">
            <Navitems/>
            <p>sing in </p>
            </div>
        </nav>
    )
}
