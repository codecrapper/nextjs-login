import React from 'react'
import {fetchUserData} from '../store'

const ReplaceReplace = ({ initialState }) => {
    return (
        <div>
            Hey
            <h1>{initialState.userData.url}</h1>
            <h2>yoyo</h2>
        </div>
    )
}

ReplaceReplace.getInitialProps = async({ reduxStore }) => {
    await reduxStore.dispatch(fetchUserData())

    return {
        initialState: reduxStore.getState()
    }
}

export default ReplaceReplace