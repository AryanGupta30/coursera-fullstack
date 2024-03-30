import React from 'react'
import Navbar from "../components/navbar"
import Pagination from '../components/Pagination';
import Explore from '../components/explore'
import Footer from '../components/footer'
import Review from '../components/reviewvid'
import Articles from '../components/articles'

export default function Degrees() {
  return (
    <>
      <Navbar />
      <div className='first' style={{backgroundColor: "#00255d", padding: '58px'}}>
        <h1 style={{fontSize: '40px', color: 'white'}}>Take your career to the next level with an online degree </h1>
      </div>
      <Pagination/>
      <Explore />
      <Review />
      <Articles/>
      <Footer />
    </>
  )
}
