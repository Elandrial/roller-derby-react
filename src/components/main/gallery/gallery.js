export default function Gallery(props) {
    return (
        <section id="gallery">
                <h2>Gallery</h2>
                <div id="gallery-active">
                    <figure>
                        <img src="images/roller-bench.png" alt="Ready for the roller session"/>
                        <figcaption>Ready for the roller Session</figcaption>
                    </figure>
                </div>
                <div id="gallery-carousel">
                    <img src="images/roller-bench.png" alt="Thumbnail: Ready for the roller session"/>
                    <img src="images/roller-bench.png" alt="Thumbnail: Ready for the roller session"/>
                    <img src="images/roller-bench.png" alt="Thumbnail: Ready for the roller session"/>
                    <img src="images/roller-bench.png" alt="Thumbnail: Ready for the roller session" className="hidden-m"/>
                    <img src="images/roller-bench.png" alt="Thumbnail: Ready for the roller session" className="hidden-l"/>
                </div>
            </section>
    );
  }