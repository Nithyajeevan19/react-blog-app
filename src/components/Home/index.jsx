import {useEffect, useState} from 'react'
import BlogList from '../BlogList'
import UserInfo from '../UserInfo'

import './index.css'

const Home = () => {
  const [listData, setListData] = useState(null)
  function fetchDetails() {
    async function fn() {
      const response = await fetch('https://apis.ccbp.in/blogs')
      const data = await response.json()
      const formattedData = data.map(eachBlog => ({
        id: eachBlog.id,
        title: eachBlog.title,
        imageUrl: eachBlog.image_url,
        avatarUrl: eachBlog.avatar_url,
        author: eachBlog.author,
        topic: eachBlog.topic,
      }))
      setListData(formattedData)
    }
    fn()
  }
  useEffect(fetchDetails, [])

  return (
    <div className="home-container">
      <UserInfo />
      <BlogList listData={listData} />
    </div>
  )
}

export default Home
