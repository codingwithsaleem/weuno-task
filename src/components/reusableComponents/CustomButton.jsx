import React from 'react'
import { Button } from '../ui/button'
import { FaArrowRight } from "react-icons/fa6";
import { inter } from '@/helpers/fonts';


const CustomButton = ({label ,customClass}) => {
  return (
    <div>
      <Button variant={"myCustom"} className={`h-11 ${customClass}`}>
        <span className={` ${inter.className} flex justify-center items-center gap-4`}>
        {label}
        <FaArrowRight className='text-2xl mt-1'/>
        </span>
        
      </Button>
    </div>
  )
}

export default CustomButton
