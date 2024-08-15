import React from "react";
interface PostProps {
  title: string;
  category: string;
  text: string;
}

function Post({ title, category, text }: PostProps) {
  return (
    <div className="m-5">
      <h3 className="text-3xl text-center text-lime-400 m-6 font-Gilroy-Black">{title}</h3>
      <h4 className="text-2xl text-white font-Gilroy-Black">{category}</h4>
      <p className="text-xl text-white">{text}</p>
    </div>
  );
}

export default Post;
