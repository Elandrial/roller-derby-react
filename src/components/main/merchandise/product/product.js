export default function Article({id, title, price, description, image, onButtonPress=(id)=>{}}){
    function onClick(){
        onButtonPress(id);
    }

    return (
    <div key={id} className="detail-card">
        <figure>
            <img src={process.env.PUBLIC_URL + "/images/" + image} alt={title}/>
        </figure>
        <div>
            <h3>{title}</h3>
            <h4>{price}</h4>
            <p>{description}</p>
            <button onClick={onClick}>Buy Now</button>
        </div>
    </div>
    );
}