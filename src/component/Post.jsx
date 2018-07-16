import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import { fetchPost } from "../actions/postAction";

// ui library
import { Alert, Jumbotron} from "reactstrap";
 class Post extends Component {
   //=======================================
   // called this function from reducer Folder
   //=======================================
   componentWillMount() {
     this.props.fetchPost();
   }

   //=======================================
   // got this props from "mapStateToProps" as new added data
   //=======================================
   componentWillReceiveProps(nextProps) {
     if (nextProps.newPost) {
      //  already text list available but if data  added as new
      // then merge with existing list using  "unshift" methods
       this.props.post_list.unshift(nextProps.newPost);
     }
   }

   render() {
     const post_list_data = this.props.post_list.map(PL => 
     <div key={PL.id}>
         <Alert color="primary" className="text-capitalize">
           * <b>{PL.title}</b>
         </Alert>

         <Jumbotron>{PL.body}</Jumbotron>
       </div>);

     return <div>{post_list_data}</div>;
   }
 }


//  props restriction setting
Post.PropTypes = {
  fetchPost: PropTypes.func.isRequired,
  post_list: PropTypes.array.PropTypes,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  post_list: state.post.multiple_items,
  newPost: state.post.single_item
});

  // if you action methods are coming from folder then add those at "{ }" braces 
export default connect( mapStateToProps, { fetchPost } )(Post);