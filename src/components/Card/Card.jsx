import './Card.css'
export default function Card({ rating, name, price, img, description }) {
    return (
        <div className="card">
            {console.log(img)}
            <img src={`${img}`} alt={name} />
            <div className="rating">{rating} <span className="fa fa-star checked"></span> </div>
            <div className="card-product-1-header">
                <div className="card-product-1-header1">{name}</div>
                <div className="card-product-1-header2">{price}</div>
            </div>
            <div className="card-product-1-text">
                {description ? (
                    <div className="paragraph">{description}</div>
                ) : (
                    <>
                        <div className="card-product-1-text-active"><a href="#">Hot</a></div>
                        <div className="card-product-1-text-notactive"><a href="#">Cold</a></div>
                    </>
                )}


                <img src="./src/assets/img/icons-small-cart.png" alt="cart" />
            </div>
        </div>
    )
}