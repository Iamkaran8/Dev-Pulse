import { Header } from "../components/header/Header";
import '../index.css'
import { SearchBox } from '../components/search/SearchBox'
export const Home = () => {


    return (
        <>
            <div className={` bg-[url('/Landing_bg.svg')] bg-cover  bg-no-repeat`}>

                <Header />
                <div className="flex items-center justify-center h-full flex-col md:py-[30px] ">
                    <h1 className="text-[23px] md:text-[41px] lg:text-[60px] font-semibold py-3 md:py-3">Discover <span className="text-[#FF0004] ">Git Hub</span> Profiles Instantly</h1>
                    <p className=" text-[16px] md:text-[30px] lg:text-[40px] text-center w-[90%] md:w-[80%] lg:w-[50%]  py-6 leading-[20px] md:leading-[45px]">Enter any GitHub username to explore repositories, commits, coding stats, and more  all in one place.</p>
                    <SearchBox />
                </div>
                <div className="flex items-center justify-center h-full flex-col md:py-[30px] ">
                    <h1 className="text-[23px] md:text-[41px] lg:text-[60px] font-semibold py-3 md:py-3">Discover <span className="text-[#FF0004] ">Git Hub</span> Profiles Instantly</h1>
                    <p className=" text-[16px] md:text-[30px] lg:text-[40px] text-center w-[90%] md:w-[80%] lg:w-[50%]  py-6 leading-[20px] md:leading-[45px]">Enter any GitHub username to explore repositories, commits, coding stats, and more  all in one place.</p>
                    <SearchBox />
                </div>
            </div>
        </>
    )
}