import React, {Component} from 'react'
import VideoListItem from './video_list_item'
import '../styles.css'

const VideoList=(props) => {
	const videoItems = props.videos.map((video)=>{
							return <VideoListItem key={video.etag} video={video} />
						})
	return(
		<ul>
			{videoItems}
		</ul>
	)
}

export default VideoList;