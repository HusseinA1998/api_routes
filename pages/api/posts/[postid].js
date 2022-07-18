import axios from "axios";

export const getPost = async (postsId) => {
  try {
    const request = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postsId}`
    );

    return { post: request.data };
  } catch (error) {
    return { message: "Sorry, try again" };
  }
};

const handler = async (req, res) => {
  const postId = req.query.postid;
  if (req.method === "GET") {
    try {
      const request = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      res.status(200).json({
        posts: request.data,
      });
    } catch (error) {
      res.status(401).json({
        message: "unsuccessful post request",
        error: error,
      });
    }
  }
};

export default handler;
