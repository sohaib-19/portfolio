/* Change this file to get your personal Portfolio */

import HTML from '../Assets/Images/Mask Group 22.png';
import ReactIcon from '../Assets/Images/react.svg';
import CSSIcon from '../Assets/Images/css-3.svg';
import GithubIcon from '../Assets/Images/github.svg';
import JavascriptIcon from '../Assets/Images/javascript.svg';
import FirebaseIcon from '../Assets/Images/firebase.svg';

import IULogo from '../Assets/Images/IU.png';
import NCR from '../Assets/Images/NCR-CET_Logo.jpg'
import School from '../Assets/Images/school.jpg';
import Freelancing from '../Assets/Images/freelancing.svg';
import TechNest from '../Assets/Images/logo-white.jpg';
import Project1 from '../Assets/Project Images/Project1.png';

const customColorTheme = {
    primaryColor: "#ffff00",
    secondaryColor: '#646464',
    defaultColor: '#ffffff',
    backgroundColor: "#171717"
};

// Your Info
const about = {
    developerName: "Syed Sohaib Ahmed",
    aboutText: "A passionate Software Developer having an experience of building Web and Mobile applications with JavaScript / Reactjs / Material-UI and some other cool libraries and frameworks.",
    resumeLink: "https://drive.google.com/file/d/1l2M26CSgU5Wew6K-LWZulxCxXdiIkOib/view?usp=sharing"
};

const skillSet = [
    {
        skill: "ReactJS",
        icon: ReactIcon,
    },
    {
        skill: "Firebase",
        icon: FirebaseIcon
    },
    {
        skill: "Github",
        icon: GithubIcon,
    },
    {
        skill: "HTML",
        icon: HTML,
    },
    {
        skill: "CSS3",
        icon: CSSIcon,
    },
    {
        skill: "Javascript",
        icon: JavascriptIcon,
    },
];

// Your Education
const education = [
    {
        img: IULogo,
        institute: "Iqra University",
        duration: "October 2018 - Till Date",
        degree: "Bachelor Of Science In Computer Science",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        img: NCR,
        institute: "NCR-CET College",
        degree: "Computer Science",
        duration: "2016 - 2018",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        img: School,
        institute: "Karachi Montessori High School",
        degree: "Matriculation",
        duration: "2006 - 2016",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqJbygFbHKsmbRig9tI1e1gNM5RI1qspw1gw&usqp=CAU',
        institute: "University of Karachi",
        degree: "Bachelor Of Science In Computer Science",
        duration: "January 2017 - January 2021",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
];

//Your Experience
const experience = [
    {
        img: Freelancing,
        experienceName: "FREELANCING",
        experienceOccup: "FRONT-END DEVELOPER",
        experienceDate: "JUNE 2020 - Present",
        experienceDetails: `
        Creating rich proefssional web applications
        Created various Portfolio websites
        CRM Development`,
    },
    {
        img: TechNest,
        experienceName: "TechNest",
        experienceOccup: "SOFTWARE ENGINEER",
        experienceDate: "JUNE 2021 - Till Date",
        experienceDetails: `
        Designs and creates professional web applications
        Checks feasibility of software prototypes
        Modifies code to fix errors`,
    },
];


//Your Proficiency in your relative skills
const proficiency = [
    {
        name: "ReactJS",
        level: 95,
    },
    {
        name: "Firebase",
        level: 70,
    },
    {
        name: "Github",
        level: 80,
    },
    {
        name: "HTML",
        level: 95,
    },
    {
        name: "CSS3",
        level: 90,
    },
    {
        name: "Javascript",
        level: 80,
    },
];

//Your Projects
const projects = [
    {
        img: Project1,
        workName: "Giverpays",
        link: "https://giverpays.com/"
    },
    {
        img: Project1,
        workName: "Yout Event Organizer",
        link: "https://youtheventorganizer.com/"
    },
    {
        img: Project1,
        workName: "LIS for PCMD - ICCBS",
        link: "https://pcmd-lab.herokuapp.com/"
    },
    {
        img: Project1,
        workName: "Shaheer Enterprises",
        link: "https://shaheerenterprises.com/"
    },
    {
        img: Project1,
        workName: "Hazir Sain",
        link: "https://hazirsain.com/"
    },
];

// Your Social Media Link
const socialMediaLinks = {
    github: "https://github.com/sohaib-19",
    linkedin: "https://www.linkedin.com/in/syed-sohaib-ahmed-819ab317b/",
    gmail: "syedsohaibahmed4@gmail.com",
    facebook: "https://www.facebook.com/sohaib.ahmed.90226/"
    // Instagram and Twitter are also supported in the links!
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
    // githubConvertedToken: atob(process.env.REACT_APP_GITHUB_TOKEN),
    githubUserName: "sohaib-19", // Change to your github username to view your profile in Contact Section.
    showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false 
};

const contactInfo = {
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+923340285115",
    email: "syedsohaibahmed4@gmail.com"
};

export {
    customColorTheme,
    about,
    skillSet,
    education,
    experience,
    proficiency,
    projects,
    socialMediaLinks,
    openSource,
    contactInfo
};