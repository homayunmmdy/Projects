import GradientBtn from '@/components/buttons/GradientBtn'
import Link from 'next/link'

const Hero = () => {
  return (
    <div>
      <div className="container px-3 pt-24  mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            The
            <span className="bg-clip-text px-2 text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            CodeStart
            </span>
            Do more in less time
          </h1>
          <p className="leading-normal text-white text-base md:text-2xl mb-8 text-center md:text-left">
            You will find lot's of free opensource and great tools helps to write code faster and better
          </p>
          <Link href="/explore" className='flex justify-center'>
          <GradientBtn title="Get start now"/>
          </Link>

        </div>

        <div className="w-full xl:w-3/5 p-12 overflow-hidden">
          <img className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" src="macbook.svg"/>
        </div>

     
      </div>
    </div>
  )
}

export default Hero
