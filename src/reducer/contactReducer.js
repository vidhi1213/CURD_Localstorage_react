import{
    CREATE_CONTACT,DELETE_CONTACT,UPDATE_CONTACT,UPDATE_INDEX,EDIT_USER
} from '../constant/type';

const intialState={
    currentData: null,
    contactData:[],
    flag:false
}

export const contactReducer = (state = intialState, action) => {
    const data = JSON.parse(localStorage.getItem('store') || "[]");
    switch (action.type) {
      case CREATE_CONTACT:
       
      data.push({
        ...action.payload,
        _id: Math.round(Math.random() * 1000000 + 1),
      });
      
      localStorage.setItem("store", JSON.stringify(data));
      return {
        state
      };

      case DELETE_CONTACT:
        const deleteData = JSON.parse(localStorage.getItem('store')); 
        const deletUser = deleteData.filter((item,i)=> item._id !== action.payload._id)
        localStorage.setItem("store", JSON.stringify(deletUser));
        // return{
        //   deletUser
        // }
        // return {
        //   ...state,
        //   contactData: state.contactData.filter(
        //     (contact) => contact._id !== action.payload
        //   ),
        // };
        // case UPDATE_CONTACT:
        //  const contactData= state.contactData.map((contact) =>{
        //        if( contact.id === action.payload.id ) contact=action.payload;
        //         return contact;                    
        //     });
        //     localStorage.setItem("store", JSON.stringify(contactData));
        //      return{
        //          state
        //           };

      case EDIT_USER:
        
        const alldata = JSON.parse(localStorage.getItem('store')); 
        const edituser = alldata.map((item,i)=> {
         return item._id ===action.payload._id ?  action.payload:item })
        localStorage.setItem("store", JSON.stringify(edituser));
          return{
            edituser
          }


      case UPDATE_INDEX:
            return {state, data, currentData: action.payload,flag:true };
 
     default:return state;
    }
}