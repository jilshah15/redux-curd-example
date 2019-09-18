export const PostReducer=(state=[],action)=>{
	switch(action.type){
		case 'ADD_POST':
			return state.concat([action.payload])

		case 'EDIT_POST':
			return state.map((post)=> post.id===action.id?{...post,editable : !post.editable}:post)	

		case 'DELETE_POST':
			return state.filter((post)=>post.id!==action.id)

		case 'UPDATE_POST':
	      return state.map((post)=>{
	        if(post.id === action.id) {
	          return {
	             ...post,
	             title:action.payload.title,
	             body:action.payload.body,
	             editable: !post.editable
	          }
	        } 
			else return post;
	      })	
		default:
			return state
	}
}

