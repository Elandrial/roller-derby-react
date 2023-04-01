import ArticlePanel from "../../common/articlepanel/articlepanel";
import eventData from '../../../data/events.json';
import Article from "../../common/articlepanel/article/article";

export default function Events({recordsPerPage = 3}) {
    return (
      <section id="events">
          <h2>Upcoming Events</h2>
          <ArticlePanel jsondata={eventData} ariaName={"Events"} templateControl={Article}/>
      </section>
    )
  }