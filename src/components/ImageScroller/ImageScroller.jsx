import React from "react";
import "./scroller.scss";

import apple from "../../assets/fruits/apple.png";
import avocados from "../../assets/fruits/Avocados.png";
import bananas from "../../assets/fruits/Bananas.png";
import berries from "../../assets/fruits/Berries.png";
import broccoli from "../../assets/fruits/Broccoli.png";
import cherries from "../../assets/fruits/Cherries.png";
import citrus from "../../assets/fruits/Citrus.png";
import kiwifruit from "../../assets/fruits/Kiwifruit.png";
import litchis from "../../assets/fruits/Litchis.png";
import melons from "../../assets/fruits/Melons.png";
import ornamentals from "../../assets/fruits/Ornamentals.png";
import pears from "../../assets/fruits/Pears.png";
import persimmons from "../../assets/fruits/Persimmons.png";
import stoneFruit from "../../assets/fruits/Stone Fruit.png";
import tableGrapes from "../../assets/fruits/Table Grapes.png";
import tomatoes from "../../assets/fruits/Tomatoes.png";
import other from "../../assets/fruits/Other.png";

const images = [
  apple,avocados,bananas,berries,cherries,citrus,kiwifruit,litchis,melons,ornamentals,pears,persimmons,stoneFruit,tableGrapes,tomatoes,other

];

function ImageScroller() {
  return (
    <div className="scroller-wrapper">
      <div className="scroller">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`slide-${index}`} />
        ))}
      </div>
    </div>
  );
}

export default ImageScroller;


// -------------------------------------------------------------------------------------------------

// import React from "react";
// import "./scroller.scss";

// import img1 from '../../assets/fruits/Avocados.png'
// import img2 from '../../assets/fruits/apple.png'
// import img3 from '../../assets/fruits/Cherries.png'

// const images = [
//   img1,
//   img2,
//   img3,
//   "https://picsum.photos/400/200?4",
//   "https://picsum.photos/400/200?5",
// ];

// function ImageScroller() {
//   return (
//     <div className="scroller-wrapper">
//       <div className="scroller">
//         {/* Duplicate images for infinite effect */}
//         {images.concat(images).map((img, index) => (
//           <img key={index} src={img} alt={`slide-${index}`} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ImageScroller;
