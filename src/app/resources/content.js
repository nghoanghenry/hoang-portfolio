import { Logo } from "@/once-ui/components";


const person = {
  firstName: "Nguyễn",
  lastName: "Minh Hoàng",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Backend Fresher",
  avatar: "/images/avatar.jpg",
  email: "nghoang2404@gmail.com",
  location: "Asia/Ho_Chi_Minh", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Vietnamese", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/nghoanghenry",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nmhoang2404",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building the backbone of scalable systems through code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Vivid</strong></>,
    href: "https://github.com/nezuni1812/Vivid",
  },
  subline: (
    <>
      I'm Hoàng, a passionate young backend developer eager to learn and take on large-scale projects.
      I thrive in building robust systems and improving performance while continually expanding my skills.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      I'm Hoàng, a passionate young backend developer eager to learn and take on large-scale projects.
      I thrive in building robust systems and improving performance while continually expanding my skills.      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Project",
    experiences: [
      {
        company: "Vidid - AI Video Generator",
        linkurl: "https://github.com/nezuni1812/Vivid",
        timeframe: "Jan 2025 - May 2025",
        role: "Backend Developer",
        achievements: [
          <>
            Designed and implemented a MongoDB database using Flask and Python to create dynamic scripts based on user prompts. 
            Integrated Text-to-Speech (TTS) for generating audio and incorporated OCR for processing PDF and DOCX files, enabling rapid script generation.
          </>,
          <>
            Developed functionality to upload voice recordings, transcribing them into scripts using OpenAI Whisper. 
            Implemented AI-driven image and video assignment to script segments for a seamless multimedia experience.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/Vivid/Vivid1.png",
            alt: "Vivid",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/Vivid/Vivid2.png",
            alt: "Vivid",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Flow - Social Media",
        linkurl: "https://flow-social-media.onrender.com/",
        timeframe: "Oct 2024 - Dec 2024",
        role: "FullStack Developer",
        achievements: [
          <>
            Developed a social media platform with Express.js and REST APIs for efficient back-end data handling, integrating MongoDB and Cloudflare R2 for storage.
          </>,
          <>
            Implemented Infinite Scroll, Lazy Loading, and Pagination for dynamic post loading, optimizing user experience and performance.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/Flow/Flow1.png",
            alt: "Flow",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/Flow/Flow2.png",
            alt: "Flow",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "MateTalk - Chat Application",
        linkurl: "https://www.youtube.com/watch?v=uz2EGV1mfRw",
        timeframe: "Oct 2024 - Dec 2024",
        role: "FullStack Developer",
        achievements: [
          <>
            Developed a real-time chat application using Java Socket programming to enable communication between users.
            Designed the MySQL database structure to support real-time interactions and user management.
            Used Hibernate ORM for efficient object-relational mapping and database communication.
          </>,
          <>
            Integrated Jakarta Mail to support email-based features (e.g. password recovery).
            Applied Java Executors and Multithreading to handle multiple client connections concurrently.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Science - Vietnam National University",
        description: <>
          Major: Software Engineering
          <br />
          GPA: 9.13/10.0
          <br />
          Pursuing a Bachelor's degree in Computer Science, specializing in Software Engineering.
          </>,
      },
      {
        name: "Le Hong Phong High School for the Gifted",
        description: <>
        GPA: 9.2/10.0
        <br />
        First prize in the 2021 Ho Chi Minh city Science and Engineering Fair in Robotics and Intelligent Machines field.        </>,
     
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>JavaScript (Node.js) and Java (Spring Boot) for backend development.</>,
        images: [
          
        ],
      },
      {
        title: "Libraries/Frameworks",
        description: <>Express.js, Spring Boot, MongoDB, MySQL, REST APIs, and ORM frameworks like Hibernate and Mongoose.</>,
        images: [
          
        ],
      },
      {
        title: "Tools",
        description: <>Using Git for version control and Docker for containerization.</>,
        images: [
          
        ],
      },
    ],
  },
  
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
