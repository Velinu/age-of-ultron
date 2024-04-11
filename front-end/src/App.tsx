import { useEffect } from 'react'
import './App.css'
import md5 from 'md5'

const baseUrl = 'http://gateway.marvel.com/v1/public/'
const publicKey = '34020c32b3273575765935b18a51df15'
const privateKey = '6b031230a044d6c39e3081a437a58d6ff1d00266'
const ts = Number(new Date())

const hash = md5(ts + privateKey + publicKey)


function App() {
  useEffect(() => {
    fetch(`${baseUrl}characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
    .then((res) => {return res.json()})
    .then((resJson) => console.log(resJson))
  })

  return (
    <>
      
    </>
  )
}

export default App
