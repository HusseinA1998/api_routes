import axios from "axios";
import { useEffect } from "react";
import { getPost } from "./api/posts/[postid]";

const Posts = (props) => {
  console.log(props);

  // useEffect(()=>{
  //     axios.get(`/api/posts/5`).then(response=>{
  //         console.log(response.data)
  //     })
  // },[])

  return <div>Post by id</div>;
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(5);

  return {
    props: {
      data: post,
    },
  };
};

export default Posts;
