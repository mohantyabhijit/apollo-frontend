import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import axios from 'axios';
import questions from '../data/questions.json';
import {
  Container, Card,
} from 'react-bootstrap';


// var config = {
//     headers: {'Access-Control-Allow-Origin': '*'}
// };
//   axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
function Questions(props) {
    console.log(questions);
  const baseUrl = 'http://a3e6153cc6ed7427caeae85c27d954c1-1453390660.ap-southeast-1.elb.amazonaws.com:9002/edtech/question/all';
//   const blogUrl = baseUrl.concat(props.blogId);
//   const [blogTitle, setBlogTitle] = useState([]);
//   const [blogText, setBlogText] = useState([]);
  
//   useEffect(() => {
//     axios.get(baseUrl,{ crossdomain: true }).then((res) => {
//         console.log(res);
//     //   setBlogTitle(res.data.blogTitle);
//     });
//   }, []);

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
          <Card>
            {c.questionTitle}
            {c.questionText}
            {c.author}
          </Card>
        ))}
    </div>
    
  );
}

Questions.propTypes = {
//   blogId: PropTypes.string.isRequired,
};

export default Questions;
