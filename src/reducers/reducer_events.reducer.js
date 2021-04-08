
export default   function (state=[],action){
    let events=[]; 
    switch (action.type){
    case "participerEvent": 
        return state.map(event=>{if(event._id==action.payload){return {
          ...event,participants:[localStorage.getItem("user"), ...event.participants],};
        }return event 
       })
     case "tousEv":
          return action.payload;
     default:
          return state;}
  
     



}