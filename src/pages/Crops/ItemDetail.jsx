import { useParams } from "react-router-dom";
import crops from "../../data/crop";

import EnquiryButton from '../../components/EnquiryButton/EnquiryButton'


import "./ItemDetail.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

function ItemDetail() {
  const { cropId, itemId } = useParams();
  const crop = crops.find((c) => c.id === cropId);

  if (!crop) return <h2>Category not found</h2>;

  const items = crop.items || [];   // 👈 use items, not link
  const item = items.find((i) => i.id === itemId);

  if (!item) return <h2>Item not found</h2>;

  return (
    <>
    <div>
        <SectionTitle backgroundText="FARMS2Bizz" title={item.name} />
      </div>
    <div className="item-detail">
      <img src={item.image} alt={item.name} />
      <h1>{item.name}</h1>
      <h2>{item.dsort}</h2>
      <p>{item.description}</p>
      {/* <EnquiryButton /> */}

    </div>

    </>
  );
}

export default ItemDetail;
