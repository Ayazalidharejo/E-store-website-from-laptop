import { TextIncrease } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const CartSlice =createSlice({
    name:"Cart",
    initialState:{
        Cartitem:[],
    },
    reducers:{
Addtocart:(state,action)=>{
    console.log(action.payload);
    
    const   IsExies =state.Cartitem.find((item)=>item.id === action.payload.id)
    console.log(IsExies);
    if (IsExies) {
        IsExies.quanitity +=1
        
    }else{
        state.Cartitem.push({...action.payload,quanitity:1})
    }
    
  

},
Increasequantity:(state,action)=>{
    const IsExies =state.Cartitem.find((item)=>item.id === action.payload.id)
    if (IsExies) {
        IsExies.quanitity +=1
    }
},
dicreasequantity:(state,action)=>{
    const IsExies =state.Cartitem.find((item)=>item.id === action.payload.id)
    if (IsExies && IsExies.quanitity> 1) {
        IsExies.quanitity -=1
    } else if(IsExies && IsExies.quanitity===1){
state.Cartitem= state.Cartitem.filter((item) => item.id !== action.payload.id)
    }
},
Delete:(state,action)=>{
    const IsExies =state.Cartitem.find((item)=>item.id === action.payload.id)
    if (IsExies ) {
        state.Cartitem= state.Cartitem.filter((item) => item.id !== action.payload.id)
    } 

    
}
    }
})


export const {Addtocart,Increasequantity,dicreasequantity,Delete}= CartSlice.actions
export default CartSlice.reducer