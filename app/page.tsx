import CompanionsCard from '@/components/CompanionsCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/Cta'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'


const Page = () => {
  return (
    <main className='mx-4 flex flex-col gap-y-4 justify-center items-center'>
      <h1>Popular Companions</h1>
      <section className='home-section'>
        <CompanionsCard id={123}
          name='Neura the brainy explorer'
          topic='Neural network of the brain'
          subject='science'
          duration={40}
          color='#ffda6e' />
        <CompanionsCard id={456}
          name='Data Science is the Future'
          topic='Neural network of the computers'
          subject='artificial intelegence'
          duration={50}
          color='#C8A2C8' />
        <CompanionsCard id={789}
          name='Does being alone actually good'
          topic='how does the great comes'
          subject='sociologie'
          duration={20}
          color='#bbda0e' />

      </section>
      <section className='home-section'>
        <CompanionsList 
        title='Recently Completed Sessions'  
        companions={recentSessions}
        classNames='w-2/3 max-lg:w-full'/>
        <Cta />
      </section>

    </main>
  )
}

export default Page