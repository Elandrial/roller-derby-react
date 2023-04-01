import ArticlePanel from "../../common/articlepanel/articlepanel";
import newsData from '../../../data/news.json';


export default function News(props) {
    return (
        <section id="news">
            <h2>Latest News</h2>
            <ArticlePanel jsondata={newsData} ariaName={"News"} recordsPerPage={4}/>
        </section>
        );
  }