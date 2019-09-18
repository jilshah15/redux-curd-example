import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import EditForm from './EditForm';
class PostForm extends React.Component{
	
	render(){
		const props=this.props
		
		console.log(props)
		return(
			<div>
     
			     <table>
			     	<thead>
			     		<tr>
			     			<th>Title</th>
			     			<th>Body</th>
			     			<th>Action</th>
			     		</tr>
			     	</thead>
			     			<tbody>
			     				{this.props.posts.map((item,index)=>(
			     					<div key={index}>
										{	item.editable?
											<EditForm key={index} post={item}/>
											:<Post key={index} post={item}/>}
			     					   	
			     					</div>
			     					)
			     					
			     					)}
			     			</tbody>
			     </table>
			</div>
			)
	}
	
}
const mapStateToProps=(state)=>{
	return{
		posts:state,
	}
}
export default connect(mapStateToProps)(PostForm);