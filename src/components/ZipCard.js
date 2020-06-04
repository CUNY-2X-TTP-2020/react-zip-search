import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ZipCard extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            city: props.city,
            state: props.state,
            location: props.location,
            population: props.population,
            wages: props.wages
        }
    }

    render()
    {
        return (
            <section>
                <h3>{this.props.city}, {this.props.state}</h3>
                <ul>
                    <li>State: {this.props.state}</li>
                    <li>Location: ({this.props.location})</li>
                    <li>Populated (estimated): {this.props.population}</li>
                    <li>Total Wages: {this.props.wages}</li>
                </ul>
            </section>
        );
    }
}

ZipCard.propTypes =
{
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    wages: PropTypes.string.isRequired
}