
import { SkillCategory, Experience, Education } from './types';

export const RESUME_URL = "https://github.com/AbeeshSengottuvel/Portfolio/blob/main/resume/Abeesh%20S.pdf"; // Placeholder - replace with your actual hosted PDF link



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
      { name: "REST API" },
      { name: "TestNG" },
      { name: "Cucumber" },
      { name: "NUnit"}
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
  {
    title: "Development & Debugging Environment",
    icon: "psychology",
    skills: [
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Eclipse", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" }
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
      "Automated 70+ test cases across UI (Selenium) and API (REST API), reducing regression testing time by 30%.",
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
