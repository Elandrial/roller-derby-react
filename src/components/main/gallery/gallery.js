import ImageBench from "../../../images/roller-bench.png";

export default function Gallery(props) {
    return (
        <section id="gallery">
                <h2>Gallery</h2>
                <div id="gallery-active">
                    <figure>
                        <img src={ImageBench} alt="Ready for the roller session"/>
                        <figcaption>Ready for the roller Session</figcaption>
                    </figure>
                </div>
                <div id="gallery-carousel">
                    <img src={ImageBench} alt="Thumbnail: Ready for the roller session"/>
                    <img src={ImageBench} alt="Thumbnail: Ready for the roller session"/>
                    <img src={ImageBench} alt="Thumbnail: Ready for the roller session"/>
                    <img src={ImageBench} alt="Thumbnail: Ready for the roller session" className="hidden-m"/>
                    <img src={ImageBench} alt="Thumbnail: Ready for the roller session" className="hidden-l"/>
                </div>
            </section>
    );
  }