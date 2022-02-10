import React, { useState, useEffect } from "react";
import { Card, Header } from 'semantic-ui-react';
import axios from 'axios'
import "../../../App.css";
import "../../../HundredDays.css";

export default function ResourceCard(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  
  
  let encodedURL = props.url.replaceAll(":","%3A").replaceAll("/","%2F").replaceAll("#","%23");
  console.log(encodedURL);

  const fetch = async() => {
    const res = await axios.get("https://opengraph.io/api/1.1/site/" + encodedURL + "?accept_lang=auto&app_id=fe52a1e0-c902-4b6b-8ee0-92576c376573")
    console.log("res", res)
    setIsLoaded(true);
    setData(res.data.hybridGraph);
  }

  //fetch();

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://opengraph.io/api/1.1/site/" + encodedURL + "?accept_lang=auto&app_id=fe52a1e0-c902-4b6b-8ee0-92576c376573")
      .then(res => res.json())
      .then(
        (res) => {
          setIsLoaded(true);
          setData(res.hybridGraph);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    console.log(data);

    const host = data ? new URL(data.url).hostname : "" ;

    return (
      <Card>
        { data ? (
            <Card.Content
              style={{
                height: "100px",
                backgroundImage: `url(${data.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></Card.Content>
        ) : "Still loading!" }
        { data ? (
          <Card.Content>
            <a href={data.url} target="_blank">
            <Header as='h5'>{data.title}</Header>
            <Card.Meta>
              <span className="webText">{host}</span>
            </Card.Meta>
            </a>
          </Card.Content>
        ) : "" }
      </Card>
      
    );
  }
}