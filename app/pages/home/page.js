'use client'
import React from 'react'
import Image from 'next/image'
import earth from '../../assets/earth.png'
import {motion}  from "framer-motion"
import { useState } from 'react'
import { useRouter } from 'next/navigation'


function page() {

  const router = useRouter()
  const [px, setPx] = useState(0)
  const [pxmin, setPxmin] = useState(0)
  const [hide, setHide] = useState(1)
  const [opacity, setOpacity] = useState(1)

  const handleAction  = () => {
    setPxmin(500)
    setPxmin(-500)
    setOpacity(0)
    setTimeout(() => {
      router.push('./action')
    },1000)
  }

  const handleWhy = () => {
    setPxmin(500)
    setPxmin(-500)
    setOpacity(0)
    setTimeout(() => {
      router.push('./why')
    },1000)
  }


  return (
    <div className='flex justify-center items-center h-screen sm:flex-row flex-col'>
      <motion.div
        initial={{ opacity: 0, x:-300 }}
        animate={{ opacity: opacity, x:pxmin }}
        transition={{ duration: 1.3 }}
      >
        <motion.div 
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
            type: "tween",

          }}
        >
          <Image src={earth} alt="earth" />
        </motion.div>
      </motion.div>
      <div className='flex flex-col gap-3'>
        <motion.div
          initial={{ opacity: 0, x:300 }}
          animate={{ opacity: opacity, x:px }}
          transition={{ duration: 1.3 }}
        className='w-80 font-medium'>
          <p className='bold text-3xl text-green-700'>Preserve Enviroment</p>
          "Menjaga lingkungan adalah investasi untuk masa depan yang lebih hijau dan sehat, di mana setiap tindakan kecil kita hari ini dapat menghasilkan perubahan besar bagi bumi kita dan generasi mendatang."
        </motion.div>

        <div className='flex gap-4'>
          <motion.div
            initial={{ opacity: 0, y:300 }}
            animate={{ opacity: opacity, y:0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
          >
            <button onClick={handleAction} className='bg-green-700 text-white px-4 py-2 rounded-2xl hover:bg-transparent hover:text-green-700 transition-all duration-300 border border-green-700 hover:scale-90'>
                Action
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y:-300 }}
            animate={{ opacity: opacity, y:0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
          >
            <button onClick={handleWhy} className='px-4 py-2 rounded-2xl border border-green-700 hover:bg-green-700 hover:text-white hover:scale-95 transition-all duration-300'>
              Why ?
            </button>
          </motion.div>
        </div>

      </div>

    </div>
  )
}

export default page