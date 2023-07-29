

const initialdata = {
	show:false
}


function reducers (state=initialdata, action){
	
	switch(action.type) {
    	case "successss":
      		return {show : action.payload}      	
   default: 
      return state; 
  }


}



export default reducers;