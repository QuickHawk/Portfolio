export const siteConfig = {
  name: "Aarya Devarla",
  title: "Software Engineer",
  description: "Portfolio website of Aarya Devarla",
  accentColor: "#d81d1d",
  social: {
    email: "devarlaaarya@gmail.com",
    linkedin: "https://linkedin.com/in/aarya-devarla",
    // twitter: "https://x.com/rfitzio",
    github: "https://github.com/QuickHawk",
  },
  aboutMe:
    "M.Tech CSE graduate from NIT Nagpur with hands-on experience in full stack development and a strong foundation in deep learning and AI. I build scalable web applications and explore intelligent systems through neural networks and data-driven solutions. Always experimenting, always building.",
  skills: ["Java", "Javascript", "React", "Node.js", "Python", "Git", "Machine Learning", "Computer Vision"],
  projects: [
    {
      name: "Scene Text Detection for Indic Texts",
      description:
        "A robust detection model using Vision Transformers to detect the location of Indic texts in a natural scenic image.",
      link: "https://github.com/QuickHawk/Indic-Text-Detection",
      hf_link: "https://huggingface.co/QuickHawk/indic-text-detection",
      skills: ["Python", "Torch", "Transformers"],
    },
    {
      name: "Indic-TrOCR",
      description:
        "A recognition model used with Vision Transformer and Language Model to predict the language and text (in devnagiri) from the cropped image.",
      link: "https://github.com/QuickHawk/TrOCR-Indic", 
      hf_link: "https://huggingface.co/QuickHawk/trocr-indic",
      skills: ["Python", "Torch", "Transformers", "Language Models"],
    },
    {
      name: "Nakshatra & Tithi Clock",
      description:
        "Simple clock which calculates the current Nakshatra and Tithi value from Sun and Moon positions and adjusts the clock's hand to point at it",
      // link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["Python", "Swisseph", "Arduino", "RaspberryPi", "Embedded C"],
    },
  ],
  experience: [
    {
      company: "Zemoso Technologies",
      title: "Software Engineer I",
      dateRange: "Sept 2021 - Feb 2023",
      bullets: [
        "Built multiple APIs under tight deadlines, enabling early releases.",
        "Migrated a backend microservice from Java to Nodejs, to standardize the tech stack within the project",
        "Created a library of commonly used React Components reducing the code duplication by 40%",
        "Mentored team of 6 junior developers",
      ],
    },
    // {
    //   company: "Zemoso Technologies",
    //   title: "Intern",
    //   dateRange: "Jun 2021 - Sept 2021",
    //   bullets: [
    //     "Built and launched MVP product from scratch using React and Node.js",
    //     "Implemented CI/CD pipeline reducing deployment time by 60%",
    //     "Collaborated with product team to define technical requirements",
    //   ],
    // }
  ],
  education: [
    {
      school: "Visvesvaraya National Institute of Technology, Nagpur",
      degree: "Master of Technology in Computer Science",
      dateRange: "2023 - 2025",
      achievements: [
        // "Graduated with 9 GPA",
        // "Dean's List all semesters",
        // "President of Computer Science Club",
        "Specialized in Deep Learning"
      ],
    },
    {
      school: "Keshav Memorial Institute of Technology, Hyderbad",
      degree: "Bachelor of Technology in Computer Science Engineering",
      dateRange: "2017 - 2021",
      achievements: [
        // "Completed 500+ hours of coursework",
        // "Built 10+ portfolio projects",
        "Specialized in Java & Machine Learning",
      ],
    },
  ],
};
