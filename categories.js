export const categories = [
    {
        categoryTitle: 'Html',
        firstPage: {
            bold: 'Hypertext Markup Language (HTML)',
            smallParagraph: ' is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.',
            mediumParagraph: `Html elements are the building blocks of Html pages. You can embed images, forms, headers, navs, unordered and oredered lists to the rendered page. HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links and other items for example. To make a HTML element you have to use angle brackets <html></html>. Notice the use of "/" on the second pair of angel brackets, that's how you tell the browser where the element ends. Some Html elements like Input elements require you to close them on the first pair of angel brackets e.g.. <input type="text"/> You can embed scripts written with a scripting language like JavaScript. You can also add CSS to HTML, which is highly encouraged since without them your Html page would be pretty bland. `
        },
        secondPage: {
            bold1: 'Hypertext Transfer Protocol (HTTP)',
            bold2: 'Hypertext Transfer Protocol Secure (HTTPS)',
            paragraph1: ` is an application protocol for distributed, collaborative, hypermedia information systems. HTTP is the foundation of data communication for the World Wide Web, where hypertext documents include hyperlinks to other resources that the user can easily access, for example by a mouse click or by tapping the screen. HTTP was developed to facilitate hypertext and the World Wide Web.`,
            paragraph2: ` is an extension of the Hypertext Transfer Protocol (HTTP) for secure communication over a computer network, and is widely used on the Internet. In HTTPS, the communication protocol is encrypted using Transport Layer Security (TLS), or, formerly, its predecessor, Secure Sockets Layer (SSL). The protocol is therefore also often referred to as HTTP over TLS, or HTTP over SSL.`
        },
        thirdPage: [
            {
                bold: `<html></html> `,
                text: `The tag shows up at the beginning and end of an HTML document.`
            },
            {
                bold: `<head></head> `,
                text: `Contains info of the page, including meta data, title, links to scripts and stylesheets.`
            },
            {
                bold: `<title></title> `,
                text: `Set a title for the page(shows up in the browsers title bar)`
            },
            {
                bold: `<body></body> `,
                text: `Contains all the content that will be shown on the page, just before the body tag ends is the optimal place to place your script tags to.`
            },
            {
                bold: `<style></style> `,
                text: `You can write some CSS here, but it's recommended that you write your CSS to a separate CSS file that you link to your HTML document in the head tag.`
            },
            {
                bold: `<script></script> `,
                text: `You can write some JavaScript here also link your JavaScript file and other external scripts.`
            },
            {
                bold: `<h1></h1> `,
                text: `The heading tag, you can use this for headings. It ranges from h1 to h6, h1 being the largest and h6 the smallest`
            },
            {
                bold: `<p></p> `,
                text: `When you just want to write a paragraph of text, use this tag.`
            },
            {
                bold: `<div></div> `,
                text: `Common container to denote a page section.`
            },
            {
                bold: `<a href=""></a> `,
                text: `An anchor tag, use this for creating links.`
            },
            {
                bold: `<img src="" alt=""/> `,
                text: `A image tag, use this when you want to place an image to your HTML page.`
            }, 
            {
                bold: `<ul></ul> `,
                text: `An unordered list.`
            },
            {
                bold: `<li></li> `,
                text: `A list item, nest these inside of the <ul></ul> tag.`
            },
            {
                bold: `<span></span> `,
                text: `An inline section, typically used for grouping styling elements.`
            },
            {
                bold: `<br /> `,
                text: `A line break.`
            },
            {
                bold: `<hr /> `,
                text: `A horizontal rule.`
            },
            {
                bold: `<form></form> `,
                text: `A form, used for posting data`
            },
            {
                bold: `<input type="text" name="username"> `,
                text: `A input field used for getting data from the user they enter. Can be many different types e.g.. text, email, password.`
            }, 
            {
                bold: `<button type="button"></button> `,
                text: `A clickable button, e.g. nested in a form tag if you add type="submit" to it. Clicking the button submits the form.`
            }
        ]
    },
    {
        categoryTitle: 'Css',
        firstPage: {
            bold: `Cascading Style Sheets(CSS) `,
            smallParagraph: `Is a style sheet language for styling your website, styling your markup language like HTML. CSS is a cornerstone technology of the World Wide Web among with HTML and JavaScript.`,
            mediumParagraph: `CSS has a simple syntax, which is easy to learn but CSS itself is trickier to master well than you would think at first. You can choose elements, id's, classes e.g.. h2, id="red-button", class="button-color". You can apply styles that apply to everything using the * selector(A good use for setting a font for your site). Pseudo-classes are used in CSS selectors to permit formatting based on information that is not contained in the document tree. One example of a widely used pseudo-class is :hover, which decides what styles will be applied to the element when you hover your mouse over it(common use is to change text color or make the element grow in size while you hover over it). When two styles overlap, what decides what styles will be applied? CSS specificity. The *(univeral selector) for example has the lowest specificity and !important the highest.`
        },
        secondPage: {
            bold1: 'Selectors',
            bold2: '',
            paragraph1: `

Universal
* {
    font-family: Arial, Helvetica, sans-serif;
}

Class
.card {
    height: 500px;
    width: 300px;
    border: 1px solid rgba(150,150,150, 0.8);
    border-radius: 15px;
    box-shadow: -2px -1px rgba(150,150,150, 0.5);
}

Class, id
.card #card-title {
    text-align: center;
    color: #222;
    font-size: 2rem;
}

Class, element
.card img {
    margin: auto;
    display: block;
    height: 150px;
    width: auto;
}

            `,
            paragraph2: ``
        },
        thirdPage: [
            {
                bold: `px\n`,
                text: 'Relative to the viewing device. low-dpi devices, 1px is one device pixel (dot). For printers and high resolution screens 1px multiple device pixels.'
            },
            {
                bold: `em\n`,
                text: `Relative to the font-size of the element, 2em e.g. 2 times of the current font.`
            },
            {
                bold: `rem\n`,
                text: `Relative to font-size of the root element.`
            },
            {
                bold: `vw\n`,
                text: `Relative to 1% of the width of the viewport.`
            },
            {
                bold: `vh\n`,
                text: `Relative to 1% of the height of the viewport`
            },
            {
                bold: `%\n`,
                text: `Relative to the parent element, e.g. 50% half of the size of the parent element.`
            },
            {
                bold: `.\n`,
                text: `Select a class.`
            },
            {
                bold: `#\n`,
                text: `Select a id.`
            },
            {
                bold: `*\n`,
                text: `Univeral selector.`
            },
            {
                bold: `Any HTML element e.g. p\n`,
                text: `Select a HTML element.`
            },
            {
                bold: `!important\n`,
                text: `Property will always be applied no matter where that rule appears in the css.`
            },
            {
                bold: `@media\n`,
                text: `Apply different styles to different media types/screen sizes, e.g. @media only screen (min-width: 1000px) `
            },
            {
                bold: `width\n`,
                text: `Set the width of the element, e.g. width: 100px;`
            },
            {
                bold: `height \n`,
                text: `Set the height of the element, e.g. height: 100px`
            },
            {
                bold: `margin\n`,
                text: `Set the margin of the element, e.g. margin: 10px;`
            },
            {
                bold: `padding\n`,
                text: `Set the padding of the element, e.g. padding: 10px;`
            },
            {
                bold: `color \n`,
                test: `Set text-color for a element, e.g. color: #222;`
            },
            {
                bold: `border\n`,
                text: `Set a border for a element, e.g. border: 1px solid black;`
            },
            {
                bold: `background\n`,
                text: `Set a background for a element.` 
            }
        ]
    },
    {
        categoryTitle: 'Javascript',
        firstPage: {
            bold: `JavaScript(JS)`,
            smallParagraph: ` is a high-level, interpreted programming language that conforms to the ECMAScript specification. It's one the main scripting languages used on the web. Pros? It's easy to learn and one of the reccomended first languages to learn for new programmers and coders, it's versatile. These days JavaScript can be ran in many enviornments not just the client side. For example NodeJS allows you to run JavaScript on the server`,
            mediumParagraph: `JavaScript is one of the three core technologies used on the web(with HTML and CSS). With JavaScript you can make your websites interactive and therefore it's one of the key parts of websites and webapps. Most websites use it, and all the major web browsers have a dedicated JavaScript engine to execute it. JavaScript was designed by Brendan Eich.`
        },
        secondPage: {
            bold1: 'ES5 Function',
            bold2: 'ES6 Arrow Function',
            paragraph1: `

            function myfavoriteBand(band) {
                return "My favorite band is " + band;
            }
            
            myfavoriteBand('Nickelback')

Here we have a function called myfavoriteBand and it takes a one parameter called band(in brackets next to the function name), it could be anything a string for example. Then it's called with a string argument which again could be anything. It ends up returning the string "My favorite band is Nickelback"
            `,
            paragraph2: `

            const myfavoriteBand = band => {
                return "My favorite band is " + band 
            }

            myfavoriteBand('Nickelback')

Here the same but as a ES6 arrow function. Notice the difference in syntax.
            `
        },
        thirdPage: [
            {
                bold: `//\n`,
                text: `Single-line comment.`
            },
            {
                bold: `/* */\n`,
                text: `Multi-line comment.` 
            },
            {
                bold: `let, const\n`,
                text: `Declare a variable.`
            },
            {
                bold: `const instumentsArr = ['guitar', 'piano']\n`,
                text: `Create an array`
            },
            {
                bold: `instrumentsArr[0]\n`,
                text: `Pick a value out of an array(here 'guitar' is chosen)`
            },
            {
                bold: `const instrumentsObj = { instrument: guitar }\n`,
                text: `Create an object`
            },
            {
                bold: `instumentsObj.instrument\n`,
                text: `Pick a value out of an object.`
            },
            {
                bold: `+, -, *, /, %, ++, --\n`,
                text: `Addition, subtraction, multiply, divide, modulus(remainder), increment numbers, decrement, numbers`
            },
            {
                bold: `==, ===, !=, !==, >, >, >=, <=, ?\n`,
                text: `Equal, equal(value and type), not equal, not equal(value or type), greater, less, greater or equal, less or equal, ternary`
            },
            {
                bold: `&&, ||, !\n`,
                text: `Logical and, logical or, logical not` 
            },
            {
                bold: `function nameHere(){}\n`,
                text: `Create a function.`
            },
            {
                bold: `const nameHere = () => {}\n`,
                text: `ES6 arrow function.`
            },
            {
                bold: `if(conditionHere) {}\n`,
                text: `A if statement.`
            },
            {
                bold: `if(conditionHere) {} else {}\n`,
                text: `A if else statement.`
            },
            {
                bold: `for(let i = 0; i < 10; i++) {}\n`,
                text: `A for loop.`
            },
            {
                bold: `toString()\n`,
                text: `Changes a value to a string.`
            },
            {
                bold: `parseInt()\n`,
                text: `Changes a string to a integer.`
            },
            {
                bold: `join()\n`,
                text: `Combines elements of an array into single string and returns the string.`
            },
            {
                bold: `split()\n`,
                text: `Splits a string to an array of substrings and returns the new array.`
            }
        ]

    }
]