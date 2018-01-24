import * as types from "./mutation-type"
const mutations={
	[types.SET_ITEMID](state,itemId){
		state.itemId=itemId
	}
}
export default mutations;