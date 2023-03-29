import ImageDerby from "../../../images/derby-program.jpg";

export default function Events(props) {
    return (
        <section id="events">
                <h2>Upcoming Events</h2>

                <article className="detail-card">
                    <figure>
                        <img src={ImageDerby} alt="Derby Program 2023"/>
                    </figure>
                    <div>
                        <h3>Integer laoreet ex nec purus posuere</h3>
                        <time>1st April 2023</time>
                        <p>Nullam maximus efficitur dapibus. Nulla facilisi. Proin mollis enim quis efficitur elementum. Nullam eget gravida quam. Vivamus vel urna vestibulum, aliquam ligula tempor, congue augue.</p>
                        <button>Read More</button>

                    </div>
                </article>

                <article className="detail-card">
                    <figure>
                        <img src={ImageDerby} alt="Derby Program 2023"/>
                    </figure>
                    <div>
                        <h3>Integer laoreet ex nec purus posuere</h3>
                        <time>1st April 2023</time>
                        <p>Nullam maximus efficitur dapibus. Nulla facilisi. Proin mollis enim quis efficitur elementum. Nullam eget gravida quam. Vivamus vel urna vestibulum, aliquam ligula tempor, congue augue.</p>
                        <button>Read More</button>

                    </div>
                </article>

                <article className="detail-card">
                    <figure>
                        <img src={ImageDerby} alt="Derby Program 2023"/>
                    </figure>
                    <div>
                        <h3>Integer laoreet ex nec purus posuere</h3>
                        <time>1st April 2023</time>
                        <p>Nullam maximus efficitur dapibus. Nulla facilisi. Proin mollis enim quis efficitur elementum. Nullam eget gravida quam. Vivamus vel urna vestibulum, aliquam ligula tempor, congue augue.</p>
                        <button>Read More</button>

                    </div>
                </article>
                <div className="page-control">
                    <button disabled aria-label="Go to previous Events page">&lt;</button>
                    <button disabled aria-label="Current Events Page, Page 1" aria-current="true">1</button>
                    <button aria-label="Go to Events page 2">2</button>
                    <button aria-label="Go to Events page 3">3</button>
                    <button aria-label="Go to Events page 4" className="hidden-m">4</button>
                    <button aria-label="Go to Events page 5" className="hidden-l">5</button>
                    <button disabled>...</button>
                    <button aria-label="Go to Events page 9">9</button>
                    <button aria-label="Go to last Events page">&gt;</button>
                </div>
            </section>
    );
  }