// This is a component that shows the 
// user the summary of the weather for the day

import React, { Component } from 'react';

export class WeatherSummary extends Component {
    render() {
        let today = new Date();
        let days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri','Sat', 'Sun'];

        let weekForecast = days.map(day => (
            <div className="col-md">
                { day }: 55℉
            </div>
        ));

        return (
	    <div className="container">
	        <div className="jumbotron">
                	<h1 className="display-4">Hello! It is currently { today.getHours() }:{ today.getMinutes() }</h1>
			<h2>44&deg;F in Houghton</h2>
			<div className="row">
				{ weekForecast }
			</div>
		</div>
	    </div>
        )
    }
}

