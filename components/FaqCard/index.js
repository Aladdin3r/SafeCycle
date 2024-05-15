import React, { useState } from 'react';
import styles from './FaqCard.module.css'; 

const FaqCard = ({ text }) => {
    const [showText, setShowText] = useState(false);
    // const [newComment, setNewComment] = useState('');

    const toggleText = () => {
        setShowText(!showText);
    };

    // const handleInputChange = (e) => {
    //     setNewComment(e.target.value);
    // };

    // const handleSubmitComment = () => {
    //     console.log('New comment:', newComment);
    //     setNewComment('');
    // };

    return (
        <div className={styles.cardContainer}>
            <div className={styles.text}>

            </div>
            
          
            {showText && (
                <div className={styles.commentsContainer}>
                    {text.map((text, index) => (
                        <div key={index} className={styles.comment}>
                            <div className={styles.profileComment}>
                                <p>{comment.username}</p>
                            </div>
                            <div className={styles.commentContent}>
                                <p>{comment.comment}</p>
                            </div>
                        </div>
                    ))}
                    <div className={styles.commentInput}>
                        <Image src='icons/profile-icon-teal.svg' width={30} height={30}/>
                        <input 
                            className={styles.commentInput}
                            type="text" 
                            placeholder="Add a comment" 
                            value={newComment} 
                            onChange={handleInputChange} 
                        />
                        <div onClick={handleSubmitComment} className={styles.submitButton}>
                            <Image src="/icons/submit.svg" alt="Send Icon" width={30} height={30} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FaqCard;
