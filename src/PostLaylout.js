import React from 'react'
import { Link, Outlet } from "react-router-dom";

const PostLaylout = () => {
  return (
    <>
        <Link to="/postpage/1">Post 1</Link>
        <br></br>
        <Link to="/postpage/2">Post 2</Link>
        <br></br>
        <Link to="/postpage/newpost">NewPost</Link>
        <Outlet />
    </>
  )
}

export default PostLaylout