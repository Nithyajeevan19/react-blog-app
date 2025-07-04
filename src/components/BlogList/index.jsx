import BlogItem from '../BlogItem'
const BlogList = props => {
  const {listData} = props
  return (
    <>
      {listData === null ? (
        <h1>Loading....</h1>
      ) : (
        listData.map(eachBlogItem => {
          return <BlogItem eachBlogItem={eachBlogItem} key={eachBlogItem.id} />
        })
      )}
    </>
  )
}
export default BlogList
