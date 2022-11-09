import React, { Component } from 'react';

class DisplayComment extends React.Component {
    constructor(props) {
      super(props);
      this.state = {comments : [{comment: `this an example of comments added by some one`, date: new Date().toLocaleString()},
                                 {comment:`this an example of comments added by some one`,date: new Date().toLocaleString()}]
                    };
   
    }
   
  
    render() {
      return (
        
        <form onSubmit={this.handleSubmit}>
         <div className="showPostP">
           
                {this.state.comments.map((item,idx) =>{
                  return(
                    <div>
                  <p> {item.comment}</p>
                  <p> {item.date}</p>
                  </div>
                  )
                  
                })}
                 
         
           </div>
 
        </form>
      );
    }
  }

  export default DisplayComment;