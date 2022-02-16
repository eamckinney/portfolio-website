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
];