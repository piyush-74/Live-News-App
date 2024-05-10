import image from '../assest/News.jpg'
import React from "react";

function NewsArticles(props) {
	let {
		desc, title, imageURL,
		newsUrl, sourceName
	} = props;
	return (
		<div>
			<div className="card  bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2">
				<img src={imageURL?imageURL:image} style={{height:"200px", width:"360px"}}
					className="card-img-top"  alt="..." />
				<div className="card-body">
					<h5 className="card-title">{title.slice(0,50)}</h5>
					<p className="w-100 fs-6 
						text-body-secondary 
						text-end">
						- {sourceName}
					</p>
					<p className="card-text">{desc?desc.slice(0,90):""}</p>
					<a href={newsUrl}
						
						className="btn btn-primary btn-sm">
						Read More...
					</a>
				</div>
			</div>
		</div>
	);
}

export default NewsArticles;
