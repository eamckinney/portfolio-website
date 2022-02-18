import React, { useState, useEffect } from "react";
import { Card, Divider, Header, Grid, Form } from "semantic-ui-react";
import { ENTRIES } from '../../../shared/logbookEntries';
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "../../../App.css";
import "../../../HundredDays.css";


export default function HundredDays() {

  const[entries]=useState(ENTRIES);
  const[filteredEntries, setFilteredEntries] = useState(ENTRIES);
  const[selectedEntry, setSelectedEntry]=useState([filteredEntries[ENTRIES.length-1]]);
  const[resources, setResources]=useState(selectedEntry[0].resources);
  const[searchTerm, setSearchTerm] = useState("");

  // Sort so that most recent is first
  entries.sort((a, b) => (a.id < b.id) ? 1 : -1);
  filteredEntries.sort((a, b) => (a.id < b.id) ? 1 : -1);

  useEffect(() => {
    setSelectedEntry(selectedEntry);
  }, selectedEntry);
  
  useEffect(() => {
    setResources(resources);
  }, resources);

  useEffect(() => {
    setFilteredEntries(filteredEntries);
  }, filteredEntries);

  
  function clicked(entry) {
    setSelectedEntry([entry]);
    setResources(entry.resources);
  };

  const handleChange = (e, { value }) => {
    setSearchTerm(value);
    let localEntries = entries;

		if (value.length > 0) {
			localEntries = localEntries.filter((obj) =>
        obj.title.toLowerCase().includes(value.toLowerCase()) |
        obj.learned.toLowerCase().includes(value.toLowerCase()) |
        obj.date.toLowerCase().includes(value.toLowerCase()) |
        obj.tools.toLowerCase().includes(value.toLowerCase()) |
        (obj.resources.filter((re) => re.includes(value.toLowerCase())).length >= 1)
      );
		} else {
      localEntries = entries;
    }

    setFilteredEntries(localEntries);

  }

  const entryTitles = filteredEntries.map(entry => {
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
      let host = resource != 'None' ? new URL(resource).hostname : "" ;
      return(
        /*resource.str != 'None' ? (
          <ResourceCard url={resource} />
        ) : <span>None</span>*/
        resource != 'None' ?  
          <Card>       
            <Card.Content>
              <a href={resource} target="_blank">
              <Header as='h5'>{host}</Header>
              <Card.Meta>
                <span className="webText">{resource}</span>
              </Card.Meta>
              </a>
            </Card.Content>
          </Card>
        : <ul className="logPara">
            <li>{resource}</li> 
          </ul>
          

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
            {/*<ul style={{"lineHeight": "1.3"}}>
              {resourceCards}
              </ul>*/}
          </span>
          
          <Grid.Row stretched padded className="pl-3 pr-3 mt-2">
            <Card.Group itemsPerRow={3}>
              {resourceCards}
            </Card.Group>
          </Grid.Row>
          
          
          
        </div>
      </div>
    );
  })

  

  return(

    <div className="hundredDaysPage" id="Top">
				<div className="container mb-4 pl-0 text-center">
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
								<Button className="btn-outline-dark mr-2" style={{"fontSize": ".8em"}}>Back to Home</Button>
							</Link>
              <a className="btn btn-social-icon btn-github ml-2" href="https://github.com/eamckinney/portfolio-website/tree/master/src/components/projects/Logbook" target="_blank" rel="noopener noreferrer"><i className="fa fa-lg fa-social fa-github"></i></a>
						</div>


					</div>
				</div>

        <div className="container">
          <div className="row">
            <div className="col mb-3 ml-2">
              <Form>
                <Form.Input
									width={5}
									icon="search"
									placeholder="Search the logbook..."
									name="search"
									value={searchTerm}
									onChange={handleChange}
								/>
              </Form>
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