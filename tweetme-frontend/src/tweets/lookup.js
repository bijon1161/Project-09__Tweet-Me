import { backendLookup } from '../lookup'

// export function apiTweetList(callback) {
//     backendLookup('GET', '/tweets', callback)
// }

export function apiTweetList(username, callback) {
    let endpoint = '/tweets'
    if (username) {
        endpoint = `/tweets/?username=${username}`
    }
    backendLookup('GET', endpoint, callback)
}

export function apiTweetDetail(tweetId, callback) {
    backendLookup('GET', `/tweets/${tweetId}`, callback)
}

export function apiTweetCreate(newTweet, callback) {
    backendLookup('POST', '/tweets/create', callback, { content: newTweet })
}

export function apiTweetAction(tweetId, action, callback) {
    const data = { id: tweetId, action: action }
    backendLookup('POST', '/tweets/action', callback, data)
}