import ArticlePanel from "../../common/articlepanel/articlepanel";
import newsData from '../../../data/news.json';

/**
 * 
 * Generates the News content, based on data from a JSON file through the ArticlePanel
 */
export default function News(props) {
    return (
        <section id="news">
            <h2>Latest News</h2>
            <ArticlePanel jsondata={newsData} ariaName={"News"} recordsPerPage={4}/>
        </section>
        );
  }