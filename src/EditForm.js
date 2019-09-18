import React from 'react';
import {connect} from 'react-redux';
class EditForm extends React.Component{
	constructor(props){
		super(props);
		this.state={
			title:'',
			body:'',
		}
	}
		handleChange=(event)=>{
			this.setState({
				[event.target.name]:event.target.value
			})
		}

			handleSubmit=(event)=>{
				event.preventDefault();
				const payload={
					title:this.state.title,
					body:this.state.body,
				}
				this.props.dispatch({
					payload,
					id:this.props.post.id,
					type:'UPDATE_POST',
				})
		}
		handleClick=(event)=>{
			console.log('UPDATE successfully')
			console.log(this.props)
		}
		
	render(){
		console.log(this.props)
		return(
			<div className="App">
				<h1>Book Information</h1>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label>Title</label>
						<input name="title" onChange={this.handleChange} defaultValue={this.props.post.title}/>
					</div>
						<div>
							<label>Body</label>
							<textarea name="body" onChange={this.handleChange} defaultValue={this.props.post.body}/>
						</div>
							<button onClick={this.handleClick}>UPDATE</button>
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
export default connect()(EditForm);