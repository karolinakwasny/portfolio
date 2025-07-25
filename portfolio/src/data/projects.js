import { getProjectImages } from "../utils/assetUrls.js";
import { projectIcons } from "./icons.js";

export const projects = [
  {
    id: "full_stack_open",
    title: "Full Stack Open",
    description:
      "Comprehensive course on full stack development with React, Node.js, Express, MongoDB, state management with Redux, testing and deployment workflows.",
    longDescription: `
    Full Stack Open is an intensive course created by the University of Helsinki that explores modern web application development, focusing on JavaScript-based technologies for both client and server. Throughout the course, I implemented a variety of full-stack apps and programming assignments, applying best industry practices in version control, deployment, TypeScript, and testing.

    Key topics and features:
    • Part 0: Fundamentals of Web Apps (HTTP, REST, and SPA basics)
    • Part 1–2: React and modern frontend development (hooks, state, props)
    • Part 3: Building RESTful APIs with Node.js and Express
    • Part 4: Testing Express servers and APIs (Jest and supertest)
    • Part 5: Advanced React and state management strategies (hooks, context, Redux)
    • Part 6: State management with Redux in depth
    • Part 7: React router, custom hooks, and advanced topics in React and deployment
    • Additional focus: User authentication, JWT, and backend integration
    • Databases: MongoDB and relational database basics
    • Testing: Unit, integration, and end-to-end with Jest and Cypress
  `,
    icon: projectIcons.GraduationCap,
    tech: [
      "React",
      "Redux",
      "Node.js",
      "MongoDB",
      "Express",
      "Mongoose",
      "HTML",
      "REST API",
      "CSS",
      "Jest",
      "Supertest",
      "ESLint",
      "Playwright",
      "Render",
    ],
    status: "Ongoing",
    duration: "",
    teamSize: "Solo",
    challenges: [
      "Building complete applications from frontend to backend",
      "Designing scalable REST APIs connected to real databases",
      "Ensuring reliability through unit, integration, and E2E testing",
      "Managing state in complex React applications",
    ],
    learnings: [
      "React best practices with hooks, context, and state management",
      "Gained hands-on experience deploying apps with Render",
      "Testing strategies for large-scale apps",
      "API development and database integration using Node.js and MongoDB",
      "Built real-world apps using React, Node.js, and MongoDB",
    ],
    images: [],
    demoUrl: null,
    githubUrl: {
      label: "View Code",
      url: null,
      isMultiple: true,
      links: [
        {
          label: "Part 0-2 - Introduction to web development and React",
          url: "https://github.com/karolinakwasny/Full_Stack_open.git",
          description: "React fundamentals, hooks, and state management",
        },
        {
          label: "Part 3 - Introduction to backend",
          url: "https://github.com/karolinakwasny/Full_Stack_open_part3.git",
          description: "Node.js, Express, and REST API development",
        },
        {
          label: "Part 4 - Testing backend and user administration",
          url: "https://github.com/karolinakwasny/Full_Stack_open_part4.git",
          description: "Backend testing with Jest and user authentication",
        },
        {
          label: "Part 5 - Testing frontend",
          url: "https://github.com/karolinakwasny/Full_Stack_open_part5.git",
          description: "React testing with Jest and Cypress",
        },
        {
          label: "Part 6 - State management with Redux, React Query, useReducer and useContext",
          url: "https://github.com/karolinakwasny/Full_Stack_open_part6.git",
          description: "Advanced state management patterns",
        },
        {
          label: "Part 7 - Last part of the course, styling and finishing touches",
          url: "https://github.com/karolinakwasny/Full_Stack_open_part7.git",
          description: "React Router, custom hooks, and advanced topics",
        },
      ],
    },
    websiteUrl: "https://fullstackopen.com/en/",
    highlights: [
      "Built and deployed multiple full-stack apps",
      "Mastered advanced React patterns like Hooks and Redux",
      "Implemented comprehensive testing: unit, integration, and E2E",
    ],
  },

  {
    id: "ft_transcendence",
    title: "ft_transcendence",
    description:
      "A 3D Pong game with user authentication, 2FA, multi-language support, accessibility features, and tournament features. Built with modern web technologies.",
    longDescription: `
      ft_transcendence is a comprehensive full-stack web application developed as part of the 42 School curriculum.
      It reimagines the classic Pong game with modern 3D graphics and advanced web features, aiming for an inclusive,
      secure, and engaging user experience.

      Key features:
      • Real-time 3D Pong game using Three.js with map selection
      • Secure login via 42 OAuth and optional Two-Factor Authentication (2FA)
      • JWT-based session management
      • User profiles with avatars, match history, win/loss stats, and friend lists
      • Multi-language support (4 languages) with persistent preferences
      • Accessibility features including ARIA, alt text, keyboard navigation, and high-contrast UI
      • Responsive design for desktop and mobile
      • Hosted entirely with free-tier cloud services, containerized with Docker
    `,
    icon: projectIcons.Circle, // Pong ball - the core element of ping pong
    tech: [
      "React",
      "Django",
      "WebSocket",
      "PostgreSQL",
      "Three.js",
      "Docker",
      "Docker Compose",
      "Nginx",
      "JWT",
      "Bootstrap",
      "Django REST Framework",
      "OAuth2 (42 API)",
      "Neon",
      "Render",
    ],
    status: "Completed",
    duration: "6 months",
    teamSize: "3 developers",
    challenges: [
      "Coordinating between front-end and back-end during team development",
      "Implementing real-time game synchronization across multiple clients",
      "Configuring Docker and Docker Compose for deployment",
      "Deploying the full-stack application to cloud services",
    ],
    learnings: [
      "Real-time web application architecture",
      "WebSocket protocol and implementation",
      "Best practices for accessibility in web apps",
      "Team collaboration and code review processes",
      "Database design for gaming applications",
    ],
    images: getProjectImages([
      "/gifs/ft_transcendence.gif",
      "/images/ft_transcendence/gameplay.png",
      "/images/ft_transcendence/gameplay1.png",
      "/images/ft_transcendence/gameplay2.png",
    ]),
    demoUrl: "https://transcendence-cs0d.onrender.com",
    githubUrl: "https://github.com/karolinakwasny/ft_transcendence",
    highlights: [
      "Successfully handled concurrent players",
      "Zero-downtime deployment with Docker",
      "Scalable architecture for future features",
      "Comprehensive profile and stats tracking",
      "Secure login with 2FA",
      "Responsive design tested on 10+ devices",
      "Multi-language and accessibility support",
    ],
  },
  {
    id: "inception_of_things",
    title: "Inception of Things",
    description:
      "Modular Kubernetes micro-cluster lab using Vagrant, K3s, ArgoCD, GitOps, and lightweight CI/CD for cloud-native development practice.",
    longDescription: `
    Inception of Things is a multi-stage infrastructure-as-code project for mastering container orchestration, automation, and modern DevOps workflows. It sequentially introduces Kubernetes fundamentals, lightweight K3s deployments, GitOps with ArgoCD, and CI/CD with GitLab—all performed on local VMs and Docker containers.

    Key features and stages:
    • Automated setup of a two-node K3s Kubernetes cluster using Vagrant and VirtualBox
    • Deep dive into Kubernetes concepts: cluster, nodes, pods, deployments, services, ingress
    • Custom Vagrantfile and provisioning scripts for reproducible infrastructure
    • Strong focus on command-line workflow and cluster management
    • Implementing local GitLab instance used as source for ArgoCD, demonstrating CI/CD and branch-based deployment
    • Extensive documentation for troubleshooting, commands, and architecture diagrams
  `,
    icon: projectIcons.ShipWheel, // Kubernetes orchestration - ship wheel for steering/helm control
    tech: [
      "Vagrant",
      "VirtualBox",
      "K3s",
      "K3d",
      "Kubernetes",
      "Docker",
      "ArgoCD",
      "GitLab",
      "Traefik",
      "kubectl",
      "Helm",
    ],
    status: "Completed",
    duration: "1 month",
    teamSize: "3 developers",
    challenges: [
      "Automating multi-node cluster setup across heterogeneous VMs",
      "Configuring and debugging K3s with various CNI and ingress controllers",
      "Establishing secure GitOps pipelines with ArgoCD and GitLab",
      "Providing resilient networking and high-availability in a local cluster",
      "Managing complex YAML configurations for deployments and services",
    ],
    learnings: [
      "Kubernetes architecture and resource management",
      "Service discovery and networking in cloud-native apps",
      "Declarative infrastructure and GitOps workflows",
      "Continuous deployment strategies with ArgoCD and GitLab",
      "Troubleshooting distributed systems and CI/CD pipelines",
    ],
    images: null,
    demoUrl: null,
    githubUrl: "https://github.com/karolinakwasny/Inception_of_things_npavelic",
    highlights: [
      "Automated deployment and teardown of K3s clusters",
      "Full GitOps workflow with ArgoCD and GitLab integration",
      "Detailed CLI-based monitoring and troubleshooting toolkit",
    ],
  },

  {
    id: "ft_irc",
    title: "ft_irc",
    description:
      "An Internet Relay Chat server implementation that handles multiple clients, channels, and IRC protocol commands. Built from scratch in C++.",
    longDescription: `
      ft_irc is a fully functional IRC server implementation built from scratch in C++. The server handles multiple
      concurrent clients, manages channels, and implements the IRC protocol for real-time communication.
    `,
    icon: projectIcons.Hash,
    tech: ["C++", "Networking", "Sockets", "IRC Protocol"],
    status: "Completed",
    duration: "1 month",
    teamSize: "3 developers",
    challenges: [
      "Network protocol implementation",
      "Concurrent client handling",
      "Memory management",
    ],
    learnings: ["Network programming", "Protocol design", "Server architecture"],
    images: getProjectImages([]),
    demoUrl: null,
    githubUrl: "https://github.com/yourusername/ft_irc",
    highlights: ["Handles 100+ concurrent clients", "Full IRC protocol compliance"],
  },
  {
    id: "cub3d",
    title: "cub3d",
    description:
      "A 3D game engine inspired by Wolfenstein 3D using raycasting techniques. Renders a 3D perspective in a 2D map with texture mapping.",
    longDescription: `
      cub3d is a 3D game engine built from scratch using raycasting algorithms, inspired by classic games like
      Wolfenstein 3D. The project demonstrates advanced mathematical concepts and graphics programming while
      creating an immersive 3D experience from 2D map data.

      Key features include:
      • Raycasting algorithm for 3D perspective rendering
      • Texture mapping on walls with different orientations
      • Player movement and collision detection
      • Minimap display for navigation
      • Configurable map format with .cub files
      • Smooth player rotation and movement
      • Wall distance calculation for realistic lighting
      • Cross-platform compatibility using MLX library
    `,
    icon: projectIcons.Gamepad2, // 3D raycasting game engine inspired by Wolfenstein
    tech: ["C", "MLX", "Mathematics", "Graphics", "Raycasting", "Linear Algebra"],
    status: "Completed",
    duration: "1.5 months",
    teamSize: "2 developers",
    challenges: [
      "Understanding and implementing raycasting mathematics",
      "Optimizing rendering performance for smooth gameplay",
      "Handling texture mapping and wall orientation detection",
      "Implementing collision detection without glitches",
    ],
    learnings: [
      "Advanced mathematical concepts in game development",
      "Graphics programming and rendering techniques",
      "Performance optimization in real-time applications",
      "Game engine architecture and design patterns",
    ],
    images: getProjectImages([
      // Cub3d images not available yet
    ]),
    demoUrl: null,
    githubUrl: "https://github.com/yourusername/cub3d",
    highlights: [
      "Achieves 60+ FPS on standard hardware",
      "Supports custom map creation",
      "Mathematically accurate raycasting implementation",
    ],
  },
  {
    id: "minishell",
    title: "minishell",
    description:
      "A simple shell implementation that handles command execution, pipes, redirections, and environment variables. Understanding Unix systems at a deeper level.",
    longDescription: `
      minishell is a custom shell implementation built from scratch in C, designed to understand the inner workings
      of Unix-like operating systems. This project involves recreating core shell functionality including command
      parsing, execution, process management, and advanced features like pipes and redirections.

      Key features include:
      • Command line parsing and tokenization
      • Built-in commands (cd, echo, env, exit, export, pwd, unset)
      • External command execution with PATH resolution
      • Environment variable management and expansion
      • Input/output redirection (>, <, >>)
      • Pipe implementation for command chaining
      • Signal handling (Ctrl+C, Ctrl+D, Ctrl+\\)
      • Quote handling and escape sequences
      • Command history functionality
    `,
    icon: projectIcons.Terminal, // Shell implementation - perfect fit
    tech: ["C", "Unix", "System Calls", "Process Management", "File I/O"],
    status: "Completed",
    duration: "2 months",
    teamSize: "2 developers",
    challenges: [
      "Understanding Unix process creation and management",
      "Implementing proper signal handling without race conditions",
      "Memory management in complex parsing scenarios",
      "Handling edge cases in command parsing and execution",
    ],
    learnings: [
      "Deep understanding of Unix system calls",
      "Process management and inter-process communication",
      "Low-level memory management techniques",
      "Shell scripting and command line interface design",
    ],
    images: getProjectImages([
      // Only ft_transcendence images exist, others are empty for now
    ]),
    demoUrl: null,
    githubUrl: "https://github.com/yourusername/minishell",
    highlights: [
      "Passes 100+ test cases including edge cases",
      "Memory leak-free implementation",
      "Supports complex command chaining",
    ],
  },
  {
    id: "philosophers",
    title: "philosophers",
    description:
      "Implementation of the classic dining philosophers problem, demonstrating concurrency control using threads and mutexes to prevent deadlocks and ensure synchronization.",
    longDescription: `
      The Dining Philosophers Problem is a well-known computer science exercise that illustrates the challenges of concurrency, resource sharing, and deadlock prevention in multi-threaded systems. The scenario imagines five philosophers seated around a circular table, each with a plate of spaghetti. Between every two philosophers is one fork, resulting in five forks in total.

      The challenge:
      Each philosopher requires two forks to eat but can only pick up the forks immediately to their left and right. They alternate between three states: thinking, hungry (waiting for forks), and eating.

      Without proper coordination, problems arise:
      • If every philosopher picks up their right-hand fork simultaneously, all forks are occupied, yet no one can eat.
      • This creates a deadlock: each philosopher waits indefinitely for the other fork.
      • In some cases, starvation can occur—where a philosopher never gets to eat because of unfair resource allocation.
    `,
    icon: projectIcons.Brain,
    tech: ["C", "Pthreads", "Mutex", "Concurrency", "Threading", "Time Management"],
    status: "Completed",
    duration: "3 weeks",
    teamSize: "Solo",
    challenges: [
      "Learning how to safely share resources between multiple running threads",
      "Preventing the classic 'deadlock' scenario where everyone gets stuck waiting",
      "Creating precise timing mechanisms to detect when a philosopher 'dies'",
      "Ensuring multiple threads can write output without text getting mixed up",
      "Coordinating the complex lifecycle of eating, sleeping, and thinking states",
    ],
    learnings: [
      "How to create and manage multiple threads running simultaneously in C",
      "Using mutex locks to prevent conflicts when threads access shared data",
      "Implementing real-time monitoring systems with millisecond precision",
      "Understanding how operating systems handle concurrent processes",
      "Designing algorithms that prevent starvation and ensure fairness",
    ],
    images: [],
    demoUrl: null,
    githubUrl: "https://github.com/yourusername/philosophers",
    highlights: [
      "Successfully simulates 1-200 philosophers without crashes or infinite loops",
      "Detects and reports philosopher deaths within 10 milliseconds as required",
      "Produces clean, readable output even with multiple threads writing simultaneously",
      "Implements a fair sharing system where no philosopher starves while others eat",
    ],
  },
  {
    id: "inception",
    title: "inception",
    description:
      "A mini-project that manages Docker containers, images, and networks to simulate a production-like environment, demonstrating containerization and orchestration concepts.",
    longDescription:
      "A mini-project that manages Docker containers, images, and networks to simulate a production-like environment, demonstrating containerization and orchestration concepts.",
    icon: projectIcons.Container, // Docker containers and orchestration
    tech: ["Docker", "Linux", "Bash", "Containers"],
    status: "Completed",
    duration: "2 weeks",
    teamSize: "Solo",
    challenges: ["Container orchestration", "Network configuration"],
    learnings: ["Docker containerization", "System administration"],
    images: [],
    demoUrl: null,
    githubUrl: "https://github.com/yourusername/inception",
    highlights: ["Multi-container setup", "Production-ready configuration"],
  },
  {
    id: "cpp_modules",
    title: "cpp_modules",
    description:
      "A project focused on implementing C++98 modules with classes, inheritance, and polymorphism to reinforce object-oriented programming concepts and modular design.",
    longDescription:
      "A project focused on implementing C++98 modules with classes, inheritance, and polymorphism to reinforce object-oriented programming concepts and modular design.",
    icon: projectIcons.Shapes, // OOP concepts - shapes representing classes and objects
    tech: ["C++98", "OOP", "Classes", "Inheritance"],
    status: "Completed",
    duration: "1 month",
    teamSize: "Solo",
    challenges: ["OOP design patterns", "Memory management"],
    learnings: ["Object-oriented programming", "C++ best practices"],
    images: [],
    demoUrl: null,
    githubUrl: "https://github.com/yourusername/cpp_modules",
    highlights: ["Comprehensive OOP implementation", "C++98 standard compliance"],
  },
  {
    id: "push_swap",
    title: "push_swap",
    description:
      "An algorithmic challenge to sort data on a stack using a limited set of operations, optimizing for the least number of moves through creative stack manipulation.",
    longDescription:
      "An algorithmic challenge to sort data on a stack using a limited set of operations, optimizing for the least number of moves through creative stack manipulation.",
    icon: projectIcons.LayoutList, // Stack sorting algorithm - ordered list/stack
    tech: ["C", "Algorithms", "Data Structures"],
    status: "Completed",
    duration: "3 weeks",
    teamSize: "Solo",
    challenges: ["Algorithm optimization", "Stack manipulation"],
    learnings: ["Sorting algorithms", "Optimization techniques"],
    images: [],
    demoUrl: null,
    githubUrl: "https://github.com/yourusername/push_swap",
    highlights: ["Optimal sorting algorithm", "Minimal operation count"],
  },
  {
    id: "fractol",
    title: "fract'ol",
    description:
      "A fractal visualization program capable of rendering Mandelbrot and Julia sets with interactive controls for zooming and color manipulation using the MLX library.",
    longDescription:
      "A fractal visualization program capable of rendering Mandelbrot and Julia sets with interactive controls for zooming and color manipulation using the MLX library.",
    icon: projectIcons.Infinity, // Fractals are infinite mathematical patterns
    tech: ["C", "MLX", "Mathematics", "Graphics"],
    status: "Completed",
    duration: "1 month",
    teamSize: "Solo",
    challenges: ["Mathematical precision", "Performance optimization"],
    learnings: ["Complex mathematics", "Graphics programming"],
    images: [],
    demoUrl: null,
    githubUrl: "https://github.com/yourusername/fractol",
    highlights: ["Real-time fractal rendering", "Interactive zoom and color controls"],
  },
  {
    id: "pipex",
    title: "pipex",
    description:
      "A program that recreates UNIX pipe behavior, enabling the execution of chained commands with proper handling of input/output redirections and error management.",
    longDescription:
      "A program that recreates UNIX pipe behavior, enabling the execution of chained commands with proper handling of input/output redirections and error management.",
    icon: projectIcons.ArrowRightLeft, // Pipe behavior - data flowing between commands
    tech: ["C", "Unix", "Pipes", "Process Control"],
    status: "Completed",
    duration: "2 weeks",
    teamSize: "Solo",
    challenges: ["Process communication", "Error handling"],
    learnings: ["Unix pipes", "Process management"],
    images: [],
    demoUrl: null,
    githubUrl: "https://github.com/yourusername/pipex",
    highlights: ["Accurate pipe behavior", "Robust error handling"],
  },
  {
    id: "get_next_line",
    title: "get_next_line",
    description:
      "A utility function that reads a single line from a file descriptor efficiently, handling buffering and memory allocation carefully to avoid leaks and ensure correctness.",
    longDescription:
      "A utility function that reads a single line from a file descriptor efficiently, handling buffering and memory allocation carefully to avoid leaks and ensure correctness.",
    icon: projectIcons.FileText, // File reading utility - file/text processing
    tech: ["C", "File I/O", "Memory Management"],
    status: "Completed",
    duration: "2 weeks",
    teamSize: "Solo",
    challenges: ["Memory management", "Buffer optimization"],
    learnings: ["File I/O operations", "Memory allocation strategies"],
    images: [],
    demoUrl: null,
    githubUrl: "https://github.com/yourusername/get_next_line",
    highlights: ["Zero memory leaks", "Optimized buffer usage"],
  },
  {
    id: "ft_printf",
    title: "ft_printf",
    description:
      "Custom implementation of the C standard printf function, supporting multiple format specifiers, flags, width, precision, and variadic arguments.",
    longDescription: `
    ft_printf is a core C project in the 42 curriculum where you recreate the standard printf function.
    It reinforces deep C concepts like:
    • Variadic functions using stdarg.h (va_list, va_start, va_arg, va_end)
    • Parsing format strings to process specifiers such as %c, %s, %p, %d, %i, %u, %x, %X, %%
    • Supporting flags: -, 0, width, precision (with .), and field modifiers
    • Handling type promotion and base conversion (e.g. hexadecimal, unsigned)
    • Writing low-level output using write(), and correctly returning the number of characters printed
  `,
    icon: projectIcons.Printer,
    tech: ["C", "Variadic Functions", "String Parsing", "Write", "Memory Management"],
    status: "Completed",
    duration: "3–4 weeks",
    teamSize: "Solo",
    challenges: [
      "Parsing complex format strings with flags, width, and precision",
      "Handling variadic arguments and type promotion correctly",
      "Implementing base conversions and pointer formatting",
      "Ensuring robust memory and error handling",
    ],
    learnings: [
      "Deep understanding of stdarg macros and variadic functions",
      "String parsing and parsing logic design",
      "Number formatting in different bases",
      "Precise output control and return value management",
    ],
    images: [], // You can add screenshots of output tests or format parser diagrams.
    demoUrl: null,
    githubUrl: "https://github.com/yourusername/ft_printf",
    highlights: [
      "Supports all standard C specifiers: %c, %s, %p, %d, %i, %u, %x, %X, %%",
      "Correct handling of flags like width, precision, zero-padding, left-justify",
      "Consistently returns accurate character count or negative on error",
    ],
  },
  {
    id: "born2beroot",
    title: "Born2beroot",
    description:
      "A Linux sysadmin project where you set up a virtual machine with Debian/CentOS, configure users, security, networking, services, and enforce strict password policies.",
    longDescription: `
    Born2beroot is a foundational systems administration project in the 42 curriculum.
    You'll learn to:
    • Install and configure a Linux VM (Debian or CentOS/Rocky) using VirtualBox or similar
    • Set up SSH on a non-default port (e.g., 4242), disable root login
    • Configure UFW firewall rules to secure incoming connections
    • Implement password policies using pam_pwquality (minimum length, complexity, expiration, reuse constraints, username checks)
    • Configure system services like cron, fail2ban, AppArmor/SELinux for hardening
    • Apply LVM partitioning, hostname setting, and basic scripting for automation
  `,
    icon: projectIcons.Settings, // System administration and configuration
    tech: [
      "Linux",
      "Debian",
      "VirtualBox",
      "SSH",
      "UFW",
      "LVM",
      "AppArmor",
      "pam_pwquality",
      "Fail2ban",
      "Cron",
      "Shell Scripting",
    ],
    status: "Completed",
    duration: "4–6 weeks",
    teamSize: "Solo",
    challenges: [
      "Understanding Linux security modules (AppArmor/SELinux)",
      "Writing cron scripts for monitoring or automation",
      "Configuring LVM and firewall settings reliably",
      "Developing password policy with pam_pwquality and expiration controls",
      "Securing SSH while maintaining connectivity behind VM network setups",
    ],
    learnings: [
      "VM setup and Linux sysadmin fundamentals",
      "Firewall rules and secure remote access",
      "Password strength, expiration, and management with PAM",
      "Service hardening and intrusion protection (fail2ban)",
      "System automation via scripting and cron",
    ],
    images: [], // add terminal or config screenshots as needed.
    demoUrl: null,
    githubUrl: "https://github.com/yourusername/born2beroot",
    highlights: [
      "SSH configured on port 4242 with root disabled",
      "Strict password policy enforced (min length 10, complexity, expiration, history)",
      "UFW firewall enabled with selective allowed ports",
      "AppArmor/SELinux, fail2ban, cron scripts delivering robust security",
    ],
  },
  {
    id: "libft",
    title: "Libft",
    description:
      "Custom implementation of essential C standard library functions, including string handling, memory management, and linked list utilities.",
    longDescription:
      "The Libft project focuses on building a custom library that replicates and extends functionalities of the C standard library. It includes key functions for string manipulation, memory allocation, and linked list operations. The project emphasizes writing efficient, memory-safe code and mastering low-level programming concepts, forming a strong foundation for advanced C programming and systems development. This library will also be a core part of my future projects, as I will include and reuse it in more complex programs I build later.",
    icon: projectIcons.LibraryBig,
    tech: [
      "C",
      "Pointers",
      "Algorithms",
      "Recursion",
      "Linked Lists",
      "Memory Management",
      "Data Structures",
    ],
    status: "Completed",
    duration: "3 weeks",
    teamSize: "Solo",
    challenges: [
      "Ensuring memory safety and preventing leaks",
      "Optimizing functions for performance and edge cases",
      "Implementing robust string and linked list operations",
      "Learning and writing an efficient Makefile for build automation",
    ],
    learnings: [
      "In-depth knowledge of the C standard library functions",
      "Mastering pointers, memory management, and data structures",
      "Implementing linked lists from scratch",
      "Writing recursive functions",
    ],
    images: [],
    demoUrl: null,
    githubUrl: "https://github.com/karolinakwasny/libft_with_bonus.git",
    highlights: [
      "Robust, memory-safe handling of dynamic memory and pointers",
      "Automated build process using a Makefile",
      "Memory-safe implementation",
    ],
  },
];
