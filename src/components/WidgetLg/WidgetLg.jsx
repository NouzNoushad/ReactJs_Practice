import React from 'react'
import "./WidgetLg.css"

export default function WidgetLg() {

	const Button = ({ type }) => {
		return <button className={"widgetLgButton " + type}>{type}</button>
	}
  return (
	  <div className="widgetLg">
		  <h3 className="widgetLgTitle">Latest transactions</h3>
		  <table className="widgetLgTable">
			  <tr className="widgetLgTr">
				  <th className="widgetLgTh">Customer</th>
				  <th className="widgetLgTh">Date</th>
				  <th className="widgetLgTh">Amount</th>
				  <th className="widgetLgTh">Status</th>
			  </tr>
			  <tr className="widgetLgTr">
				  <td className="widgetLgUser">
					  <div className="widgetLgImg"></div>
					  <span className="widgetLgName">Jimmy Kim</span>
				  </td>
				  <td className="widgetLgDate">2 Jun 2024</td>
				  <td className="widgetLgAmount">$122.00</td>
				  <td className="widgetLgStatus"><Button type="Approve"/></td>
			  </tr>
			  <tr className="widgetLgTr">
				  <td className="widgetLgUser">
					  <div className="widgetLgImg"></div>
					  <span className="widgetLgName">Jimmy Kim</span>
				  </td>
				  <td className="widgetLgDate">2 Jun 2024</td>
				  <td className="widgetLgAmount">$122.00</td>
				  <td className="widgetLgStatus"><Button type="Declined"/></td>
			  </tr>
			  <tr className="widgetLgTr">
				  <td className="widgetLgUser">
					  <div className="widgetLgImg"></div>
					  <span className="widgetLgName">Jimmy Kim</span>
				  </td>
				  <td className="widgetLgDate">2 Jun 2024</td>
				  <td className="widgetLgAmount">$122.00</td>
				  <td className="widgetLgStatus"><Button type="Pending"/></td>
			  </tr>
			  <tr className="widgetLgTr">
				  <td className="widgetLgUser">
					  <div className="widgetLgImg"></div>
					  <span className="widgetLgName">Jimmy Kim</span>
				  </td>
				  <td className="widgetLgDate">2 Jun 2024</td>
				  <td className="widgetLgAmount">$122.00</td>
				  <td className="widgetLgStatus"><Button type="Approve"/></td>
			  </tr>
			  <tr className="widgetLgTr">
				  <td className="widgetLgUser">
					  <div className="widgetLgImg"></div>
					  <span className="widgetLgName">Jimmy Kim</span>
				  </td>
				  <td className="widgetLgDate">2 Jun 2024</td>
				  <td className="widgetLgAmount">$122.00</td>
				  <td className="widgetLgStatus"><Button type="Pending"/></td>
			  </tr>
		  </table>
	 </div>
  )
}
