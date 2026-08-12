import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbFilePath = path.join(__dirname, 'dit_portal_db.json');

// Default initial state
const defaultState = {
  faculty: [
    {
      id: 'aishwaryalakshmi-g',
      name: 'Ms. G. Aishwaryalakshmi',
      designation: 'Head of the Department (HOD)',
      degree: 'M.Tech (Information Technology)',
      qualification: 'M.Tech (Information Technology)',
      teaching_exp: '9 Years',
      industry_exp: 'N/A',
      publications: 5,
      specialization: 'Programming Languages, Operating Systems, Data Structures, Artificial Intelligence & Machine Learning, AR/VR',
      email: 'hod.it@psgpolytech.ac.in',
      phone: '0422-2572177',
      bio: 'Ms. G. Aishwaryalakshmi heads the Department of Information Technology at PSG Polytechnic College with over 9 years of academic leadership and research expertise.',
      image: 'https://psgpolytech.ac.in/dept/images/DIT/faculty/GAishwaryalakshmi.jpg',
      is_hod: 1,
      category: 'hod',
      profile_link: 'https://psgpolytech.irins.org/profile/436142'
    },
    {
      id: 'annie-karunya-r',
      name: 'Ms. R. Annie Karunya',
      designation: 'Lecturer',
      degree: 'M.E (CSE)',
      qualification: 'M.E (CSE)',
      teaching_exp: '6 Years 4 Months',
      industry_exp: 'N/A',
      publications: 7,
      specialization: 'Programming Languages, Information Security, Cloud Computing, Digital Logic Circuit, Software Engineering, Machine Learning',
      email: 'rak.it@psgpolytech.ac.in',
      phone: '',
      bio: 'Lecturer & Academic Coordinator at Information Technology Department.',
      image: 'https://psgpolytech.ac.in/dept/images/DIT/faculty/RAnnieKarunya.jpg',
      is_hod: 0,
      category: 'teaching',
      profile_link: 'https://psgpolytech.irins.org/profile/436132'
    },
    {
      id: 'ravi-n',
      name: 'Mr. N. Ravi',
      designation: 'Lecturer',
      degree: 'B.E (CSE)',
      qualification: 'B.E (CSE)',
      teaching_exp: '8 Years',
      industry_exp: '3 Years',
      publications: 7,
      specialization: 'Network Security, Cloud Computing, Data Structures, Artificial Intelligence and Machine Learning, AR/VR',
      email: 'nr.it@psgpolytech.ac.in',
      phone: '',
      bio: 'Lecturer & PSG Center of Excellence in Drones/UAV Research Lab In-Charge.',
      image: 'https://psgpolytech.ac.in/dept/images/DIT/faculty/NRavi.jpg',
      is_hod: 0,
      category: 'teaching',
      profile_link: 'https://psgpolytech.irins.org/profile/472129'
    },
    {
      id: 'anandaraj-y',
      name: 'Mr. Y. Anandaraj',
      designation: 'Instructor',
      degree: 'DEEE, B.E',
      qualification: 'DEEE, B.E',
      teaching_exp: '12 Years',
      industry_exp: '9 Years 7 Months',
      publications: 0,
      specialization: 'AutoCAD, Digital Electronics, Internet of Things, Embedded Systems, Computer Networking Concepts',
      email: '',
      phone: '',
      bio: 'Technical Instructor for DIT hardware and IoT laboratories.',
      image: 'https://psgpolytech.ac.in/dept/images/DIT/faculty/AnandarajY.jpg',
      is_hod: 0,
      category: 'technical',
      profile_link: ''
    },
    {
      id: 'shivapushpa-b',
      name: 'Ms. B. Shivapushpa',
      designation: 'Instructor',
      degree: 'B.E',
      qualification: 'B.E',
      teaching_exp: '1 Year 3 Months',
      industry_exp: '1 Year',
      publications: 0,
      specialization: 'Python, Software Engineering, Mobile and Laptop Services, Computer Programming',
      email: '',
      phone: '',
      bio: 'Technical Instructor for Mobile & Laptop Troubleshooting Lab.',
      image: 'https://psgpolytech.ac.in/dept/images/DIT/faculty/BShivapushpa.jpg',
      is_hod: 0,
      category: 'technical',
      profile_link: ''
    }
  ],
  subjects: [
    { id: 's1-c', semester_id: 's1', code: '24IT14', name: 'Problem Solving & C Programming', type: 'Theory', category: 'Program Core', hours_per_week: 4, credits: 4, description: 'Fundamentals of algorithms, flowcharts, variables, pointers, and memory manipulation in C.' },
    { id: 's1-ph', semester_id: 's1', code: '24IT12', name: 'Applied Physics & Digital Logic', type: 'Theory', category: 'Basic Science', hours_per_week: 3, credits: 3, description: 'Principles of semiconductor physics, logic gates, and Boolean algebra.' },
    { id: 's1-lab', semester_id: 's1', code: '24IT15L', name: 'C Programming Practice Lab', type: 'Practical', category: 'Program Core', hours_per_week: 4, credits: 2, description: 'Hands-on laboratory sessions constructing C programs and debugging code.' },
    { id: 's2-python', semester_id: 's2', code: '24IT24', name: 'Python Programming & Data Analytics', type: 'Theory', category: 'Program Core', hours_per_week: 4, credits: 4, description: 'Python object-oriented concepts, NumPy, Pandas, and data visualization libraries.' },
    { id: 's2-math', semester_id: 's2', code: '24IT21', name: 'Discrete Mathematics & Matrix Theory', type: 'Theory', category: 'Basic Science', hours_per_week: 4, credits: 4, description: 'Set theory, graph algorithms, linear algebra, and matrices for computing.' },
    { id: 's3-dsa', semester_id: 's3', code: '24IT32', name: 'Data Structures & Algorithms', type: 'Theory', category: 'Program Core', hours_per_week: 4, credits: 4, description: 'Stacks, queues, linked lists, trees, graphs, sorting, and algorithmic complexity.' },
    { id: 's3-db', semester_id: 's3', code: '24IT33', name: 'Principles of Databases', type: 'Theory', category: 'Program Core', hours_per_week: 3, credits: 3, description: 'Relational model, SQL queries, normalization, indexing, and transaction processing.' },
    { id: 's4-java', semester_id: 's4', code: '24IT43', name: 'Object Oriented Programming Using Java', type: 'Theory', category: 'Program Core', hours_per_week: 4, credits: 4, description: 'Java SE OOP principles, multithreading, collection framework, and GUI application design.' },
    { id: 's4-os', semester_id: 's4', code: '24IT42', name: 'Operating Systems & System Architecture', type: 'Theory', category: 'Program Core', hours_per_week: 3, credits: 3, description: 'Process synchronization, CPU scheduling, virtual memory management, and file systems.' },
    { id: 's5-net', semester_id: 's5', code: '24IT51', name: 'Computer Communication Networks', type: 'Theory', category: 'Program Core', hours_per_week: 4, credits: 4, description: 'OSI layers, TCP/IP protocol suite, routing algorithms, socket programming, and network security.' },
    { id: 's5-iot', semester_id: 's5', code: '24IT54P', name: 'Automation Using Internet of Things', type: 'Practicum', category: 'Specialization', hours_per_week: 4, credits: 3, description: 'ESP32 microcontrollers, MQTT cloud platforms, smart sensors, and Industry 4.0 automation.' },
    { id: 's6-cyber', semester_id: 's6', code: '24IT61', name: 'Cyber Security and Forensics', type: 'Theory', category: 'Program Core', hours_per_week: 4, credits: 4, description: 'Ethical hacking methodologies, cryptography, network packet analysis, and digital forensics.' },
    { id: 's6-drone', semester_id: 's6', code: '24IT64P', name: 'Autonomous System Design Using Drone', type: 'Practicum', category: 'Specialization', hours_per_week: 4, credits: 3, description: 'Pixhawk flight computers, quadcopter frame assemblies, path planning, and autonomous UAV telemetry.' }
  ],
  laboratories: [
    {
      id: 'drones-coe',
      name: 'PSG Center of Excellence in Drones / UAV Research',
      short_name: 'Drones & UAV CoE',
      purpose: 'Collaboratively established by PSG Polytechnic College and Jet Aerospace Aviation Research Center, Palakkad, Kerala. Students learn, design, build, and conduct research in Drones and Unmanned Aerial Vehicles (UAVs).',
      lab_in_charge: 'Mr. N. Ravi',
      partner: 'Jet Aerospace Aviation Research Center, Kerala',
      image: 'https://psgpolytech.ac.in/dept/images/DIT/facilities/UAVRearch1.JPG',
      equipment: 'Custom Flight Controller Test Benches & Pixhawk Flight Computers, Quadcopter & Hexacopter Drone Frame Assemblies, Real-Time Telemetry Ground Control Stations',
      objectives: 'Bridge the gap between college education and technical requirements in the UAV and aerospace sectors.'
    },
    {
      id: 'it-lab',
      name: 'Information Technology Laboratory',
      short_name: 'Main Information Technology Lab',
      purpose: 'Provides students with extensive practical exposure in modern programming languages (C, Python, Java), database systems, and computer networking concepts.',
      lab_in_charge: 'Ms. G. Aishwaryalakshmi',
      partner: 'PSG Polytechnic College Core Infrastructure',
      image: 'https://psgpolytech.ac.in/dept/images/DIT/facilities/itlab.jpg',
      equipment: 'High-performance Core i7 Desktop Workstations with Dual Monitors, Gigabit Ethernet LAN, Ubuntu Linux / Windows Dual-Boot',
      objectives: 'Conduct regular practical laboratory sessions for S1 to S6 curricula.'
    },
    {
      id: 'iot-automation-lab',
      name: 'Industry Supported - Information Technology Based Automation Laboratory',
      short_name: 'IoT & Automation Lab',
      purpose: 'Setup powered by RDL Technologies Pvt Ltd, Mangaluru, Karnataka to skill diploma students in IoT, embedded systems, smart sensors, and Industry 4.0 applications.',
      lab_in_charge: 'Ms. G. Aishwaryalakshmi',
      partner: 'RDL Technologies Pvt Ltd, Mangaluru',
      image: 'https://psgpolytech.ac.in/dept/images/DIT/facilities/DIT_LOT_LABimage.png',
      equipment: 'RDL Industrial IoT Gateways, Raspberry Pi 4 Model B, ESP32 Microcontrollers, Ultrasonic/Gas Sensors',
      objectives: 'Skill diploma students in IoT and embedded system design using state-of-the-art hardware.'
    }
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'Autonomous Drone Agriculture & Crop Health Monitoring System',
      description: 'Deep learning computer vision drone for real-time crop disease detection and soil moisture telemetry.',
      category: 'AI & Robotics',
      technologies: 'Python, OpenCV, Pixhawk, TensorFlow, ESP32 IoT Gateway',
      students: 'R. Karthik, S. Gowtham, K. Praveen',
      guide: 'Mr. N. Ravi',
      image: 'https://psgpolytech.ac.in/dept/images/DIT/facilities/UAVRearch1.JPG',
      year: '2024',
      github: 'https://github.com',
      demo: ''
    },
    {
      id: 'proj-2',
      title: 'IoT Based Industrial Energy & Environmental Quality Dashboard',
      description: 'Smart sensor network measuring temperature, gas leakages, and energy consumption with real-time MQTT cloud alerting.',
      category: 'Internet of Things',
      technologies: 'ESP32, Node-RED, MQTT, React.js, InfluxDB',
      students: 'M. Vignesh, T. Harini, P. Surya',
      guide: 'Ms. G. Aishwaryalakshmi',
      image: 'https://psgpolytech.ac.in/dept/images/DIT/facilities/DIT_LOT_LABimage.png',
      year: '2024',
      github: 'https://github.com',
      demo: ''
    }
  ],
  achievements: [
    {
      id: 'ach-1',
      title: 'State 1st Rank in Diploma Information Technology Examinations',
      description: 'Awarded to top ranking student for superlative academic distinction across 6 semesters.',
      category: 'Rank Holder',
      student_name: 'DIT Rank Holder 2024',
      year: '2024',
      image: 'https://psgpolytech.ac.in/dept/images/DIT/activity/eo_23.jpg',
      score: '98.4%'
    }
  ],
  events: [
    {
      id: 'evt-1',
      title: 'Computer Skill Training Course for PSG College of Pharmacy Students',
      date: '04 Feb 2023',
      category: 'Training',
      description: 'Hands-on computer application and digital data handling workshop organized by Information Technology department faculty for pharmacy scholars.',
      location: 'Information Technology Laboratory, PSG PTC',
      organizer: 'Department of Information Technology',
      image: 'https://psgpolytech.ac.in/dept/images/DIT/activity/eo_23.jpg'
    },
    {
      id: 'evt-2',
      title: 'In-House Digital Literacy Program for PSG High School, Vedapatti',
      date: '03 Feb 2023',
      category: 'Community Outreach',
      description: 'Social outreach initiative offering basic programming, internet safety, and hardware awareness for school students.',
      location: 'PSG High School, Vedapatti',
      organizer: 'Information Technology Department Association',
      image: 'https://psgpolytech.ac.in/dept/images/DIT/activity/TPinhouse.jpg'
    },
    {
      id: 'evt-3',
      title: 'Hands-On Practical Training on Mobile Phone and Laptop Servicing',
      date: '28 Jan 2023',
      category: 'Workshops',
      description: 'Specialized technical training session conducted in partnership with IC-Fix Solutions for SMD troubleshooting and chip diagnostics.',
      location: 'Mobile & Laptop Troubleshooting Lab',
      organizer: 'Information Technology Department & IC-Fix Solutions',
      image: 'https://psgpolytech.ac.in/dept/images/DIT/activity/TP-Laptop.jpg'
    }
  ],
  gallery: [
    {
      id: 'gal-1',
      title: 'Drones CoE Research Demonstration',
      category: 'Facilities',
      event_name: 'UAV Workshop 2023',
      image_url: 'https://psgpolytech.ac.in/dept/images/DIT/facilities/UAVRearch1.JPG',
      date: '2023'
    },
    {
      id: 'gal-2',
      title: 'Community Outreach at Vedapatti',
      category: 'Outreach',
      event_name: 'Digital Literacy 2023',
      image_url: 'https://psgpolytech.ac.in/dept/images/DIT/activity/TPinhouse.jpg',
      date: '2023'
    }
  ],
  calendar: [
    {
      id: 'cal-1',
      title: 'Commencement of Semester 1, 3 & 5 Classes',
      date: '01 Jul 2024',
      category: 'Academic',
      description: 'Reopening of odd semester classes for Autonomous 2024 Scheme.',
      semester: 'Odd Semesters'
    },
    {
      id: 'cal-2',
      title: 'First Continuous Assessment Test (CAT-1)',
      date: '16 Aug 2024',
      category: 'Exams',
      description: 'First continuous evaluation test covering Units 1 & 2.',
      semester: 'All Semesters'
    }
  ],
  contact: {
    id: 'dit-contact',
    address: 'Department of Information Technology, PSG Polytechnic College, Post Box No. 1611, Avinashi Road, Peelamedu, Coimbatore - 641 004, Tamil Nadu, India.',
    phone: '0422-2572177, 2572477 Ext. 248',
    email: 'hod.it@psgpolytech.ac.in, principal@psgpolytech.ac.in',
    working_hours: 'Monday to Friday: 8:30 AM - 5:15 PM, Saturday: 8:30 AM - 1:00 PM',
    location_embed: 'https://maps.google.com/maps?q=PSG+Polytechnic+College+Peelamedu+Coimbatore&t=&z=15&ie=UTF8&iwloc=&output=embed'
  },
  admins: [
    { id: 'admin-1', username: 'RAVI', password_hash: '$2a$10$b.GSpFOEZYs6chqJIXBrJ.vfCXgfMLNk9JxOVzJ.HaKDw13XVStte', role: 'admin' }
  ]
};

