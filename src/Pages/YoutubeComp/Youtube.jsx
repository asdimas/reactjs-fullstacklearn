import React, { Component } from "react";
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import { cardData } from "../../utils/data";

class Youtube extends Component {
  render() {
    return (
      <div>
        <p className="title-page">Halaman Youtube</p>
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

        {cardData.map((cardsData) => (
          <YoutubeComp {...cardsData} />
        ))}
      </div>
    );
  }
}

export default Youtube;
