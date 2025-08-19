// import { useParams, Link, useNavigate } from "react-router-dom";
// import crops from "../../data/crop";
// import './CropList.scss'
// import SectionTitle from "../../components/SectionTitle/SectionTitle";

// function CropList() {
//      const navigate = useNavigate();


//   const { cropId } = useParams();  // example: "vegetables"
//   const crop = crops.find((c) => c.id === cropId);

//   if (!crop) return <h2>Category not found</h2>;

//   const items = crop.items || [];

//   return (

//     <>
//  <div>
//         <SectionTitle backgroundText="FARMS2Bizz" title="Crops List" />
//       </div>

//       <div className="items-grid">
//         {items.map((item) => (
//           <div 
//             key={item.id} 
//             className="item-card"
//             onClick={() => navigate(`/crops/${cropId}/${item.id}`)}
//           >
//             <img src={item.image} alt={item.name} />
//             <p>{item.name}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default CropList;


// ____________________________________________________________________________________________

// import { useParams, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import crops from "../../data/crop";
// import "./CropList.scss";
// import SectionTitle from "../../components/SectionTitle/SectionTitle";

// function CropList() {
//   const navigate = useNavigate();
//   const { cropId } = useParams();

//   // ✅ hooks must be at top
//   const [currentPage, setCurrentPage] = useState(1);

//   const crop = crops.find((c) => c.id === cropId);
//   if (!crop) return <h2>Category not found</h2>;

//   const items = crop.items || [];
//   const itemsPerPage = 8;

//   // pagination logic
//   const indexOfLast = currentPage * itemsPerPage;
//   const indexOfFirst = indexOfLast - itemsPerPage;
//   const currentItems = items.slice(indexOfFirst, indexOfLast);

//   const totalPages = Math.ceil(items.length / itemsPerPage);

//   return (
//     <>
//       <div>
//         <SectionTitle backgroundText="FARMS2Bizz" title="Crops List" />
//       </div>

//       <div className="items-grid">
//         {currentItems.map((item) => (
//           <div
//             key={item.id}
//             className="item-card"
//             onClick={() => navigate(`/crops/${cropId}/${item.id}`)}
//           >
//             <img src={item.image} alt={item.name} />
//             <p>{item.name}</p>
//           </div>
//         ))}
//       </div>

//       {/* ✅ Pagination */}
//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i + 1}
//             onClick={() => setCurrentPage(i + 1)}
//             className={currentPage === i + 1 ? "active" : ""}
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>
//     </>
//   );
// }

// export default CropList;


// ____________________________________________________________________________________________



import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import crops from "../../data/crop";
import "./CropList.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

function CropList() {
  const navigate = useNavigate();
  const { cropId } = useParams();

  // ✅ hooks must be at top
  const [currentPage, setCurrentPage] = useState(1);

  const crop = crops.find((c) => c.id === cropId);
  if (!crop) return <h2>Category not found</h2>;

  const items = crop.items || [];
  const itemsPerPage = 8;

  // pagination logic
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = items.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  // visible pages (max 5)
  const getPageNumbers = () => {
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + 4);

    if (end - start < 4) {
      start = Math.max(1, end - 4);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <>
      <div>
        <SectionTitle backgroundText="FARMS2Bizz" title="Crops List" />
      </div>

      <div className="items-grid">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="item-card"
            onClick={() => navigate(`/crops/${cropId}/${item.id}`)}
          >
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      {/* ✅ Pagination */}
      <div className="pagination">
        {/* Prev */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          ⬅
        </button>

        {/* Page numbers (max 5) */}
        {getPageNumbers().map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={currentPage === num ? "active" : ""}
          >
            {num}
          </button>
        ))}

        {/* Next */}
        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        >
          ➡
        </button>
      </div>
    </>
  );
}

export default CropList;
