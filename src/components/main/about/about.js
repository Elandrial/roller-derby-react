
/**
 * 
 * Generates the basic about content
 */
export default function About(props) {
    return (
        <section id="about" className="content-section alternate-background">
            <h2>What is Roller Derby</h2>
            <div className="split-content">
                <div id="about-video">
                    <iframe src="https://www.youtube-nocookie.com/embed/DUDpIsCfhjw?controls=0&modestbranding=1"
                            title="What is Roller Derby?" 
                            frameBorder="0" 
                            allowFullScreen ></iframe>
                    <div>(Albany Roller Derby 2019)</div>
                </div>
                <div id="about-detail">
                    <p>Vivamus eu nisl dignissim, mollis erat sit amet, tincidunt urna. Sed sed commodo augue, id convallis mauris. Integer laoreet ex nec purus posuere, sit amet condimentum tellus fermentum. Vivamus et massa nunc. Vestibulum vel condimentum lorem. In et sollicitudin metus, nec rutrum nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean non vestibulum massa. Nulla rhoncus in nulla vel convallis. Mauris commodo at ante a ornare. Suspendisse potenti. Nam lorem nibh, auctor eget viverra vitae, aliquet in ipsum. Praesent faucibus ligula ut tempor tempus. </p>
                </div>
            </div>
        </section>
    );
  }