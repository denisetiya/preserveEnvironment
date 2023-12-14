'use client'
import Image from "next/image"
import floating from './assets/floating.png'
import TypingEffect from "./components/TypeText"
import {motion} from "framer-motion"
import { RocketLaunch } from "@phosphor-icons/react"
import { useState } from "react"
import { useRouter } from 'next/navigation'


export default function Home() {

  const router = useRouter()
  const [px, setPx] = useState(0)
  const [pxmin, setPxmin] = useState(0)
  const [delay, setDelay] = useState(4.5)

  const handleKlik = async() => {
    setPxmin(500)
    setPx(-1100)
    setDelay(0)
    setTimeout(() => {
      router.push('./pages/home')
    },800)
  }

  return (
    <div className='flex justify-center items-center h-screen sm:flex-row flex-col'>  
      <motion.div
        initial={{ opacity: 0, y:100, x: px }}
        animate={{ opacity: 1, y:0 , x: px }}
        transition={{ duration: 1 }}
      >
       <Image src={floating} alt="floating" />
      </motion.div>
      <div className="flex flex-col gap-3 justify-center items-center ">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: pxmin }}
          transition={{ duration: 1 }}
        className="text-3xl font-bold w-64">
          <TypingEffect text="Tidakan Kecilmu berpengaruh besar bagi Alam" />
        </motion.div>

        <motion.div
        initial={{ opacity: 0, x:100 }}
        animate={{ opacity: 1, x:pxmin }}
        transition={{ duration: 1.2 , delay: delay}}
        className="flex mt-5 justify-center items-center cursor-pointer border rounded-2xl px-3 py-1"
       >
          <RocketLaunch onClick={handleKlik} className="hover:scale-110 transition-all duration-300" size={50} />
          <button onClick={handleKlik} className="text-xl font-medium hover:bg-green-700 hover:text-white px-4 py-2 rounded-2xl  transition-all duration-300">
            Explore
          </button>
        </motion.div>
      </div>
    </div>
  )
}
