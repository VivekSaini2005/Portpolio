import React from "react";
import Tilt from "react-parallax-tilt";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>

        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My academic journey and the institutions that shaped my technical
          foundation.
        </p>
      </div>

      {/* Horizontal Scroll */}
      <div className="relative">
        <div
          className="
            flex
            gap-8
            overflow-x-auto
            scroll-smooth
            snap-x
            snap-mandatory
            pb-6
            px-2
            scrollbar-thin
            scrollbar-thumb-[#8245ec]
            scrollbar-track-transparent
          "
        >
          {education.map((edu) => (
            <Tilt
              key={edu.id}
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
                  <div className="bg-white rounded-xl p-3 flex items-center justify-center w-16 h-16">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className={`${edu.imgClass} object-contain`}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">
                      {edu.degree}
                    </h3>

                    <p className="text-gray-300">
                      {edu.school}
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      {edu.date}
                    </p>
                  </div>
                </div>

                {/* Grade */}
                <div className="mt-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#8245ec]/20 border border-[#8245ec] text-[#d9c6ff] text-sm font-medium">
                    Grade: {edu.grade}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-5 text-gray-400 leading-7">
                  {edu.desc}
                </p>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;