'use client'
import React from 'react'
import Image from 'next/image'
import recyle from '../../../assets/energi.png'
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
      router.push('./four')
    },1000)
  }

  return (
    <div className='flex justify-center items-center h-screen flex-col sm:flex-row'>
      <motion.div           
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: opacity, x: pxmin }}
          transition={{ duration: 1 }}>
        <Image src={recyle} alt="plastic" />
      </motion.div>
      <div>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: opacity, x: px }}
          transition={{ duration: 1 }}
        className='w-80'>
          <h1 className='font-bold mb-2 text-green-800 text-lg'>
            3. Menghemat Energi
          </h1>
            <p>
            Ketidakpedulian terhadap penggunaan energi dapat meningkatkan emisi gas rumah kaca. Matikan peralatan elektronik saat tidak digunakan, gantilah lampu dengan yang hemat energi, dan pertimbangkan pemanfaatan energi terbarukan seperti tenaga surya. Tindakan ini bukan hanya menghemat biaya energi, tetapi juga mengurangi jejak karbon.
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