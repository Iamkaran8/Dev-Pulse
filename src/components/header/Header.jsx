import logo from '../../assets/Logo.svg'
import Mbllogo from '../../assets/githubLogo.svg'

export const Header = () => {
    return (
        <>
            <nav className='container py-4 flex '>
                <div className='w-[50%]'>
                    <img className='hidden md:block' src={logo} alt="Logo" />
                    <img className='h-[50px] w-[50px] md:hidden' src={Mbllogo} alt="Logo" />
                </div>
                <div className='w-[50%] hidden md:block'>
                    <div className='rounded-full   bg-[rgba(178,171,212,0.08)] p-4 flex justify-evenly items-center'>
                        <p className='opacity-100 text-[18px] hover:text-[#F31111]'>Home</p>
                        <p className='opacity-100 text-[18px] hover:text-[#F31111]'>About</p>
                        <button className='bg-[#FF0000] border-[1px] rounded-full px-6 py-2'>View Profile</button>
                    </div>
                </div>
                <div className='sm:block md:hidden'>
                    <button className='text-end  bg-[#FF0000] border-[1px] rounded-full px-6 py-2 text-[15px]'>View Profile</button>
                </div>
            </nav>
        </>
    )
}