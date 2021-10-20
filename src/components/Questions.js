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
  console.log(questions);
  console.log(questions[0].answers);
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
        {questions.map((c) => (
          <div style={{margin: 30}}>
          <Container key={c} fluid >
            <h1>
            {c.questionTitle} - {c.author}
            </h1>
            <Card key={c} style={{margin: 5}}>
              <Card.Header key={c}> Q : {c.questionText}</Card.Header>
              <Card.Body>
              <ListGroup variant="flush">
                {c.anwers != null && c.answers.map((a) => (
                    <ListGroup.Item key={a} blogId={a}>{a.answerText}</ListGroup.Item>
                ))}
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
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
