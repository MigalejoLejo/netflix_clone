import NetflixLogo from "../../public/images/NetflixLogo.svg"
import Search from "../../public/images/Search.svg"
import Bell from "../../public/images/Bell.svg"
import Arrow from "../../public/images/Arrow.svg"
import Image from 'next/image'
import { auth } from "../services/firebase";


const Header = () => {
    console.log("header image : ", auth.currentUser.photoURL)
   

    return (
        <header className="absolute z-10 h-20 w-full flex flex-row items-center px-5 bg-gradient-to-b from-black" >
            <NetflixLogo className="scale-75" />

            <nav className="flex">
                <ul className="flex gap-5">
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
            </nav>

            <div className="flex flex-row items-center gap-3 ml-auto mr-0">
                <Search className="scale-75" />
                <p>{auth.currentUser.displayName}</p>
                <Bell className="scale-75" />
                <div className="flex flex-row items-center justify-center gap-2">
                    <div className="bg-white rounded-lg">

                    {auth.currentUser?<img src={auth.currentUser.photoURL} width={30} height={30} alt="" /> :<div></div>}
                    </div>
                    <Arrow />
                </div>
            </div>

        </header>
    )
}

export default Header