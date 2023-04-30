import React, { Component } from 'react'

export class PostItem extends Component {
  render() {
    let {title,description}=this.props;
    return (
        <div className="card" style={{width:"18rem"}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="/Post" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    )
  }
}

export default PostItem;




