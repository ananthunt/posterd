import { Link } from "react-router-dom"
import { year, poster, runtime, getDirector, getMusic, getActor, genres } from "../data/converter"
import { CircleSlash2, Eye } from "lucide-react"
import { usePosterd } from "../context/PosterdContext";






const Watchlist = () => {
  const { watchlist,markSeen } = usePosterd()
  const filmLen = watchlist.length



  return (
    <div className="bg-[#d6d6d1]  w-full min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-8 md:py-16">
        <div className="mb-2 border-b border-[#B5B5AC] py-2">
          <p className="font-label text-[#5E5E57] font-light text-xs">SAVED FOR LATER</p>
          <div className="flex justify-between items-center">
            <h1 className="font-display font-bold text-4xl  md:text-5xl ">WATCHLIST</h1>
            <p className="font-label text-[#5E5E57] font-light text-xs">{filmLen} FILMS</p>
          </div>
        </div>


        {
          filmLen === 0 ? (
            <div className="flex flex-col items-center text-center gap-8 mt-24">
              <div className='bg-black rounded-xl  py-6 px-10'><CircleSlash2 size={20} color="#FF5A1f" /></div>
              <h2 className="font-display font-bold text-2xl  md:text-3xl">NOTHING SAVED YET</h2>
              <p className="font-body  text-[#55554E] text-sm max-w-sm">Roll a recommendation and tap Watchlist on any card to park it here for later.</p>
              <div><Link to='/discover' className="bg-[#FF5A1f] inline-block text-white font-label rounded-2xl px-6 py-3 font-normal text-[12px] shadow-[0_6px_0_0_#c2410c] active:shadow-[0_2px_0_0_#c2410c] active:translate-y-1 transition-all duration-150">START ROLLING →</Link></div>
            </div>
          ) : (<div className=" grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {watchlist.map((mov) => (
              <div key={mov.id}>
                <div  className='w-full bg-[#F4F4EF] p-2 shadow  flex-1 min-h-0 flex flex-col'>
  
                  <Link className="w-full aspect-[2/3] overflow-hidden" to={`/film/${mov.id}`}><img className='w-full h-full object-cover'  src={poster(mov)} alt="film poster" /></Link>
  
                  <div className="pt-1 p-4">
                    <div className='grid grid-cols-[6fr_1fr] gap-2 '>
                      <h1 className='font-display font-bold text-2xl uppercase'>{mov.title}</h1>
                      <p className='font-label text-[#5E5E57] text-right '>{year(mov)}</p>
                    </div>
                    <dl className='grid grid-cols-[1fr_2fr] items-baseline gap-2'>
                      <dt className='font-body text-[#5E5E57] text-sm italic'>running time</dt>
                      <dd className='font-label text-xs'>{runtime(mov)}</dd>
                      <dt className='font-body text-[#5E5E57] text-sm italic'>directed by</dt>
                      <dd className='font-label text-xs'>{getDirector(mov)}</dd>
                      <dt className='font-body text-[#5E5E57] text-sm italic'>music by</dt>
                      <dd className='font-label text-xs'>{getMusic(mov)}</dd>
                      <dt className='font-body text-[#5E5E57] text-sm italic'>starring</dt>
                      <dd className='font-label text-xs'>{getActor(mov)}</dd>
                    </dl>
                  </div>
  
                </div>
                <div className="flex justify-between py-4">
                  <div className='font-label text-sm text-[#5E5E57] truncate flex-1'>{genres(mov)}</div>
                  <button className=' font-label text-sm text-[#5E5E57] ' onClick={() => markSeen(mov.id)}><div className="flex gap-2"><Eye size={18}/> <span>seen it</span></div></button>
                </div>
              </div>
            ))}


          </div>)
        }

      </section>
    </div>
  )
}

export default Watchlist