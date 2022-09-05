import React from "react";

let label = "CatPic";

let pic0 = require("../artassets/clothingPics/th0.jpg");
let pic1 = require("../artassets/clothingPics/th1.jpg");
let pic2 = require("../artassets/clothingPics/th2.jpg");
let pic3 = require("../artassets/clothingPics/th3.jpg");
let pic4 = require("../artassets/clothingPics/th4.jpg");
let pic5 = require("../artassets/clothingPics/th5.jpg");
let pic6 = require("../artassets/clothingPics/th6.jpg");
let pic7 = require("../artassets/clothingPics/th7.jpg");
let pic8 = require("../artassets/clothingPics/th8.jpg");
let pic9 = require("../artassets/clothingPics/th9.jpg");

class CatagoryPictures extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {

    return (
      <section className={label+"Sec"}>
        <h1>Featured Catagories</h1>
        <ul className={label+"UL"}>
          <li className={label+"Li"}><div>
            <img className={label+"img"} src={pic0} alt="catPicNotDisplayed"></img>
            <h1>Pic Title</h1>
            <h2>Pic Description</h2>
          </div></li>
          <li className={label+"Li"}><div>
            <img className={label+"img"} src={pic1} alt="catPicNotDisplayed"></img>
            <h1>Pic Title</h1>
            <h2>Pic Description</h2>
          </div></li>
        </ul>
        <ul className={label+"UL"}>
          <li className={label+"Li"}><div>
            <img className={label+"img"} src={pic2} alt="catPicNotDisplayed"></img>
            <h1>Pic Title</h1>
            <h2>Pic Description</h2>
          </div></li>
          <li className={label+"Li"}><div>
            <img className={label+"img"} src={pic3} alt="catPicNotDisplayed"></img>
            <h1>Pic Title</h1>
            <h2>Pic Description</h2>
          </div></li>
        </ul>
        <ul className={label+"UL"}>
          <li className={label+"Li"}><div>
            <img className={label+"img"} src={pic4} alt="catPicNotDisplayed"></img>
            <h1>Pic Title</h1>
            <h2>Pic Description</h2>
          </div></li>
          <li className={label+"Li"}><div>
            <img className={label+"img"} src={pic5} alt="catPicNotDisplayed"></img>
            <h1>Pic Title</h1>
            <h2>Pic Description</h2>
          </div></li>
        </ul>
        <ul className={label+"UL"}>
          <li className={label+"Li"}><div>
            <img className={label+"img"} src={pic6} alt="catPicNotDisplayed"></img>
            <h1>Pic Title</h1>
            <h2>Pic Description</h2>
          </div></li>
          <li className={label+"Li"}><div>
            <img className={label+"img"} src={pic7} alt="catPicNotDisplayed"></img>
            <h1>Pic Title</h1>
            <h2>Pic Description</h2>
          </div></li>
        </ul>
        <ul className={label+"UL"}>
          <li className={label+"Li"}><div>
            <img className={label+"img"} src={pic8} alt="catPicNotDisplayed"></img>
            <h1>Pic Title</h1>
            <h2>Pic Description</h2>
          </div></li>
          <li className={label+"Li"}><div>
            <img className={label+"img"} src={pic9} alt="catPicNotDisplayed"></img>
            <h1>Pic Title</h1>
            <h2>Pic Description</h2>
          </div></li>
        </ul>
      </section>
    );
  }
}

export default CatagoryPictures;
