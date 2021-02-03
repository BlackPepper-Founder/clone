import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="Home">
      <div className="Home_container">
        <img
          className="Home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_2x._CB412256578_.jpg"
          alt=""
        />
        <div className="Home_row">
          <Product
            id="1"
            image="https://m.media-amazon.com/images/I/61OhmPNIIZL._AC_UY436_FMwebp_QL65_.jpg"
            title="Laser Engraver Machines, LaserPecker Pro Engraver Mini Handheld Etcher Laser Printer Cutter Desktop Laser Engraving Etching Machine with Protective Goggles for DIY Logo Wood Paper Leather Food"
            price={399.0}
            rating={4}
          />
          <Product
            id="2"
            image="https://m.media-amazon.com/images/I/71lYxwQKd7L._AC_UY436_FMwebp_QL65_.jpg"
            title='YXwin Yoga Mat, Classic 1/4 Inch Thick, Non Slip Pro Yoga Mat, Eco Friendly Exercise & Fitness Mat with Carrying Strap - for All Types of Yoga, Pilates & Floor Workouts (72" x 26" x1/4")'
            price={23.99}
            rating={4}
          />
          <Product
            id="3"
            image="https://m.media-amazon.com/images/I/81SJ4Xuz7lL._AC_UL640_FMwebp_QL65_.jpg"
            title="MILPROX iPhone 11 Case, Bling Sparkly Glitter Luxury Shiny Sparker Shell, Protective 3 Layer Hybrid Anti-Slick Slim Soft Cover for iPhone 11 6.1 inch (2019)-Gold"
            price={12.49}
            rating={4}
          />
        </div>
        <div className="Home_row">
          <Product
            id="4"
            image="https://m.media-amazon.com/images/I/71AEqROM5XL._AC_UL640_FMwebp_QL65_.jpg"
            title="Ekouaer Pajamas Set Long Sleeve Sleepwear Womens Button Down Nightwear Soft Pj Lounge Sets XS-XXL"
            price={30.99}
            rating={4}
          />
          <Product
            id="5"
            image="https://m.media-amazon.com/images/I/51HV3yG1XIL._AC_UL640_FMwebp_QL65_.jpg"
            title="Jordan Vintage"
            price={3209.8}
            rating={0}
          />
          <Product
            id="6"
            image="https://m.media-amazon.com/images/I/41ld4qgmjwL._AC_UY436_FMwebp_QL65_.jpg"
            title="Kenneth Cole Reaction Distressed Echo Vegan Leather Flapover Crossbody Anti-Theft RFID Bag, Brown, Laptop Messenger"
            price={43.24}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
