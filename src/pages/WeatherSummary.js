// This is a component that shows the 
// user the summary of the weather for the day

import React, { Component } from 'react';

import {Col, Container, Jumbotron, Row} from 'react-bootstrap'


export class WeatherSummary extends Component {
    render() {
        let today = new Date();
        let days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri','Sat', 'Sun'];

        let weekForecast = days.map(day => (
            <Col>
                {day}: 55℉
            </Col>
        ));

        return (
            <Container>
                <Jumbotron>
                    <h1>Hello! It is currently {today.getHours()}:{today.getMinutes()} </h1>
                    <h1>44℉ in Houghton</h1>
                    <Row>
                        {weekForecast}
                    </Row>
                </Jumbotron>
            </Container>
        )
    }
}