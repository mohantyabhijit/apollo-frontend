import React from "react";
import "./Home.css";
import Search from "../components/Search";
import { Container, Card } from "react-bootstrap";
import Blog from "../components/Blog";
export default function SearchContainer(props) {
    if (props.display){
        console.log(props.display[0], props.results);
        if (props.results != undefined && props.results.length > 0){
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
                        
        } else if (props.display[0] === undefined){
            console.log(props.display[0]);
            return (
                <div className="App">
                    
                    <Container fluid>
                        
                            <Card style={{marginTop:20}}>
                                <Card.Body> No results found </Card.Body>
                            </Card>
                        
                    </Container>
                    
                </div>
            )
        } 
    } else {
        return null
    }

    return null
}