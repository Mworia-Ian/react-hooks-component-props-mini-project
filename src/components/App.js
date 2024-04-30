import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name = {blogData.name}/>
      <About image = {blogData.image} about = {blogData.about}/>
      <ArticleList posts = {blogData.posts}/>
      <Article title={blogData.posts.title} date={blogData.posts.date} preview={blogData.posts.preview} />
    </div>
  );
}

export default App;
