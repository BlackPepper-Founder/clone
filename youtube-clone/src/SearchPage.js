import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow.js";
import VideoRow from "./VideoRow.js";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programmer"
        verified
        subs="659K"
        noOfVideos={382}
        description="Youtube Clone-Clever Developer"
      />
      <hr />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="Persistent"
        timestamp="59 seconds ago"
        channel="Youtube clone-Clever Programmer"
        title="Let's do this"
        image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CLyHiP8F&rs=AOn4CLCxscKDSj9rOGPSqoseGP0cEDLnFw"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Persistent"
        timestamp="59 seconds ago"
        channel="Youtube clone-Clever Programmer"
        title="Let's do this"
        image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CLyHiP8F&rs=AOn4CLCxscKDSj9rOGPSqoseGP0cEDLnFw"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Persistent"
        timestamp="59 seconds ago"
        channel="Youtube clone-Clever Programmer"
        title="Let's do this"
        image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CLyHiP8F&rs=AOn4CLCxscKDSj9rOGPSqoseGP0cEDLnFw"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Persistent"
        timestamp="59 seconds ago"
        channel="Youtube clone-Clever Programmer"
        title="Let's do this"
        image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CLyHiP8F&rs=AOn4CLCxscKDSj9rOGPSqoseGP0cEDLnFw"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Persistent"
        timestamp="59 seconds ago"
        channel="Youtube clone-Clever Programmer"
        title="Let's do this"
        image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CLyHiP8F&rs=AOn4CLCxscKDSj9rOGPSqoseGP0cEDLnFw"
      />
    </div>
  );
}

export default SearchPage;
