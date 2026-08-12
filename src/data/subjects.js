export const subjectsData = {
  "24IT14": {
    id: "24IT14",
    name: "PROBLEM SOLVING AND C PROGRAMMING",
    code: "24IT14",
    semester: "Semester 1",
    scheme: "2024 Scheme",
    type: "Theory & Practical",
    category: "Core Information Technology",
    credits: 4,
    hoursPerWeek: 5,
    description: "Covers computational logic, algorithmic thinking, flowcharts, modular C programming, structures, pointers, and memory management.",
    units: [
      { unit: "UNIT I", title: "Introduction to Computer Problem Solving", content: "Algorithms, flowcharts, pseudo codes, problem solving strategies, top-down design, structure of C program, compilation and execution stages." },
      { unit: "UNIT II", title: "C Fundamentals & Control Structures", content: "Tokens, keywords, data types, operators and expressions, operator precedence, conditional branching (if-else, switch-case), looping constructs (while, do-while, for)." },
      { unit: "UNIT III", title: "Arrays, Strings & Functions", content: "Single and multi-dimensional arrays, matrix operations, string manipulations, user-defined functions, parameter passing (call by value/reference), recursion." },
      { unit: "UNIT IV", title: "Structures, Unions & Pointers", content: "Structures definition, arrays of structures, nested structures, unions, memory layout, pointer fundamentals, pointer arithmetic, pointers and arrays, dynamic memory allocation (malloc, calloc, realloc, free)." },
      { unit: "UNIT V", title: "File Management & Preprocessor Directives", content: "File operations (fopen, fclose, fread, fwrite, fprintf, fscanf), sequential and random access files, command line arguments, preprocessor macros (#define, #include)." }
    ],
    experiments: [
      "Develop C programs for basic arithmetic, quadratic equations, and temperature conversions.",
      "Implement matrix multiplication and transpose using 2D arrays.",
      "Develop string manipulation functions without using library functions.",
      "Implement student database using array of structures and pointers.",
      "File processing: read, write, and append records in text files."
    ],
    references: [
      "Reema Thareja, 'Programming in C', Oxford University Press, 2nd Edition.",
      "E. Balagurusamy, 'Programming in ANSI C', McGraw-Hill, 8th Edition.",
      "Brian W. Kernighan and Dennis M. Ritchie, 'The C Programming Language', Pearson."
    ]
  },
  "24IT32": {
    id: "24IT32",
    name: "DATA STRUCTURES AND ITS ALGORITHMS",
    code: "24IT32",
    semester: "Semester 3",
    scheme: "2024 Scheme",
    type: "Theory & Practical",
    category: "Core Information Technology",
    credits: 4,
    hoursPerWeek: 5,
    description: "Linear and non-linear data structures including stacks, queues, linked lists, binary trees, heaps, graphs, sorting and searching algorithms.",
    units: [
      { unit: "UNIT I", title: "Linear Data Structures - Arrays & Linked Lists", content: "Abstract Data Types (ADT), Singly Linked Lists, Doubly Linked Lists, Circular Linked Lists, polynomial representation and addition." },
      { unit: "UNIT II", title: "Stacks and Queues", content: "Stack ADT, array and linked list implementation of stack, infix to postfix conversion, postfix evaluation. Queue ADT, Circular Queue, Deque, Priority Queue." },
      { unit: "UNIT III", title: "Trees & Binary Trees", content: "Tree terminology, Binary Trees, Binary Search Tree (BST) operations (insertion, deletion, traversal), Expression Trees, AVL Trees, Heap Trees (Min-Heap, Max-Heap)." },
      { unit: "UNIT IV", title: "Graphs and Applications", content: "Graph representations (Adjacency Matrix, Adjacency List), Graph traversals (BFS, DFS), Minimum Spanning Tree (Prim's & Kruskal's), Shortest Path (Dijkstra's Algorithm)." },
      { unit: "UNIT V", title: "Searching, Sorting & Hashing", content: "Linear Search, Binary Search, Bubble Sort, Selection Sort, Insertion Sort, Quick Sort, Merge Sort, Hash Tables, Hash functions, Collision resolution strategies." }
    ],
    experiments: [
      "Implementation of Singly and Doubly Linked List operations.",
      "Infix to Postfix conversion and evaluation using Stack.",
      "Binary Search Tree creation, traversal (Preorder, Inorder, Postorder) and node deletion.",
      "Graph traversal algorithms (BFS and DFS implementation).",
      "Sorting comparison: Quick Sort vs Merge Sort performance benchmarking."
    ],
    references: [
      "Mark Allen Weiss, 'Data Structures and Algorithm Analysis in C', Pearson Education.",
      "Ellis Horowitz, Sartaj Sahni, 'Fundamentals of Data Structures in C', Silicon Press."
    ]
  },
  "24IT33": {
    id: "24IT33",
    name: "PRINCIPLES OF DATABASES",
    code: "24IT33",
    semester: "Semester 3",
    scheme: "2024 Scheme",
    type: "Theory & Practical",
    category: "Core Information Technology",
    credits: 4,
    hoursPerWeek: 4,
    description: "Database design principles, Entity-Relationship modeling, SQL query optimization, relational algebra, normalization, and ACID transaction properties.",
    units: [
      { unit: "UNIT I", title: "Database Concepts & Architecture", content: "Data models, schemas, database architecture (3-schema), DBMS vs file processing system, Entity-Relationship (ER) model, ER diagrams, Extended ER features." },
      { unit: "UNIT II", title: "Relational Model & Relational Algebra", content: "Relational constraints, keys (Primary, Foreign, Candidate), Relational Algebra operations (Select, Project, Join, Set operations), Tuple Relational Calculus." },
      { unit: "UNIT III", title: "Structured Query Language (SQL)", content: "DDL, DML, DCL, TCL commands, subqueries, complex joins, views, assertions, triggers, stored procedures, PL/SQL blocks." },
      { unit: "UNIT IV", title: "Database Normalization", content: "Functional dependencies, Pitfalls in Relational Database Design, 1NF, 2NF, 3NF, Boyce-Codd Normal Form (BCNF), 4NF, 5NF, Decomposition." },
      { unit: "UNIT V", title: "Transactions & Concurrency Control", content: "ACID properties, transaction states, serializability, two-phase locking protocols, deadlock handling, crash recovery, NoSQL database overview." }
    ],
    experiments: [
      "Creation of relational tables with integrity constraints (Primary key, Foreign key, Check, Unique).",
      "Complex SQL queries involving Inner/Outer joins, Group By, Having, and Nested Subqueries.",
      "PL/SQL cursor and exception handling implementation.",
      "Database Trigger creation for automated audit logging.",
      "ER Modeling & normalization project for a real-world database requirement."
    ],
    references: [
      "Abraham Silberschatz, Henry F. Korth, S. Sudarshan, 'Database System Concepts', McGraw-Hill.",
      "Ramez Elmasri, Shamkant B. Navathe, 'Fundamentals of Database Systems', Pearson."
    ]
  },
  "24IT43": {
    id: "24IT43",
    name: "OBJECT ORIENTED PROGRAMMING USING JAVA",
    code: "24IT43",
    semester: "Semester 4",
    scheme: "2024 Scheme",
    type: "Theory & Practical",
    category: "Programming",
    credits: 4,
    hoursPerWeek: 5,
    description: "Object-oriented principles (Encapsulation, Inheritance, Polymorphism, Abstraction), Multithreading, Exception Handling, Collections Framework, and Java I/O Streams.",
    units: [
      { unit: "UNIT I", title: "OOP Principles & Java Basics", content: "Java Virtual Machine (JVM), JDK vs JRE, Class, Objects, Constructors, Method Overloading, Static members, Garbage Collection." },
      { unit: "UNIT II", title: "Inheritance, Interfaces & Packages", content: "Super keyword, Method Overriding, Abstract classes, Interface implementation, Multiple inheritance via interfaces, Package creation and imports." },
      { unit: "UNIT III", title: "Exception Handling & Multithreading", content: "Try-catch-finally blocks, custom exceptions, throw vs throws. Thread lifecycle, Thread creation (Runnable vs Thread class), Thread synchronization, Inter-thread communication." },
      { unit: "UNIT IV", title: "Java Collections Framework & I/O", content: "List, Set, Map interfaces, ArrayList, LinkedList, HashMap, HashSet, Iterators. Byte and Character streams, File I/O, Serialization." },
      { unit: "UNIT V", title: "GUI & Event Handling", content: "Swing components, Layout managers, Event Listeners, Action Events, JDBC architecture, Connecting Java applications to MySQL/PostgreSQL databases." }
    ],
    experiments: [
      "Implementation of Inheritance and Polymorphism in an Banking Application system.",
      "Custom Exception creation for validation systems.",
      "Producer-Consumer problem implementation using Multithreading and Synchronization.",
      "Student Record Management system using Java Collections (ArrayList/HashMap).",
      "JDBC application connecting Java GUI interface with Relational Database."
    ],
    references: [
      "Herbert Schildt, 'Java: The Complete Reference', McGraw-Hill, 11th Edition.",
      "Cay S. Horstmann, 'Core Java Volume I - Fundamentals', Pearson."
    ]
  },
  "24IT44": {
    id: "24IT44",
    name: "MACHINE LEARNING AND DATA ANALYTICS",
    code: "24IT44",
    semester: "Semester 4",
    scheme: "2024 Scheme",
    type: "Theory & Practical",
    category: "Advanced Information Technology",
    credits: 4,
    hoursPerWeek: 5,
    description: "Supervised and Unsupervised learning, Linear Regression, Logistic Regression, Decision Trees, K-Means clustering, pandas/scikit-learn analytics workflows.",
    units: [
      { unit: "UNIT I", title: "Introduction to Machine Learning & Analytics", content: "Types of ML (Supervised, Unsupervised, Reinforcement), Data Preprocessing, Feature Scaling, Training/Testing Splits, Analytics Pipeline." },
      { unit: "UNIT II", title: "Regression Models", content: "Simple Linear Regression, Multiple Linear Regression, Polynomial Regression, Model Evaluation Metrics (MSE, RMSE, R-squared), Gradient Descent." },
      { unit: "UNIT III", title: "Classification Algorithms", content: "Logistic Regression, Decision Trees, Random Forest, Support Vector Machines (SVM), Naive Bayes, Confusion Matrix, Precision, Recall, F1-Score." },
      { unit: "UNIT IV", title: "Unsupervised Learning & Clustering", content: "K-Means Clustering, Hierarchical Clustering, Principal Component Analysis (PCA) for Dimensionality Reduction, Association Rule Mining (Apriori)." },
      { unit: "UNIT V", title: "Neural Networks & Deep Learning Overview", content: "Perceptron model, Artificial Neural Networks (ANN), Activation Functions, Backpropagation, Deep Learning introduction, Scikit-learn and TensorFlow basics." }
    ],
    experiments: [
      "Exploratory Data Analysis and data cleaning using Pandas and Seaborn.",
      "House Price Prediction using Multiple Linear Regression.",
      "Customer Churn Prediction using Decision Tree & Random Forest Classifier.",
      "Customer Segmentation using K-Means Clustering.",
      "Model evaluation and hyperparameter tuning using Scikit-Learn."
    ],
    references: [
      "Tom M. Mitchell, 'Machine Learning', McGraw-Hill.",
      "Aurélien Géron, 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow', O'Reilly."
    ]
  },
  "24IT51": {
    id: "24IT51",
    name: "COMPUTER COMMUNICATION NETWORKS AND ADMINISTRATION",
    code: "24IT51",
    semester: "Semester 5",
    scheme: "2024 Scheme",
    type: "Theory & Practical",
    category: "Networking",
    credits: 4,
    hoursPerWeek: 5,
    description: "OSI and TCP/IP layered architecture, routing protocols, IP addressing (IPv4/IPv6), socket programming, network administration, and Wireshark traffic analysis.",
    units: [
      { unit: "UNIT I", title: "Network Architecture & Physical Layer", content: "OSI 7-layer reference model, TCP/IP protocol suite, transmission media, switching techniques (Circuit, Packet), network topologies." },
      { unit: "UNIT II", title: "Data Link Layer & LAN Technologies", content: "Framing, Error Detection/Correction (CRC, Hamming code), Flow control (Sliding Window), Ethernet standards (802.3), Wi-Fi (802.11), MAC addressing." },
      { unit: "UNIT III", title: "Network Layer & Routing Protocols", content: "IPv4 addressing, Subnetting, CIDR, IPv6, ICMP, Routing algorithms (Distance Vector, Link State), RIP, OSPF, BGP." },
      { unit: "UNIT IV", title: "Transport Layer Protocols", content: "TCP vs UDP, 3-way handshake, TCP Congestion Control, Sliding Window flow control, Socket programming (Client-Server architecture)." },
      { unit: "UNIT V", title: "Application Layer & Network Administration", content: "DNS, HTTP, HTTPS, FTP, DHCP, SMTP, Network administration tools (ping, traceroute, netstat, Wireshark), Firewall and NAT concepts." }
    ],
    experiments: [
      "Subnetting calculation and IPv4 configuration on Virtual Machines.",
      "Packet capture and protocol analysis using Wireshark.",
      "C/Python Socket programming for TCP Echo Client-Server.",
      "Configuring RIP and OSPF routing protocols on Cisco Packet Tracer.",
      "Setting up DHCP Server and DNS Server on Linux/Windows Server."
    ],
    references: [
      "Andrew S. Tanenbaum, David J. Wetherall, 'Computer Networks', Pearson, 5th Edition.",
      "James F. Kurose, Keith W. Ross, 'Computer Networking: A Top-Down Approach', Pearson."
    ]
  },
  "24IT61": {
    id: "24IT61",
    name: "CYBER SECURITY AND FORENSICS",
    code: "24IT61",
    semester: "Semester 6",
    scheme: "2024 Scheme",
    type: "Theory & Practical",
    category: "Cybersecurity",
    credits: 4,
    hoursPerWeek: 5,
    description: "Information security concepts, cryptography (AES, RSA, ECC), network security, ethical hacking, digital forensics, memory analysis, and Incident Response.",
    units: [
      { unit: "UNIT I", title: "Cybersecurity Fundamentals & Threat Landscape", content: "CIA Triad, Vulnerability, Threat, Risk assessment, Malware types (Ransomware, Trojan, Spyware), Social Engineering attacks." },
      { unit: "UNIT II", title: "Cryptography Principles", content: "Symmetric key cryptography (DES, AES), Asymmetric key cryptography (RSA, Diffie-Hellman), Hash functions (SHA-256), Digital Signatures, Public Key Infrastructure (PKI)." },
      { unit: "UNIT III", title: "Network & Web Security", content: "Firewalls, Intrusion Detection/Prevention Systems (IDS/IPS), VPNs, SSL/TLS protocol, Web vulnerabilities (SQL Injection, XSS, CSRF)." },
      { unit: "UNIT IV", title: "Digital Forensics & Evidence Collection", content: "Digital Forensics Life Cycle, Evidence handling, Chain of Custody, Disk Imaging, Memory Forensics, Volatility framework." },
      { unit: "UNIT V", title: "Cyber Laws & Incident Response", content: "Information Technology Act 2000 & Amendments, Cyber Crime investigation procedure, Incident Response lifecycle, ISO 27001 standards." }
    ],
    experiments: [
      "Implementation of Encryption & Decryption algorithms (AES and RSA) in Python.",
      "Vulnerability assessment of Web Application using OWASP ZAP / Burp Suite.",
      "Network Scanning and Port Discovery using Nmap.",
      "Disk Image analysis and deleted file recovery using Autopsy Forensic Browser.",
      "RAM memory dump analysis using Volatility framework."
    ],
    references: [
      "William Stallings, 'Cryptography and Network Security: Principles and Practice', Pearson.",
      "Bill Nelson, Amelia Phillips, Christopher Steuart, 'Guide to Computer Forensics and Investigations', Cengage Learning."
    ]
  }
};
