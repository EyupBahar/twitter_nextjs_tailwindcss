import React from 'react'
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'

const TweetBox = () => {
  return (
    <div className="mt-4 h-14 w-14 rounded-full object-cover">
      <img src="https://links.papareact.com/gll" alt="" />
      <div>
        <form>
          <input type="text" placeholder="What's Happening" />
          <div>{/* ıcons */}</div>
          <button>Tweet</button>
        </form>
      </div>
    </div>
  )
}

export default TweetBox
