import ImageYAC from "../../../images/Combined-YACWALotterywest-Logos.webp";
import ImageCarSmart from "../../../images/Logo-carsmart.webp";
import ImageMetro from "../../../images/Metro-Hotel-Perth_Horizontal_RGB.webp";
import ImagePenrose from "../../../images/penrose.webp";

export default function Sponsors(props) {
    return (
        <section id="sponsors">
            <h2>Our Sponsors</h2>
            <div id="sponsor-logos">
                <div><img src={ImageYAC} alt="Lotterywest and YACWA"/></div>
                <div><img src={ImageCarSmart} alt="CarSmart Albany"/></div>
                <div><img src={ImageMetro} alt="Metro Hotel Perth"/></div>
                <div><img src={ImagePenrose} alt="Penrose Professional Bookkeeping"/></div>
            </div>
        </section>
    );
  }