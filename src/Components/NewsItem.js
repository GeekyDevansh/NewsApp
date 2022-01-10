import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
      let {title, description, imageUrl,url,author,source,publishedAt}= this.props;
        return (
            <div>
                    <div className="card my-3">
  <img src={imageUrl} className="card-img-top" alt="NewsImage"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    
      <p> by {author} on {new Date (publishedAt).toGMTString()} </p>
      <p>Source : <b>{source}</b></p>
       
      
    
    
    <hr/>
    <p className="card-text">{description}</p>
    
    <a href={url} target = "_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read Full article</a>
  </div>
</div>
            </div>
        )
    }
}
