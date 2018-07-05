import React, {Component} from 'react'
import '../styles.css'

class SearchBar extends Component{
	constructor(){
		super();
		this.state={name: ""}
	}
	render(){
		return (
			<div>
				<img className="youtube-logo" src="https://cdn.vox-cdn.com/thumbor/SfyqZw6l_jidAYdkqYEis-Omdho=/0x0:1680x1050/1200x675/filters:focal(706x391:974x659):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/56414327/YTLogo_old_new_animation.0.gif"/>
				<input className="user-input"
					value={this.state.name}
					onChange={event=>this.setState({name: event.target.value})}/>
			</div>
	)	
	}
	
}
export default SearchBar;