import React from "react";
// import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
// import Product from "../Product/Product";
import BlogPost from "../BlogPost/BlogPost";
// import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";

// const cardData = [
//   {
//     time: "6.12",
//     title: "Javascript Fundamental - Bagian 1",
//     desc: "14x ditonton. 2 bulan yang lalu",
//   },
//   {
//     time: "4.03",
//     title: "Javascript Fundamental - Bagian 2",
//     desc: "200x ditonton. 1 bulan yang lalu",
//   },
//   {
//     time: "8.54",
//     title: "Javascript Fundamental - Bagian 3",
//     desc: "27x ditonton. 18 hari yang lalu",
//   },
//   {
//     time: "3.25",
//     title: "Javascript Fundamental - Bagian 4",
//     desc: "122x ditonton. 2 hari yang lalu",
//   },
// ];
class Home extends React.Component {
  //   state = {
  //     showComponent: true,
  //   };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComponent: false,
    //   });
    // }, 15000);
  }
  render() {
    return (
      <div>
        <p>Course Component</p>
        <hr />
        {/* <YoutubeComp
          time="7.12"
          title="Javascript Fundamental - Bagian 1"
          desc="14x ditonton. 2 bulan yang lalu"
        />
        <YoutubeComp
          time="4.03"
          title="Javascript Fundamental - Bagian 2"
          desc="200x ditonton. 1 bulan yang lalu"
        />
        <YoutubeComp
          time="8.54"
          title="Javascript Fundamental - Bagian 3"
          desc="27x ditonton. 18 hari yang lalu"
        />
        <YoutubeComp
          time="3.25"
          title="Javascript Fundamental - Bagian 4"
          desc="122x ditonton. 2 hari yang lalu"
        />
        <YoutubeComp /> */}

        {/* <YoutubeComp {...cardData[0]} />
        <YoutubeComp {...cardData[1]} />
        <YoutubeComp {...cardData[2]} />
        <YoutubeComp {...cardData[3]} /> */}

        {/* {cardData.map((cardsData) => (
          <YoutubeComp {...cardsData} />
        ))} */}
        <p>Counter</p>
        <hr />
        {/* <Product /> */}
        <p>LifeCycle Component</p>
        <hr />
        {/* {this.state.showComponent ? <LifeCycleComp /> : null} */}
        <p>Blog Post</p>
        <hr />
        <BlogPost />
      </div>
    );
  }
}

export default Home;