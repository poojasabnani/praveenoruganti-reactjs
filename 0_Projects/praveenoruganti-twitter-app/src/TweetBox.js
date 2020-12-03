import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
import firebase from 'firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    if (tweetMessage.length > 0 || tweetImage.length > 0) {

      db.collection("posts").add({
        displayName: "Praveen Oruganti",
        username: "praveenoruganti",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar:
          "https://pbs.twimg.com/profile_images/1306154578648289280/HZjk7-vq_400x400.jpg",
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      setTweetMessage("");
      setTweetImage("");

    }


  };


  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1306154578648289280/HZjk7-vq_400x400.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
