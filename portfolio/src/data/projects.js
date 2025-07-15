import {
  Terminal,
  Code,
  Users,
  Gamepad2,
  Cpu,
  LayoutList,
  Layers,
  Puzzle,
  GitBranch,
} from "lucide-vue-next";
import { getProjectImages } from "../utils/assetUrls.js";

export const projects = [
  {
    id: "ft_transcendence",
    title: "ft_transcendence",
    description:
      "A 3D Pong game with user authentication, 2FA, multi-language support, accessibility features, and tournament features. Built with modern web technologies.",
    longDescription: `
      ft_transcendence is a comprehensive web application that recreates the classic Pong game with modern features.
      The project includes real-time multiplayer gameplay, user authentication and profiles, a chat system for
      communication between players, and tournament functionality to organize competitive matches.

      Key features include:
      • Real-time multiplayer Pong gameplay using WebSocket connections
      • User authentication system with secure login/logout
      • Player profiles with game statistics and match history
      • Tournament system with bracket generation and match scheduling
      • Chat functionality for player communication
      • Responsive design that works across different devices
      • Game spectating mode for watching ongoing matches
    `,
    icon: Gamepad2,
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
      "Django REST Framework",
      "OAuth2 (42 API)",
      "Neon",
      "Render",
    ],
    status: "Completed",
    duration: "3 months",
    teamSize: "3 developers",
    challenges: [
      "Implementing real-time game synchronization across multiple clients",
      "Handling network latency and ensuring fair gameplay",
      "Designing scalable tournament bracket system",
      "Managing WebSocket connections and reconnection logic",
    ],
    learnings: [
      "Real-time web application architecture",
      "WebSocket protocol and implementation",
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
      "Successfully handled 50+ concurrent players",
      "Zero-downtime deployment with Docker",
      "Responsive design tested on 10+ devices",
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
    icon: Terminal,
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
    icon: Code,
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
    id: "ft_irc",
    title: "ft_irc",
    description:
      "An Internet Relay Chat server implementation that handles multiple clients, channels, and IRC protocol commands. Built from scratch in C++.",
    longDescription: `
      ft_irc is a fully functional IRC server implementation built from scratch in C++. The server handles multiple
      concurrent clients, manages channels, and implements the IRC protocol for real-time communication.
    `,
    icon: Users,
    tech: ["C++", "Networking", "Sockets", "IRC Protocol"],
    status: "Completed",
    duration: "2 months",
    teamSize: "2 developers",
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
    id: "get_next_line",
    title: "get_next_line",
    description:
      "A utility function that reads a single line from a file descriptor efficiently, handling buffering and memory allocation carefully to avoid leaks and ensure correctness.",
    longDescription:
      "A utility function that reads a single line from a file descriptor efficiently, handling buffering and memory allocation carefully to avoid leaks and ensure correctness.",
    icon: Cpu,
    tech: ["C", "File I/O", "Memory Management"],
    status: "Completed",
    duration: "2 weeks",
    teamSize: "Individual",
    challenges: ["Memory management", "Buffer optimization"],
    learnings: ["File I/O operations", "Memory allocation strategies"],
    images: [],
    demoUrl: null,
    githubUrl: "https://github.com/yourusername/get_next_line",
    highlights: ["Zero memory leaks", "Optimized buffer usage"],
  },
  {
    id: "philosophers",
    title: "philosophers",
    description:
      "Implementation of the classic dining philosophers problem, demonstrating concurrency control using threads and mutexes to prevent deadlocks and ensure synchronization.",
    longDescription:
      "Implementation of the classic dining philosophers problem, demonstrating concurrency control using threads and mutexes to prevent deadlocks and ensure synchronization.",
    icon: Puzzle,
    tech: ["C", "Concurrency", "Threads", "Mutex"],
    status: "Completed",
    duration: "3 weeks",
    teamSize: "Individual",
    challenges: ["Deadlock prevention", "Thread synchronization"],
    learnings: ["Concurrent programming", "Synchronization mechanisms"],
    images: [],
    demoUrl: null,
    githubUrl: "https://github.com/yourusername/philosophers",
    highlights: ["Deadlock-free implementation", "Efficient resource sharing"],
  },
  {
    id: "fractol",
    title: "fract'ol",
    description:
      "A fractal visualization program capable of rendering Mandelbrot and Julia sets with interactive controls for zooming and color manipulation using the MLX library.",
    longDescription:
      "A fractal visualization program capable of rendering Mandelbrot and Julia sets with interactive controls for zooming and color manipulation using the MLX library.",
    icon: Layers,
    tech: ["C", "MLX", "Mathematics", "Graphics"],
    status: "Completed",
    duration: "1 month",
    teamSize: "Individual",
    challenges: ["Mathematical precision", "Performance optimization"],
    learnings: ["Complex mathematics", "Graphics programming"],
    images: [],
    demoUrl: null,
    githubUrl: "https://github.com/yourusername/fractol",
    highlights: ["Real-time fractal rendering", "Interactive zoom and color controls"],
  },
  {
    id: "inception",
    title: "inception",
    description:
      "A mini-project that manages Docker containers, images, and networks to simulate a production-like environment, demonstrating containerization and orchestration concepts.",
    longDescription:
      "A mini-project that manages Docker containers, images, and networks to simulate a production-like environment, demonstrating containerization and orchestration concepts.",
    icon: LayoutList,
    tech: ["Docker", "Linux", "Bash", "Containers"],
    status: "Completed",
    duration: "2 weeks",
    teamSize: "Individual",
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
    icon: GitBranch,
    tech: ["C++98", "OOP", "Classes", "Inheritance"],
    status: "Completed",
    duration: "1 month",
    teamSize: "Individual",
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
    icon: Cpu,
    tech: ["C", "Algorithms", "Data Structures"],
    status: "Completed",
    duration: "3 weeks",
    teamSize: "Individual",
    challenges: ["Algorithm optimization", "Stack manipulation"],
    learnings: ["Sorting algorithms", "Optimization techniques"],
    images: [],
    demoUrl: null,
    githubUrl: "https://github.com/yourusername/push_swap",
    highlights: ["Optimal sorting algorithm", "Minimal operation count"],
  },
  {
    id: "so_long",
    title: "so_long",
    description:
      "A simple 2D game built with the MLX library, featuring basic player movement, collectibles, and level completion mechanics to practice game development fundamentals.",
    longDescription:
      "A simple 2D game built with the MLX library, featuring basic player movement, collectibles, and level completion mechanics to practice game development fundamentals.",
    icon: Gamepad2,
    tech: ["C", "MLX", "Game Development"],
    status: "Completed",
    duration: "2 weeks",
    teamSize: "Individual",
    challenges: ["Game loop implementation", "Collision detection"],
    learnings: ["Game development basics", "Event handling"],
    images: [],
    demoUrl: null,
    githubUrl: "https://github.com/yourusername/so_long",
    highlights: ["Smooth gameplay", "Custom level design"],
  },
  {
    id: "pipex",
    title: "pipex",
    description:
      "A program that recreates UNIX pipe behavior, enabling the execution of chained commands with proper handling of input/output redirections and error management.",
    longDescription:
      "A program that recreates UNIX pipe behavior, enabling the execution of chained commands with proper handling of input/output redirections and error management.",
    icon: Terminal,
    tech: ["C", "Unix", "Pipes", "Process Control"],
    status: "Completed",
    duration: "2 weeks",
    teamSize: "Individual",
    challenges: ["Process communication", "Error handling"],
    learnings: ["Unix pipes", "Process management"],
    images: [],
    demoUrl: null,
    githubUrl: "https://github.com/yourusername/pipex",
    highlights: ["Accurate pipe behavior", "Robust error handling"],
  },
  {
    id: "libft",
    title: "libft",
    description:
      "Custom implementation of standard C library functions, focusing on string manipulation, memory management, and linked list utilities to build a foundational library.",
    longDescription:
      "Custom implementation of standard C library functions, focusing on string manipulation, memory management, and linked list utilities to build a foundational library.",
    icon: Code,
    tech: ["C", "Memory Management", "Algorithms"],
    status: "Completed",
    duration: "3 weeks",
    teamSize: "Individual",
    challenges: ["Memory safety", "Function optimization"],
    learnings: ["C standard library", "Low-level programming"],
    images: [],
    demoUrl: null,
    githubUrl: "https://github.com/yourusername/libft",
    highlights: ["Complete standard library recreation", "Memory-safe implementation"],
  },
];
