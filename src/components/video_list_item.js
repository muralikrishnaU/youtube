import React, {Component} from 'react'
import '../styles.css'

const VideoListItem=(props) => {
	const video=props.video;
	const imageURL= video.snippet.thumbnails.default.url;
	return (
		<li className="list-group-item">
			<div className="video-list-item">
				<div className="media-left">
					<img className="media-object" src={imageURL}/>
				</div>
				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
}

export default VideoListItem;