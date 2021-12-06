import React from "react";
import {Form,Button,Table} from 'react-bootstrap';
import {useState,createRef} from "react";
export default function AddProduct() {
    const formData =createRef();
    
     let initialvalue =[];
     const [products,setProduct] =useState(initialvalue);
     const add =(event) =>{
         event.preventDefault();
        // console.log(event.target.product_name.value);
          //const formData =event.target;
         // const newProduct ={
           //   product_name:formData.product_name.value,
                //price:formData.price.value,
               // Quantity:formData.Quantity.value,
         // }
           // console.log(formData.current);
           const newProduct ={
              product_name:formData.current.product_name.value,
                price:formData.current.price.value,
               Quantity:Number(formData.current.Quantity.value),
            }
       // console.log(newProduct);
       // add a new product inside product array.
       setProduct([...products,newProduct]);
       //console.log(products);
     }
      const IncrementQuantity =(event) =>{
          //console.log(event.target.value);
          const indexofArray =event.target.value;
          products[indexofArray].Quantity =products[indexofArray].Quantity + 1;
          setProduct([...products]);

      }
      const DecrementQuantity =(event) =>{
        const indexofArray =event.target.value;
        products[indexofArray].Quantity =products[indexofArray].Quantity - 1;
        setProduct([...products]);

      }
    return (
        <div>
           <Form onSubmit ={add} ref ={formData}>
              <Form.Group  controlId="formBasicProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Product Name" name ="product_name" />
             
                
             </Form.Group>

             <Form.Group controlId="formBasicPrice">
                   <Form.Label>Price</Form.Label>
                  <Form.Control type="number" placeholder="Price in Rupees" name ="price" />
             </Form.Group>

             <Form.Group controlId="formBasicQuantity">
                   <Form.Label>Quantity</Form.Label>
                  <Form.Control type="number" placeholder="in numbers" name ="Quantity" />
             </Form.Group>
                 <Button variant="primary" type="submit">
                     Add to Inventory
                   </Button>
             </Form>
             <Table striped bordered hover variant="dark">
                  <thead>
                         <tr>
                          <th>Index</th>
                          <th>Product Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Edit</th>
                         </tr>
                  </thead>
                    <tbody>
                        {
                            products.map((item,index) =>{
                             return (
                                <tr key ={index}>
                                <td>{index}</td>
                               <td>{item.product_name}</td>
                               <td>{item.price}</td>
                               <td>{item.Quantity}</td>
                               <td>
                                 <Button variant="success" onClick ={event =>IncrementQuantity(event)} value ={index}>+</Button>{' '} 
                                 <Button variant="danger" onClick ={event =>DecrementQuantity(event)}value ={index}>-</Button>{' '}
                               </td>
                               </tr>
                               ) 
                            })
                        }
                   
                    </tbody>
               </Table>
          </div>
    )
}