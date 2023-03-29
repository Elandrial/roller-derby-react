export default function Menu(props) {
    return (
        <ul>
            <li><a href="#banner"><i className="fa-solid fa-home" aria-hidden="true"></i>Home</a></li>
            <li><a href="#upcoming-events"><i className="fa-solid fa-calendar-day" aria-hidden="true"></i>Events</a></li>
            <li><a href="#news"><i className="fa-solid fa-newspaper" aria-hidden="true"></i>News</a></li>
            <li><a href="#about"><i className="fa-solid fa-skating" aria-hidden="true"></i>About</a></li>
            <li><a href="#sponsors"><i className="fa-solid fa-medal" aria-hidden="true"></i>Sponsors</a></li>
            <li><a href="#gallery"><i className="fa-solid fa-camera" aria-hidden="true"></i>Gallery</a></li>
            <li><a href="#merchandise"><i className="fa-solid fa-tshirt" aria-hidden="true"></i>Merch</a></li>
            <li><a href="#contact"><i className="fa-solid fa-comment" aria-hidden="true"></i>Contact</a></li>
        </ul>
    );
  }