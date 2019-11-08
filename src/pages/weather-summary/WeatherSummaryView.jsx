import React from 'react';

export const WeatherSummaryView = (
	feelsLike,
	summary,
	temp,
	time,
) => (
	<div className="container">
	    <div className="jumbotron">
            <h1 className="display-4">
				Hello! It is currently { new Date(time) }
			</h1>
			<h2>{summary}</h2>
			<h2>{temp}&deg;F in Houghton</h2>
			<h4>Feels like {feelsLike}&deg;F</h4>
		</div>
    </div>
);
