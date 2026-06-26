import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, discription,imgSrc ,newsUrl} = this.props

    return (
      <div>
        <div className="card border border-2 border-dark rounded-3 overflow-hidden" >
            <img className="card-img-top" src={imgSrc} alt="Title" />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{discription}</p>
                <a name=""
                    id=""
                    className="btn btn-primary"
                    href={newsUrl}
                    target='_blank'
                    role="button"
                    rel="noreferrer"
                    >Read More</a>
                
            </div>
        </div>
        
      </div>
    )
  }
}
