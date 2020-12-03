import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1290194612678569985"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="praveenoruganti"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.facebook.com/groups/268426377837151"}
          options={{ text: "#Praveen Oruganti Tech FB Group", via: "praveenoruganti" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
