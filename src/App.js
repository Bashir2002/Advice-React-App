import logo from './logo.svg'
import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import './App.css'
import Advice from './advice'
import { useEffect } from 'react'
import Mad from './mad'
// import people from './data'
// import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
const url = 'https://api.adviceslip.com/advice'

function App() {
  const [loading, setLoading] = useState(true)
  const [advice2, setAdvice] = useState({})
  const fetchRandomAdvice = async function () {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setAdvice(data)
      console.log(data)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchRandomAdvice()
  }, [])
  const fetchNextAdvice = async function (key) {
    try {
      const response = await fetch(`https://api.adviceslip.com/advice/${key}`)
      const data = await response.json()
      console.log(data)
      setAdvice(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        {loading ? (
          <Mad />
        ) : (
          <Advice
            advice2={advice2}
            fetchRandom={fetchRandomAdvice}
            fetchNext={fetchNextAdvice}
          />
        )}
      </header>
    </div>
  )
}

export default App
