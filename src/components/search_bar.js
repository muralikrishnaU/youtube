import React, {Component} from 'react'

class SearchBar extends Component{
	constructor(){
		super();
		this.state={name: ""}
	}
	render(){
		return (
			<div>
			<input 
				value={this.state.name}
				onChange={event=>this.setState({name: event.target.value})}/>
			</div>
	)
	}
	
}
export default SearchBar;