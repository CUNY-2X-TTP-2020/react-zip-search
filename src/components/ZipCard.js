import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ZipCard extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            city: "",
            state: "",
            location: "",
            population: "",
            wages: ""
        }
    }

    render()
    {
        return (
            <section>
                <h3>{this.state.city}, {this.state.state}</h3>
                <ul>
                    <li>State: {this.state.state}</li>
                    <li>Location: ({this.state.location})</li>
                    <li>Populated (estimated): {this.state.population}</li>
                    <li>Total Wages: {this.state.wages}</li>
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