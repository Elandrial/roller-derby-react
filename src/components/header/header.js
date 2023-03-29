import Weather from "./weather/weather.js";

export default function Header(props) {
    return (
        <header className="relative-content">
            <section id="logo">
                <figure>
                    <img src="images/logo-albany-roller-derby.jpg" alt="Albany Roller Derby Logo"/>
                </figure>
            </section>
            <section id="banner"></section>
            <Weather />
        </header>
    );
  }