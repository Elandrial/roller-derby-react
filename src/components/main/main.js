import React from "react";
import Welcome from "./welcome/welcome.js";
import Events from "./events/events.js";
import News from "./news/news.js";
import About from "./about/about.js";
import Sponsors from "./sponsors/sponsors.js";
import Gallery from "./gallery/gallery.js";
import Merchandise from "./merchandise/merchandise.js";
import Contact from "./contact/contact.js";

/**
 * 
 * Generates the container content for the main section, composed of the components: Welcome, Events, News, About, Sponsors, Gallery, Merchandise, and Contact
 */
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