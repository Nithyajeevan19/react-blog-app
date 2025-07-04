import {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import {ClipLoader} from 'react-spinners'
import './index.css'
function BlogItemDetails() {
  const [blogItemDetailsData, setBlogItemDetailsData] = useState(null)

  const params = useParams()

  function fetchBlogItemDetails() {
    async function fn() {
      const response = await fetch(`https://apis.ccbp.in/blogs/${params.id}`)
      const fetchedData = await response.json()
      const formattedData = {
        id: fetchedData.id,
        title: fetchedData.title,
        imageUrl: fetchedData.image_url,
        avatarUrl: fetchedData.avatar_url,
        author: fetchedData.author,
        topic: fetchedData.topic,
        content: fetchedData.content,
      }

      setBlogItemDetailsData(formattedData)
    }
    fn()
  }

  useEffect(fetchBlogItemDetails, [])
  return (
    <>
      {blogItemDetailsData === null ? (
        <div data-testid="loader">
          <ClipLoader color="#00bfff" size={50} />
        </div>
      ) : (
        <div className="blog-container">
          <div className="blog-info">
            <h1 className="blog-details-title">{blogItemDetailsData.title}</h1>
            <div className="author-details">
              <img
                className="author-pic"
                src={blogItemDetailsData.avatarUrl}
                alt={blogItemDetailsData.author}
              />
              <span className="blog-author-name ">
                {blogItemDetailsData.author}
              </span>
            </div>

            <img
              className="blog-image"
              src={blogItemDetailsData.imageUrl}
              alt={blogItemDetailsData.title}
            />
            <p className="blog-content">{blogItemDetailsData.content}</p>
          </div>
        </div>
      )}
    </>
  )
}
export default BlogItemDetails
