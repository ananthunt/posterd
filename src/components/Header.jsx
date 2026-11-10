
import { Link, useLocation } from 'react-router-dom'



const Header = () => {

  const contentPath = useLocation()
  const isHead = contentPath.pathname === '/'
  const isDiscover = contentPath.pathname === '/discover'
  const isWatchlist = contentPath.pathname === '/watchlist'

  return (
    isHead ? (<nav className='sticky top-0 bg-linear-to-t from-[#C4C4BE] to-[#E7E7E2] border border-[#B3B3A9] z-10 shadow-md'>
      <div className='mx-auto max-w-6xl px-6 py-2 md:py-4 flex justify-between items-center'>
        <div className='font-display font-bold text-2xl'>POSTER<span className='text-[#FF5A1F]'>D</span></div>
        <div><Link to='/discover' className='bg-[#FF5A1f] inline-block text-white font-label rounded-4xl px-4 py-2 font-normal text-[10px] shadow-[0_6px_0_0_#c2410c] active:shadow-[0_2px_0_0_#c2410c] active:translate-y-1 transition-all duration-150'>GET STARTED</Link></div>
      </div>

    </nav>) : (<nav className='sticky top-0 bg-linear-to-t from-[#C4C4BE] to-[#E7E7E2] border border-[#B3B3A9] z-10 shadow-md'>
      <div className='mx-auto max-w-6xl px-6   py-2 md:py-4 flex justify-between items-center '>
        <div className='font-display font-bold text-2xl'>POSTER<span className='text-[#FF5A1F]'>D</span></div>
        <div className='flex gap-2'>
          <Link to="/discover" className={`inline-block  font-label rounded-4xl px-4 py-2 font-normal text-[10px]  active:translate-y-1 transition-all duration-150 ${isDiscover?"bg-[#FF5A1f] text-white shadow-[0_6px_0_0_#c2410c] active:shadow-[0_2px_0_0_#c2410c]":"bg-[#F4F4EF] text-black shadow-[0_6px_0_0_#B3B3A9] active:shadow-[0_2px_0_0_#B3B3A9]"} `}>DISCOVER</Link>
          <Link to="/watchlist" className={`inline-block  font-label rounded-4xl px-4 py-2 font-normal text-[10px]  active:translate-y-1 transition-all duration-150 ${isWatchlist?"bg-[#FF5A1f] text-white shadow-[0_6px_0_0_#c2410c] active:shadow-[0_2px_0_0_#c2410c]":"bg-[#F4F4EF] text-black shadow-[0_6px_0_0_#B3B3A9] active:shadow-[0_2px_0_0_#B3B3A9]"} `}>WATCHLIST</Link>
        </div>
      </div>

    </nav>)
  )



}

export default Header