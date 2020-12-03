import React from "react";
import "../css/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title="Apple iPhone 11 (64GB) - White"
            price={63999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51o5RmQtroL._SL1024_.jpg"
          />
          <Product
            id="2"
            title="Panasonic 6 Kg 5 Star Fully-Automatic Top Loading Washing Machine (NA-F60LF1HRB, Grey)"
            price={12999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71m7U364CDL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Smart LED TV KD-55X7002G (Black)"
            price={63999}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81Nw2ifyBzL._SL1500_.jpg"
          />
          <Product
            id="4"
            title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black)"
            price={9749}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61XclfIKcbL._SL1000_.jpg"
          />
          <Product
            id="5"
            title="Samsung 23 L Solo Microwave Oven (MS23F301TAK/TL, Black)New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={5750}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61RZcuVxPFL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Bose Companion 2 Series III Multimedia Speakers"
            price={8438}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61mIlosRzsL._SL1000_.jpg"
          />
          <Product
          id="7"
          title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
          price={199900}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg"
        />
        </div>
      </div>     
    </div>

  );
}

export default Home;
