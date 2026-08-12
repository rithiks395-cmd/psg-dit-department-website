export const schemesData = {
  activeScheme: "2024 Scheme",
  schemes: [
    {
      schemeYear: "2024 Scheme",
      semesters: [
        {
          id: "s1",
          number: 1,
          title: "Semester 1",
          description: "Foundational sciences, core C programming logic, and essential engineering communication skills.",
          theory: [
            { id: "s1-phy", code: "24IT11", name: "PHYSICS", type: "Theory", category: "Basic Science" },
            { id: "s1-chem", code: "24IT12", name: "CHEMISTRY", type: "Theory", category: "Basic Science" },
            { id: "s1-math", code: "24IT13", name: "BASIC MATHEMATICS", type: "Theory", category: "Mathematics" },
            { id: "s1-cprog", code: "24IT14", name: "PROBLEM SOLVING AND C PROGRAMMING", type: "Theory", category: "Core Information Technology" }
          ],
          practicum: [
            { id: "s1-eng", code: "24IT15P", name: "APPLIED ENGLISH", type: "Practicum", category: "Humanities" }
          ],
          practicals: [
            { id: "s1-phylab", code: "24IT16L", name: "PHYSICS LABORATORY", type: "Practical", category: "Basic Science" },
            { id: "s1-chemlab", code: "24IT17L", name: "CHEMISTRY LABORATORY", type: "Practical", category: "Basic Science" },
            { id: "s1-clab", code: "24IT18L", name: "PROBLEM SOLVING AND C PROGRAMMING LABORATORY", type: "Practical", category: "Core Information Technology" }
          ],
          audit: [
            { id: "s1-ile1", code: "24IT19A", name: "INTEGRATED LEARNING EXPERIENCE-I", type: "Audit", category: "Skill Enhancement" }
          ]
        },
        {
          id: "s2",
          number: 2,
          title: "Semester 2",
          description: "Calculus, electronic materials chemistry, engineering graphics, and Python application development.",
          theory: [
            { id: "s2-calc", code: "24IT21", name: "CALCULUS AND ITS APPLICATIONS", type: "Theory", category: "Mathematics" },
            { id: "s2-apphy", code: "24IT22", name: "APPLIED PHYSICS", type: "Theory", category: "Basic Science" },
            { id: "s2-chemmat", code: "24IT23", name: "CHEMISTRY OF ELECTRONIC MATERIALS", type: "Theory", category: "Basic Science" },
            { id: "s2-techmath", code: "24IT24", name: "TECHNICAL MATHEMATICS", type: "Theory", category: "Mathematics" }
          ],
          practicum: [
            { id: "s2-python", code: "24IT25P", name: "APPLICATION BASED PROGRAMMING IN PYTHON", type: "Practicum", category: "Core Information Technology" }
          ],
          practicals: [
            { id: "s2-apphylab", code: "24IT26L", name: "APPLIED PHYSICS LABORATORY", type: "Practical", category: "Basic Science" },
            { id: "s2-engchemlab", code: "24IT27L", name: "ENGINEERING CHEMISTRY LABORATORY", type: "Practical", category: "Basic Science" },
            { id: "s2-graphics", code: "24IT28L", name: "COMPUTER AIDED ENGINEERING GRAPHICS", type: "Practical", category: "Engineering Science" }
          ],
          audit: [
            { id: "s2-ile2", code: "24IT29A", name: "INTEGRATED LEARNING EXPERIENCE-II", type: "Audit", category: "Skill Enhancement" }
          ]
        },
        {
          id: "s3",
          number: 3,
          title: "Semester 3",
          description: "Data structures, relational database management, digital logic circuits, and mobile/laptop troubleshooting.",
          theory: [
            { id: "s3-stat", code: "24IT31", name: "STATISTICS AND PROBABILITY MODELS", type: "Theory", category: "Mathematics" },
            { id: "s3-ds", code: "24IT32", name: "DATA STRUCTURES AND ITS ALGORITHMS", type: "Theory", category: "Core Information Technology" },
            { id: "s3-dbms", code: "24IT33", name: "PRINCIPLES OF DATABASES", type: "Theory", category: "Core Information Technology" },
            { id: "s3-dlc", code: "24IT34", name: "DIGITAL LOGIC CIRCUIT DESIGN", type: "Theory", category: "Hardware & Logic" }
          ],
          practicum: [
            { id: "s3-webtech", code: "24IT35P", name: "ADVANCED INTERNET TECHNOLOGIES LABORATORY", type: "Practicum", category: "Web Development" }
          ],
          practicals: [
            { id: "s3-dslab", code: "24IT36L", name: "DATA STRUCTURES AND ITS ALGORITHM LABORATORY", type: "Practical", category: "Core Information Technology" },
            { id: "s3-dbmslab", code: "24IT37L", name: "DBMS LABORATORY", type: "Practical", category: "Core Information Technology" },
            { id: "s3-dlclab", code: "24IT38L", name: "DIGITAL LOGIC CIRCUIT DESIGN LABORATORY", type: "Practical", category: "Hardware & Logic" },
            { id: "s3-troublelab", code: "24IT39L", name: "MOBILE AND LAPTOP TROUBLESHOOTING LABORATORY", type: "Practical", category: "Hardware & Repair" }
          ],
          audit: [
            { id: "s3-ile3", code: "24IT30A", name: "INTEGRATED LEARNING EXPERIENCE -III", type: "Audit", category: "Skill Enhancement" }
          ]
        },
        {
          id: "s4",
          number: 4,
          title: "Semester 4",
          description: "Operating systems, Object-Oriented Java programming, machine learning, data analytics, and software architecture.",
          theory: [
            { id: "s4-os", code: "24IT41", name: "CONCEPTS OF OPERATING SYSTEMS", type: "Theory", category: "Core Information Technology" },
            { id: "s4-se", code: "24IT42", name: "SOFTWARE ARCHITECTURES AND DESIGN", type: "Theory", category: "Software Engineering" },
            { id: "s4-java", code: "24IT43", name: "OBJECT ORIENTED PROGRAMMING USING JAVA", type: "Theory", category: "Programming" },
            { id: "s4-mlda", code: "24IT44", name: "MACHINE LEARNING AND DATA ANALYTICS", type: "Theory", category: "Advanced Information Technology" }
          ],
          practicum: [
            { id: "s4-anim", code: "24IT45P", name: "ANIMATION AND VISUAL EFFECTS", type: "Practicum", category: "Media & Design" }
          ],
          practicals: [
            { id: "s4-mldalab", code: "24IT46L", name: "MACHINE LEARNING AND DATA ANALYTICS LAB", type: "Practical", category: "Advanced Information Technology" },
            { id: "s4-setestlab", code: "24IT47L", name: "SOFTWARE PRODUCT DESIGN AND TESTING LABORATORY", type: "Practical", category: "Software Engineering" },
            { id: "s4-javalab", code: "24IT48L", name: "OBJECT ORIENTED PROGRAMMING USING JAVA LABORATORY", type: "Practical", category: "Programming" },
            { id: "s4-commlab", code: "24IT49L", name: "ADVANCED COMMUNICATION SKILL LAB", type: "Practical", category: "Humanities" }
          ],
          audit: [
            { id: "s4-ile4", code: "24IT40A", name: "INTEGRATED LEARNING EXPERIENCE -IV", type: "Audit", category: "Skill Enhancement" }
          ]
        },
        {
          id: "s5",
          number: 5,
          title: "Semester 5",
          description: "Computer networks, cloud computing, IoT automation, elective focus, and hands-on Mini Project.",
          theory: [
            { id: "s5-net", code: "24IT51", name: "COMPUTER COMMUNICATION NETWORKS AND ADMINISTRATION", type: "Theory", category: "Networking" },
            { id: "s5-cloud", code: "24IT52", name: "CLOUD COMPUTING AND SECURITY", type: "Theory", category: "Cloud & Security" },
            { id: "s5-el1", code: "24IT53E", name: "ELECTIVE THEORY - I", type: "Elective", category: "Specialization" }
          ],
          practicum: [
            { id: "s5-iot", code: "24IT54P", name: "AUTOMATION USING INTERNET OF THINGS", type: "Practicum", category: "IoT & Automation" }
          ],
          practicals: [
            { id: "s5-netlab", code: "24IT55L", name: "COMPUTER COMMUNICATION NETWORKS AND ADMINISTRATION LAB", type: "Practical", category: "Networking" },
            { id: "s5-cloudlab", code: "24IT56L", name: "CLOUD COMPUTING AND SECURITY LAB", type: "Practical", category: "Cloud & Security" },
            { id: "s5-miniproj", code: "24IT57P", name: "MINI PROJECT", type: "Project", category: "Practical Application" }
          ],
          audit: [
            { id: "s5-ile5", code: "24IT50A", name: "INTEGRATED LEARNING EXPERIENCE -V", type: "Audit", category: "Skill Enhancement" }
          ]
        },
        {
          id: "s6",
          number: 6,
          title: "Semester 6",
          description: "Cyber security & forensics, AR/VR immersive technology, drone autonomous systems, and capstone Project Work.",
          theory: [
            { id: "s6-cyber", code: "24IT61", name: "CYBER SECURITY AND FORENSICS", type: "Theory", category: "Cybersecurity" },
            { id: "s6-arvr", code: "24IT62", name: "AUGMENTED AND VIRTUAL REALITY", type: "Theory", category: "Immersive Tech" },
            { id: "s6-el2", code: "24IT63E", name: "ELECTIVE THEORY - II", type: "Elective", category: "Specialization" }
          ],
          practicum: [
            { id: "s6-drone", code: "24IT64P", name: "AUTONOMOUS SYSTEM DESIGN USING DRONE", type: "Practicum", category: "Robotics & Drones" }
          ],
          practicals: [
            { id: "s6-cyberlab", code: "24IT65L", name: "CYBER SECURITY TOOLS LABORATORY", type: "Practical", category: "Cybersecurity" },
            { id: "s6-arvrlab", code: "24IT66L", name: "AUGMENTED AND VIRTUAL REALITY LAB", type: "Practical", category: "Immersive Tech" },
            { id: "s6-capstone", code: "24IT67P", name: "PROJECT WORK AND VIVA VOCE", type: "Capstone Project", category: "Project" }
          ],
          audit: [
            { id: "s6-ile6", code: "24IT60A", name: "INTEGRATED LEARNING EXPERIENCE -VI", type: "Audit", category: "Skill Enhancement" }
          ]
        }
      ],
      electives: [
        { name: "ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEMS", code: "24ITE01", desc: "Foundations of knowledge representation, search algorithms, expert rule systems and AI applications." },
        { name: "FULL STACK DEVELOPMENT", code: "24ITE02", desc: "End-to-end web architectures, React/Vue frontends, Node RESTful APIs, and database integration." },
        { name: "DEVOPS", code: "24ITE03", desc: "CI/CD pipelines, Docker containerization, Kubernetes orchestration, and cloud deployments." },
        { name: "DATA VISUALIZATION AND PRESENTATION", code: "24ITE04", desc: "Data storytelling, Tableau/PowerBI, D3.js visualization charts, and dashboard creation." },
        { name: "METAVERSE", code: "24ITE05", desc: "3D virtual environments, spatial computing, webXR, and digital twin architectures." },
        { name: "SOCIAL MEDIA MARKETING AND AUTOMATION TOOLS", code: "24ITE06", desc: "Digital campaign strategies, marketing analytics, automation scripts, and engagement tracking." }
      ]
    }
  ]
};
