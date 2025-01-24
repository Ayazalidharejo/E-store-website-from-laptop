import axios from 'axios'
import React from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify';

const DeleteProduct = () => {
    const DeleteProducts = async(id)=>{
console.log(id);

        const deleteresponce = await axios .delete(`https://fakestoreapi.com/products/${id}`)
       if (deleteresponce.status ===200) {
        toast.success('Product Delete succsfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
       }
        
    }
  return{DeleteProducts}
  
}

export default DeleteProduct