import ImageDerby from "../../../images/derby-program.jpg";

export default function Merchandise(props) {
    return (
        <section id="merchandise">
                <h2>Merchandise</h2>
                <div className="detail-card">
                    <figure>
                        <img src={ImageDerby} alt="Derby Program 2023"/>
                    </figure>
                    <div>
                        <h3>[Title]</h3>
                        <h4>[Price]</h4>
                        <p>[Exert]</p>
                        <button>Buy Now</button>
                    </div>
                </div>
                <div className="detail-card">
                    <figure>
                        <img src={ImageDerby} alt="Derby Program 2023"/>
                    </figure>
                    <div>
                        <h3>[Title]</h3>
                        <h4>[Price]</h4>
                        <p>[Exert]</p>
                        <button>Buy Now</button>
                    </div>
                </div>
                <div className="page-control">
                    <button disabled aria-label="Go to previous Merchandise page">&lt;</button>
                    <button disabled aria-label="Current Merchandise Page, Page 1" aria-current="true">1</button>
                    <button aria-label="Go to Merchandise page 2">2</button>
                    <button aria-label="Go to Merchandise page 3">3</button>
                    <button aria-label="Go to Merchandise page 4" className="hidden-m">4</button>
                    <button aria-label="Go to Merchandise page 5" className="hidden-l">5</button>
                    <button disabled>...</button>
                    <button aria-label="Go to Merchandise page 9">9</button>
                    <button aria-label="Go to last Merchandise page">&gt;</button>
                </div>
            </section>
    );
  }