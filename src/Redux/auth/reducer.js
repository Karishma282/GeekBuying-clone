import { LOGIN, LOGOUT, SIGN_UP } from "./actionTypes";

const intitalState = {
  isAuth: false,
  FIRST_NAME:"",
  LAST_NAME:"",
  email:"",
  password:""
};
export const reducer_auth = (state = intitalState, { type, payload }) => {
  switch (type) {
    case LOGIN: {
      return {
        ...state,
        isAuth: true,
        email:payload.email,
        password:payload.password,
      };
    }
    case LOGOUT: {
      return { ...state, 
        isAuth: false,
         FIRST_NAME:"",
         LAST_NAME:"",
         email:"",
         password:""};
    }
    case SIGN_UP: {
      return {
        ...state,
        FIRST_NAME:payload.FIRST_NAME,
        LAST_NAME:payload.LAST_NAME,
        email:payload.email,
        password:payload.password
      };
    }
    default: {
      return state;
    }
  }
};
const cartreducer = (state=initState, action)=> {
  switch(action.type) {
     case "ADD_TO_CART":

     const IteamIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);

     if(IteamIndex >= 0){
       state.carts[IteamIndex].qnty+=1;
       toast.info(`${state.carts[IteamIndex].name} increased by ${state.carts[IteamIndex].qnty} `, {
         position: "bottom-left",
       })
     }else{
       const temp = {...action.payload, qnty:1}
       toast.success(`${action.payload.name} added to your cart`, {
         position: "bottom-left",
       })
       return {
         ...state, 
         carts: [...state.carts, temp]
       }
     }
       

     case "REMOVE_FROM_CART":
       const data = state.carts.filter((el)=>el.id !== action.payload);
       
       return {
         ...state,
         carts: data
       }


       case "REMOVE_MINUS_ONE":
         const IteamIndex_Dec = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);

         if(state.carts[IteamIndex_Dec].qnty >=1 ){
           const dltitem = state.carts[IteamIndex_Dec].qnty-=1
           console.log([...state.carts, dltitem]);

           return {
             ...state,
             carts:[...state.carts]
           }
         }else if(state.carts[IteamIndex_Dec].qnty === 1){
           const data = state.carts.filter((el)=>el.id !== action.payload);
       
           return {
             ...state,
             carts: data
       }

         }
       default :
       return state;
  }
}


export {  cartreducer };
