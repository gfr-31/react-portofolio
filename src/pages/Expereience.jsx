import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaHtml5 } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiPhp } from "react-icons/si";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function Expereience() {
    return (
        <>
            <Navbar />
            <div className='wrapper'>
                <h1>Experience</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010 - present"
                        iconStyle={{ background: '#222831', color: '#fff' }}
                        icon={<FaJava />}
                    >
                        <h3 className="vertical-timeline-element-title">Lorem, ipsum.</h3>
                        <h4 className="vertical-timeline-element-subtitle">Lorem, ipsum dolor.</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010 - present"
                        iconStyle={{ background: '#222831', color: '#fff' }}
                        icon={<FaHtml5 />}
                    >
                        <h3 className="vertical-timeline-element-title">Lorem, ipsum.</h3>
                        <h4 className="vertical-timeline-element-subtitle">Lorem, ipsum dolor.</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010 - present"
                        iconStyle={{ background: '#222831', color: '#fff' }}
                        icon={<SiPhp />}
                    >
                        <h3 className="vertical-timeline-element-title">Lorem, ipsum.</h3>
                        <h4 className="vertical-timeline-element-subtitle">Lorem, ipsum dolor.</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010 - present"
                        iconStyle={{ background: '#222831', color: '#fff' }}
                        icon={<FaLaravel />}
                    >
                        <h3 className="vertical-timeline-element-title">Lorem, ipsum.</h3>
                        <h4 className="vertical-timeline-element-subtitle">Lorem, ipsum dolor.</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010 - present"
                        iconStyle={{ background: '#222831', color: '#fff' }}
                        icon={<FaReact />}
                    >
                        <h3 className="vertical-timeline-element-title">Lorem, ipsum.</h3>
                        <h4 className="vertical-timeline-element-subtitle">Lorem, ipsum dolor.</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default Expereience
