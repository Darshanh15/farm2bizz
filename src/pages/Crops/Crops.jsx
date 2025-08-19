// import React from "react";
// import { useNavigate } from "react-router-dom";
// import crops from "../../data/crops";
// // import "./FruitList.scss"; // make sure you import the scss

// const Crops = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="fruit-grid">
//       {crops.map((crop) => (
//         <div
//           key={crop.id}
//           className="fruit-card"
//           onClick={() => navigate(`/crop/${crop.id}`)}
//         >
//           <img src={crop.image} alt={crop.name} />
//           <p>{crop.name}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Crops;



import { Link } from "react-router-dom";
import crops from "../../data/crop";
import "./Crops.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

function Crops() {
  return (
    <>
    <div>
        <SectionTitle backgroundText="FARMS2Bizz" title="Crops" />
      </div>
     <div className="crops-container">
      {crops.map((crop) => (
        <Link key={crop.id} 
        to={`/crops/${crop.id}/list`} className="crop-card">
          <img src={crop.image} alt={crop.name} />
          <h3>{crop.name}</h3>
          <p>{crop.dsort}</p>
          <button>view more</button>
        </Link>
      ))}
    </div>
    </>
  );
}

export default Crops;

