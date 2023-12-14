'use client'
import React from 'react'
import Image from 'next/image'
import recyle from '../../../assets/tropic.png'
import { CaretCircleDoubleRight } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'



function page() {
  
  const router = useRouter()
  const [px, setPx] = useState(0)
  const [pxmin, setPxmin] = useState(0)
  const [opacity, setOpacity] = useState(1)



  const handleNext = () => {
    setPx(500)
    setPxmin(-500)
    setOpacity(0)
    setTimeout(() => {
      router.push('/')
    },1000)
  }

  return (
    <div className='flex justify-center items-center h-screen flex-col sm:flex-row'>
      <motion.div           
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: opacity, x: pxmin }}
          transition={{ duration: 1 }}>
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

            className='bg-transparent'>
             <Image src={recyle} alt="plastic" />
            </motion.div>
      </motion.div>
      <div>
        <motion.div
          initial={{ opacity: 0, y: -300 }}
          animate={{ opacity: opacity, y: px }}
          transition={{ duration: 1 }}
        className='w-80'>
          <h1 className='font-bold mb-2 text-green-800 text-lg'>
      
          </h1>
            <p>
              Mari Bersama-sama menjaga alam ini, untuk menjaga keberlanjutan lingkungan.
              kami kan selalu menunggu aksi mu, sekecil apapun itu... untuk alam🌱
            </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: opacity, y: px }}
          transition={{ duration: 1 }}
        className='mt-5 text-end flex justify-end'>
          <button>Back to Home</button>
          <CaretCircleDoubleRight onClick={handleNext} size={32} />
          <button></button>
        </motion.div>
      </div>
    </div>
  )
}

export default page
