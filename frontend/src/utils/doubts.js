// util.js

const Doubts = [
    {
        id: 1,
        courseId: 1,
        votes: 5,
        user: {
            username: "Aniket Sonawane",
            img: "avatar.jpg",
            bitsid: "2022B3A70031G",
        },
        doubt: {
            title: "Understanding Algorithms",
            doubt: "What are some key algorithms I should learn as a beginner?",
        },
        comments: [
            {
                commentId: 101,
                votes: 3,
                user: {
                    username: "Divyam Gupta",
                    img: "/assets/avatar.jpg",
                    bitsid: "2022B3A70032G",
                },
                comment:
                    "Start with sorting algorithms like quicksort and mergesort.",
                time: "10 Oct, 2024 10:00",
            },
            {
                commentId: 102,
                votes: 4,
                user: {
                    username: "Vineet",
                    img: "avatar.jpg",
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
        courseId: 1,
        votes: 8,
        user: {
            username: "Vanshaj",
            img: "avatar.jpg",
            bitsid: "2022B3A70041G",
        },
        doubt: {
            title: "Getting Started with Python",
            doubt: "What resources can help me learn Python effectively?",
        },
        comments: [
            {
                commentId: 201,
                votes: 5,
                user: {
                    username: "Amish Singhal",
                    img: "avatar.jpg",
                    bitsid: "2022B3A70039G",
                },
                comment: "Check out Codecademy for interactive Python courses.",
                time: "11 Oct, 2024 12:00",
            },
            {
                commentId: 202,
                votes: 2,
                user: {
                    username: "Harsh Deshwal",
                    img: "avatar.jpg",
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
        courseId: 3,
        votes: 6,
        user: {
            username: "Amish Singhal",
            img: "avatar.jpg",
            bitsid: "2022B3A70039G",
        },
        doubt: {
            title: "Web Development Basics",
            doubt: "What should I focus on when learning web development?",
        },
        comments: [
            {
                commentId: 301,
                votes: 4,
                user: {
                    username: "Vineet",
                    img: "avatar.jpg",
                    bitsid: "2022B3A70036G",
                },
                comment:
                    "Start with HTML and CSS before diving into JavaScript.",
                time: "12 Oct, 2024 14:00",
            },
            {
                commentId: 302,
                votes: 3,
                user: {
                    username: "Aniket Sonawane",
                    img: "avatar.jpg",
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
        courseId: 4,
        votes: 9,
        user: {
            username: "Vedant Kamath",
            img: "avatar.jpg",
            bitsid: "2022B3A70045G",
        },
        doubt: {
            title: "Tips for Data Structures",
            doubt: "What data structures should I focus on for coding interviews?",
        },
        comments: [
            {
                commentId: 401,
                votes: 6,
                user: {
                    username: "Harsh Deshwal",
                    img: "avatar.jpg",
                    bitsid: "2022B3A70034G",
                },
                comment:
                    "Arrays and linked lists are fundamental, make sure you understand them.",
                time: "13 Oct, 2024 09:00",
            },
            {
                commentId: 402,
                votes: 7,
                user: {
                    username: "Amish Singhal",
                    img: "avatar.jpg",
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
        courseId: 5,
        votes: 10,
        user: {
            username: "Mayukh Saha",
            img: "avatar.jpg",
            bitsid: "2022B3A70046G",
        },
        doubt: {
            title: "Learning Git",
            doubt: "How do I get started with Git version control?",
        },
        comments: [
            {
                commentId: 501,
                votes: 6,
                user: {
                    username: "Aniket Sonawane",
                    img: "avatar.jpg",
                    bitsid: "2022B3A70031G",
                },
                comment:
                    "Begin with understanding basic commands like clone, add, commit, and push.",
                time: "14 Oct, 2024 10:00",
            },
            {
                commentId: 502,
                votes: 8,
                user: {
                    username: "Vanshaj",
                    img: "avatar.jpg",
                    bitsid: "2022B3A70041G",
                },
                comment: "GitHub has great resources for beginners.",
                time: "14 Oct, 2024 11:30",
            },
        ],
    },
    {
        id: 6,
        courseId: 1,
        votes: 4,
        user: {
            username: "Harsh Deshwal",
            img: "avatar.jpg",
            bitsid: "2022B3A70034G",
        },
        doubt: {
            title: "Understanding APIs",
            doubt: "What are APIs and how do I use them in my projects?",
        },
        comments: [
            {
                commentId: 601,
                votes: 3,
                user: {
                    username: "Vineet",
                    img: "avatar.jpg",
                    bitsid: "2022B3A70036G",
                },
                comment:
                    "APIs allow different software systems to communicate; start by reading documentation.",
                time: "15 Oct, 2024 12:00",
            },
            {
                commentId: 602,
                votes: 5,
                user: {
                    username: "Amish Singhal",
                    img: "avatar.jpg",
                    bitsid: "2022B3A70039G",
                },
                comment: "Postman is a great tool for testing APIs.",
                time: "15 Oct, 2024 12:45",
            },
        ],
    },
    {
        id: 7,
        courseId: 5,
        votes: 3,
        user: {
            username: "Vedant Kamath",
            img: "avatar.jpg",
            bitsid: "2022B3A70045G",
        },
        doubt: {
            title: "Best Practices in Programming",
            doubt: "What are some best practices I should follow in programming?",
        },
        comments: [
            {
                commentId: 701,
                votes: 6,
                user: {
                    username: "Aniket Sonawane",
                    img: "avatar.jpg",
                    bitsid: "2022B3A70031G",
                },
                comment:
                    "Always write clean, readable code and use 'comments' where necessary.",
                time: "16 Oct, 2024 10:30",
            },
            {
                commentId: 702,
                votes: 7,
                user: {
                    username: "Harsh Deshwal",
                    img: "avatar.jpg",
                    bitsid: "2022B3A70034G",
                },
                comment:
                    "Testing your code regularly can save a lot of debugging 'time' later.",
                time: "16 Oct, 2024 11:00",
            },
        ],
    },
    {
        id: 8,
        courseId: 4,
        votes: 6,
        user: {
            username: "Amish Singhal",
            img: "avatar.jpg",
            bitsid: "2022B3A70039G",
        },
        doubt: {
            title: "Machine Learning Basics",
            doubt: "What are some essential concepts to learn in machine learning?",
        },
        comments: [
            {
                commentId: 801,
                votes: 8,
                user: {
                    username: "Divyam Gupta",
                    img: "avatar.jpg",
                    bitsid: "2022B3A70032G",
                },
                comment:
                    "Start with supervised and unsupervised learning concepts.",
                time: "17 Oct, 2024 14:00",
            },
            {
                commentId: 802,
                votes: 5,
                user: {
                    username: "Vineet",
                    img: "avatar.jpg",
                    bitsid: "2022B3A70036G",
                },
                comment:
                    "Familiarize yourself with libraries like TensorFlow and scikit-learn.",
                time: "17 Oct, 2024 14:30",
            },
        ],
    },
    {
        id: 9,
        courseId: 4,
        votes: 7,
        user: {
            username: "Vedant Kamath",
            img: "avatar.jpg",
            bitsid: "2022B3A70045G",
        },
        doubt: {
            title: "Getting Started with Mobile App Development",
            doubt: "Any advice on starting with mobile app development?",
        },
        comments: [
            {
                commentId: 901,
                votes: 4,
                user: {
                    username: "Amish Singhal",
                    img: "avatar.jpg",
                    bitsid: "2022B3A70039G",
                },
                comment:
                    "Learn the basics of Android or iOS development depending on your platform of choice.",
                time: "18 Oct, 2024 11:00",
            },
            {
                commentId: 902,
                votes: 6,
                user: {
                    username: "Vanshaj",
                    img: "avatar.jpg",
                    bitsid: "2022B3A70041G",
                },
                comment:
                    "Try out some starter projects to get a feel of the development environment.",
                time: "18 Oct, 2024 11:30",
            },
        ],
    },
    {
        id: 10,
        courseId: 5,
        votes: 8,
        user: {
            username: "Vineet",
            img: "avatar.jpg",
            bitsid: "2022B3A70046G",
        },
        doubt: {
            title: "Advanced JavaScript Concepts",
            doubt: "What are some advanced JavaScript concepts I should learn?",
        },
        comments: [
            {
                commentId: 1001,
                votes: 9,
                user: {
                    username: "Amish Singhal",
                    img: "avatar.jpg",
                    bitsid: "2022B3A70039G",
                },
                comment: "Look into closures and higher-order functions.",
                time: "19 Oct, 2024 10:15",
            },
            {
                commentId: 1002,
                votes: 7,
                user: {
                    username: "Divyam Gupta",
                    img: "avatar.jpg",
                    bitsid: "2022B3A70032G",
                },
                comment:
                    "Asynchronous programming with async/await is essential for modern JavaScript.",
                time: "19 Oct, 2024 11:00",
            },
        ],
    },
    {
        id: 11,
        courseId: 3,
        votes: 2,
        user: {
            username: "Amish Singhal",
            img: "avatar.jpg",
            bitsid: "2022B3A70025G",
        },
        doubt: {
            title: "Data Structures in Java",
            doubt: "Which data structures should I focus on for interviews?",
        },
        comments: [
            {
                commentId: 301,
                votes: 1,
                user: {
                    username: "Harsh Deshwal",
                    img: "avatar.jpg",
                    bitsid: "2022B3A70027G",
                },
                comment:
                    "Make sure to understand arrays, linked lists, and trees.",
                time: "10 Oct, 2024 12:00",
            },
        ],
    },
    {
        id: 12,
        courseId: 4,
        votes: 4,
        user: {
            username: "Vedant Kamath",
            img: "avatar.jpg",
            bitsid: "2022B3A70034G",
        },
        doubt: {
            title: "Web Development Frameworks",
            doubt: "What framework should I learn first for web development?",
        },
        comments: [
            {
                commentId: 401,
                votes: 2,
                user: {
                    username: "Aniket Sonawane",
                    img: "avatar.jpg",
                    bitsid: "2022B3A70031G",
                },
                comment: "I recommend starting with React as it's widely used.",
                time: "10 Oct, 2024 13:00",
            },
            {
                commentId: 402,
                votes: 3,
                user: {
                    username: "Vanshaj",
                    img: "avatar.jpg",
                    bitsid: "2022B3A70041G",
                },
                comment:
                    "Don't forget to explore Node.js for backend development!",
                time: "10 Oct, 2024 14:00",
            },
        ],
    },
    {
        id: 13,
        courseId: 2,
        votes: 6,
        user: {
            username: "Divyam Gupta",
            img: "avatar.jpg",
            bitsid: "2022B3A70032G",
        },
        doubt: {
            title: "Understanding Machine Learning",
            doubt: "What are the prerequisites for learning machine learning?",
        },
        comments: [
            {
                commentId: 501,
                votes: 2,
                user: {
                    username: "Vineet",
                    img: "avatar.jpg",
                    bitsid: "2022B3A70036G",
                },
                comment:
                    "A solid understanding of statistics and linear algebra is crucial.",
                time: "10 Oct, 2024 15:00",
            },
        ],
    },
    {
        id: 14,
        courseId: 1,
        votes: 3,
        user: {
            username: "Harsh Deshwal",
            img: "avatar.jpg",
            bitsid: "2022B3A70027G",
        },
        doubt: {
            title: "Effective Communication Skills",
            doubt: "How can I improve my communication skills for presentations?",
        },
        comments: [
            {
                commentId: 601,
                votes: 4,
                user: {
                    username: "Amish Singhal",
                    img: "avatar.jpg",
                    bitsid: "2022B3A70025G",
                },
                comment:
                    "Practice in front of a mirror and get feedback from peers.",
                time: "10 Oct, 2024 16:00",
            },
        ],
    },
    {
        id: 15,
        courseId: 3,
        votes: 5,
        user: {
            username: "Vineet",
            img: "avatar.jpg",
            bitsid: "2022B3A70036G",
        },
        doubt: {
            title: "Career Opportunities in AI",
            doubt: "What career paths can I pursue in the field of artificial intelligence?",
        },
        comments: [
            {
                commentId: 701,
                votes: 3,
                user: {
                    username: "Vedant Kamath",
                    img: "avatar.jpg",
                    bitsid: "2022B3A70034G",
                },
                comment:
                    "You can explore roles in data science, research, and machine learning engineering.",
                time: "10 Oct, 2024 17:00",
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
const adddoubt = (doubt, user, courseId) => {
    const date = new Date();

    const day = date.getDate().toString().padStart(2, "0"); // "10"
    const month = date.toLocaleString("default", { month: "short" }); // "Oct"
    const year = date.getFullYear(); // "2024"
    const hours = date.getHours().toString().padStart(2, "0"); // "11"
    const minutes = date.getMinutes().toString().padStart(2, "0"); // "00"

    const formattedDate = `${day} ${month}, ${year} ${hours}:${minutes}`;
    Doubts.push({
        id: Doubts.length + 1,
        doubt: doubt,
        votes:0,
        user: user,
        comments: [],
        time: formattedDate,
        courseId,
    });
};

export { Doubts, addcomment, adddoubt };
