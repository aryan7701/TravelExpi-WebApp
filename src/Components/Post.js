import React, { Component } from 'react'
import PostItem from './PostItem';
export class Post extends Component {
  render() {
    return (
      <div>
        
      <div className="ThisIsAPostComponent">This is a component</div>
      <PostItem title="Shiv Temple" description="Near Utrakhand, at the peak of gods valley,there exists a shiv temple"/>
      <PostItem/>
      <PostItem/>
      <PostItem/>
      </div>
    )
  }
}

export default Post;
