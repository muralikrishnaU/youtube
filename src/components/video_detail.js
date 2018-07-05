import React, {Component} from 'react'
import '../styles.css';

const VideoDetail=({video}) => {
	if(!video){
		return <div>Loading...</div>;
	}
	const videoId = video.id.videoId;
	const URL=`https://www.youtube.com/embed/${videoId}`;
		
	return(
		<div className="Video-Detail">
			<div className="embed-responsive">
				<iframe className="embed-responsive-item" src={URL}></iframe>
			</div>
			<div className="detail">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>

	)
}
export default VideoDetail;