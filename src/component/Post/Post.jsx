import React from "react";
import "../../container/BlogPost/BlogPost.css";

const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placeimg.com/250/150/tech" alt="" />
      </div>
      <div className="content">
        <p className="title">{props.data.title}</p>
        <p className="desc">{props.data.body}</p>
        <button
          className="btn-delete"
          onClick={() => {
            props.onDelete(props.data.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;
