import React from "react";
import { Link } from "react-router-dom";

export const PROJECTS = [
    {
        id: 0,
        name: "Equilo",
        image: "/img/equilo_heatmap.png",
        color: "#3D405B",
        icon: "fa fa-md fa-transgender",
        description: <p>At Equilo, I have collected data from global APIs, improved data visualization using Chart.js, built a heatmap using Google Geocharts, designed and created a new data product within our Vue.js framework, and built new API routes to improve data loading efficiency using Express and Node.js. <br /></p>,
        longDescription: <p>I worked for Equilo, a gender research and international development startup, for 3 years. I have collected data from global APIs, calculated Gender Equality indices, improved data visualization using Chart.js, built a heatmap using Google Geocharts, designed and created the pages to present and detail the Gender-Based Violence Risk Score (a new product) within our Vue.js framework, and built new API routes to improve data loading efficiency using Express and Node.js. Check out the Equilo App at <Link to="/equilo">app.equilo.io</Link> (you will need to create a free account to explore the app).<br/><br/></p>,
        skills: ["HTML/CSS","Vue.js","Node.js","MongoDB"],
        buttonText: "Go to the Equilo app.",
        url: "/equilo"
    },
    {
        id: 1,
        name: "BetaForBeta",
        image: "/img/betaforbeta.png",
        color: "#E07A5F",
        icon: "fa fa-md fa-filter",
        description: <p>I built a simple web app that allows users to filter climbing routes by the route's style using key words sourced from the route's description.<br /><br /></p>,
        longDescription: <p>I built a simple web app that allows users to filter climbing routes by the route's style using key words sourced from the route's description. Most climbing guides allow users to filter by location, type, grade, and star-rating, but few if any allow people to filter by route style. My next goal is to create a machine learning algorithm to recommend routes that a user may like based on ratings and reviews of previous routes.<br/><br/></p>,
        skills: ["JavaScript","React","Python"],
        buttonText: "Check it out.",
        url: "/betaforbeta"
    },
    
    {
        id: 2,
        name: "Small Biz Website",
        image: "/img/jennifer_bertram.png",
        color: "#81B29A",
        icon: "fa fa-md fa-pencil",
        description: <p>After 18 months of dragging her feet and working with a web designer who couldn't bring her site to the finish line, Jennifer hired me to redesign her Wix site and launch it.<br /><br /></p>,
        longDescription: <p>Jennifer is a Licensed Social Worker and Mediator, and was ready to launch her own practice. She had worked with a previous designer who couldn't complete the project. Initially she asked me to make a few small tweaks to the existing site, but after further discussion, I realized that she wasn't very happy with where the old site had landed. I offered to build her a new site from scratch, using her own photography and love of water to inspire the look and feel. We worked together to iterate so that the final product conveyed simplicity and approachability, and I helped her get set up with hosting and a domain name. She wrote the following testimonial:<br/><br/>
            <i>Emily thoughtfully and masterfully translated my business and my personality into a website with a beautiful color palate, a functionality that's easy to navigate and update, and a design that will carry me forward in my growing business. With just a few questions to answer and copy to write, I was able to convey my needs and she delivered a website that will serve my needs for years to come.</i> - Jennifer Bertram</p>,
        skills: ["Wix","Web Design"],
        buttonText: "Go to Jennifer Bertram's website.",
        url: "/jennifer-bertram"
    },
    /*{
        id: 2,
        name: "Brand Health Graphic",
        image: "/img/d3dataviz.png",
        color: "#81B29A",
        description: <p>This interactive graphic was built with d3.js, and combines more than 300 unique time series data points into a simple and interactive view.<br /><br /></p>,
        longDescription: <p>This interactive graphic was built with d3.js, and combines more than 300 unique time series data points into a simple and interactive view.</p>,
        skills: ["JavaScript","D3.js"],
        buttonText: "Back to projects",
        url: ""
    },*/
    
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
        icon: "fa fa-md fa-pagelines",
        description: <p>Due to my lack of a green thumb, I was inspired to create a mobile app that guides users in the care of their house plants, both by providing information about water and sunlight for their leafy friends and by reminding users when it's time to water. This project is in development.</p>,
        longDescription: <p>Due to my lack of a green thumb, I was inspired to create a mobile app that guides users in the care of their house plants, both by providing information about water and sunlight for their leafy friends and by reminding users when it's time to water. The biggest difference between this app and others on the market is that it includes API-sourced plant info right in the app, giving users recommendations about how many hours of sunlight their plant needs or how often it needs to be watered. <br /><br /> This project is in development. Check back later for updates!</p>,
        skills: ["JavaScript","React Native","Redux"],
        buttonText: "Back to projects.",
        url: ""
    }
];