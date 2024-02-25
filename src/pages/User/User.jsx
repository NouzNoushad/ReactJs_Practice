import React from 'react'
import './User.css'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export default function User() {
  return (
	 <div className="user">
		  <div className="userTitleContainer">
			  <h1 className='userTitle'>Edit User</h1>
			  <Link to="/newUser">
				<button className="userAddButton">Create</button>
			  </Link>
			  
		  </div>
		  <div className="userContainer">
			  <div className="userShow">
				  <div className="userShowTop">
					  <div className='userShowImg'></div>
					  <div className="userShowTopTitle">
						  <span className="userShowUsername">
							  Manny
						  </span>
						  <span className="userShowUserTitle">
							  Software Engineer
						  </span>
					  </div>
				  </div>
				  <div className="userShowBottom">
					  <span className="userShowTitle">
						  Account Details
					  </span>
					  <div className="userShowInfo">
						  <PermIdentity className='userShowIcon'/>
							<span className="userShowInfoTitle">
								manny987
							</span>
					  </div>
					  <div className="userShowInfo">
						  <CalendarToday className='userShowIcon'/>
							<span className="userShowInfoTitle">
								10.12.1999
							</span>
					  </div>
					  <span className="userShowTitle">
						  Contact Details
					  </span>
					  <div className="userShowInfo">
						  <PhoneAndroid className='userShowIcon'/>
							<span className="userShowInfoTitle">
								+1 123 456 789
							</span>
					  </div>
					  <div className="userShowInfo">
						  <MailOutline className='userShowIcon'/>
							<span className="userShowInfoTitle">
								manny@gmail.com
							</span>
					  </div>
					  <div className="userShowInfo">
						  <LocationSearching className='userShowIcon'/>
							<span className="userShowInfoTitle">
								New york | USA
							</span>
					  </div>
				  </div>
			  </div>
			  <div className="userUpdate">
				  <span className="userUpdateTitle">Edit</span>
					  <form className="userUpdateForm">
						  <div className="userUpdateLeft">
							  <div className="userUpdateItem">
								  <label htmlFor="">Username</label>
								  <input type="text"
									  placeholder='manny987'
								  className='userUpdateInput'/>
							  </div>
							  <div className="userUpdateItem">
								  <label htmlFor="">Full Name</label>
								  <input type="text"
									  placeholder='Manny'
								  className='userUpdateInput'/>
							  </div>
							  <div className="userUpdateItem">
								  <label htmlFor="">Email</label>
								  <input type="text"
									  placeholder='manny@gmail.com'
								  className='userUpdateInput'/>
							  </div>
							  <div className="userUpdateItem">
								  <label htmlFor="">Phone</label>
								  <input type="text"
									  placeholder='+1 123 456 789'
								  className='userUpdateInput'/>
							  </div>
							  <div className="userUpdateItem">
								  <label htmlFor="">Address</label>
								  <input type="text"
									  placeholder='New york | USA'
								  className='userUpdateInput'/>
							  </div>
							
						  </div> 
					  <div className="userUpdateRight">
						  <div className="userUpdateUpload">
							  <div className='userUpdateImg'></div>
							  <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
							  <input type="file" id='file' style={{display: "none"}}/>
						  </div>
						  <button className="userUpdateButton">Update</button>
					  </div> 
						  
					  </form>
				  
			  </div>
		  </div>
	 </div>
  )
}
