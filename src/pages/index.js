import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link"
import NetflixLogo from "../../public/images/NetflixLogo.svg"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-black w-screen h-screen flex flex-col items-center justify-center">
      <NetflixLogo className="mb-20"/>
      <h1 className="text-3xl font-semibold text-white text-2xl mb-3">
        Who's watching?
      </h1>

      <div className="flex flex-row gap-3 mt-6">
        {USERS.map((user, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <div className="rounded-md bg-gray-200 w-[128px] h-[128px] ">
              <Link key={user.name} href={user.link}>
                <Image src={user.avatar} width={128} height={128} alt="" />
                <p className="text-white text-xs text-center mt-3">
                  {user.name}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

const USERS = [
  { name: "Felix", avatar: "https://api.dicebear.com/6.x/personas/svg?seed=Felix", link: "/browse" },
  { name: "Aneka", avatar: "https://api.dicebear.com/6.x/personas/svg?seed=Aneka", link: "/browse" },
  { name: "Matias", avatar: "https://api.dicebear.com/6.x/personas/svg?seed=Matias", link: "/browse" },
  { name: "Add Profile", avatar: "https://api.dicebear.com/6.x/icons/svg?icon=plug", link: "/browse" },
]