import React from 'react'
import { apiTweetAction } from './lookup'


export function ActionBtn(props) {
    const { tweet, action, didPerformAction } = props
    console.log(action)
    const likes = tweet.likes ? tweet.likes : 0
    const className = props.className ? props.className : 'btn btn-outline-info btn-sm'
    const actionDisplay = action.display ? action.display : 'Action'

    const handleActionBackendEvent = (response, status) => {
        console.log(response, status)
        if ((status === 200 || status === 201) && didPerformAction) {
            didPerformAction(response, status)
        }
    }

    const handleClick = (event) => {
        event.preventDefault()
        apiTweetAction(tweet.id, action.type, handleActionBackendEvent)
    }

    const display = action.type === 'like' ? `${likes} ${actionDisplay}` : actionDisplay
    return <button className={className} onClick={handleClick}>{display}</button>
}