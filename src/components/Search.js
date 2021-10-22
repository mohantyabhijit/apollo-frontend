import React from "react";
import { Container, Card } from "react-bootstrap";
import Blog from "../components/Blog";

function Search(props) {
    if (props.display){
        if (props.results != undefined){
            return (
                <div className="App">
                  <Container fluid>
                    {props.results.length > 0 && props.results.map((c) => (
                      <Card style={{marginTop:20}}>
                        <Blog key={c} blogId={c.id} />
                      </Card>
                    ))}
                  </Container>
                  {window.location.reload(false)}
                </div>
              );
        } 
    } else {
        return (
            <div className="App">No results found</div>
        )
    }
    return null
}



Search.propTypes = {
    // results: PropTypes.array.isRequired,
};

export default Search;
