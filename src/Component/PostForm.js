import React, { Component } from 'react';

class PostForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {posts : []
        , post:''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState= {
        post: event.target.value
      };      

    }
  
     handleSubmit(event) {
   
      const _post = [...this.state.posts]
      _post.push( this.state.post);

      console.log(this.state.post);
      event.preventDefault();

    }
  
    render() {
      return (
        
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="mb-3  mt-5" >
             <textarea className="form-control border  " id="exampleFormControlTextarea1" rows="5"  placeholder = "Write what you think"  onChange = {this.handleChange.bind(this)} ></textarea>
           
          </div>

          <button type="submit" className="btn btn-success">Add Post</button>
          {/* {this.state.posts.map((item,idx) =>{
                  return(
                    <div>
                  <p> {item}</p>
                   </div>
                  )
                  
                })} */}
        </form>
      );
    }
  }

  export default PostForm;