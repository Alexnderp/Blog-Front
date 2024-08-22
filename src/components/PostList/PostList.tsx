import React, { useContext, useEffect, useState } from "react";
import CardPost from "../CardPost/CardPost";
import Post from "../../models/Post";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { apiSearchGet } from "../../Services/Service";
import { MutatingDots } from "react-loader-spinner";
import { toastAlert } from "../../Utils/toastAlert";

function PostList() {
  const [post, setPost] = useState<Post[]>([]);

  const navigate = useNavigate();

  const { user, handleLogout } = useContext(AuthContext);
  const token = user.token;


  useEffect(() => {
    if (token === "") {
      toastAlert('Favor, efetuar o login', 'info')
      navigate("/");
    }
  }, [token]);

  async function searchPost() {
    try {
      await apiSearchGet("/posts", setPost, {
        headers: {
          Authorization: token,
        },
      });
    } catch (e: any) {
      if (e.toString().includes("403")) {
        alert("Sessão expirada, efutue login novamente");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    searchPost();
  }, [post.length]);
  return (
    <>
      <div className="flex items-center justify-center">
        {post.length === 0 && <MutatingDots />}
      </div>
      <div className="container mx-auto py-4 grid md:grid-cols-2 lg:grid-cols-3">
        {post.map((post)=>(

        <CardPost key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default PostList;
