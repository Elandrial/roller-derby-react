import ArticlePanel from "../../common/articlepanel/articlepanel";
import productData from '../../../data/merchandise.json';
import Product from "./product/product";

/**
 * 
 * Generates the merchandise content using data from a JSON file through ArticlePanel, with an alternate template, Product component
 */
export default function Merchandise(props) {
    return (
        <section id="merchandise">
            <h2>Merchandise</h2>
            <ArticlePanel jsondata={productData} ariaName={"Merchandise"} templateControl={Product}/>
        </section>
    );
  }