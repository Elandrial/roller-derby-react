import Weather from "./weather/weather.js";
import Logo from "../../images/logo-albany-roller-derby.jpg";

export default function Header(props) {
    return (
        <header className="relative-content">
            <section id="logo">
                <figure>
                    <img src={Logo} alt="Albany Roller Derby Logo"/>
                </figure>
            </section>
            <section id="banner"></section>
            <Weather />
        </header>
    );
  }