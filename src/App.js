import logo from './logo.svg';
import './App.css';
import 'bootstrap';
import "bootstrap/scss/bootstrap.scss";
import React from 'react';
import PostForm from './Component/PostForm';
import ShowPost from './Component/ShowPost';
import Comment from './Component/Comment';
import DisplayComment from './Component/DisplayComment';



function App() {
  return (
    <div className="container px-4 text-center">
       <div className="row gx-5">
         <div className="col">
            <PostForm/>
            <ShowPost/>
            <Comment/>
            <DisplayComment/>
            
         </div>
       </div>
    </div>
  );
}

export default App;
