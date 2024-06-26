import React, { useState } from 'react';
import styles from './FaqCard.module.css'; 


let tabIndexCounter = 2;

const FaqCard = ({ title, imageUrl, description, distance, location, likeCount, commentCount, comments, answer, tabindex }) => {
    const [showComments, setShowComments] = useState(false);
    const [newComment, setNewComment] = useState('');
    const tabIndex = tabIndexCounter++;

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    const handleInputChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleSubmitComment = () => {
        console.log('New comment:', newComment);
        setNewComment('');
    };

    return (
        <div className={styles.faqAnswerContainer}>
            <div className={styles.information}>
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>{title}</h2>
                    <h4 className={styles.cardDistance}>{distance}</h4>
                    <h3 className={styles.cardLocation}>{location}</h3>
                    <p className={styles.cardDescription}>{description}</p>
                </div>
                <div className={styles.extraDetails}>
                    <img src={imageUrl} alt={title} className={styles.cardImage} />
                    {/* <a href='/maps'><h9>Tap to see on map</h9></a> */}
                </div>
            </div>
            <div className={styles.likesAndComments}>
                <div className={styles.likes}>
                    {/* <Image src="/icons/like.svg" alt="Like Icon" width={20} height={20} /> */}
                    <h8>{likeCount}</h8>
                </div>
                <div className={styles.faqAnswerOpen} onClick={toggleComments}>
                    {/* <Image src="/icons/comment.svg" alt="Comment Icon" width={20} height={20} /> */}





                    <div tabIndex={tabIndex} className={styles.faqAnswer} onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                    toggleComments();
                    }}}>{answer}</div>
                    <h8>{commentCount}</h8>
                </div>
            </div>
            {showComments && (
                <div className={styles.commentsContainer}>
                    {comments.map((comment, index) => (
                        <div key={index} className={styles.comment}>
                            <div className={styles.profileComment}>
                                {/* <Image src={comment.profilePicture} width={30} height={30}/> */}
                                <p>{comment.username}</p>
                            </div>
                            <div className={styles.commentContent}>
                                <p>{comment.comment}</p>
                            </div>
                        </div>
                    ))}
                    <div className={styles.commentInput}>
                        {/* <Image src='icons/profile-icon-teal.svg' width={30} height={30}/> */}
                        {/* <input 
                            className={styles.commentInput}
                            type="text" 
                            placeholder="Add a comment" 
                            value={newComment} 
                            onChange={handleInputChange} 
                        /> */}
                        {/* <div onClick={handleSubmitComment} className={styles.submitButton}>
                            <Image src="/icons/submit.svg" alt="Send Icon" width={30} height={30} />
                        </div> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FaqCard;
