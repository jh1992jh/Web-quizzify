import uuid from 'react-native-uuid';

export const questions = [
    {
        question: "Who designed the scripting language JavaScript?",
        options: [
            {
                answer: 'Brendan Eich',
                correct: true
            },
            {
                answer: 'Bill Gates',
                correct: false
            },
            {
                answer: 'Steve Jobs',
                correct: false
            },
            {
                answer: 'Wes Bos',
                correct: false
            }
        ],
        id: uuid.v4() + Math.random()
    },
    {
        question: 'Which of the following elements is used when you want to add a paragraph to a HTML page?',
        options: [
            {
                answer: '<p>',
                correct: true
            },
            {
                answer: '<div>',
                correct: false
            },
            {
                answer: '<text-thing>',
                correct: false
            },
            {
                answer: '<span>',
                correct: false
            }
        ],
        id: uuid.v4() + Math.random()
    },
    {
        question: 'HTML stands for?',
        options: [
            {
                answer: 'HyperLink Markup Language',
                correct: false
            },
            {
                answer: 'Hypertext Markup Language',
                correct: true
            },
            {
                answer: 'Hyper Monotone Language',
                correct: false
            },
            {
                answer: 'Hollow Magic Language',
                correct: false
            }
        ],
        id: uuid.v4() + Math.random()
    },
    {
        question: 'In HTTPS what does the "S" stand for?',
        options: [
            {
                answer: 'Symbol',
                correct: false
            },
            {
                answer: 'Span',
                correct: false
            },
            {
                answer: 'Simple',
                correct: false
            },
            {
                answer: 'Secure',
                correct: true
            }
        ],
        id: uuid.v4() + Math.random()
    }
]