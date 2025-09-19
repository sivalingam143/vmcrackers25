import React from "react";
import MetaTags from "./components/MetaTags";
import ProductController from "../controllers/cardone/card_one_controller";
// import CardOne from '../products/cardone/CardOne';
// import ProductCardTwo from '../products/cardtwo/ProductCardTwo';
// import CardThree from './cardthree/CardThree';
import "./Products.css";
import Banner from "./components/Banner";
import { AppBarFour } from "./components/AppBar";
import Footer from "./components/Footer";
import API_DOMAIN from "../../src/config/config";
import { useEffect, useState } from "react";

const Products = () => {
  const [banner, setbanner] = useState([]);
  useEffect(() => {
    fetch(`${API_DOMAIN}/home_banner.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search_text: "",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setbanner(data.body.banner);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  console.log("banner", banner);
  return (
    <>
      <MetaTags
        title="Crackers Price List | VM Crackers | Best Crackers Shops"
        type="website"
        siteName="vmcrackers.zentexus.in"
        url="https://vmcrackers.zentexus.in/products"
        keywords="Wholesale Crackers | VM Crackers | Retails Crackers | Including sparklers, rockets, and more | Celebrate Diwali with affordable and exciting crackers"
        description="Find the best deals on a wide variety of fireworks"
        revisitAfter="10 Days"
      />
      <div id="app-bar" className="overflow-hidden">
        <AppBarFour />
      </div>
      <Banner banner={banner} />
      <ProductController />
      <Footer />
    </>
  );
};

export default Products;
