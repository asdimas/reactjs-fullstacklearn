import React, { Fragment } from "react";
import Youtube from "../../Pages/YoutubeComp/Youtube";
import Product from "../../Pages/Product/Product";
import LifeCycleComp from "../../Pages/LifeCycleComp/LifeCycleComp";
import BlogPost from "../../Pages/BlogPost/BlogPost";
import DetailPost from "../../Pages/BlogPost/DetailPost/DetailPost";
import "./Home.css";
// import { Routes, Route } from "react-router";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class Home extends React.Component {
  // state = {
  //   showComponent: true,
  // };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComponent: false,
    //   });
    // }, 15000);
  }
  render() {
    return (
      <Router>
        <div className="navigation">
          <Link to="/reactjs-fullstacklearn">Blog Post</Link>
          <Link to="/product">Product</Link>
          <Link to="/lifecycle">Lifecycle</Link>
          <Link to="/youtube">Youtube</Link>
        </div>
        <Routes>
          <Route path="/reactjs-fullstacklearn" element={<BlogPost />} />
          <Route path="/product" element={<Product />} />
          <Route path="/detail-post/:id" element={<DetailPost />} />
          <Route path="/lifecycle" element={<LifeCycleComp />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    );
  }
}

export default Home;
