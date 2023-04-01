import { Carousel } from 'react-responsive-carousel';
import galleryData from '../../../data/gallery.json';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function Gallery(props) {
    return (
        <section id="gallery">
            <h2>Gallery</h2>
            <Carousel>
                {
                    galleryData.map((data)=>{
                    return (
                        <div key={data.id}>
                            <img src={process.env.PUBLIC_URL + "/images/" + data.image} alt={data.title}/>
                            <p className="legend">{data.title}</p>
                        </div>
                    );
                })}
            </Carousel>
        </section>
    );
  }