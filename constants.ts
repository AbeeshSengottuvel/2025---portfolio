
import { SkillCategory, Experience, Education } from './types';


export const RESUME_URL = "https://raw.githubusercontent.com/AbeeshSengottuvel/2025---portfolio/main/Asset/Abeesh%20S.pdf?raw=true"; // Placeholder - replace with your actual hosted PDF link

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/abeesh-s-b35271228/",
  github: "https://github.com/AbeeshSengottuvel",
  instagram: "https://www.instagram.com/abeesh.2002/#",
  email: "mailto:abeeshsengottuvel12@gmail.com",
  phone: "tel:+919047722626"
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming & Test Development Languages",
    icon: "code",
    skills: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" }
    ]
  },
  {
    title: "Test Automation & API Engineering",
    icon: "build",
    skills: [
      { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "RestSharp", icon: "https://restsharp.dev/img/restsharp.png" },
      { name: "TestNG", icon: "https://i.pinimg.com/736x/b1/c5/07/b1c50720d7c59caff5660adbe3e0f9a9.jpg" },
      { name: "Cucumber", icon: "https://icon.icepanel.io/Technology/svg/Cucumber.svg" },
      { name: "NUnit", icon: "https://nunit.org/img/nunit.svg" }
    ]
  },
  {
    title: "Test Infrastructure & CI/CD Tooling",
    icon: "database",
    skills: [
      
     { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "QTest",icon:"https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/qtest/qtest-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
       { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" }
    ]
  },
  {title: "AI-Assisted Test Automation",
    icon: "brain",
    skills: [
      { name: "Windsurf", icon: "https://yt3.googleusercontent.com/6kLNxjLW3OREYdL7Y_sAzCuolXAmQkjJZVTCAch3Q_-hGZ2049wD2PSTFTfi9M8Iqh0PpxgChjU=s160-c-k-c0x00ffffff-no-rj" }
    ],
  },
  {
    title: "Development & Debugging Environment",
    icon: "psychology",
    skills: [
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Eclipse", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" },
       { name: "GitHub", icon: "https://cdn-icons-png.flaticon.com/256/25/25231.png" }
    ]
  },
  {
    title: "Quality Engineering & Delivery Practices",
    icon: "groups",
    skills: [
      { name: "Test Case Design & Execution" },
      { name: "Agile Collaboration" },
      { name: "Sprint-Based QA Delivery" },
      { name: "Defect Analysis & Reporting" },
      { name: "Cross-Functional Teamwork" }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Quality Assurance (QA) Engineer",
    company: "Cognizant (Client: Humana Inc.)",
    period: "September 2024 – Present",
    active: true,
    points: [
      "Automated 110+ test cases across UI (Selenium) and API (REST API), reducing regression testing time by 40%.",
      "Developed and maintained automation scripts in C# with NUnit, improving framework stability and code reusability.",
      "Performed functional, regression, and integration testing within Agile sprint cycles to ensure product reliability.",
      "Partnered with cross-functional teams to identify and resolve issues early, cutting defect leakage by 15%.",
      "Leveraged QTest for test management and Git for version control; utilized VS Code for debugging and automation development."
    ]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    degree: "Bachelor of Engineering in Electronics and Communication Engineering",
    institution: "Sri Ramakrishna Engineering College, Coimbatore",
    year: "Graduated: 2023 | CGPA: 7.56",
    icon: "school"
  }
];
