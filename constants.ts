
import { SkillCategory, Experience, Education } from './types';

export const RESUME_URL = "https://github.com/AbeeshSengottuvel/Portfolio/blob/main/resume/Abeesh%20S.pdf"; // Placeholder - replace with your actual hosted PDF link



export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" }
    ]
  },
  {
    title: "Automation & API Testing",
    icon: "build",
    skills: [
      { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
      { name: "Postman" },
      { name: "REST API" },
      { name: "SOAP API" },
      { name: "NUnit" }
    ]
  },
  {
    title: "Tools & DevOps",
    icon: "database",
    skills: [
      { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "QTest" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" }
    ]
  },
  {
    title: "Development Environment",
    icon: "psychology",
    skills: [
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Eclipse", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" }
    ]
  },
  {
    title: "Soft Skills",
    icon: "groups",
    skills: [
      { name: "Manual Testing" },
      { name: "Agile Sprints" },
      { name: "Regression Testing" },
      { name: "Project Management" },
      { name: "Team Player" }
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
