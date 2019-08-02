import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import axios from 'axios'

const Index = () => {
  const [ test, setTest ] = useState()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    let data = await axios.get(`https://api.scrapethis.io/crapper/`)
    setTest(data.data)
  }
  return (
    <div>
      <Link href="/LoginPage"><button className="btn btn-success">Logins</button></Link>
      <h1>{test ? test.url : null}</h1>
    </div>
  )
}

export default connect()(Index)