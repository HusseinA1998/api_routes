import { useState } from "react";
import axios from "axios";
import { Formik, useFormik } from "formik";

export default function Home() {
  const [post, setPost] = useState([]);

  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    onSubmit: (values) => {
      axios
        .post("/api/posts", values)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  const getPosts = () => {
    axios
      .get("/api/posts")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Api</h1>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <br />
          <input
            id="title"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </div>

        <div>
          <label htmlFor="title">Content</label>
          <br />
          <input
            id="body"
            name="body"
            onChange={formik.handleChange}
            value={formik.values.body}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <button onClick={getPosts}>get posts</button>
    </div>
  );
}
