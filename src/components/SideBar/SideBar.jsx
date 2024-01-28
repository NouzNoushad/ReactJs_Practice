import React from 'react'
import './SideBar.css';
import { LineStyle, Timeline, TrendingUp } from '@mui/icons-material';

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
			  </div>
		</div>
  )
}
