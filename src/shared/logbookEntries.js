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
    title: "Bloom Boom design",
    date: "Tuesday, February 8, 2022",
    tools: "Design, Wix",
    url: "None",
    learned: "Helped a landscape architect friend visualize what a website could look like for a potential new business venture. Hoping to help them create the website when they are ready to take that step forward.",
    resources: ["None"]
  },
];