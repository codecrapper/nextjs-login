import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import axios from 'axios'

const Index = () => {
  const [ test, setTest ] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    let data = await axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
    setTest(data.data.title)
  }
  return (
    <div>
      <Link href="/LoginPage"><button className="btn btn-success">Login</button></Link>
      {console.log(test)}
      <h1>{test ? test : null}</h1>
    </div>
  )
}

export default connect()(Index)