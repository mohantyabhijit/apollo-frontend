import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import axios from 'axios';
import questions from '../data/questions.json';
import {
  Container, Card,ListGroup
} from 'react-bootstrap';


// var config = {
//     headers: {'Access-Control-Allow-Origin': '*'}
// };
//   axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
function Questions(props) {
  const baseUrl = 'http://a3e6153cc6ed7427caeae85c27d954c1-1453390660.ap-southeast-1.elb.amazonaws.com:9002/edtech/question/all';
  // console.log(questions);
  // console.log(questions[10].answers);
//   const blogUrl = baseUrl.concat(props.blogId);
  // const [questions, setBlogTitle] = useState([]);

  
  // useEffect(() => {
  //   axios.get(baseUrl,{ crossdomain: true }).then((res) => {
  //       console.log(res);
  //   //   setBlogTitle(res.data.blogTitle);
  //   });
  // }, []);

//   useEffect(() => {
//     axios.get(blogUrl).then((res) => {
//       setBlogText(res.data.blogText);
//     });
//   }, []);

  function trimString(string){
    return string.substring(1).slice(0,-1)
  }

  const divStyle = {
    marginTop: "5"
  }

  
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
