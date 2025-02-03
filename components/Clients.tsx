import React from "react";

const skills = [
  { name: "Web Development", percentage: 100 },
  { name: "App Development", percentage: 80 },
  { name: "Marketing", percentage: 55 },
  { name: "Branding", percentage: 70 },
];

const MainSkills = () => {
  return (
    <div className="bg-transparent text-white py-12 px-6 text-center  mb-10">
      <h2 className="text-3xl font-bold">Main Skills</h2>
      <p className="text-gray-400 mt-2">
        By treating each project as our own, we cultivate a partnership built on
        trust and commitment, ensuring your vision becomes our shared mission.
      </p>

      <div className="flex justify-center gap-10 mt-10 flex-wrap">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-gray-700"
                  strokeWidth="6"
                  stroke="currentColor"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />
                <circle
                  className="text-green-500"
                  strokeWidth="6"
                  stroke="currentColor"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                  strokeDasharray="251.2"
                  strokeDashoffset={`${
                    251.2 - (251.2 * skill.percentage) / 100
                  }`}
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute text-xl font-bold">
                {skill.percentage}%
              </span>
            </div>
            <p className="font-bold mt-3 text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSkills;
