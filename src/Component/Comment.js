import React, { Component } from 'react';

class Comment extends React.Component {
    constructor(props) {
      super(props);
      this.state = {comments : [{comment: `this an example of comments added by some one`, date: new Date().toLocaleString()},
                                 {comment:`this an example of comments added by some one`,date: new Date().toLocaleString()}]
                    };
  
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
         <div className="showPostP">
              <textarea className="form-control border " id="exampleFormControlTextarea1" rows="2"  placeholder = "Write your comment" ></textarea>
          
            
                {/* {this.state.comments.map((item,idx) =>{
                  return(
                    <div>
                  <p> {item.comment}</p>
                  <p> {item.date}</p>
                  </div>
                  )
                  
                })} */}
                 
         
          {/* </div> */}
          </div>
 
        </form>
      );
    }
  }

  export default Comment;