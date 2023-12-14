'use client'
import React from 'react'
import Image from 'next/image'
import plastic from '../../../assets/solusi.png'
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
      router.push('../../../pages/home')
    },1000)
  }

  return (
    <div className='flex justify-center items-center h-screen flex-col sm:flex-row'>
      <motion.div           
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: opacity, x: pxmin }}
          transition={{ duration: 1 }}>
        <Image src={plastic} alt="plastic" />
      </motion.div>
      <div>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: opacity, x: px }}
          transition={{ duration: 1 }}
        className='w-80'>
          <h1 className='font-bold mb-2 text-green-800 text-lg'>
            Mengapa kita perlu menjaga alam?
          </h1>
            <p>
            Dari semua tatangan dan Permasalahan tadi , bukankan sudah sebaiknya kita menyikapi hal tersebut dengan solusi terbaik, buatlah tindakan kecil untuk alam kerena tidakan mu mungkin dapat membantu alam yang mulai menua ini
            </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: opacity, y: px }}
          transition={{ duration: 1 }}
        className='mt-5 text-end flex justify-end'>
          <CaretCircleDoubleRight onClick={handleNext} size={32} />
        </motion.div>
      </div>
    </div>
  )
}

export default page