import React, { Component } from 'react';
import "./style.css";

class ShowPost extends React.Component {
    constructor(props) {
      super(props);
    //   this.state = {posts : [`this is first post
    //                         I feel goog and the sun 
    //                         is shining
    //                         it will be a great day
    //                         ....`,
    //                         `this is second post
    //                         I feel goog and the sun 
    //                         is shining
    //                         it will be a great day
    //                         ....`,
    //                         `this is third post
    //                         I feel goog and the sun 
    //                         is shining
    //                         it will be a great day
    //                         ....`]
    //                       , post:""};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3  mt-5" >
             <p className="showPostP">

             </p>
          </div>

           <button type="button" className="btn btn-light">Like</button>
           <button type="button" className="btn btn-success">Add Comment</button>
 



        </form>
      );
    }
  }

  export default ShowPost;