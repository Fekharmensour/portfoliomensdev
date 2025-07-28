import React, { useState, useEffect, useRef } from "react";
import { comments } from "../Data/Comments";
const Comments = () => {
    const scrollRef = useRef(null);
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let scrollSpeed = 1; // Adjust scroll speed
        let animationFrame;

        const scroll = () => {
            if (scrollContainer) {
                scrollContainer.scrollLeft += scrollSpeed;
                // Reset scroll to create infinite loop
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                }
                animationFrame = requestAnimationFrame(scroll);
            }
        };

        animationFrame = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrame);
    }, []);
    const duplicatedComments = [...comments, ...comments, ...comments];
    return (
        <>
            <div className="comments" >
                <div className="container mt-5">
                    <div className="title mb-3">Customer Reviews</div>
                    <div className="text">
                        Here are some of the reviews from my customers about my work.
                    </div>
                    <div className="comment-section">
                        <div
                            ref={scrollRef}
                            className="comments-scroll-container"
                        >
                            {duplicatedComments.map((comment, index) => (
                                <div
                                    key={index}
                                    className="comment-box"
                                >
                                    <div className="comment-header">
                                        <div className="avatar">
                                            {comment.username ? comment.username.charAt(0).toUpperCase() : '?'}
                                        </div>
                                        <span className="username ">{comment.username || 'Anonymous'}</span>
                                    </div>

                                    <p className="comment-text">{comment.text}</p>
                                    <div className="stars-container mt-4 text-center">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={i < comment.stars ? 'star-filled' : 'star-empty'}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.31 9.397c-.784-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.97z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comments