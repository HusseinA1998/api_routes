import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";

const Home = (props) => {
  const [post, setPost] = useState([]);

  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    onSubmit: (values) => {
      axios
        .post("/api/mongoose_posts", values)
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
      .get("/api/mongoose_posts")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={getPosts}>Load posts</button>
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
          <label htmlFor="title">Body</label>
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
    </div>
  );
};

export default Home;
