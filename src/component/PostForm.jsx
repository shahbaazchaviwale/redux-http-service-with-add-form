import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from "prop-types";
import { createPost} from '../actions/postAction'

// Ui library
import { Button, Form, FormGroup, Label, Input, Progress  } from "reactstrap";
class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title : '',
            body : ''
        };
    }

    GetTextBoxData = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
 
    resetForm = ()=>{
        this.setState({
            title : '',
            body : ''
        });
    }
   
    SubmitData = (event) =>{
            event.preventDefault();
            const post = {
                title : this.state.title,
                body : this.state.body
            }            
    //=======================================
        // called this function from reducer Folder
        //passed args as state "post"
   //=======================================
        this.props.createPost(post);
        this.resetForm();
       
    }
  render() {
    return <div>
        <Form onSubmit={this.SubmitData}>
          <FormGroup>
            <Label for="exampleEmail">Title</Label>
            <Input type="text" name="title" value={this.state.title}
             onChange={this.GetTextBoxData} autoComplete="off"/>
          </FormGroup>

          <FormGroup>
            <Label for="exampleText">Body</Label>
                <Input type="textarea" name="body" value={this.state.body} onChange={this.GetTextBoxData} />
          </FormGroup>    

          <Button type="submit" color="primary">
            Post ...
          </Button>

        </Form>      
      </div>;
  }
}

PostForm.PropTypes = {
  createPost: PropTypes.func.isRequired
};
  // if you action methods are coming from folder then add those at "{ }" braces 
export default connect(null,{createPost})(PostForm);