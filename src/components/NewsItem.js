import React from 'react'

const NewsItem = (props) => {


    let { title, description, imageUrl, newsUrl, date, author, source } = props;
    return (

        <div className="card">
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger text" style={{ zIndex: "1!important" }}>
                    {!source ? "unknown" : source}
                </span>
                <p className="card-text"><small className="text-muted">Created by {!author ? "unknown" : author} at {date}</small></p>
                <a href={newsUrl} className="btn btn-primary" target="_blank">Read More</a>

            </div>
        </div>


    )
}

export default NewsItem