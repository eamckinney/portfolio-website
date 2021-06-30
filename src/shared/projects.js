import React from "react";

export const PROJECTS = [
    {
        id: 0,
        name: "BetaForBeta",
        image: "/img/betaforbeta.png",
        color: "#3D405B",
        description: <p>I built a simple web app that allows users to filter climbing routes by the route's style using key words sourced from the route's description.<br /><br /></p>,
        longDescription: <p>I built a simple web app that allows users to filter climbing routes by the route's style using key words sourced from the route's description. Most climbing guides allow users to filter by location, type, grade, and star-rating, but few if any allow people to filter by route style. My next goal is to create a machine learning algorithm to recommend routes that a user may like based on ratings and reviews of previous routes.<br/><br/></p>,
        skills: ["JavaScript","React","Python"],
        buttonText: "Check it out",
        url: "/betaforbeta"
    },
    {
        id: 1,
        name: "Equilo",
        image: "/img/equilo_heatmap.png",
        color: "#E07A5F",
        description: <p>At Equilo, I have collected data from global APIs, improved data visualization using Chart.js, built a heatmap using Google Geocharts, and built new API routes to improve data loading efficiency using Express and Node.js. <br /><br /></p>,
        longDescription: <p>I have been working for Equilo, a gender research and international development startup, for nearly 3 years, but have shifted into a Python and web developer role about a year ago. I have collected data from global APIs, calculated Gender Equality indices, improved data visualization using Chart.js, built a heatmap using Google Geocharts, and built new API routes to improve data loading efficiency using Express and Node.js.<br/><br/></p>,
        skills: ["HTML","Vue.js","Node.js","MongoDB"],
        buttonText: "Back to projects",
        url: ""
    },
    {
        id: 2,
        name: "Brand Health Graphic",
        image: "/img/d3dataviz.png",
        color: "#81B29A",
        description: <p>This interactive graphic was built with d3.js, and combines more than 300 unique time series data points into a simple and interactive view.<br /><br /></p>,
        longDescription: <p>This interactive graphic was built with d3.js, and combines more than 300 unique time series data points into a simple and interactive view.</p>,
        skills: ["JavaScript","D3.js"],
        buttonText: "Back to projects",
        url: ""
    },
    
    /*{
        id: 2,
        name: "Drawing Water",
        image: "/img/drawingwater.png",
        color: "#81B29A",
        description: <p>I'm working with local nonprofit ASK to build a watershed and water guidelines visualization tool for architectural stormwater design and decision-making. This project is in development.</p>,
        longDescription: <p>I'm working with a local nonprofit to build a watershed and water guidelines visualization tool for architectural stormwater design and decision-making. The goal is to create illustrative language for the textual sections of the Minnesota B3 Site and Water guidelines that focus on water at the district, site and building scale, as well as engage the public in the flow of water and put users in conversation with those responsible for designing public water systems. <br /><br /> This project is in development. Check back here at the end of 2021 for updates! The image below is an example skematic that has been drawn up for the proposal.</p>,
        skills: ["HTML","CSS","JavaScript"],
        buttonText: "Back to projects",
        url: ""
    },*/
    {
        id: 3,
        name: "Water Your Plants!",
        image: "/img/wateryourplants.png",
        color: "#7F8FA3",
        description: <p>Due to my lack of a green thumb, I was inspired to create a mobile app that guides users in the care of their house plants, both by providing information about water and sunlight for their leafy friends and by reminding users when it's time to water. This project is in development.</p>,
        longDescription: <p>Due to my lack of a green thumb, I was inspired to create a mobile app that guides users in the care of their house plants, both by providing information about water and sunlight for their leafy friends and by reminding users when it's time to water. The biggest difference between this app and others on the market is that it includes API-sourced plant info right in the app, giving users recommendations about how many hours of sunlight their plant needs or how often it needs to be watered. <br /><br /> This project is in development. Check back later for updates!</p>,
        skills: ["JavaScript","React Native","Redux"],
        buttonText: "Back to projects",
        url: ""
    }
];