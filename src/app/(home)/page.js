import BookTickents from '@/components/home/BookTickents'
import Curate from '@/components/home/Curate'
import Experiance from '@/components/home/Experiane'
import FindPlace from '@/components/home/FindPlace'
import Hero from '@/components/home/Hero'
import Mall from '@/components/home/Mall'
import Footer from '@/components/reusableComponents/Footer'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Mall/>
      <BookTickents/>
      <Experiance/>
      <Curate/>
      <FindPlace/>
      <Footer/>
    </div>
  )
}

export default page
