import React from "react";
import Welcome from "./Welcome/welcome.js";
import Events from "./Events/events.js";
import News from "./News/news.js";
import About from "./About/about.js";
import Sponsors from "./Sponsors/sponsors.js";
import Gallery from "./Gallery/gallery.js";
import Merchandise from "./Merchandise/merchandise.js";
import Contact from "./Contact/contact.js";

export default function Main(props) {
    return (
        <React.Fragment>
            <Welcome />
            <div className="split-content">
                <Events />
                <News />
            </div>
            <About />
            <Sponsors />
            <div className="split-content">
                <Gallery />
                <Merchandise />
            </div>
            <Contact />
        </React.Fragment>
    );
  }