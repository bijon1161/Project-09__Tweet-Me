import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { TweetsComponent, TweetDetailComponent } from './tweets/components'

const appEl = document.getElementById('root')
if (appEl) {
  ReactDOM.render(<App />, appEl);
}

const e = React.createElement
const tweetEl = document.getElementById('tweetme')

if (tweetEl) {
  // console.log(tweetEl.dataset)
  ReactDOM.render(e(TweetsComponent, tweetEl.dataset), tweetEl)
}

const tweetDetailElement = document.querySelectorAll(".tweetme-detail")

tweetDetailElement.forEach(container => {
  ReactDOM.render(e(TweetDetailComponent, container.dataset),
    container)
})


serviceWorker.unregister();
