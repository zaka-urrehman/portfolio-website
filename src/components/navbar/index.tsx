
import Link from "next/link"
import MobNav from "./mobNav"



const Navbar = () => {


  return (
    <nav className="bg-gray-800 sticky z-50 top-0 w-full">
      < div className="max-w-7xl px-6 py-3 lg:px-8 mx-auto flex justify-between items-center" >
        <Link
          className="z-40 font-extrabold text-2xl md:text-4xl bg-gradient-to-tr from-primary-500 to-secondary-500 text-transparent bg-clip-text"
          href={'/'}>
          Zaka
        </Link>

        {/* navigation options for large screen */}
        <ul className="max-md:hidden flex gap-x-10 text-gray-400">
          <Link key={'mySkills'} href={'#mySkills'}><li className="cursor-pointer hover:text-gray-100 group">About <hr className=" h-1  w-0 rounded-full group-hover:w-full bg-gradient-to-br from-primary-500 to-secondary-500 duration-300" /></li></Link>
          <Link href={'/projects'}><li className="cursor-pointer hover:text-gray-100 group">Projects <hr className=" h-1  w-0 rounded-full group-hover:w-full bg-gradient-to-br from-primary-500 to-secondary-500 duration-300" /></li></Link>
          <Link href={'#email'}><li className="cursor-pointer hover:text-gray-100 group">Contact <hr className=" h-1  w-0 rounded-full group-hover:w-full bg-gradient-to-br from-primary-500 to-secondary-500 duration-300" /></li></Link>
        </ul>

      </div >
      {/* navigation options for smalll screen  */}
      < MobNav />
    </nav >


  )
}

export default Navbar