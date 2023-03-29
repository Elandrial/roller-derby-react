import ImageDerby from "../../../images/derby-program.jpg";

export default function News(props) {
    return (
        <section id="news">
                <h2>Latest News</h2>
                <article className="detail-card">
                    <figure>
                        <img src={ImageDerby} alt="Derby Program 2023"/>
                    </figure>
                    <div>
                        <h3>Curabitur porttitor libero neque</h3>
                        <time>1st January 2023</time>
                        <p>Nullam maximus efficitur dapibus. Nulla facilisi. Proin mollis enim quis efficitur elementum. Nullam eget gravida quam. Vivamus vel urna vestibulum, aliquam ligula tempor, congue augue.</p>
                        <button>Read More</button>
                    </div>
                </article>
                <article className="detail-card">
                    <figure>
                        <img src={ImageDerby} alt="Derby Program 2023"/>
                    </figure>
                    <div>
                        <h3>Aliquam erat volutpat</h3>
                        <time>25th December 2022</time>
                        <p>Nullam maximus efficitur dapibus. Nulla facilisi. Proin mollis enim quis efficitur elementum. Nullam eget gravida quam. Vivamus vel urna vestibulum, aliquam ligula tempor, congue augue.</p>
                        <button>Read More</button>
                    </div>
                </article>
                <article className="detail-card">
                    <figure>
                        <img src={ImageDerby} alt="Derby Program 2023"/>
                    </figure>
                    <div>
                        <h3>Cras risus nisi</h3>
                        <time>14th September 2023</time>
                        <p>Nullam maximus efficitur dapibus. Nulla facilisi. Proin mollis enim quis efficitur elementum. Nullam eget gravida quam. Vivamus vel urna vestibulum, aliquam ligula tempor, congue augue.</p>
                        <button>Read More</button>
                    </div>
                </article>
                <div className="page-control">
                    <button disabled aria-label="Go to previous News page">&lt;</button>
                    <button disabled aria-label="Current News Page, Page 1" aria-current="true">1</button>
                    <button aria-label="Go to News page 2">2</button>
                    <button aria-label="Go to News page 3">3</button>
                    <button aria-label="Go to News page 4" className="hidden-m">4</button>
                    <button aria-label="Go to News page 5" className="hidden-l">5</button>
                    <button disabled>...</button>
                    <button aria-label="Go to News page 9">9</button>
                    <button aria-label="Go to last News page">&gt;</button>
                </div>
            </section>
    );
  }