import React, { Component, useState } from "react";
import { Form, Label, Divider, Rating, Header } from "semantic-ui-react";
import { ENTRIES } from '../shared/logbookEntries';
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "../App.css";
import "../HundredDays.css";


export default function HundredDays() {

  const[entries]=useState(ENTRIES);  
  const[selectedEntry, setSelectedEntry]=useState([entries[entries.length-1]]);

  // Sort so that most recent is first
  entries.sort((a, b) => (a.id < b.id) ? 1 : -1);

  const entryTitles = entries.map(entry => {
    return(
      <div>
        <div className="row" onClick={() => setSelectedEntry([entry])}>
          <div className="col text-right logTitle" tabIndex={entry.id}>
            <h3> { entry.day } </h3>
            <p><i> { entry.title } </i></p>
          </div>
        </div>
        <Divider />
      </div>
    );
  });

  const entryText = selectedEntry.map(entry => {
    
    const resources = entry.resources.map(resource => {
      return(
        <li><a href={resource} target="_blank">{resource}</a></li>
      );
    });

    return(
      <div className="row mt-3">
        <div className="col logEntry">
          <span style={{"letterSpacing": "3px", "fontFamily":"Avenir", "fontSize":".8em"}}>{entry.day.toUpperCase()}</span>
          <h4> {entry.title} </h4>
          <p className="logPara">
            <span><b>Date:</b> {entry.date}</span><br/>
            <span><b>Language/Tools:</b> {entry.tools} </span><br/>
            <span><b>URL:</b> <a href={entry.url} target="_blank">{entry.url}</a></span><br/>
          </p>
          <p className="logPara">
            <b>What I did / what I learned: </b>
            {entry.learned}
          </p>
          <span className="logPara">
            <b>Additional resources used: </b>
            <ul style={{"lineHeight": "1.3"}}>
              {resources}
            </ul>
          </span>
          
          
        </div>
      </div>
    );
  })

  return(

    <div className="hundredDaysPage" id="Top">
				<div className="container mb-5 pl-0 text-center">
					<div className="row">
						<div className="col">
							<h2 className="appTitle mb-0">Logbook</h2>
							<h3 className="appTitle mt-0 mb-3">
								100 Days of Code
							</h3>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<Link to="/home" className="text-center">
								<Button className="btn-outline-dark" style={{"fontSize": ".8em"}}>Back to Home</Button>
							</Link>
						</div>
					</div>
				</div>


        <div className="container appStyle">
					<div className="row">
            
            <div className="col-md-4 logCol">
              {entryTitles}
            </div>

            <div className="col-md-8 entryCol"> 
              {entryText}
            </div>
          </div>
        </div>
      </div>
  );

}