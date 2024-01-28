import React from 'react'
import "./WidgetSm.css"
import { Visibility } from '@mui/icons-material'

export default function WidgetSm() {
  return (
	  <div className="widgetSm">
		  <span className="widgetSmTitle">
			  New Join Members
		  </span>
		  <ul className="widgetSmList">
			  <li className="widgetSmListItem">
				  <div className="widgetSmImg"></div>
				  <div className="widgetSmUser">
					  <span className="widgetSmUsername">John Doe</span>
					  <span className="widgetSmUserTitle">Software Engineer</span>
				  </div>
				  <button className="widgetSmButton">
					  <Visibility className="widgetSmIcon"/>
					  Display
				  </button>
			  </li>
			  <li className="widgetSmListItem">
				  <div className="widgetSmImg"></div>
				  <div className="widgetSmUser">
					  <span className="widgetSmUsername">John Doe</span>
					  <span className="widgetSmUserTitle">Software Engineer</span>
				  </div>
				  <button className="widgetSmButton">
					  <Visibility className="widgetSmIcon"/>
					  Display
				  </button>
			  </li>
			  <li className="widgetSmListItem">
				  <div className="widgetSmImg"></div>
				  <div className="widgetSmUser">
					  <span className="widgetSmUsername">John Doe</span>
					  <span className="widgetSmUserTitle">Software Engineer</span>
				  </div>
				  <button className="widgetSmButton">
					  <Visibility className="widgetSmIcon"/>
					  Display
				  </button>
			  </li>
			  <li className="widgetSmListItem">
				  <div className="widgetSmImg"></div>
				  <div className="widgetSmUser">
					  <span className="widgetSmUsername">John Doe</span>
					  <span className="widgetSmUserTitle">Software Engineer</span>
				  </div>
				  <button className="widgetSmButton">
					  <Visibility className="widgetSmIcon"/>
					  Display
				  </button>
			  </li>
			  <li className="widgetSmListItem">
				  <div className="widgetSmImg"></div>
				  <div className="widgetSmUser">
					  <span className="widgetSmUsername">John Doe</span>
					  <span className="widgetSmUserTitle">Software Engineer</span>
				  </div>
				  <button className="widgetSmButton">
					  <Visibility className="widgetSmIcon"/>
					  Display
				  </button>
			 </li>

		  </ul>
	 </div>
  )
}
