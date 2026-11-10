import { useLocation } from "react-router-dom"

const Footer = () => {
    const footPath = useLocation()
    const isFoot = footPath.pathname ==='/'
  return (
   
        isFoot?(<footer className=' bg-linear-to-t from-[#C4C4BE] to-[#E7E7E2] border border-[#B3B3A9] shadow-md'>
            <div className='mx-auto max-w-6xl px-6  py-4 flex flex-col gap-1 sm:flex-row  justify-between '>
                <div className='font-display font-bold text-xl'>POSTER<span className='text-[#FF5A1F]'>D</span></div>
                <div><div className='bg-[#ff5b1fd9] text-white font-label rounded-xl px-6 py-3 font-normal text-[10px] text-center'>WHAT TO WATCH. DECIDED.</div></div>
            </div>
        </footer>):(<footer className=' bg-linear-to-t from-[#C4C4BE] to-[#E7E7E2] border border-[#B3B3A9] shadow-md'>
            <div className='mx-auto max-w-6xl px-6  py-4 flex flex-col gap-1 sm:flex-row  justify-between '>
                <div className='font-display font-bold text-xl'>POSTER<span className='text-[#FF5A1F]'>D</span></div>
                <div><div className='bg-[#ff5b1fd9] text-white font-label rounded-xl px-6 py-3 font-normal text-[10px] text-center'>WHAT TO WATCH. DECIDED.</div></div>
            </div>
        </footer>)
    
  )
}

export default Footer