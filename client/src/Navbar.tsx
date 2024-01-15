import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [isSticking, setIsSticking] = useState(false)
  const navObserver = new IntersectionObserver(
    (entries) => {
      setIsSticking(!entries[0].isIntersecting)
    },
    {
      rootMargin: '200px 0px 0px 0px',
    },
  )

  const scrollWatcher = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollWatcher.current) {
      navObserver.observe(scrollWatcher.current)
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (scrollWatcher.current) {
        navObserver.unobserve(scrollWatcher.current)
      }
    }
  }, [scrollWatcher])

  console.log('isSticking: ', isSticking)

  return (
    <>
      <div ref={scrollWatcher}></div>
      <header
        className={`sticky top-0 flex items-center justify-between p-4  ${
          isSticking ? 'bg-gray-100' : 'bg-white'
        }`}
      >
        <div>
          <h2>Logo</h2>
        </div>

        <ul className="flex items-center justify-center gap-5">
          <li>
            <a href="">Store</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </header>
    </>
  )
}
