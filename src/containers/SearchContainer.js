import React from "react";
import "./Home.css";
import Search from "../components/Search";
import { Container, Card } from "react-bootstrap";
import Blog from "../components/Blog";
export default function SearchContainer(props) {
    if (props.display){
        if (props.results != undefined){
            return (
                <div>
                  <Container fluid>
                    {props.results.length > 0 && props.results.map((c) => (
                      <Card style={{marginTop:20}}>
                        <Blog key={c} blogId={c.id} />
                      </Card>
                    ))}
                  </Container>
                </div>
              );
                        
        } else {
            return (
                <div className="App">No results found</div>
            )
    } 
    }
    return null
}