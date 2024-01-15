import CommentCard from '../components/Comment_Card/CommentCard'
import '../App.css'
export default function ReviewPage() {
    return (
        <>
            <div id='review' className="comments">
                <div className="main-comments">
                    <div className="comments-text">
                        <div className="title">
                            What they say about us
                        </div>
                        <div className="paragraph">
                            We always provide the best service and always maintain the quality of coffee
                        </div>
                    </div>
                    <div className="comments-cards">
                        <CommentCard img={"comment_img1.png"} name={"Naura"} description={"I really love the cappucino, the coffee was very smooth"} />
                        <CommentCard img={"comment_img2.png"} name={"John"} description={"The coffee shop is very convenient"} />
                        <CommentCard img={"comment_img3.png"} name={"Azura"} description={"The coffee menu here is very much"} />
                        <div className="slider-dots">
                            <div className="dot dot-active"><a href="#">.</a></div>
                            <div className="dot"><a href="#">.</a></div>
                            <div className="dot"><a href="#">.</a></div>
                        </div>
                    </div>
                </div>
                <div className="comment-bg-img">
                    <img src="./src/assets/img/cmt-bg-img.png" alt="background-image" />
                </div>
            </div>
        </>
    )
}