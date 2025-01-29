import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import CTA  from "../components/CTA";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Artur
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Capable and reliable Software Engineer with a massive passion for building cool applications. There are three things that make me stand out from most other developers. 
          </p>

          <p> First of all, most people who go to work do not even want to be there and are just there to make money. I ACTUALLY care and want to improve on my skills every single day.</p>
          
          <p>Secondly, I have deep understanding of developing applications. Such people are needed to be able to solve problems others can not. Also I have solid understanding of system design, particularly when it comes to writing highly intensive applications with impressive traffic and would gladly make one myself if you let me ).</p>

          <p>Finally, i have a wide range of abilities from full-stack development to DevOps and system design, which is very useful. Enjoy the rest of my portfolio!</p>

       
        
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

     

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;