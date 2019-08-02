import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

const Index = () => {
  return (
    <>
      <Link href="/LoginPage"><button className="btn btn-success">Logins</button></Link>
    </>
  )
}

export default connect()(Index)