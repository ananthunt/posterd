import { CircleDot, Settings2, Shuffle, Sparkles, TvMinimalPlay } from "lucide-react";

import posterImage from "../images/everything_everywhere_all_at_once.jpg"
import pos1 from "../images/poster1.jpg"
import pos2 from "../images/poster2.jpg"
import pos3 from "../images/poster3.jpg"
import pos4 from "../images/poster4.jpg"
import pos5 from "../images/poster5.jpg"
import pos6 from "../images/poster6.jpg"


const Landing = () => {
  return (
    <div className="bg-[#d6d6d1] w-full">
      <section className="mx-auto max-w-3xl px-6 py-8 md:py-16">
        <div>
          <h1 className=" font-display font-bold text-5xl  md:text-8xl  p-4 text-center ">STOP <br /> SCROLLING. <br /> START <br />  WATCHING.</h1>
          <p className="font-body text-[#55554E] text-center mx-auto max-w-md">
            POSTERD is a little machine for deciding what to watch. Set your
            taste, hit roll, and get one great film at a time — never another
            forty-minute browse.
          </p>
        </div>
        <div className="flex flex-col items-center py-6">
          <button className='bg-[#FF5A1f] text-white font-label rounded-xl px-6 py-4 font-normal text-[12px] shadow-[0_6px_0_0_#c2410c] active:shadow-[0_2px_0_0_#c2410c] active:translate-y-1 transition-all duration-150'>Power On — It's Free</button>
          <p className="font-label  py-6 text-[#5E5E57] text-xs font-light">No account needed · Works instantly</p>
        </div>


        <div className=" bg-linear-to-t from-[#C4C4BE] to-[#E7E7E2] border border-[#B3B3A9] rounded-4xl shadow-md sm:flex sm:items-center sm:gap-6 p-4 ">
          <div className=" w-full sm:max-w-3xs bg-white p-1">
            <img  className="w-full h-auto object-cover " src={posterImage} alt="poster image" />
          </div>
          <div className="text-center p-2 sm:text-left flex flex-col gap-1 ">
            <div><span className="font-label bg-black p-2 text-xs font-thin text-[#f08d69] " >tonight's pick</span></div>
            <h1 className="font-display text-3xl font-bold py-2">EVERYTHING EVERYWHERE ALL AT ONCE</h1>
            <p className="font-body text-[#55554E]">A burned-out laundromat owner audited by the IRS is yanked across a shattering multiverse, forced to channel every life she never lived to stop an omnidirectional threat — and to reach the daughter drifting away from her in this one.</p>
            <div className="py-2 flex  justify-between gap-3 ">
              <button className="bg-[#F4F4EF] text-black font-label rounded-3xl pl-4 flex-[3] py-3 text-[12px] shadow-[0_6px_0_0_#B3B3A9] active:shadow-[0_2px_0_0_#B3B3A9] active:translate-y-1 transition-all duration-150"><div className="flex items-center  gap-2"><span className="flex p-3  justify-center rounded-full bg-[#C4C4BE]">
                <Settings2 size={14} />
              </span><span>TASTE</span></div></button>
              <button className="bg-[#FF5A1f] text-white font-label rounded-3xl px-2 flex-1 text-[12px] shadow-[0_6px_0_0_#c2410c] active:shadow-[0_2px_0_0_#c2410c] active:translate-y-1 transition-all duration-150"><div className="flex flex-col items-center "><Shuffle size={14} /><span>ROLL</span></div></button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-8 md:py-10 border-[#B5B5AC] border-y text-center">
        <p className="font-label text-[#5E5E57] font-light text-xs mb-6 ">Built for the chronically indecisive</p>
        <div>
          <ul className="font-label text-[#55554E] grid grid-cols-2 md:grid-cols-4 md:gap-1 gap-6 text-xs">
            <li className="flex justify-center gap-1"><Sparkles size={14} color="#FF5A1f" />Criterion heads</li>
            <li className="flex justify-center gap-1"><Sparkles size={14} color="#FF5A1f" /> Streaming natives</li>
            <li className="flex justify-center gap-1"><Sparkles size={14} color="#FF5A1f" /> Film-club regulars</li>
            <li className="flex justify-center gap-1"><Sparkles size={14} color="#FF5A1f" /> Watchlist hoarders</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 ">
        <p className="font-label text-[#5E5E57] font-light text-xs">01 — The Machine</p>
        <h1 className="font-display font-bold text-4xl  md:text-5xl  py-2 ">EVERYTHING YOU NEED.</h1>

        <div className="grid md:grid-cols-3 py-6 gap-8">
          <div className="bg-linear-to-t from-[#C4C4BE] to-[#E7E7E2] border border-[#B3B3A9] rounded-2xl shadow-md p-6  ">
            <span className="inline-flex p-4 bg-[#F4F4EF] text-black font-label rounded-2xl shadow-[0_6px_0_0_#B3B3A9]"><Settings2 size={20} /></span>
            <h2 className="font-display text-2xl font-bold py-4">TUNE YOUR TASTE</h2>
            <p className="font-body text-[#55554E]">Dial in genre, runtime and decade. The machine only ever hands you films that fit tonight's mood.</p>
          </div>
          <div className="bg-linear-to-t from-[#C4C4BE] to-[#E7E7E2] border border-[#B3B3A9] rounded-2xl shadow-md p-6">
            <span className="inline-flex p-4 bg-[#F4F4EF] text-black font-label rounded-2xl shadow-[0_6px_0_0_#B3B3A9]"><Shuffle size={20} /></span>
            <h2 className="font-display text-2xl font-bold py-4">ONE AT A TIME</h2>
            <p className="font-body text-[#55554E]">No walls of thumbnails. One considered pick on screen — keep it, or roll again in a single tap.</p>
          </div>
          <div className="bg-linear-to-t from-[#C4C4BE] to-[#E7E7E2] border border-[#B3B3A9] rounded-2xl shadow-md p-6">
            <span className="inline-flex p-4 bg-[#F4F4EF] text-black font-label rounded-2xl shadow-[0_6px_0_0_#B3B3A9]"><TvMinimalPlay size={20} /></span>
            <h2 className="font-display text-2xl font-bold py-4">KNOW WHERE TO WATCH</h2>
            <p className="font-body text-[#55554E]">Every recommendation shows exactly which platforms are streaming it, so you go straight to play.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="bg-linear-to-t from-[#C4C4BE] to-[#E7E7E2] border border-[#B3B3A9] rounded-2xl shadow-md p-8 ">
          <div className="text-center mb-8">
            <p className="font-label text-[#5E5E57] font-light text-xs">02 — In Three Presses</p>
            <h1 className="font-display font-bold text-4xl  md:text-5xl  py-2 ">HOW IT WORKS.</h1>
          </div>
          <div className="flex flex-col gap-8 max-w-xl mx-auto relative ">
            <div className="absolute left-6 top-6 bottom-12 w-px -translate-x-1/2 bg-[#B3B3A9]"></div>
            <div className="flex gap-4 items-start relative">
              <span className="flex justify-center items-center h-12 w-12 shrink-0 bg-[#FF5A1f] text-white font-label rounded-2xl shadow-[0_6px_0_0_#c2410c]">1</span>
              <div>
                <h2 className="font-display text-2xl font-bold ">SET YOUR TASTE</h2>
                <p className="font-body text-[#55554E]">Tell POSTERD the mood — genre, length, era. Takes five seconds.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start relative">
              <span className="flex justify-center items-center h-12 w-12 shrink-0 bg-[#FF5A1f] text-white font-label rounded-2xl shadow-[0_6px_0_0_#c2410c]">2</span>
              <div>
                <h2 className="font-display text-2xl font-bold">HIT ROLL</h2>
                <p className="font-body text-[#55554E]">Get one hand-picked film with its full dossier. Not it? Roll again.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start relative">
              <span className=" flex justify-center items-center h-12 w-12 shrink-0 bg-[#FF5A1f] text-white font-label rounded-2xl shadow-[0_6px_0_0_#c2410c]">3</span>
              <div>
                <h2 className="font-display text-2xl font-bold">PRESS PLAY</h2>
                <p className="font-body text-[#55554E]">Save it to your watchlist or head straight to the streaming service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <p className="font-label text-[#5E5E57] font-light text-xs">03 — A LIBRARY WORTH DIGGING INTO</p>
        <div className="py-6">
          <ul className="grid grid-cols-6 gap-1 ">
            <li><img className="w-full aspect-[2/3] object-cover rounded-l-xl" src={pos1} alt="" /></li>
            <li><img className="w-full aspect-[2/3] object-cover" src={pos2} alt="" /></li>
            <li><img className="w-full aspect-[2/3] object-cover" src={pos3} alt="" /></li>
            <li><img className="w-full aspect-[2/3] object-cover" src={pos4} alt="" /></li>
            <li><img className="w-full aspect-[2/3] object-cover" src={pos5} alt="" /></li>
            <li><img className="w-full aspect-[2/3] object-cover rounded-r-xl" src={pos6} alt="" /></li>
          </ul>
        </div>



      </section>

      <section className="mx-auto max-w-5xl px-6 py-8">
        <div className="bg-linear-to-t from-[#C4C4BE] to-[#E7E7E2] border border-[#B3B3A9] rounded-2xl shadow-md p-10 flex flex-col items-center">
          <div className="mb-8 space-y-3 text-center">
            <h1 className="font-display font-bold text-4xl  md:text-5xl  ">READY TO DECIDE?</h1>
            <p className="font-body text-[#55554E] max-w-sm  ">Power on the machine and let it hand you the one film worth your evening.</p>
          </div>
          <button className="flex items-center gap-2 bg-[#FF5A1f] text-white font-label rounded-xl px-8 py-4 text-[12px] shadow-[0_6px_0_0_#c2410c] active:shadow-[0_2px_0_0_#c2410c] active:translate-y-1 transition-all duration-150"><CircleDot size={20} /><span>POWER ON</span></button>
        </div>
      </section>

    </div>
  );
};

export default Landing;
