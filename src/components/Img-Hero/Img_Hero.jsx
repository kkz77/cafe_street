import "./Img_Hero.css"
export default function ({ rating, name, price }) {
    return (
        <>
            <div className="img-hero">
                <img src="./src/assets/img/img_hero.png" alt="coffee image" />
                <div className="img-hero-rating">{rating}<span className="fa fa-star checked"></span> </div>
                <div className="img-hero-name">{name}</div>
                <div className="img-hero-price">{price}</div>
            </div>
        </>
    )
}
