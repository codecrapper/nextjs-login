import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

// class Index extends React.Component {
//   static getInitialProps ({ reduxStore, req }) {
//     const isServer = !!req
//     reduxStore.dispatch(fetchUserData())

//     return {}
//   }

//   // componentDidMount () {
//   //   const { dispatch } = this.props
//   //   this.timer = startClock(dispatch)
//   // }

//   // componentWillUnmount () {
//   //   clearInterval(this.timer)
//   // }

//   render () {
//     return (
//       <>
//       {/* <Examples /> */}
//         <Link href="/LoginPage"><button className="btn btn-success">Login</button></Link>
//       </>
//     )
//   }
// }

// export default connect()(Index)

const Index = () => {
  return (
    <>
      <Link href="/LoginPage"><button className="btn btn-success">Login</button></Link>
      <Link href="/ReplaceReplace"><button className="btn btn-danger">NO!</button></Link>
    </>
  )
}

export default connect()(Index)