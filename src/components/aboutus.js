import { React, useState, useRef } from 'react'
import Headingwithborder from './headingwithborder'
import './aboutus.css'
import vid from '../assets/video.mp4'
import videoimage from '../assets/videoimage.png'
export default function Aboutus() {

    const [videoshow, setvideoshow] = useState(false);
    const videoref = useRef(null);
    const handlevideo = () => {
        setvideoshow(true);
        const videoElement = videoref.current;
        videoElement.play();
    }
    const handlevideoclose = () => {
        setvideoshow(false);
        const videoElement = videoref.current;
        videoElement.pause();
        videoElement.currentTime = 0;
    }

    return (
        <>
            <div id={videoshow ? 'videootherarea' : 'videonoarea'} onClick={handlevideoclose}></div>
            <div className='aboutcontainer'>

                <div className='aboutvision'>
                    <div className='videoimage'>
                        <img id='aboutfirstimage' onClick={handlevideo} src={videoimage}></img>
                        <span id='secondimage'>  <img src={videoimage}></img></span>
                        <div className="play-button" onClick={handlevideo}>
                            <span className="play-icon">▶</span>
                        </div>
                    </div>

                </div>
                <div className='aboutdetail'>
                    <div className='abouttitle'>
                        <span id="aboutname">About</span>Us
                    </div>
                    <div className='aboutparagraph'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nobis magni eaque velit eum, id rem eveniet dolor possimus voluptas..
                    </div>
                    <div className='watchvideo' onClick={handlevideo}>
                        WATCH VIDEO
                        <div className="videoarrow-button">
                            <div className="videoarrow-line"></div>
                            <div className="videoarrow-shape"></div>
                        </div>
                    </div>
                </div>
                <div id={videoshow ? 'videomovies' : 'videonoarea'}>
                    <div className="close-button" onClick={handlevideoclose}>
                        &times;

                    </div>

                    <video controls ref={videoref}>
                        <source src={vid} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </>
    )
}
