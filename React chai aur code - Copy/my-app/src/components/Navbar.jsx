
export default function Navbar() {
  return (
    <div className="">
      <nav className="flex justify-between px-30 bg-white text-black dark:bg-black dark:text-white font-semibold py-4">
        <div className="logo text-2xl">
            LOgo
        </div>
        <ul className="flex gap-2">
            <li>Home</li>
            <li>About</li>
            <li>Content</li>
            <li>Info</li>
        </ul>
      </nav>
    </div>
  )
}
