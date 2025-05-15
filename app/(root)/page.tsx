import Header from '@/components/Header'
import VideoCard from '@/components/VideoCard'
import { dummyCards } from '@/constants'
import React from 'react'

const Home = () => {
  return (
    <main className='wrapper page'>
      <Header title='All Videos' subHeader='Public Library' />
        <section className='video-grid'>
            {dummyCards.map((card) => (
          <VideoCard {...card} key={card.id}  />
        ))}
        </section>
    </main>
  )
}

export default Home 