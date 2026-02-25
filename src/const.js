export const defaultResume = {
  personal: {
    firstName: "Jake",
    lastName: "Ryan",
    email: "jake@su.edu",
    phone: "123-456-7890",
    linkedin: "linkedin.com/in/jake",
    github: "github.com/jake",
  },

  education: [
    {
      id: crypto.randomUUID(),
      school: "Southwestern University",
      degree: "Bachelor of Arts in Computer Science",
      start: "Aug 2018",
      end: "May 2021",
      location: "Georgetown, TX",
    },
    {
      id: crypto.randomUUID(),
      school: "Blinn College",
      degree: "Associate’s in Liberal Arts",
      start: "Aug 2014",
      end: "May 2018",
      location: "Bryan, TX",
    },
  ],

  experience: [
    {
      id: crypto.randomUUID(),
      company: "Texas A&M University",
      role: "Undergraduate Research Assistant",
      start: "June 2020",
      end: "Present",
      location: "College Station, TX",
      description: [
        "Developed a REST API using FastAPI and PostgreSQL.",
        "Built a full-stack web app with Flask, React, PostgreSQL, and Docker to analyze GitHub data.",
        "Explored visualization of GitHub collaboration in classroom settings.",
      ],
    },
    {
      id: crypto.randomUUID(),
      company: "Southwestern University",
      role: "Information Technology Support Specialist",
      start: "Sep 2018",
      end: "Present",
      location: "Georgetown, TX",
      description: [
        "Set up and maintained campus computers.",
        "Troubleshot technical issues for students, faculty, and staff.",
        "Maintained classroom equipment and 200+ printers across campus.",
      ],
    },
    {
      id: crypto.randomUUID(),
      company: "Southwestern University",
      role: "Artificial Intelligence Research Assistant",
      start: "May 2019",
      end: "July 2019",
      location: "Georgetown, TX",
      description: [
        "Generated video game dungeons inspired by The Legend of Zelda. Built a Java game to test generation methods.",
        "Contributed 50K+ lines of code via Git.",
        "Conducted a human subject study and presented findings at the World Conference on Computational Intelligence.",
      ],
    },
  ],

  projects: [
    {
      id: crypto.randomUUID(),
      name: "Gitlytics",
      description: [
        "Full-stack web application built with Flask, React, PostgreSQL, and Docker.",
        "Implemented GitHub OAuth, data visualization for collaboration insights, and asynchronous tasks with Celery and Redis.",
      ],
      tech: ["Python", "Flask", "React", "PostgreSQL", "Docker"],
      start: "June 2020",
      end: "Present",
    },
    {
      id: crypto.randomUUID(),
      name: "Simple Paintball",
      description: [
        "Minecraft server plugin built with Spigot API and Java.",
        "Published with 2K+ downloads and 4/5 rating.",
        "Implemented CI/CD with TravisCI and collaborated with server admins for feature feedback.",
      ],
      tech: ["Java", "Spigot API", "Maven", "TravisCI", "Git"],
      start: "May 2018",
      end: "May 2020",
    },
  ],

  skills: {
    languages: [
      "Java",
      "Python",
      "C/C++",
      "SQL (Postgres)",
      "JavaScript",
      "HTML/CSS",
      "R",
    ],
    frameworks: [
      "React",
      "Node.js",
      "Flask",
      "JUnit",
      "WordPress",
      "Material-UI",
      "FastAPI",
      "pandas",
      "NumPy",
      "Matplotlib",
    ],
    tools: [
      "Git",
      "Docker",
      "TravisCI",
      "Google Cloud Platform",
      "VS Code",
      "Visual Studio",
      "PyCharm",
      "IntelliJ",
      "Eclipse",
    ],
  },
};

export const defaultEdu = {
  id: crypto.randomUUID(),
  school: "",
  degree: "",
  start: "",
  end: "",
  location: "",
};

export const defaultWork = {
  id: crypto.randomUUID(),
  company: "",
  role: "",
  start: "",
  end: "",
  location: "",
  description: [],
};

export const defaultProjects = {
  id: crypto.randomUUID(),
  name: "",
  description: [],
  tech: [],
  start: "",
  end: "",
};
