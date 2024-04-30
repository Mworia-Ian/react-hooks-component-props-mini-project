import blogData from "../data/blog"


function ArticleList() {
    const posts = blogData.posts.map((eachArticle) => {
        return <main key = {eachArticle.id}> 
        title = {eachArticle.title}
        date = {eachArticle.date}
        preview = {eachArticle.preview}
        minutes = {eachArticle.minutes}
        </main>
    }) 
  return (
    <main>
        {posts}
    </main>
  )
}

export default ArticleList
