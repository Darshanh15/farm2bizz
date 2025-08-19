import React from 'react'
import './Clients.css'

import Taza from '../../assets/clints/Al-Taza.png'
import Marriott from '../../assets/clints/Marriott-Hotels.png'
import Meridien from '../../assets/clints/le-meridien.jpg'
import Holiday from '../../assets/clints/Holiday-Inn.jpg'
import Paragon from '../../assets/clints/port.png'
import BigBasket from '../../assets/clints/big-basket.jpg'
import Lulu from '../../assets/clints/lu-lu-flight.png'
import Lakeshore from '../../assets/clints/le-meridien.jpg'
import Saravana from '../../assets/clints/saravanaaBhavan.jpg'
import Wonderla from '../../assets/clints/wonderla.jpg'
import Four from '../../assets/clints/four-points.png'
import Ginger from '../../assets/clints/four-points.png'
import AL from '../../assets/clints/Al-Taza.png'
import Aster from '../../assets/clints/Aster Medcity.png'
import Hotel from '../../assets/clints/Hotel Aryaas.png'
import SectionTitle from '../../components/SectionTitle/SectionTitle'

function Clients() {
  return (
    <>

    <div>
        <SectionTitle backgroundText="FARMS2Bizz" title="OUR CLIENTS" />
      </div>
    <section className="clients-section">
  {/* <p className="clients-subtitle">OUR CLIENTS</p> */}
  <h2 className="clients-title">A Preview To Client Base</h2>

  <div className="clients-logos">
    {/* <img src={Taza} alt="Taj" /> */}
    <img src={Meridien} alt="Le Meridien" />
    <img src={Marriott} alt="Marriott" />
    <img src={Holiday} alt="Holiday Inn" />
    <img src={Paragon} alt="Paragon" />
    <img src={BigBasket} alt="Big Basket" />
    <img src={Lulu} alt="Lulu Flight Kitchen" />
    {/* <img src={Lakeshore} alt="Lakeshore" />   */}
    <img src={Saravana} alt="Saravana Bhavan" />
    <img src={Wonderla} alt="Wonderla" />
    {/* <img src={Four} alt="Four Points" /> */}
    <img src={Ginger} alt="Ginger" />
    <img src={AL} alt="Al Taza" />
    <img src={Aster} alt="Aster Medcity" />
    <img src={Hotel} alt="Hotel Aryaas" />
  </div>
</section>
</>
  )
}

export default Clients