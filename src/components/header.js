import NetflixLogo from "../../public/images/NetflixLogo.svg"
import Search from "../../public/images/Search.svg"
import Bell from "../../public/images/Bell.svg"
import Arrow from "../../public/images/Arrow.svg"


const Header = () => {
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
                <p>Kids</p>
                <Bell className="scale-75" />
                <div className="flex flex-row items-center gap-2">
                    <div className="bg-gray-50 w-10 h-10 rounded-lg"></div>
                    <Arrow />
                </div>
            </div>

        </header>
    )
}

export default Header