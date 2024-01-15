import './CommentCard.css'
export default function CommentCard({img,name,description}) {
    return (
        <div className="comments-card">
            <div className="comments-card-img">
                <img src={`./src/assets/img/${img}`} alt={name} />
            </div>
            <div className="comments-card-text">
                <div className="comments-text-title">{name}</div>
                <div className="comments-text-p">{description}</div>
            </div>
        </div>
    )
}