class DBManager {
  constructor() {
    this.init();
  }

  init() {
    if (!fs.existsSync(dbFilePath)) {
      this.saveState(defaultState);
    }
  }

  getState() {
    try {
      if (!fs.existsSync(dbFilePath)) {
        this.saveState(defaultState);
        return defaultState;
      }
      const data = fs.readFileSync(dbFilePath, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      console.error('Error reading database file:', err);
      return defaultState;
    }
  }

  saveState(state) {
    try {
      fs.writeFileSync(dbFilePath, JSON.stringify(state, null, 2), 'utf8');
    } catch (err) {
      console.error('Error saving database file:', err);
    }
  }

  getAll(collection) {
    const state = this.getState();
    return state[collection] || [];
  }

  getById(collection, id) {
    const items = this.getAll(collection);
    return items.find(item => item.id === id);
  }

  insert(collection, item) {
    const state = this.getState();
    if (!state[collection]) state[collection] = [];
    state[collection].unshift(item);
    this.saveState(state);
    return item;
  }

  update(collection, id, updates) {
    const state = this.getState();
    if (!state[collection]) return null;
    const index = state[collection].findIndex(item => item.id === id);
    if (index !== -1) {
      state[collection][index] = { ...state[collection][index], ...updates };
      this.saveState(state);
      return state[collection][index];
    }
    return null;
  }

  delete(collection, id) {
    const state = this.getState();
    if (!state[collection]) return false;
    const initialLength = state[collection].length;
    state[collection] = state[collection].filter(item => item.id !== id);
    this.saveState(state);
    return state[collection].length < initialLength;
  }

  setHod(facultyId) {
    const state = this.getState();
    if (!state.faculty) return null;

    state.faculty.forEach(f => {
      if (f.id === facultyId) {
        f.is_hod = 1;
        f.designation = 'Head of the Department (HOD)';
        f.category = 'hod';
      } else {
        f.is_hod = 0;
        if (f.designation === 'Head of the Department (HOD)') {
          f.designation = 'Lecturer';
        }
      }
    });

    this.saveState(state);
    return true;
  }

  updateContact(updates) {
    const state = this.getState();
    state.contact = { ...state.contact, ...updates };
    this.saveState(state);
    return state.contact;
  }
}

export const dbManager = new DBManager();
export function initDatabase() {
  dbManager.init();
}
export default dbManager;
