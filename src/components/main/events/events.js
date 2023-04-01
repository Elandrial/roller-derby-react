import ArticlePanel from "../../common/articlepanel/articlepanel";
import eventData from '../../../data/events.json';
import Article from "../../common/articlepanel/article/article";

/**
 * 
 * Generates the Upcoming events content using data from a JSON file through the ArticlePanel Component
 */
export default function Events({recordsPerPage = 3}) {
    return (
      <section id="events">
          <h2>Upcoming Events</h2>
          <ArticlePanel jsondata={eventData} ariaName={"Events"} templateControl={Article}/>
      </section>
    )
  }