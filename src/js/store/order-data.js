import * as types from './types'
import {INCREMENT,DECREMENT} from './types'
export default {
	state:{
		count:0
	},
	mutations:{
		[INCREMENT](state){
			state.count++;
		},
		[DECREMENT](state){
			state.count--;
		}
	},
	actions:{
		increment:({commit}) => {
			commit(types.INCREMENT)
		},
		decrement:({commit}) => {
			commit(types.DECREMENT)
		},
		clear:({commit})=>{

		}
	},
	getters:{
		count:(state)=>{
			if(state.count<0){
				return 0
			}else {
				return state.count
			}
		},
	}
}
