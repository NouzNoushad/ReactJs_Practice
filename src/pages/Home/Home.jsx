import React from 'react'
import './home.css';
import FeatureInfo from '../../components/FeatureInfo/FeatureInfo';
import Charts from '../../components/Charts/Charts';
import { userData } from '../../dummyData';
import WidgetSm from '../../components/WidgetSm/WidgetSm';
import WidgetLg from '../../components/WidgetLg/WidgetLg';

export default function Home() {
  return (
	  <div className="home">
		  <FeatureInfo />
		  <Charts data={userData} title="User Analytics" grid dataKey="Active User" />
		  <div className="homeWidgets">
			  <WidgetSm />
			  <WidgetLg/>
		  </div>
	 </div>
  )
}
