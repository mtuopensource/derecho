// This is a component that shows the 
// user the summary of the weather for the day

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadWeatherData } from '../../store/weather-data/weatherDataActions';
import {
	getCurrentFeel,
	getCurrentSummary,
	getCurrentTemp,
	getTime,
} from '../../store/weather-data/weatherDataStoreSelectors';
import WeatherSummaryView from './WeatherSummaryView';

export class WeatherSummaryContainer extends Component {
	componentDidMount() {
		const {
			actions,
		} = this.props;
		actions.loadWeatherData();
	}

    render() {
		const {
			currentFeel,
			currentSummary,
			currentTemp,
			time,
		} = this.props;
        return (
			<WeatherSummaryView
				feelsLike={currentFeel}
				summary={currentSummary}
				temp={currentTemp}
				time={time}
			/>
		);
    }
}

const mapStateToProps = (state) => ({
	currentFeel: getCurrentFeel(state),
	currentSummary: getCurrentSummary(state),
	currentTemp: getCurrentTemp(state),
	time: getTime(state),
});

const mapDispatchToProps = (dispatch) => (
	bindActionCreators({
		loadWeatherData,
	}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(WeatherSummaryContainer);