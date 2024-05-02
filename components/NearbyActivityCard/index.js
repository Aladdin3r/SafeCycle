// import React from 'react';
// import styles from './NearbyActivityCard.module.css'; 
// import Image from 'next/image';

// const NearbyActivityCard = ({ title, imageUrl, description, distance, location, likeCount, commentCount, username }) => {
//     return (
//         <div className={styles.cardContainer}>
//             <div className={styles.information}>
//                 <div className={styles.cardContent}>
//                     <h2 className={styles.cardTitle}>{title}</h2>
//                     <h4 clasName={styles.cardDistance}>{distance}</h4>
//                     <h3 className={styles.cardLocation}>{location}</h3>
//                     <p className={styles.cardDescription}>{description}</p>
//                 </div>
//                 <div className={styles.extraDetails}>
//                         <img src={imageUrl} alt={title} className={styles.cardImage} />
//                         <h9>Tap to see on map</h9>
//                 </div>
//             </div>
//             <div className={styles.likesAndComments}>
//                 <div className={styles.likes}>
//                     <Image src="/icons/like.svg" alt="Like Icon" width={20} height={20} />
//                     <h8>{likeCount}</h8>
//                 </div>
//                 <div className={styles.comments}>
//                     <Image src="/icons/comment.svg" alt="Comment Icon" width={20} height={20} />
//                     <h8>{commentCount}</h8>
//                 </div>
//                 <div className={styles.postedBy}>
//                     <Image />
//                     <h8>Posted by {username}</h8>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NearbyActivityCard;

import React, { useState } from 'react';
import styles from './NearbyActivityCard.module.css'; 
import Image from 'next/image';

const NearbyActivityCard = ({ title, imageUrl, description, distance, location, likeCount, commentCount }) => {
    const [showComments, setShowComments] = useState(false);

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    return (
        <div className={styles.cardContainer}>
            <div className={styles.information}>
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>{title}</h2>
                    <h4 className={styles.cardDistance}>{distance}</h4>
                    <h3 className={styles.cardLocation}>{location}</h3>
                    <p className={styles.cardDescription}>{description}</p>
                </div>
                <div className={styles.hazardIcon} onClick={toggleComments}>
                    <img src={imageUrl} alt={title} className={styles.cardImage} />
                </div>
            </div>
            <div className={styles.likesAndComments}>
                <div className={styles.likes}>
                    <Image src="/icons/like.svg" alt="Like Icon" width={20} height={20} />
                    <h8>{likeCount}</h8>
                </div>
                <div className={styles.comments} onClick={toggleComments}>
                    <Image src="/icons/comment.svg" alt="Comment Icon" width={20} height={20} />
                    <h8>{commentCount}</h8>
                </div>
            </div>
            {showComments && (
                <div className={styles.commentsContainer}>
                    <p className={styles.commentText}>Great post!</p>
                    <p className={styles.commentAuthor}>- User123</p>
                </div>
            )}
        </div>
    );
};

export default NearbyActivityCard;

