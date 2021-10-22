import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container, Card,ListGroup
} from 'react-bootstrap';

function Questions(props) {
  const baseUrl = 'http://a3e6153cc6ed7427caeae85c27d954c1-1453390660.ap-southeast-1.elb.amazonaws.com:9002/edtech/question/all';
  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    axios.get(baseUrl,{ crossdomain: true }).then((res) => {
        setQuestions(res.data);
    });
  }, []);
  
  return (
    <div>
        {questions.map((c,index) =>(
          <div key={index} style={{margin: 30}}>
          <Container key={index} fluid >
            <h1>
            {c.questionTitle} - {c.author}
            </h1>
            <Card key={index} style={{margin: 5}}>
              <Card.Header key={index}> Q : {c.questionText}</Card.Header>
              <Card.Body>
              <ListGroup variant="flush">
                  {c.answers.map(c => <ListGroup.Item>{c.answerText}</ListGroup.Item>)}
              </ListGroup>
              </Card.Body>
            </Card>
          </Container>
        </div>
        ))}
    </div>
    
  );
}



Questions.propTypes = {
//   blogId: PropTypes.string.isRequired,
};

export default Questions;
