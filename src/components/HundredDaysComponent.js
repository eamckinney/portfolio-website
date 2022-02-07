import React, { Component, useState } from "react";
import { Form, Label, Divider, Rating, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "../App.css";
import "../HundredDays.css";

export default function HundredDays() {

  return(

    <div className="hundredDaysPage" id="Top">
				<div className="container mb-4 pl-0">
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
								<Button className="btn-outline-dark">Back to Home</Button>
							</Link>
						</div>
					</div>
				</div>


        <div className="container appStyle">
					<div className="row">
            
            <div className="col-md-4 logCol">
              <div className="row">
                <div className="col text-right logTitle">
                  <h3>Day 1</h3>
                  <p><i>Leetcode challenge "Two Sum"</i></p>
                </div>
              </div>
              <Divider />
              <div className="row">
                <div className="col text-right logTitle">
                  <h3>Day 2</h3>
                  <p><i>Create 100 Days of Code logbook on portfolio website</i></p>
                </div>
              </div>
            </div>

            <div className="col-md-8 entryCol"> 
              <div className="row">
                <div className="col logEntry">
                  <span style={{"letter-spacing": "3px"}}>DAY 1</span>
                  <h4>Leetcode challenge 'Two Sum'</h4>
                  <p style={{"font-size": ".8em"}}>
                    <span><b>Date:</b> Thursday, February 3, 2022</span><br/>
                    <span><b>Language/Tools:</b> JavaScript</span><br/>
                    <span><b>URL:</b> https://leetcode.com/problems/two-sum/submissions/</span><br/>
                  </p>
                  <p>
                    <b>What I did / what I learned: </b>
                    What a hashmap is! It's basically an object/dictionary that is faster to search than a typical array. Converting your array to a Map() object and using the Map.has() and Map.get() methods are quite a bit faster than using the similar Array.indexOf() method. There is more to learn here.
                  </p>
                  <p style={{"font-size": ".8em"}}>
                    <b>Additional resources used: </b>
                    <ul>
                      <li>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map</li>
                      <li>https://www.cloudhadoop.com/2020/03/javascript-examples-convert-array-of.html</li>
                      <li>https://www.callicoder.com/two-sum-problem/</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );

}