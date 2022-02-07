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
                <div className="col text-right">
                  <h3>Day 1</h3>
                  <p>Leetcode challenge "Two Sum"</p>
                  <Divider />
                </div>
              </div>
              
              <div className="row">
                <div className="col text-right">
                  <h3>Day 1</h3>
                  <p>Leetcode challenge "Two Sum"</p>
                </div>
              </div>
            </div>
            <div className="col-md-8 entryCol"> 
            </div>
          </div>
        </div>
      </div>
  );

}