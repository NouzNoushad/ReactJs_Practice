import React from 'react'
import './SideBar.css';
import { LineStyle, Timeline, TrendingUp } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
		  <div className="sideBar">
		  <div className="sideBarWrapper">
			  <div className="sideBarMenu">
				  <h3 className="sideBarTitle">Dashboard</h3>
				  <ul className='sideBarList'>
					  <li className="sideBarListItem active">
						  <LineStyle className='sideBarIcon'/>
						  Home
					  </li>
					  <li className="sideBarListItem">
						  <Timeline className='sideBarIcon'/>
						  Analytics
					  </li>
					  <li className="sideBarListItem">
						  <TrendingUp className='sideBarIcon'/>
						  Sales
					  </li>
					</ul>
			  </div>
			  <div className="sideBarMenu">
				  <h3 className="sideBarTitle">Quick Menu</h3>
				  <ul className='sideBarList'>
					  <Link to="/users" className='link'>
						  <li className="sideBarListItem">
						  <LineStyle className='sideBarIcon'/>
						  Users
					  </li>
					  </Link>
					  <Link to="/products" className='link'>
						  <li className="sideBarListItem">
						  <Timeline className='sideBarIcon'/>
						  Products
					  </li>
					  </Link>
					  <li className="sideBarListItem">
						  <TrendingUp className='sideBarIcon'/>
						  Reports
					  </li>
					</ul>
			  </div>
			  <div className="sideBarMenu">
				  <h3 className="sideBarTitle">Notifications</h3>
				  <ul className='sideBarList'>
					  <li className="sideBarListItem">
						  <LineStyle className='sideBarIcon'/>
						  Mail
					  </li>
					  <li className="sideBarListItem">
						  <Timeline className='sideBarIcon'/>
						  Feedback
					  </li>
					  <li className="sideBarListItem">
						  <TrendingUp className='sideBarIcon'/>
						  Messages
					  </li>
					</ul>
			  </div>
			  <div className="sideBarMenu">
				  <h3 className="sideBarTitle">Staff</h3>
				  <ul className='sideBarList'>
					  <li className="sideBarListItem">
						  <LineStyle className='sideBarIcon'/>
						  Manage
					  </li>
					  <li className="sideBarListItem">
						  <Timeline className='sideBarIcon'/>
						  Analytics
					  </li>
					  <li className="sideBarListItem">
						  <TrendingUp className='sideBarIcon'/>
						  Reports
					  </li>
					</ul>
			  </div>
			  </div>
		</div>
  )
}
