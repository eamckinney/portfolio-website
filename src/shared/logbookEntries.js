import React from "react";

export const ENTRIES = [
  {
      id: 0,
      day: "Day 1",
      title: "Leetcode Challenge 'Two Sum'",
      date: "Thursday, February 3, 2022",
      tools: "JavaScript",
      url: "https://leetcode.com/problems/two-sum/submissions/",
      learned: "What a hashmap is! It's basically an object/dictionary that is faster to search than a typical array. Converting your array to a Map() object and using the Map.has() and Map.get() methods are quite a bit faster than using the similar Array.indexOf() method. There is more to learn here.",
      resources: ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",
        "https://www.cloudhadoop.com/2020/03/javascript-examples-convert-array-of.html",
        "https://www.callicoder.com/two-sum-problem/",]
  },
  {
    id: 1,
    day: "Day 2",
    title: "Create 100 Days of Code Logbook",
    date: "Friday, February 4, 2022",
    tools: "JavaScript, React.js",
    url: "emilyamckinney.com/100daysofcode",
    learned: "Getting back into React and refamiliarizing myself with my portfolio website. Pulled some design ideas (see add'l resources below for inspo).",
    resources: ["https://i.pinimg.com/564x/d4/f1/10/d4f110c6ba0702f9ff71884acf8c6dd3.jpg",
      "https://uploads-ssl.webflow.com/5cc1a79eb926f9b1e2913ac6/5eb469a6f026cb5757afdb58_Reflection%20app%20OG%20Image.png",
      "https://img.buzzfeed.com/buzzfeed-static/static/2019-09/23/18/asset/491d6a4da454/sub-buzz-7571-1569264233-1.png",
      "https://www.tolibrary.org/Home/ShowPublishedImage/33580/637492460357470000"]
  },
  {
    id: 2,
    day: "Day 3",
    title: "Logbook Buildout",
    date: "Monday, February 7, 2022",
    tools: "JavaScript, React.js",
    url: "emilyamckinney.com/100daysofcode",
    learned: "Created a new React component / page to store my logbook for 100 days of code. Laid out the page, read up on React hooks v. class components. Played with some CSS styles & effects, learned about how to apply the :focus pseudo-class using tab-index. Created a functioning logbook connected to a static .js data file (that contains the logbook entries), sorted in the order of most recent entry, with a list of entries that one can click and view in greater detail. Next up: 1) Create form to enter logbook entries, 2) back-end data system to ingest entries, and 3) place to edit them through a UI... And! Update resources so they show snippets/previews of the webpages they lead to.",
    resources: ["https://samarthnehe.medium.com/react-hooks-vs-class-components-c344b59f3bc",
      "https://stackoverflow.com/questions/19469495/css-slow-hover-effect",
      "https://www.tutorialrepublic.com/faq/how-to-change-the-cursor-into-a-hand-pointer-on-hover-using-css.php",
      "https://stackoverflow.com/questions/27069142/change-div-background-color-on-click-using-only-css",
      "https://stackoverflow.com/questions/12485074/html-link-with-href-that-refers-to-text"]
  },
  {
    id: 3,
    day: "Day 4",
    title: "Bloom Boom Design",
    date: "Tuesday, February 8, 2022",
    tools: "Design, Wix",
    url: "None",
    learned: "Helped a landscape architect friend visualize what a website could look like for a potential new business venture. Hoping to help them create the website when they are ready to take that step forward.",
    resources: ["None"]
  },
  {
    id: 4,
    day: "Day 5",
    title: "Fetching Open Graph Data",
    date: "Wednesday, February 9, 2022",
    tools: "JavaScript, React.js",
    url: "emilyamckinney.com/100daysofcode",
    learned: "Learned about using ternary operators within JSX to display elements based on a condition. Started converting the resource list to cards, using OpenGraph.io to scrape the open graph data from resources, but am running into issues with fetching. When I use useEffect(), new resources won't load / get fetched when I move to a new log. When I fetch OUTSIDE of useEffect(), there is nonstop requests to the API. Have to figure out how to correctly trigger fetching. Commented out on GitHub for now.",
    resources: ["https://stackoverflow.com/questions/44046037/if-else-statement-inside-jsx-reactjs",
      "https://reactjs.org/docs/faq-ajax.html",
      "https://www.opengraph.io/documentation/",
      "https://dev.to/ilonacodes/frontend-shorts-how-to-create-link-content-previewer-with-react-vue-and-vanilla-javascript-1pm1",
      "https://react.semantic-ui.com/views/card/#types-card",
      "https://stackoverflow.com/questions/1368264/how-to-extract-the-hostname-portion-of-a-url-in-javascript",
      "https://stackoverflow.com/questions/64648118/react-fetch-data-on-button-click"]
  },
  {
    id: 5,
    day: "Day 6",
    title: "Fixed CSS Bugs, Pushed Logbook Live",
    date: "Thursday, February 10, 2022",
    tools: "JavaScript, React.js",
    url: "emilyamckinney.com/100daysofcode",
    learned: "Today I noticed some CSS styling that I had applied to my logbook had unintentional effects on my main portfolio page. Today, I fixed that, upgraded some libraries that had security issues, and pushed my logbook live!",
    resources: ["None"]
  },
  {
    id: 6,
    day: "Day 7",
    title: "Attempted OG Data App",
    date: "Friday, February 11, 2022",
    tools: "JavaScript, Node.js, Express",
    url: "https://github.com/eamckinney/og-scraper-app",
    learned: "Today I attempted to create my own Open Graph Data scraper app using an online tutorial because the API I had originally planned to use has a free limit of 100 requests per month.. Unfortunately, after following all instructions, my app produced an error I was unable to debug (after several hours). Sometimes you win, sometimes you lose. Additionally, I spent some time this morning reading about Web3, the Blockchain, and NFTs. Do I still think that crypto is astrology for bros? Yes, yes I do.",
    resources: ["https://www.youtube.com/watch?v=7MAdlGPMPEc",
      "https://www.wired.com/story/web3-gavin-wood-interview/",
      "https://www.theverge.com/22310188/nft-explainer-what-is-blockchain-crypto-art-faq"]
  },
  {
    id: 7,
    day: "Day 8",
    title: "Updated Resource Cards",
    date: "Tuesday, February 15, 2022",
    tools: "JavaScript, React",
    url: "emilyamckinney.com/100daysofcode",
    learned: "Don't let perfect be the enemy of good. There's a saying that goes something like that, right? First off, I didn't get to code yesterday. But I'm back at it today. Second, after too many days spent on those dang resource cards, today I made simple cards using Url.hostname, and will save Open Graph Data scraping for another day when the frustrations of last week are a little farther away. Also was having trouble loading the resource card as a separate component in a different file (and having it update when going from entry to entry), so I put it back into the main Logbook component. Baby steps! Tomorrow I hope to work on something a bit different.",
    resources: ["https://react.semantic-ui.com/collections/grid/#content-columns",
      "https://developer.mozilla.org/en-US/docs/Web/API/URL/URL"]
  },
  {
    id: 8,
    day: "Day 9",
    title: "CodeSignal Challenges",
    date: "Wednesday, February 16, 2022",
    tools: "JavaScript",
    url: "https://app.codesignal.com/arcade/code-arcade",
    learned: "Today I took a break from classic web development and played some nice code games. CodeSignal has quite an easy ramp-up (much easier than Leetcode), but it was nice to get through a handful of challenges quickly. Math.trunc() was a helpful tool today.",
    resources: ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc",
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder"]
  },
  {
    id: 9,
    day: "Day 10",
    title: "CodeSignal Challenges (Again)",
    date: "Thursday, February 17, 2022",
    tools: "JavaScript",
    url: "https://github.com/eamckinney/coding-challenges",
    learned: "Did another CodeSignal challenge, and created a github repo to track the coding challenges I complete.",
    resources: ["None"]
  },
  {
    id: 10,
    day: "Day 11",
    title: "Logbook Search Field",
    date: "Friday, February 18, 2022",
    tools: "JavaScript",
    url: "emilyamckinney.com/100daysofcode",
    learned: "Today, I added the day number that I'm on to my Projects page (emilyamckinney.com) using the length of this logbook. Additionally, I added a little search bar! It queries the title, what I learned, date, tools, and resources used. Neat! I had previously implemented a search feature for BetaForBeta (https://emilyamckinney.com/betaforbeta), but to implement it here I had to convert it from using class components to React Hooks. Another good task to increase my familiarity with hooks.",
    resources: ["https://stackoverflow.com/questions/67882590/how-to-implement-addadiditions-in-react-sematic-ui-using-hooks"]
  },
  {
    id: 11,
    day: "Day 12",
    title: "Third day on CodeSignal",
    date: "Tuesday, February 22, 2022",
    tools: "JavaScript",
    url: "https://github.com/eamckinney/coding-challenges",
    learned: "More CodeSignal! I do love how it is very game-like. I'm hoping the challenges get a bit harder, but I'm trying to focus on how to solve the challenges most efficiently, and looking at other submissions to see if my solution could be improved. Today, there was an elegant solution using the && operator to return a value if a condition is met: maxW >= weight1 && value1 (if maxW being greater than weight1 is truthy, return value1). Also learned about Bitwise XOR operators... crazy how they work.",
    resources: ["https://levelup.gitconnected.com/secrets-of-logical-%EF%B8%8F-operator-in-javascript-98efbae5e8aa",
      "https://www.tutorialspoint.com/math-max-function-in-javascript",
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR"]
  },
  {
    id: 12,
    day: "Day 13",
    title: "Day 4 on CodeSignal & Mongo",
    date: "Wednesday, February 23, 2022",
    tools: "JavaScript, MongoDB",
    url: "https://github.com/eamckinney/coding-challenges",
    learned: "Looking at another user's solution to a challenge I had already solved, I got to learn about '.some()' and remind myself about spread syntax. Additionally, I started setting up a MongoDB to eventually store these logbook entries (vs the simple javascript object that is storing them now)!",
    resources: ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some",
      "https://betterprogramming.pub/javascript-ellipses-the-spread-and-rest-syntax-c12df294548d",
      "https://www.freecodecamp.org/news/an-introduction-to-spread-syntax-in-javascript-fba39595922c/#:~:text=Spread%20syntax%20allows%20an%20iterable,for%20object%20literals)%20are%20expected.",
      "https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/",
      "https://www.mongodb.com/languages/mern-stack-tutorial"]
  },
  {
    id: 13,
    day: "Day 14",
    title: "Day 5 on CodeSignal",
    date: "Friday, February 25, 2022",
    tools: "JavaScript",
    url: "https://github.com/eamckinney/coding-challenges",
    learned: "Finished one of the code packs on CodeSignal today. They weren't my favorite challenges, so hoping the next pack gets more interesting!",
    resources: ["None"]
  },
  {
    id: 14,
    day: "Day 15",
    title: "Connected Mongo!",
    date: "Sunday, February 27, 2022",
    tools: "JavaScript, React, Node, Express, MongoDB",
    url: "https://github.com/eamckinney/portfolio-api",
    learned: "Today I created a back-end Node.js and Express server, connected that to my local MongoDB (which contains a version of my logbook entries), and then connected it to  connected my front-end! Woo! I am writing this entry in MDB as we speak. Next up will be figuring out how to serve up the Mongo database on Firebase (where by site is hosted), and get everything connected there. I anticipate some challenges... but I have to figure it out before I can push these changes live!",
    resources: ["https://www.mongodb.com/languages/mern-stack-tutorial",
      "https://stackoverflow.com/questions/40714583/how-to-specify-a-port-to-run-a-create-react-app-based-project"]
  },
  {
    id: 15,
    day: "Day 16",
    title: "CodeSignal: Binary",
    date: "Monday, February 28, 2022",
    tools: "JavaScript",
    url: "https://github.com/eamckinney/coding-challenges",
    learned: "Getting a bit more familiar with binary. I have always been a fairly 'practical' web developer, always with the end result in mind. Concepts like binary felt complicated, abstract, and impractical. Well, thank you CodeSignal for helping me face my fears and learn something new!",
    resources: ["https://javascript.plainenglish.io/number-base-conversion-in-javascript-8bc44219b4ab",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice"]
  },
  {
    id: 16,
    day: "Day 17",
    title: "Abort!",
    date: "Wednesday, March 2, 2022",
    tools: "Firebase, MongoDB",
    url: "emilyamckinney.com/100daysofcode",
    learned: "I'm not going to lie, server & hosting technology is really intimidating to me. After going down a few rabbit holes, I learned that I cannot host a MongoDB database on Firebase; instead I would have to host it through MongoDB Atlas (costing money) and then connect it to my server-side code via Cloud Functions and Cloud Run. Reading through the docs, I immediately felt overwhelmed and intimidated. This is an area of development I am NOT comfortable with. I could also use the Firebase database directly, which is something I might explore in the future. I have past experience using Mongo with DigitalOcean for hosting (where you could SSL into and set up MDB directly on the server for hosting), but again, that would cost $$ that I am not yet willing to put forth. For today, I will take the humble L and revert back to my simple .js logbook file so that I can push my changes live. Cheers to the long and winding road that is development.",
    resources: [
      "https://stackoverflow.com/questions/67460253/can-you-use-mongodb-with-firebase-hosting",
      "https://firebase.google.com/docs/hosting/functions",
      "https://firebase.google.com/products/realtime-database?gclid=CjwKCAiAyPyQBhB6EiwAFUuaksprR5_-YabaH_TYdZexyRyaol6QTq5eSlHjz42qHngHmJQwz5rW1RoCSsIQAvD_BwE&gclsrc=aw.ds"
    ]
  },
  {
    id: 17,
    day: "Day 18",
    title: "Ideating",
    date: "Tuesday, March 8, 2022",
    tools: "Documentation",
    url: "emilyamckinney.com/100daysofcode",
    learned: "After a bit of a break, I'm back! Thinking about the next thing I want to do. I'll probably continue working on CodeSignal, but I'd like to come up with a little app to work on as well. Some ideas include: 1. App that tells you how many people are on your WiFi (probably impossible without credentials). 2. App that plays with financial data (I know there are a lot of apps out there, but I feel like they all lack something for the nerdier among us). I read up on Plaid as a way to connect to financial accounts, and it looks super cool. The documentation is outstanding! It seems like a big thing to start, though, so I may set aside for today. 3. Perused Catch A Fire and applied for a few volunteer opportunities.",
    resources: [
      "https://plaid.com/docs/quickstart/sample-apps/#personal-financial-management",
      "https://github.com/plaid/pattern",
      "https://www.catchafire.org/",

    ]
  },
  {
    id: 18,
    day: "Day 19",
    title: "CodeSignal: More Bits",
    date: "Wednesday, March 9, 2022",
    tools: "JavaScript",
    url: "emilyamckinney.com/100daysofcode",
    learned: "Did a few more bit challenges in CodeSignal today, which led me to read about for vs. while loops, the reduce() array method, binary operands (like ~), and stringing methods together to get comfortable flipping back and forth between arrays and strings (e.g. split('').reverse().join('')). Submitted another application to Catch-A-Fire and took another look at Plaid for my potential financial planning app.",
    resources: [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce",
      "https://stackoverflow.com/questions/38334652/sum-all-the-digits-of-a-number-javascript",
      "https://betterprogramming.pub/how-to-pick-between-a-while-and-for-loop-14ef217c3776#:~:text=A%20for%20loop%20is%20more,executed%20before%20the%20loop%20begins",
      "https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/",
      "https://stackoverflow.com/questions/19035893/finding-second-occurrence-of-a-substring-in-a-string-in-java",
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators",
      "https://github.com/plaid/pattern",
      "https://www.catchafire.org/",

    ]
  },
  {
    id: 19,
    day: "Day 20",
    title: "Catch A Fire: My Brother's Table",
    date: "Thursday, March 10, 2022",
    tools: "Wordpress, Cool Timeline Plugin",
    url: "https://mybrotherstable.org/",
    learned: "Today I met with a woman at My Brother's Table to discuss a project I had applied to volunteer for. It is their 40th anniversary this year, and they are looking to create a new page on their website in celebration. During the discussion, I found out that they have a Wordpress site, and although the task will be more related to web design and using Wordpress tools vs. straight up coding, I took the project. After spending some time perusing projects on Catch A Fire, I'm learning that many nonprofits need help managing, updating, and auditing sites that have been built on platforms like SquareSpace and Wordpress. While those types of skills aren't necessarily the ones that are at the top of my list to hone, I am interested in helping where I can. In this situation, I believe my web design skills can make an impact in this project, and I am happy to use some of my time to help them out.",
    resources: [
      "https://www.catchafire.org/",
      "https://free.cooltimeline.com/",
      "https://mybrotherstable.org/",
    ]
  },
  {
    id: 20,
    day: "Day 21",
    title: "Catch A Fire: My Brother's Table",
    date: "Friday, March 11, 2022",
    tools: "Wordpress, Cool Timeline Plugin",
    url: "https://mybrotherstable.org/",
    learned: "I dove into My Brother's Table's Wordpress site to understand how it has been implemented, what plugins it has used, etc. I began to frame out the timeline for the Anniversary page, and also investigate the other components of the site, how they worked together, and the possibility of creating a staging site to work from. Wordpress is not the most intuitive site-builder I have used. But I feel like I have found where most things live and feel like I can make some small edits that will improve the overall look and feel of the site.",
    resources: [
      "https://www.catchafire.org/",
      "https://free.cooltimeline.com/",
      "https://www.wpbeginner.com/wp-tutorials/how-to-create-staging-environment-for-a-wordpress-site/"
    ]
  },
];