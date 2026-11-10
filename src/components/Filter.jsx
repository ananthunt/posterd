import { ChevronDown, Search, X } from "lucide-react"
import { useState } from "react"



const Filter = (props) => {
    const [isLanguageOpen, setIsLanguageOpen] = useState(false)
    const [langSearch, setLangSearch] = useState("")

    const visibleLanguages = (props.languageOptions ?? []).filter((lang) =>
        lang.name.toLowerCase().includes(langSearch.toLowerCase())
    )


    return (
        <>
            {props.showFilter && (
                <div className="bg-black/30 backdrop-blur-md fixed inset-0 flex md:items-center items-end justify-center z-50 p-4">
                    <div className="bg-[#d6d6d1] w-full max-w-sm p-6 rounded-4xl shadow-xl flex flex-col gap-10 max-h-[90dvh] overflow-y-auto">
                        <div className="flex justify-between items-center">
                            <div className="bg-black rounded-2xl py-2 px-6">
                                <p className="font-label text-[#69D545] text-xs ">TUNE YOUR TASTE</p>
                                <h1 className="font-display text-[#FF5A1F] text-2xl font-extrabold">PREFERENCES</h1>
                            </div>
                            <button className="bg-[#F4F4EF] text-black font-label rounded-2xl flex items-center p-2 text-[12px] shadow-[0_6px_0_0_#B3B3A9] active:shadow-[0_2px_0_0_#B3B3A9] active:translate-y-1 transition-all duration-150" onClick={() => { setTimeout(() => { props.onClose() }, 150) }}><X /></button>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div>
                                <p className="font-label pb-2 text-[#5E5E57] text-xs font-light">MOOD / GENRE</p>
                                <div className="flex flex-wrap gap-x-3 gap-y-4">
                                    {props.genreOptions.map((g) => (
                                        <button key={g.id} className={` font-label rounded-2xl px-4 py-2 font-normal text-[10px]  active:translate-y-1 transition-all duration-150 uppercase ${props.selectedGenres.includes(g.id) ? "bg-[#FF5A1f] text-white shadow-[0_6px_0_0_#c2410c] active:shadow-[0_2px_0_0_#c2410c]" : "bg-[#F4F4EF] text-black shadow-[0_6px_0_0_#B3B3A9] active:shadow-[0_2px_0_0_#B3B3A9]"}`} onClick={() => { setTimeout(() => { props.toggleGenre(g.id) }, 10) }}>{g.name}</button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div>
                                    <p className="font-label pb-2 text-[#5E5E57] text-xs font-light">LANGUAGE</p>

                                    <button
                                        type="button"
                                        className="w-full bg-[#F4F4EF] text-black font-label rounded-2xl px-4 py-2 text-[10px] flex justify-between items-center shadow-[0_6px_0_0_#B3B3A9] active:shadow-[0_2px_0_0_#B3B3A9] active:translate-y-1 transition-all duration-150"
                                        onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                                    >
                                        <span>
                                            {props.selectedLanguages.length === 0
                                                ? "ALL LANGUAGES"
                                                : `${props.selectedLanguages.length} SELECTED`}
                                        </span>
                                        <ChevronDown
                                            size={14}
                                            className={`text-[#FF5A1F] transition-transform duration-150 ${isLanguageOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {isLanguageOpen && (
                                        <div className="mt-3 bg-[#F4F4EF] rounded-2xl p-2 border border-[#B3B3A9]">
                                            {/* Search Input */}
                                            <div className="flex items-center gap-2 px-3 py-1.5 mb-2 bg-[#E6E6E1] rounded-xl">
                                                <Search size={12} className="text-[#5E5E57]" />
                                                <input
                                                    type="text"
                                                    placeholder="SEARCH LANGUAGE..."
                                                    value={langSearch}
                                                    onChange={(e) => setLangSearch(e.target.value)}
                                                    className="w-full bg-transparent font-label text-[10px] uppercase outline-none placeholder:text-[#8D8D84]"
                                                />
                                            </div>

                                            {/* Scrollable Checkbox List */}
                                            <ul className="max-h-40 overflow-y-auto">
                                                {visibleLanguages.length === 0 ? (
                                                    <li className="py-3 text-center font-label text-[10px] text-[#5E5E57]">
                                                        NO LANGUAGE FOUND
                                                    </li>
                                                ) : (
                                                    visibleLanguages.map((lang) => (
                                                        <li key={lang.code}>
                                                            <label className="flex items-center gap-3 px-2 py-2 rounded-xl font-label text-[10px] uppercase cursor-pointer hover:bg-[#E6E6E1]">
                                                                <input
                                                                    type="checkbox"
                                                                    className="w-4 h-4 accent-[#FF5A1F]"
                                                                    checked={props.selectedLanguages.includes(lang.code)}
                                                                    onChange={() => props.toggleLanguage(lang.code)}
                                                                />
                                                                {lang.name}
                                                            </label>
                                                        </li>
                                                    ))
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </div>


                            </div>

                            {/* <div>
                                <p className="font-label  pb-2 text-[#5E5E57] text-xs font-light">ERA</p>
                                <div className="flex flex-wrap gap-x-3 gap-y-4">
                                    <button className="bg-[#F4F4EF] text-black font-label rounded-2xl px-4 py-2 font-normal text-[10px] shadow-[0_6px_0_0_#B3B3A9] active:shadow-[0_2px_0_0_#B3B3A9] active:translate-y-1 transition-all duration-150">2000s</button>
                                    <button className='bg-[#FF5A1f] text-white font-label rounded-2xl px-4 py-2 font-normal text-[10px] shadow-[0_6px_0_0_#c2410c] active:shadow-[0_2px_0_0_#c2410c] active:translate-y-1 transition-all duration-150'>2010s</button>
                                </div>
                            </div> */}
                        </div>

                        <div className="flex justify-between items-center">
                            <button className="bg-[#F4F4EF] text-black font-label rounded-xl px-4 py-2 font-medium text-[12px] shadow-[0_6px_0_0_#B3B3A9] active:shadow-[0_2px_0_0_#B3B3A9] active:translate-y-1 transition-all duration-150" onClick={() => { setTimeout(() => { props.setSelectedGenres([]); props.setSelectedLanguages([]) }, 150) }}>RESET</button>
                            <button className='bg-[#FF5A1f] text-white font-label rounded-xl px-4 py-2 font-medium text-[12px] shadow-[0_6px_0_0_#c2410c] active:shadow-[0_2px_0_0_#c2410c] active:translate-y-1 transition-all duration-150' onClick={() => { setTimeout(() => { props.onApply() }, 150) }}>SHOW FILMS →</button>


                        </div>


                    </div>

                </div>

            )

            }
        </>
    )
}

export default Filter