import React, { useState } from 'react';
import styles from './FaqCard.module.css'; 
import Image from 'next/image';

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
            <div className={styles.information}>

            </div>
            <div className={styles.likesAndComments}>
                <div className={styles.likes}>
                {text}
                </div>
                <div className={styles.text} onClick={toggleText}>
                    <p>yeah</p>
                </div>
            </div>
            {showComments && (
                <div className={styles.commentsContainer}>
                    {comments.map((comment, index) => (
                        <div key={index} className={styles.comment}>
                            <div className={styles.profileComment}>
                                <Image src={comment.profilePicture} width={30} height={30}/>
                                <p>{comment.username}</p>
                            </div>
                            <div className={styles.commentContent}>
                                <p>{comment.comment}</p>
                            </div>
                        </div>
                    ))}
                    {/* <div className={styles.commentInput}>
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
                    </div> */}
                </div>
            )}
        </div>
    );
};

export default FaqCard;
