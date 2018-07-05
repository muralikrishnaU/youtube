import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
import './styles.css'


const API_KEY="AIzaSyBjccnAs9nRSXELICCW4MogIV9LPhHiiIQ";
 
class App extends Component {
	constructor(props){
		super(props);
		this.state={
			videos:[]
		}
		//fetching the youtube API by using the API_Key
		YTSearch({key : API_KEY, name:'Murali'},(videos) => {
 		this.setState({videos})//setting state to the videos
 		})
	}
	render() {
	    return (
	    	<div>
		      <SearchBar />
		      <VideoDetail video={this.state.videos[0]} />
		      <VideoList videos={this.state.videos} />
		    </div>
	    );
	  }
}

export default App;
