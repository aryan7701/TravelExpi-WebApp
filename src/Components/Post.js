import React, { Component } from 'react'
import PostItem from './PostItem';
export class Post extends Component {
  render() {
    return (
      // <div className='container my-4'>
        
      <div className="container my-4 mx-2">
        <h3>This is my Post section.</h3>
            <div className="row">
              <div className="col-md-6">
              <PostItem title="Shiv Temple" description="Near Utrakhand, at the peak of gods valley,there exists a shiv temple"/>
              <PostItem title="Krishna Temple" description="Near Uttar Pradesh, at the land of gods garden,there exists a krishna temple"/>
              <PostItem title="Shiv Temple" description="Near Utrakhand, at the peak of gods valley,there exists a shiv temple"/>
              <PostItem title="Shiv Temple" description="Near Utrakhand, at the peak of gods valley,there exists a shiv temple"/>
              </div>
            </div>
        </div>
      // </div>
    )
  }
}

export default Post;
