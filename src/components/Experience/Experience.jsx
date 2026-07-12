import React from "react";
import { experiences } from "../../constants"; // Import your data

import Tilt from "react-parallax-tilt";


const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations.
        </p>
      </div>

      {/* Horizontal Experience Cards */}
      {/* Horizontal Scroll */}
<div className="relative">
  <div
    className="
      flex
      gap-8
      overflow-x-auto
      overflow-y-visible
      scroll-smooth
      snap-x
      snap-mandatory
      py-4
      pb-6
      px-2
    "
  >
    {experiences.map((experience) => (
      <Tilt
        key={experience.id}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        scale={1.02}
        transitionSpeed={800}
        className="snap-center shrink-0"
      >
        <div
          className="
            w-[360px]
            sm:w-[420px]
            h-full
            bg-gray-900
            border
            border-gray-700
            rounded-2xl
            p-6
            shadow-[0_0_20px_rgba(130,69,236,0.25)]
            hover:border-[#8245ec]
            transition-all
            duration-300
          "
        >
          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                {experience.role}
              </h3>

              <p className="text-gray-300">
                {experience.company}
              </p>

              <p className="text-sm text-gray-500">
                {experience.date}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-5 text-gray-400 leading-7">
            {experience.desc}
          </p>

          {/* Skills */}
          <div className="mt-6">
            <h4 className="text-white font-semibold mb-3">
              Technologies
            </h4>

            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-[#8245ec]/20
                    border
                    border-[#8245ec]
                    text-[#d9c6ff]
                    text-sm
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    ))}
  </div>
</div>
    </section>
  );
};

export default Experience;