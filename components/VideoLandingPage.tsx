import React, { useState } from 'react';

interface VideoLandingPageProps {
    onVideoEnd: () => void;
}

const VideoLandingPage: React.FC<VideoLandingPageProps> = ({ onVideoEnd }) => {
    const videoSrc = "https://raw.githubusercontent.com/bencreizy/JJ_icons_videos/main/Project_10-21(3)_HD%20720p_HIGH_FR50.mp4";
    const [videoLoaded, setVideoLoaded] = useState(false);

    const handleCanPlayThrough = () => {
        setVideoLoaded(true);
    };

    return (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden">
            {/* Removed the "Loading video..." text to ensure a cleaner transition as requested. */}
            <video
                src={videoSrc}
                autoPlay
                muted
                playsInline
                onEnded={onVideoEnd}
                onCanPlayThrough={handleCanPlayThrough}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                aria-label="Introduction video for J & J's Automotive-Truck Repair"
                role="presentation"
            >
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoLandingPage;