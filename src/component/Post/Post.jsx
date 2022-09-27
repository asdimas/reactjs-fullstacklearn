import React from "react";
import "../../Pages/BlogPost/BlogPost.css";
import { useNavigate } from "react-router-dom";

const Post = (props) => {
  const navigate = useNavigate();
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placeimg.com/250/150/tech" alt="" />
      </div>
      <div className="content">
        {/* navigate("/detail-post/:id") */}
        <p
          className="title"
          onClick={(id) => {
            navigate(`/detail-post/${id}`);
            props.getDetail(props.data.id);
          }}
        >
          {props.data.title}
        </p>
        <p className="desc">{props.data.body}</p>
        <button
          className="btn-update"
          onClick={() => {
            props.onUpdate(props.data);
          }}
        >
          Update
        </button>
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
