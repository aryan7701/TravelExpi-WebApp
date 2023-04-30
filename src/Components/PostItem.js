import React, { Component } from 'react'

export class PostItem extends Component {
  render() {
    let {title,description}=this.props;
    return (
        <div className="card" style={{width:"20rem"}}>
        {/* // <div className="card" style={{width:"24rem"?"18rem":"18rem"}}>if some error come in image response plz check also here. */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Fc-T7lE2L-mBIw0oEEuH2R5uiOpv4aLF5w&usqp=CAU" className="card-img-top" alt="..."/>
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




