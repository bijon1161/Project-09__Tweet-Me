import React, { useEffect, useState } from 'react'

import { apiTweetList } from './lookup'
import { Tweet } from './detail'

export function TweetList(props) {
    const [tweetsInit, setTweetsInit] = useState([])
    const [tweets, setTweets] = useState([])
    const [tweetsDidSet, setTweetDidSet] = useState(false)

    useEffect(() => {
        const final = [...props.newTweets].concat(tweetsInit)
        if (final.length !== tweets.length) {
            setTweets(final)
        }
    }, [props.newTweets, tweets, tweetsInit])

    useEffect(() => {
        if (tweetsDidSet === false) {
            const myCallback = (response, status) => {
                if (status === 200) {
                    setTweetsInit(response)
                    setTweetDidSet(true)
                } else {
                    alert("There was an error")
                }
            }
            apiTweetList(props.username, myCallback)
        }
    }, [tweetsInit, tweetsDidSet, setTweetDidSet, props.username])

    const handleDidRetweet = (newTweet) => {
        const updatedTweetsInit = [...tweetsInit]
        updatedTweetsInit.unshift(newTweet)
        setTweetsInit(updatedTweetsInit)

        const updatedFinalTweets = [...tweets]
        updatedFinalTweets.unshift(tweets)
        setTweets(updatedFinalTweets)
    }

    return tweets.map((item, index) => {
        return <Tweet
            tweet={item}
            didRetweet={handleDidRetweet}
            className='my-5 py-3 border bg-white text-dark'
            key={`${index}-{item.id}`} />
    })
}
