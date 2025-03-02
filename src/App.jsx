import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  // console.log(import.meta.env.VITE_OPENAI_APIKEY);
  console.log(import.meta.env.VITE_OPENAI_KEY)
  const [answer, setAnswer] = useState('')

  const fetchData = async () => {
      const response = await axios.post('https://api.openai.com/v1/completions', {
        model: 'gpt-4',
        message: [
            {
                role: 'user',
                content: 'Hello'
            },
            {
                role: 'user',
                content: 'How are you?'
            }
        ]

      }, {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
          'Content-Type': 'application/json',
        },
      })

      console.log(response)
    }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
      GPT says: {answer}
    </>
  )
}

export default App
