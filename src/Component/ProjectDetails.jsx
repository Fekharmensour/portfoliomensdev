
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../Data/Projects";
import Appbar from "./Appbar";
import Footer from "./Footer";
import Appbarsec from "./Appbarsec";

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);
    const [mainImage, setMainImage] = useState(project?.image || "");




    if (!project) return <div className="container mt-5">Project not found.</div>;

    // Duplicate comments for infinite scroll effect

    return (
        <div className="details">
            <Appbarsec />
            <div className="container details">
                <div className="vide"></div>
                <div className="row">
                    {/* Left Side: Images */}
                    <div className="col-md-6">
                        <img src={mainImage} alt="Main" className="img-fluid rounded mb-3 border" />
                        <div className="d-flex gap-2 flex-wrap">
                            {project.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`thumb-${index}`}
                                    width={120}
                                    onClick={() => setMainImage(img)}
                                    className={`img-thumbnail mt-2 ${mainImage === img ? "active border border-2 border-gold " : ""}`}
                                    style={{ cursor: "pointer" }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Info */}
                    <div className="col-md-6 mt-3">
                        <h2 className="title">{project.title}</h2>
                        <p className="date mb-4 text-white-50">{project.date}</p>
                        <p className="desc">{project.description}</p>
                    </div>
                </div>

                <div className="comments-section mt-5">
                    <div className="title mb-3 comment-box">
                        <div className="comment-header">
                            <div className="avatar">
                                {project.comment.username ? project.comment.username.charAt(0).toUpperCase() : '?'}
                            </div>
                            <span className="username">{project.comment.username || 'Anonymous'}</span>
                        </div>
                        <div className="comment-text mb-4">
                            {project.comment.text || "No reviews available."}
                        </div>
                        <div className="stars-container mt-4 text-center">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className={i < project.comment.stars ? 'star-filled' : 'star-empty'}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.31 9.397c-.784-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.97z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    );
};

export default ProjectDetails;
