import React from "react";
// import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import Product from "../Product/Product";

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
        <Product />
      </div>
    );
  }
}

export default Home;
