import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap';

export default function PostBlog() {
  // const [html, setHtml] = React.useState('my <b>HTML</b>');

  // function onChange(e) {
  //   setHtml(e.target.value);
  // }
  
  function handleClick(){
      console.log("Handle Click");
  }
  var editorInstance;

  return (
    <div className="editor">
        <h2>Using CKEditor 5 build in React</h2>
        <Form onSubmit={() => {alert("Wow")}}>
        <CKEditor
            editor={ ClassicEditor }
            data="<p>Hello from CKEditor 5!</p>"
            onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                editorInstance = editor;
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
                
            } }
            onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
                
            } }
            onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
            } }
            onSubmit = { ( event, editor ) => {
                alert( 'Focus.', editor );
            } }
            
        />
         <Button
      variant="primary"
      
      onClick={() => { 
        
        const editorData = editorInstance.getData();      
        alert("The data is " + editorData) ;
    
    }}
    >
      Post Blog
    </Button>
    </Form>
        
       
       
    </div>
    
);
}
