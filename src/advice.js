import React, { useState } from 'react'
import './App.css'
// import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import { useEffect } from 'react'
// const url = `https://api.adviceslip.com/advice/${key}`

const Advice = ({ advice2, fetchRandom, fetchNext }) => {
  const { id, advice } = advice2.slip
  //   const fetchNextAdvice = async function (key) {
  //     try {
  //       const response = await fetch(`https://api.adviceslip.com/advice/${key}`)
  //       const data = await response.json()
  //       console.log(data)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }

  //   useEffect(() => {
  //     fetchNextAdvice()
  //   }, [])

  return (
    <main>
      <div className='container'>
        <h4>Advice #{id}</h4>
        <p className='advice'>{advice}</p>
        <div className='btns'>
          <button
            className='prev-btn'
            onClick={() => {
              const mad = id - 1
              fetchNext(mad)
            }}
          >
            <FaChevronLeft />
          </button>
          <button
            className='random-btn'
            onClick={() => {
              fetchRandom()
            }}
          >
            shuffle
          </button>
          <button
            className='next-btn'
            onClick={() => {
              const mad = id + 1
              fetchNext(mad)
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </main>
  )
}

export default Advice
