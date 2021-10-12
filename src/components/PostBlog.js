import {React, useEffect, useState, textarea} from 'react';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap';

export default function PostBlog() {
  const [blogContent, setBlogContent] = useState([]);
  const [blogTitle, setBlogTitle] = useState([]);
  const [editorInstance, setEditorInstance] = useState([]);

  function trimString(string){
      return string.substring(1).slice(0,-1)
  }

  function handleClick(data){
      let dataString = JSON.stringify(data);
      dataString = trimString(dataString);
      const res = axios.post('http://localhost:9001/v1/blogs/author/u001', 
      {
        "blogTitle": JSON.stringify(blogTitle),
        "blogCreationDate": "2021-10-12",
        "blogText": dataString,
        "blogTags": [
            "psychology",
            "behaviour"
        ]
    })
      .then(
        res => {
            console.log(res);
            alert("Blog Posted");
            window.location.reload(false);
        }
      ).catch(
          err => console.log(err)
      );
  }

  return (
    <div className="editor">
        <h2>Post a Blog</h2>
        <Form onSubmit={() => {alert("Wow")}}>
        <input
        type="text"
        value={blogTitle}
        onChange={e => setBlogTitle(e.target.value)}
        placeholder="Enter blog title"
      />
        <CKEditor
            editor={ ClassicEditor }
            data=""
            onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                setEditorInstance(editor);
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
                
            } }            
        />
        <Button
            variant="primary"
            onClick={() => { 
                const editorData = editorInstance.getData(); 
                handleClick(editorData);     
            }}
        >
            Post Blog
        </Button>
    </Form>
        
       
       
    </div>
    
);

}
