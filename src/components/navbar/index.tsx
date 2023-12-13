import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl px-6 py-3 lg:px-8 mx-auto flex justify-between items-center">
        <Link
          className="font-extrabold text-2xl md:text-4xl bg-gradient-to-tr from-primary-500 to-secondary-500 text-transparent bg-clip-text"
          href={'/'}>
          ZU
        </Link>


        <ul className="max-md:hidden flex gap-x-10 text-gray-400">
          <Link href={'#about'}><li className="cursor-pointer group">About <hr className=" h-1  w-0 rounded-full group-hover:w-full bg-gradient-to-br from-primary-500 to-secondary-500 duration-300" /></li></Link>
          <Link href={'#projects'}><li className="cursor-pointer group">Projects <hr className=" h-1  w-0 rounded-full group-hover:w-full bg-gradient-to-br from-primary-500 to-secondary-500 duration-300" /></li></Link>
          <Link href={'#email'}><li className="cursor-pointer group">Contact <hr className=" h-1  w-0 rounded-full group-hover:w-full bg-gradient-to-br from-primary-500 to-secondary-500 duration-300" /></li></Link>
        </ul>


      </div>
    </nav>
  )
}

export default Navbar