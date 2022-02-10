import React, { useState, useEffect } from "react";
import { Card, Divider } from "semantic-ui-react";
import { ENTRIES } from '../../../shared/logbookEntries';
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "../../../App.css";
import "../../../HundredDays.css";
import ResourceCard from "./ResourceCard.js";


export default function HundredDays() {

  const[entries]=useState(ENTRIES);  
  const[selectedEntry, setSelectedEntry]=useState([entries[entries.length-1]]);
  const[resources, setResources]=useState(selectedEntry[0].resources);

  // Sort so that most recent is first
  entries.sort((a, b) => (a.id < b.id) ? 1 : -1);

  useEffect(() => {
    setSelectedEntry(selectedEntry);
  }, selectedEntry);
  
  useEffect(() => {
    setResources(resources);
  }, resources);

  function clicked(entry) {
    setSelectedEntry([entry]);
    setResources(entry.resources);
    console.log(resources);

    

  }

  const entryTitles = entries.map(entry => {
    return(
      <div>
        <div className="row" onClick={() => clicked(entry)}>
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
    
    const resourceCards = resources.map(resource => {
      console.log(resource);
      return(
        /*resource.str != 'None' ? (
          <ResourceCard url={resource} />
        ) : <span>None</span>*/
        resource != 'None' ?  <li><a href={resource} target="_blank">{resource}</a></li> : <li>{resource}</li> 
      );
    });

    return(
      <div className="row mt-3">
        <div className="col logEntry">
          <span style={{"letterSpacing": "3px", "fontFamily":"Avenir", "fontSize":".8em"}}>{entry.day.toUpperCase()}</span>
          <h4> {entry.title} </h4>
          <p className="logPara">
            <span><b>Date: </b>{entry.date}</span><br/>
            <span><b>Language/Tools: </b>{entry.tools}</span><br/>
            <span><b>URL: </b> 
              { entry.url != 'None' ? <a href={entry.url} target="_blank">{entry.url}</a> : entry.url }
            </span><br/>
              
          </p>
          <p className="logPara">
            <b>What I did / what I learned: </b>
            {entry.learned}
          </p>
          <span className="logPara">
            <b>Additional resources used: </b>
            <ul style={{"lineHeight": "1.3"}}>
              {resourceCards}
            </ul>
          </span>
          
          {/*<Grid.Row stretched>
            <Card.Group itemsPerRow={5}>
              
            </Card.Group>
          </Grid.Row>*/}
          
          
          
        </div>
      </div>
    );
  })

  

  return(

    <div className="hundredDaysPage" id="Top">
				<div className="container mb-5 pl-0 text-center">
					<div className="row">
						<div className="col">
							<h2 className="logbookTitle mb-0">Logbook</h2>
							<h3 className="logbookTitle mt-0 mb-3">
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


        <div className="container logbookStyle">
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