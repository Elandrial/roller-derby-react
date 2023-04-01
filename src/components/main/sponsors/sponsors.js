import Sponsor from './sponsor/sponsor';
import dataSponsors from '../../../data/sponsors.json';

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