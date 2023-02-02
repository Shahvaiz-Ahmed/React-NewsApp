// import PropTypes from 'prop-types'
import React from 'react'

const  NewsComponent =(props)=> {
    let {title, description, urlToImage, url, author, publishedAt, source} = props;

    return (
      <>
      <div>
        <div className="card">
            <img src={urlToImage} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className='text-muted' >Published By {!author?"UNKNOWN":author} at {new Date(publishedAt).toGMTString() }</p>
                <a href={url} target="_blank" rel="noreferrer" className="btn btn-dark">Read More.</a>
            </div>
            <span class="badge rounded-pill bg-danger" style={{zIndex: "1",position:"absolute", top:"0px", right: "0px"}} >
            {source}
    <span class="visually-hidden">unread messages</span>
  </span>
  </div>
            </div>
            
      </>
    )

}

export default NewsComponent