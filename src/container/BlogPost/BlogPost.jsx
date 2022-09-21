import React, { Component, Fragment } from "react";
import Post from "../../component/Post/Post";
import "./BlogPost.css";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
  };

  getPostsAPI = () => {
    axios.get("http://localhost:3004/posts").then((result) => {
      this.setState({
        post: result.data,
      });
    });
  };
  onDelete = (showData) => {
    axios.delete(`http://localhost:3004/posts/${showData}`).then((res) => {
      this.getPostsAPI();
    });
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
        <p className="section-title">Blog Post</p>
        {/* <Post title="title" desc="desc" /> */}
        {this.state.post.map((post) => {
          return <Post key={post.id} data={post} onDelete={this.onDelete} />;
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
