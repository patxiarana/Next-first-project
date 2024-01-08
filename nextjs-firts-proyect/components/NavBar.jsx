import Link from "next/link"

export default function NavBar() {
  return (
    <nav className="bg-slate-400 mb-4 flex justify-between items-center px-20 p-3">
    <Link href="/" className="font-bold text-black">
    Home
    </Link>
    <ul>
        <li>
            <Link href="/about" className="font-bold text-black">
          About 
            </Link>
        </li>
    </ul>
    </nav>
  )
}
