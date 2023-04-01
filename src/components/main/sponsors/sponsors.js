import Sponsor from './sponsor/sponsor';
import dataSponsors from '../../../data/sponsors.json';

/**
 * 
 * Generates the Sponsors content, as loaded from a JSON file
 * TODO: Add an overlay that shows more details about the sponsor
 */
export default function Sponsors(props) {
    return (
        <section id="sponsors">
            <h2>Our Sponsors</h2>
            <div id="sponsor-logos" key={"sponsorLogos"}>
                {dataSponsors.map((sponsor) => { return <Sponsor imageUrl={sponsor.image} name={sponsor.name} key={sponsor.id}/>})}
            </div>
        </section>
    );
  }