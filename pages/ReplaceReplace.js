import React from 'react'
import {fetchUserData} from '../store'

const ReplaceReplace = () => {
    return (
        <div>
            Hey
        </div>
    )
}

ReplaceReplace.getInitialProps = async({ reduxStore }) => {
    await reduxStore.dispatch(fetchUserData())

    return {}
}

export default ReplaceReplace