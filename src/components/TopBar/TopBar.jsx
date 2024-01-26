import React from 'react'
import "./topBar.css"
import { NotificationsNone, Language, Settings } from '@mui/icons-material'

export default function TopBar() {
  return (
	  <div className="topBar">
		  <div className="topBarWrapper">
			  <div className="topLeft">
				  <span className="logo">Nobo Admin</span>
			  </div>
			  <div className="topRight">
				  <div className="topBarIconContainer">
					  <NotificationsNone />
					  <span className="topIconBadge">
						  2
					  </span>
				  </div>
				  <div className="topBarIconContainer">
					  <Language />
					  <span className="topIconBadge">
						  2
					  </span>
				  </div>
				  <div className="topBarIconContainer">
					  <Settings />
				  </div>
			  </div>
		  </div>
	  </div>
  )
}
