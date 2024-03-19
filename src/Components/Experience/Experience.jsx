
import React from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "../../style.css"

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa6";

const Experience = () => {
  return (
    <div className="experience" >
      <div className="">
        {/* <div className="p-5 mt-5">

        </div> */}
        <VerticalTimeline VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(102,165,173,0.582)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgba(102,165,173,0.982)' }}
            date="Jun 2023 - present"
            iconStyle={{ background: 'rgba(102,165,173,0.982)', color: '#fff' }}
            icon={<FaLaptopCode />}>
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h6 className="vertical-timeline-element-subtitle pt-1">Automaton Ai Infosystem</h6>
            <p>
              <ul>
                <li>Collaborate with the development team to design, develop, and main-
                  tain the application and implement innovative features that enhance the
                  UI/UX experience.</li>
                <li>Developed secure, modular and robust web applications using Angular,
                  TypeScript, Python Flask Api and React Js.</li>
                <li>Work closely with the data science and AI/ML teams to seamlessly inte-
                  grate AI/ML capabilities into the application</li>
                <h6 className="pt-2"> <b> KEY ACHIEVEMENTS </b></h6>
                <li>Successfully implemented a secure license authentication system, en-
                  hancing the platform’s security.</li>
                <li>Development and implementation of a real-time user-wise data analysis
                  and visualization system resulting in a 35% increase in decision-making
                  eﬃciency and a 40% improvement in user performance tracking.</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2023"
            dateStyle={{ color: "#fff" }}
            iconStyle={{ background: 'rgb(76, 120, 23)', color: '#fff' }}
            icon={<FaGraduationCap />}>
            <h3 className="vertical-timeline-element-title">College of Engineering Pune [COEP]</h3>
            <h4 className="vertical-timeline-element-subtitle">Pune, IND</h4>
            <p>
              CGPA : 7.16
            </p>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaGraduationCap />}>
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience
