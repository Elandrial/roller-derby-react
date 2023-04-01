export default function Sponsor({imageUrl, name})
{
    let imageFullPath = `${process.env.PUBLIC_URL}/images/${imageUrl}`;
    //TODO: Add popup option to show more details
    return (
            <div>
                <img src={imageFullPath} alt={name}/>
            </div>
        );
}
                