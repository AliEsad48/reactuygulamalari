import axios from "axios"
import React, { useState, useEffect } from "react"
import { Button, Container } from "react-bootstrap"
import Post from "./Post"

const Posts = () => {
  const [posts, setPosts] = useState([])

  const ekle = () => {
    const yeniYazi = {
      title: "Merhaba Dünya",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repudiandae corrupti aliquid nisi consectetur fuga id sequi saepe, velit eos dolorem culpa? Consectetur accusamus quisquam dicta. Et maiores tenetur magnam?",
      userId: 1,
    }

    axios
      .post("https://jsonplaceholder.typicode.com/posts", yeniYazi)
      .then((resp) => {
        setPosts([yeniYazi, ...posts])
      })
  }

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts").then((resp) => {
      setPosts(resp.data)
    })
  }, [])

  return (
    <Container>
      <Button variant="info" className="mb-4 mt-4" onClick={ekle}>
        Yeni Ekle
      </Button>
      {posts.map((post) => (
        <Post baslik={post.title} mesaj={post.body} key={post.id} />
      ))}
    </Container>
  )
}

export default Posts
