import React from 'react';
import {connect} from 'react-redux';

class AllPost extends React.Component{
	constructor(props){
		super(props);
			this.state={
				title:'',
				body:'',
				editable:false,
			}
		}
			handleChange=(event)=>{
				this.setState({
					[event.target.name]:event.target.value
				},()=>console.log(this.state.title,this.state.body))
			}
				handleSubmit=(event)=>{
					event.preventDefault();

					const payload={
						id:new Date(),
						title:this.state.title,
						body:this.state.body,
						editable:this.state.editable,
					}
					this.props.dispatch({
						
						type:'ADD_POST',
						payload
					})
				}
 
	render(){
		console.log(this.props)
		return(
			<div className="App">
				<h1>Book Information</h1>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label>Title</label>
						<input name="title" onChange={this.handleChange} defaultValue={this.state.title}/>
					</div>
						<div>
							<label>Body</label>
							<textarea name="body" onChange={this.handleChange} defaultValue={this.state.body}/>
						</div>
							<button>ADD</button>
				</form>
			</div>

			)
	}
}
// const mapStateToProps=(state)=>{
// 	return{
// 		posts:state
// 	}
// }
export default connect()(AllPost);