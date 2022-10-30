import Link from "next/link";
import {useRouter} from "next/router";
export default function Header(){
const router = useRouter()
    return <nav className="flex justify-center items-center my-4 md:space-x-6">
        <div className="md:flex font-extrabold md:text-2xl hidden  items-center text-lg ">
        <Link href="/">
            <div className="flex items-center space-x-3 hover:brightness-50 transition">
            <img src="/logo.PNG" className="max-w-[54px] rounded-lg " alt=""/>
            <p className="text-semi-blue">Hızır Vinç</p>
            </div>
        </Link>
        </div>
        <div className="flex md:flex-row flex-col text-lg text-2xl text-center md:space-x-6 space-y-4 md:space-y-1.5 md:items-center">
            <div className="md:hidden text-3xl text-normal-blue">
                <Link href="/" >
                    <div className="flex items-center space-x-4 mt-10">
                    <img src="/logo.PNG" className="max-w-[54px] rounded-lg " alt=""/>
                <p>Hızır Vinç</p>
                    </div>
            </Link>
            </div>
        <Link href="/">
            <p className={`hover:text-dark-blue text-semi-blue transition ${router.pathname === `/` ? "text-dark-blue" : "text-semi-blue"}`}>Ana Sayfa</p>
        </Link>
        <Link href="/referance">
            <p className={`hover:text-dark-blue text-semi-blue transition ${router.pathname === "/referance" ? "text-dark-blue" : "text-semi-blue"}`} >Referanslar</p>
        </Link>
    </div>
    </nav>
}