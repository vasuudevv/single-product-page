import React, { useState } from "react";
import styled from "styled-components";
import Rating from "../Rating/Rating";
import "./Product.css";
import Star from "./Star";
import data from "../../data/data";
import { useParams } from "react-router";
import ReactImageMagnify from "react-image-magnify";
import { getDatabase, ref, set, onValue } from "firebase/database";
import db from "../../fireBase";
import Footer from "../Footer/Footer"

const FilterColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

function Product(props) {
  let { id } = useParams();
  //console.log({ id });
  const product = data.find((x) => x.id == id);

  var date = new Date();
  date.setDate(date.getDate() + 1);
  date = date.toString();
  date = date.slice(0, 15);
  var reviewData = [];
  var len = 0;
  var avg = 0;
  var sum = 0 
  var count = 0

  const [stockVisible, setStockVisible] = useState(false);
  const [stockValue, setStockValue] = useState(10);
  var inStock = stockValue ? true : false;

  const stockDec = () => {
    if (stockValue > 0) {
      setStockValue(stockValue - 1);
    } else {
      alert("Item Out of Stock");
      setStockValue(0);
    }
  };
  const starCountRef = ref(db, "Review/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    var reviewArray = Object.values(data);
    len = reviewArray.length;
    console.log(len);

    for (var i = 0; i < len; i++) {
      if (reviewArray[i].productId == id) {
        sum += reviewArray[i].rating;
        count += 1
        }
    }
    avg = Math.floor(sum/count)

    console.log(sum,"avg: ",avg);
    len = reviewData.length;
    // console.log(typeof sum);
    // avg = sum / reviewArray[0].length;
    // console.log(avg);
    // console.log(Number(sum));
  });

  return (
    <div>
    <div className="container">
      {/* <div>{i}</div> */}
      {/* <Navbar /> */}
      {/* <Announcement /> */}

      <div className="wrapper">
        <div className="imgContainer position-sticky"> 
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "product img",
                isFluidWidth: true,
                src: product.img,
              },
              largeImage: {
                src: product.img,
                width: 1200,
                height: 1800,
              },
              hoverDelayInMs: 0,
              // imageClassName: "img",
              imageStyle: {
                objectFit: "contain",
              },
              enlargedImageStyle: {
                opacity: "0px",
              },
              isActivatedOnTouch: true,
              enlargedImagePosition: "over",
            }}
          />
          {/* <img src={product.img} /> */}
        </div>

        <div className="infoContainer ">
          <p className="title">{product.name}</p>
          <Star rating={avg} />
          <div className="row pt-1">
            <div className="col-4 ">Total Review: {count}</div>
            {/* {rate.review.length} */}
            <div className="col-4 ml-4">Dealer: Dealer 1</div>
          </div>
          <hr />
          <div className="row">
            <p className="price col-1 p-2">Price:</p>
            <p className="price-div w-100 pl-4 col-4 ">₹{product.price}</p>
          </div>

          <div className="d-flex delivery-div">
            <p className="free pl-1">FREE delivery: </p>
            <p className="text-dark pl-3 pt-1 font-weight-bold"> {date}</p>
          </div>

          <div className="">
            {inStock ? (
              <button
                className="text-success stock-button"
                onClick={(e) => setStockVisible(true)}
              >
                In Stock
              </button>
            ) : (
              <div>
                <h4 className="text-danger">Out of Stock</h4>
              </div>
            )}
            {stockVisible ? <p>{stockValue} items available.</p> : null}
          </div>

          <div className="filterContainer">
            <div className="filter">
              <div className="filterTitle">Color</div>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </div>
            <div className="filter ml-1">
              <div className="addContainer">
                {/* <div className="amountContainer">
                  <i class="bi bi-dash-circle"></i>
                  <div className="amount">1</div>
                  <i class="bi bi-plus-circle"></i>
                </div> */}
                <button className="button-cart m-1" onClick={stockDec}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <hr />
          <div className="desc">
            <h4>Product Details</h4>
            {product.desc}
          </div>
          <div className="shadow-sm mt-5">
            <Rating productId={product.id} />
          </div>
        </div>
      </div>
      {/* <Newsletter /> */}
      
    </div>
    <Footer />
    </div>
  );
}

export default Product;
