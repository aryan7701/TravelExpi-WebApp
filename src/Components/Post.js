import React from "react";

export const Post= ()=>{
    // let {title, description,imageUrl,newsUrl,author,date,source} =props;
    return(
        <div className="app">
            <h3>Username</h3>
            {/*header -> avatar +username*/}
            
                    <div className="card-body">
                    <h3 className="carrd-title">Title</h3>
                    <p className="card-text">Description...</p>
                    <img className="card-image" src="https://static.sadhguru.org/d/46272/1633199491-1633199490440.jpg" alt=""/>
                    {/* <p className="card-text"><small className="text-muted">By{username?username:"Unknown"} on {new Date(date).toGMTString()}</small></p> */}
                    </div>
                           
            </div>
    );
};

export default Post;