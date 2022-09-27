import React, { Component, Fragment } from "react";
import Post from "../../component/Post/Post";
import "./BlogPost.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
    isUpdate: false,
  };

  getPostsAPI = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
      .then((result) => {
        this.setState({
          post: result.data,
        });
      });
  };

  postDataAPI = () => {
    axios.post("http://localhost:3004/posts", this.state.formBlogPost).then(
      (res) => {
        console.log(res);
        this.getPostsAPI();
        this.setState({
          isUpdate: false,
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
        });
      },
      (err) => {
        console.log("error", err);
      }
    );
  };

  putDataAPI = () => {
    axios
      .put(
        `http://localhost:3004/posts/${this.state.formBlogPost.id}`,
        this.state.formBlogPost
      )
      .then((res) => {
        console.log(res);
        this.getPostsAPI();
        this.setState({
          isUpdate: false,
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
        });
      });
  };

  onDelete = (showData) => {
    axios.delete(`http://localhost:3004/posts/${showData}`).then((res) => {
      this.getPostsAPI();
    });
  };

  onUpdateHandler = (eventData) => {
    console.log(eventData);
    this.setState({
      formBlogPost: eventData,
      isUpdate: true,
    });
  };

  onDetailHandler = (cek) => {
    // history.push(`/detail-post/${id}`);
    // const navigate = useNavigate();
    // navigate(`/detail-post/:id`);
    console.log(cek);
  };

  onHandlerForm = (event) => {
    // console.log("form data", event.target);
    // console.log("initial state: ", this.state.formBlogPost);
    // console.log("new value: ", formBlogNew);
    // console.log(event.target.name);
    let formBlogNew = { ...this.state.formBlogPost };
    formBlogNew[event.target.name] = event.target.value;
    let timestamp = new Date().getTime();
    if (!this.state.isUpdate) {
      formBlogNew["id"] = timestamp;
    }
    this.setState(
      {
        formBlogPost: formBlogNew,
      }
      //   () => {
      //     console.log("value object formBlogPost: ", this.state.formBlogPost);
      //   }
    );
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    if (this.state.isUpdate) {
      this.putDataAPI();
    } else {
      this.postDataAPI();
    }
  };
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({
    //       post: json,
    //     });
    //   });
    // USING AXIOS
    // axios.get("http://localhost:3004/posts").then((result) => {
    //     this.setState({
    //       post: result.data,
    //     });
    //   });

    this.getPostsAPI();
  }

  render() {
    return (
      <Fragment>
        <p className="title-page">Halaman Blog Post</p>
        <hr />
        <p className="section-title">Blog Post</p>
        {/* <Post title="title" desc="desc" /> */}
        <form className="form-add-post" onSubmit={this.onSubmitHandler}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="add title"
            onChange={this.onHandlerForm}
            value={this.state.formBlogPost.title}
          />
          <label htmlFor="body-content">Blog Content</label>
          <textarea
            name="body"
            id="body"
            cols="30"
            rows="10"
            placeholder="add blog content"
            onChange={this.onHandlerForm}
            value={this.state.formBlogPost.body}
          ></textarea>
          <button className="btn-simpan">Simpan</button>
        </form>

        {this.state.post.map((post) => {
          return (
            <Post
              key={post.id}
              data={post}
              onDelete={this.onDelete}
              onUpdate={this.onUpdateHandler}
              getDetail={this.onDetailHandler}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
