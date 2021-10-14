import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <div id='experience' className='experience'>
            <div className="d-flex justify-content-center my-5">
                <h1>soft skills</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker">

                    </div>
                    <div className="timeline-content">
                        <h3>TeamWork</h3>
                        <p>As a life-long bowler I know just how much success a strong team can be. In the office a team should share the work load, offers to help struggling teammates, and includes all members.</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker">

                    </div>
                    <div className="timeline-content">
                        <h3>Communication</h3>
                        <p>I find it very important to have open communication with your team. When people feel they need to hide their thoughts and concerns it tends to weak camaraderie and slow growth.</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-right">
                    <div className="marker">

                    </div>
                    <div className="timeline-content">
                        <h3>Approachable</h3>
                        <p>I'm a "friendly face in the office" kind of person. If I'm having a rough day I do not show it nor take it out on others. I'm someone that people they can come talk to no matter the time or place.</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker">

                    </div>
                    <div className="timeline-content">
                        <h3>Humility</h3>
                        <p>I know there is so much that I don't know and I'm willing to take advice and hear suggestions. I'm not afraid to admit when I'm wrong and to admit when others are right.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
