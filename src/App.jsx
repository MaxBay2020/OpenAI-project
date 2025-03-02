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
        model: 'gpt-3.5-turbo-instruct',
        prompt: 'hello are you Grok3?',
        // max_tokens is optional
        max_tokens: 7
      }, {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
          'Content-Type': 'application/json',
        },git
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
