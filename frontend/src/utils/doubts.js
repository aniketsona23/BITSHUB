// util.js
import avatar from "../assets/avatar.jpg";

const Doubts = [
    {
        id: 1,
        user: {
            username: "Aniket Sonawane",
            img: avatar,
            bitsid: "2022B3A70031G",
        },
        doubt: {
            title: "Understanding Algorithms",
            doubt: "What are some key algorithms I should learn as a beginner?",
        },
        comments: [
            {
                commentId: 101,
                user: {
                    username: "Kunal Mishra",
                    img: avatar,
                    bitsid: "2022B3A70032G",
                },
                comment:
                    "Start with sorting algorithms like quicksort and mergesort.",
                time: "10 Oct, 2024 10:00",
            },
            {
                commentId: 102,
                user: {
                    username: "Soham",
                    img: avatar,
                    bitsid: "2022B3A70036G",
                },
                comment:
                    "Don't forget about searching algorithms like binary search.",
                time: "10 Oct, 2024 11:00",
            },
        ],
    },
    {
        id: 2,
        user: {
            username: "Krish Patel",
            img: avatar,
            bitsid: "2022B3A70041G",
        },
        doubt: {
            title: "Getting Started with Python",
            doubt: "What resources can help me learn Python effectively?",
        },
        comments: [
            {
                commentId: 201,
                user: {
                    username: "Gyan",
                    img: avatar,
                    bitsid: "2022B3A70039G",
                },
                comment: "Check out Codecademy for interactive Python courses.",
                time: "11 Oct, 2024 12:00",
            },
            {
                commentId: 202,
                user: {
                    username: "Pranav M R",
                    img: avatar,
                    bitsid: "2022B3A70034G",
                },
                comment:
                    "Automate the Boring Stuff with Python is also a great book.",
                time: "11 Oct, 2024 13:00",
            },
        ],
    },
    {
        id: 3,
        user: {
            username: "Gyan",
            img: avatar,
            bitsid: "2022B3A70039G",
        },
        doubt: {
            title: "Web Development Basics",
            doubt: "What should I focus on when learning web development?",
        },
        comments: [
            {
                commentId: 301,
                user: {
                    username: "Soham",
                    img: avatar,
                    bitsid: "2022B3A70036G",
                },
                comment:
                    "Start with HTML and CSS before diving into JavaScript.",
                time: "12 Oct, 2024 14:00",
            },
            {
                commentId: 302,
                user: {
                    username: "Aniket Sonawane",
                    img: avatar,
                    bitsid: "2022B3A70031G",
                },
                comment:
                    "Learn about responsive design using frameworks like Bootstrap.",
                time: "12 Oct, 2024 15:30",
            },
        ],
    },
    {
        id: 4,
        user: {
            username: "Nachiket Naik",
            img: avatar,
            bitsid: "2022B3A70045G",
        },
        doubt: {
            title: "Tips for Data Structures",
            doubt: "What data structures should I focus on for coding interviews?",
        },
        comments: [
            {
                commentId: 401,
                user: {
                    username: "Pranav M R",
                    img: avatar,
                    bitsid: "2022B3A70034G",
                },
                comment:
                    "Arrays and linked lists are fundamental, make sure you understand them.",
                time: "13 Oct, 2024 09:00",
            },
            {
                commentId: 402,
                user: {
                    username: "Gyan",
                    img: avatar,
                    bitsid: "2022B3A70039G",
                },
                comment:
                    "Don't ignore trees and graphs; they're common in interviews.",
                time: "13 Oct, 2024 09:30",
            },
        ],
    },
    {
        id: 5,
        user: {
            username: "Soham",
            img: avatar,
            bitsid: "2022B3A70046G",
        },
        doubt: {
            title: "Learning Git",
            doubt: "How do I get started with Git version control?",
        },
        comments: [
            {
                commentId: 501,
                user: {
                    username: "Aniket Sonawane",
                    img: avatar,
                    bitsid: "2022B3A70031G",
                },
                comment:
                    "Begin with understanding basic commands like clone, add, commit, and push.",
                time: "14 Oct, 2024 10:00",
            },
            {
                commentId: 502,
                user: {
                    username: "Krish Patel",
                    img: avatar,
                    bitsid: "2022B3A70041G",
                },
                comment: "GitHub has great resources for beginners.",
                time: "14 Oct, 2024 11:30",
            },
        ],
    },
    {
        id: 6,
        user: {
            username: "Pranav M R",
            img: avatar,
            bitsid: "2022B3A70034G",
        },
        doubt: {
            title: "Understanding APIs",
            doubt: "What are APIs and how do I use them in my projects?",
        },
        comments: [
            {
                commentId: 601,
                user: {
                    username: "Soham",
                    img: avatar,
                    bitsid: "2022B3A70036G",
                },
                comment:
                    "APIs allow different software systems to communicate; start by reading documentation.",
                time: "15 Oct, 2024 12:00",
            },
            {
                commentId: 602,
                user: {
                    username: "Gyan",
                    img: avatar,
                    bitsid: "2022B3A70039G",
                },
                comment: "Postman is a great tool for testing APIs.",
                time: "15 Oct, 2024 12:45",
            },
        ],
    },
    {
        id: 7,
        user: {
            username: "Nachiket Naik",
            img: avatar,
            bitsid: "2022B3A70045G",
        },
        doubt: {
            title: "Best Practices in Programming",
            doubt: "What are some best practices I should follow in programming?",
        },
        comments: [
            {
                commentId: 701,
                user: {
                    username: "Aniket Sonawane",
                    img: avatar,
                    bitsid: "2022B3A70031G",
                },
                comment:
                    "Always write clean, readable code and use comments where necessary.",
                time: "16 Oct, 2024 10:30",
            },
            {
                commentId: 702,
                user: {
                    username: "Pranav M R",
                    img: avatar,
                    bitsid: "2022B3A70034G",
                },
                comment:
                    "Testing your code regularly can save a lot of debugging time later.",
                time: "16 Oct, 2024 11:00",
            },
        ],
    },
    {
        id: 8,
        user: {
            username: "Gyan",
            img: avatar,
            bitsid: "2022B3A70039G",
        },
        doubt: {
            title: "Machine Learning Basics",
            doubt: "What are some essential concepts to learn in machine learning?",
        },
        comments: [
            {
                commentId: 801,
                user: {
                    username: "Kunal Mishra",
                    img: avatar,
                    bitsid: "2022B3A70032G",
                },
                comment:
                    "Start with supervised and unsupervised learning concepts.",
                time: "17 Oct, 2024 14:00",
            },
            {
                commentId: 802,
                user: {
                    username: "Soham",
                    img: avatar,
                    bitsid: "2022B3A70036G",
                },
                comment:
                    "Familiarize yourself with common algorithms like linear regression.",
                time: "17 Oct, 2024 15:00",
            },
        ],
    },
    {
        id: 9,
        user: {
            username: "Pranav M R",
            img: avatar,
            bitsid: "2022B3A70034G",
        },
        doubt: {
            title: "Mobile App Development",
            doubt: "What should I know before starting mobile app development?",
        },
        comments: [
            {
                commentId: 901,
                user: {
                    username: "Nachiket Naik",
                    img: avatar,
                    bitsid: "2022B3A70045G",
                },
                comment:
                    "Choose between native or hybrid app development based on your needs.",
                time: "18 Oct, 2024 10:15",
            },
            {
                commentId: 902,
                user: {
                    username: "Gyan",
                    img: avatar,
                    bitsid: "2022B3A70039G",
                },
                comment:
                    "Learn about user experience design principles for mobile apps.",
                time: "18 Oct, 2024 10:45",
            },
        ],
    },
    {
        id: 10,
        user: {
            username: "Kunal Mishra",
            img: avatar,
            bitsid: "2022B3A70032G",
        },
        doubt: {
            title: "Cybersecurity Fundamentals",
            doubt: "What are the basic principles of cybersecurity?",
        },
        comments: [
            {
                commentId: 1001,
                user: {
                    username: "Pranav M R",
                    img: avatar,
                    bitsid: "2022B3A70034G",
                },
                comment:
                    "Understand the importance of securing sensitive information.",
                time: "19 Oct, 2024 09:30",
            },
            {
                commentId: 1002,
                user: {
                    username: "Soham",
                    img: avatar,
                    bitsid: "2022B3A70036G",
                },
                comment:
                    "Always keep software up to date to protect against vulnerabilities.",
                time: "19 Oct, 2024 10:00",
            },
        ],
    },
    {
        id: 11,
        user: {
            username: "Nachiket Naik",
            img: avatar,
            bitsid: "2022B3A70045G",
        },
        doubt: {
            title: "Learning SQL",
            doubt: "What should I focus on when learning SQL?",
        },
        comments: [
            {
                commentId: 1101,
                user: {
                    username: "Gyan",
                    img: avatar,
                    bitsid: "2022B3A70039G",
                },
                comment:
                    "Understand the basic CRUD operations: Create, Read, Update, Delete.",
                time: "20 Oct, 2024 11:00",
            },
            {
                commentId: 1102,
                user: {
                    username: "Pranav M R",
                    img: avatar,
                    bitsid: "2022B3A70034G",
                },
                comment:
                    "Learn about joins and how to connect tables in your queries.",
                time: "20 Oct, 2024 11:30",
            },
        ],
    },
    {
        id: 12,
        user: {
            username: "Aniket Sonawane",
            img: avatar,
            bitsid: "2022B3A70031G",
        },
        doubt: {
            title: "Career Paths in Tech",
            doubt: "What are some common career paths in technology?",
        },
        comments: [
            {
                commentId: 1201,
                user: {
                    username: "Soham",
                    img: avatar,
                    bitsid: "2022B3A70036G",
                },
                comment:
                    "Software development, data science, and cybersecurity are great options.",
                time: "21 Oct, 2024 12:00",
            },
            {
                commentId: 1202,
                user: {
                    username: "Krish Patel",
                    img: avatar,
                    bitsid: "2022B3A70041G",
                },
                comment:
                    "Consider what excites you the most, whether it's coding, analyzing data, or securing systems.",
                time: "21 Oct, 2024 12:30",
            },
        ],
    },
    {
        id: 13,
        user: {
            username: "Gyan",
            img: avatar,
            bitsid: "2022B3A70039G",
        },
        doubt: {
            title: "Time Management for Students",
            doubt: "What are some effective time management strategies for students?",
        },
        comments: [
            {
                commentId: 1301,
                user: {
                    username: "Nachiket Naik",
                    img: avatar,
                    bitsid: "2022B3A70045G",
                },
                comment: "Prioritize tasks using a planner or a to-do list.",
                time: "22 Oct, 2024 09:00",
            },
            {
                commentId: 1302,
                user: {
                    username: "Kunal Mishra",
                    img: avatar,
                    bitsid: "2022B3A70032G",
                },
                comment: "Set specific time blocks for studying and breaks.",
                time: "22 Oct, 2024 10:15",
            },
        ],
    },
    {
        id: 14,
        user: {
            username: "Soham",
            img: avatar,
            bitsid: "2022B3A70036G",
        },
        doubt: {
            title: "Best Programming Languages to Learn",
            doubt: "What are the best programming languages to learn in 2024?",
        },
        comments: [
            {
                commentId: 1401,
                user: {
                    username: "Pranav M R",
                    img: avatar,
                    bitsid: "2022B3A70034G",
                },
                comment:
                    "Python, JavaScript, and Go are currently in high demand.",
                time: "23 Oct, 2024 11:30",
            },
            {
                commentId: 1402,
                user: {
                    username: "Aniket Sonawane",
                    img: avatar,
                    bitsid: "2022B3A70031G",
                },
                comment:
                    "Consider your interests; some languages are better suited for specific fields.",
                time: "23 Oct, 2024 12:00",
            },
        ],
    },
    {
        id: 15,
        user: {
            username: "Kunal Mishra",
            img: avatar,
            bitsid: "2022B3A70032G",
        },
        doubt: {
            title: "Building a Personal Portfolio",
            doubt: "How can I build an effective personal portfolio?",
        },
        comments: [
            {
                commentId: 1501,
                user: {
                    username: "Gyan",
                    img: avatar,
                    bitsid: "2022B3A70039G",
                },
                comment:
                    "Showcase your best projects and highlight your skills.",
                time: "24 Oct, 2024 14:00",
            },
            {
                commentId: 1502,
                user: {
                    username: "Nachiket Naik",
                    img: avatar,
                    bitsid: "2022B3A70045G",
                },
                comment:
                    "Make sure it's easy to navigate and visually appealing.",
                time: "24 Oct, 2024 15:00",
            },
        ],
    },
];

const addcomment = (id, comment) => {
    let doubt;
    for (doubt of Doubts) {
        if (doubt.id == id) {
            doubt.comments.push(comment);
        }
    }
};

export { Doubts, addcomment };
