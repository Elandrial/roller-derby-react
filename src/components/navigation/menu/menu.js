import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Menu(props) {
    return (
        <ul>
            <li><a href="#banner"><span aria-hidden="true"><FontAwesomeIcon icon={['fas', 'home']} /></span>Home</a></li>
            <li><a href="#events"><span aria-hidden="true"><FontAwesomeIcon icon={['fas', 'calendar-day']} /></span>Events</a></li>
            <li><a href="#news"><span aria-hidden="true"><FontAwesomeIcon icon={['fas', 'newspaper']} /></span>News</a></li>
            <li><a href="#about"><span aria-hidden="true"><FontAwesomeIcon icon={['fas', 'skating']} /></span>About</a></li>
            <li><a href="#sponsors"><span aria-hidden="true"><FontAwesomeIcon icon={['fas', 'medal']} /></span>Sponsors</a></li>
            <li><a href="#gallery"><span aria-hidden="true"><FontAwesomeIcon icon={['fas', 'camera']} /></span>Gallery</a></li>
            <li><a href="#merchandise"><span aria-hidden="true"><FontAwesomeIcon icon={['fas', 'tshirt']} /></span>Merch</a></li>
            <li><a href="#contact"><span aria-hidden="true"><FontAwesomeIcon icon={['fas', 'comment']} /></span>Contact</a></li>
        </ul>
    );
  }