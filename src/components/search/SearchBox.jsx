import "../../index.css"
import SearchIcon from '../../assets/SearchIcon.svg'
import { useState } from "react"

export const SearchBox = () => {
    const [userName, setUserName] = useState('');
    const handleChange = (input) => {
        setUserName(input)
    }
    const handleClick = () => {
        console.log("cliecked   ")
    }
    return (
        <>

            <div className="bg-linear-[25deg,#FF0000,#350DFF] w-[300px] md:w-[445px] rounded-full p-[2px] flex m-6">
                <div className="bg-[#1C1C1C] rounded-full w-[100%] flex p-2 md:py-2 md:pl-8 md:pr-2">
                    <input className=" w-[100%]  text-white searchBox focus:outline-none text-[15px] md:text-[18px] " type="text" placeholder="Search GitHub Username..." onChange={(e) => handleChange(e.target.value)} />
                    <button className="bg-[#FF0000] p-2 md:p-4   rounded-full border h-[30px] w-[30px] md:h-[50px] md:w-[50px]" onClick={() => handleClick()}><img src={SearchIcon} alt="Search Img" className="h-[100%] " /></button>
                </div>
            </div>
        </>
    )
}