export default function Article({id,key=id, title, date, description, image, onButtonPress=(id)=>{}}){
    function onClick(){
        onButtonPress(id);
    }

    return (
    <article key={id} className="detail-card">
        <figure>
            <img src={process.env.PUBLIC_URL + "/images/" + image} alt={title}/>
        </figure>
        <div>
            <h3>{title}</h3>
            <time>{date}</time>
            <p>{description}</p>
            <button onClick={onClick}>Read More</button>
        </div>
    </article>
    );
}