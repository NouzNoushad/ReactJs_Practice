import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import Charts from '../../components/Charts/Charts'
import {productData} from '../../dummyData'
import { Publish } from '@mui/icons-material'

export default function Product() {
  return (
	 <div className='product'>
		  <div className="productTitleContainer">
			  <h1 className="productTitle">Product</h1>
			  <Link to="/newProduct">
				  <button className="productAddButton">Create</button>
			  </Link>
		  </div>
		  <div className="productTop">
			  <div className="productTopLeft">
				  <Charts data={productData}
				  dataKey="Sales" title="Sale Performance"/>
			  </div>
			  <div className="productTopRight">
				  <div className="productInfoTop">
					  <div className="productInfoImg"></div>
					  <span className='productName'>Apple</span>
				  </div>
				  <div className="productInfoBottom">
					  <div className="productInfoItem">
						  <span className="productInfoKey">id:</span>
						  <span className="productInfoValue">123</span>
					  </div>
					  <div className="productInfoItem">
						  <span className="productInfoKey">sales:</span>
						  <span className="productInfoValue">5123</span>
					  </div>
					  <div className="productInfoItem">
						  <span className="productInfoKey">active:</span>
						  <span className="productInfoValue">yes</span>
					  </div>
					  <div className="productInfoItem">
						  <span className="productInfoKey">in stock:</span>
						  <span className="productInfoValue">no</span>
					  </div>
				  </div>
			  </div>
		  </div>
		  <div className="productBottom">
			  <form action="" className="productForm">
				  <div className="productFormLeft">
					  <label >Product Name</label>
					  <input type="text" placeholder='Apple' />
					  <label >In Stock</label>
					  <select name="inStock" id="idStock">
						  <option value="yes">Yes</option>
						  <option value="no">No</option>
					  </select>
					  <label >Active</label>
					  <select name="active" id="idActive">
						  <option value="yes">Yes</option>
						  <option value="no">No</option>
					  </select>
				  </div>
				  <div className="productFormRight">
					  <div className="productUpload">
						  <div className="productUploadImg"></div>
						  <label htmlFor="file">
							  <Publish/>
						  </label>
						  <input type="file" id='file' style={{display: "none"}}/>
					  </div>
					  <button className="productButton">Update</button>
				  </div>
			  </form>
		  </div>
	 </div>
  )
}
