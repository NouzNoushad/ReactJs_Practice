import React from 'react'
import './NewProduct.css'

export default function NewProduct() {
  return (
	 <div className='newProduct'>
		  <h1 className="newProductTitle">New Product</h1>
		  <form action="" className="newProductForm">
			  <div className="newProductItem">
				  <label htmlFor="">Image</label>
				  <input type="file" id='file'/>
			  </div>
			  <div className="newProductItem">
				  <label htmlFor="">Name</label>
				  <input type="text" placeholder='Apple'/>
			  </div>
			  <div className="newProductItem">
				  <label htmlFor="">Stock</label>
				  <input type="text" placeholder='123'/>
			  </div>
			  <div className="newProductItem">
				  <label htmlFor="">Active</label>
				  <select name="active" id="active" className='newProductSelect'>
					  <option value="yes">Yes</option>
					  <option value="no">No</option>
				  </select>
			  </div>
			  <button className="newProductButton">Create</button>
		  </form>
	 </div>
  )
}
