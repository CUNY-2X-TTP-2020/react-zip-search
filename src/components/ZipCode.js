import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

export default class ZipCode extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            zipCode: props.zipCode,
            city: "",
            state: "",
            location: "",
            population: "",
            wages: "",
            isFound: false
        }
    }

    componentDidMount()
    {
        const zip = this.state.zipCode;
        const url = `http://ctp-zip-api.herokuapp.com/zip/${zip}`;

        axios.get(url)
        .then((response) =>
        {
            const data = response.data[0];
            console.log(data);

            const city = data.City;
            const state = data.State;
            const location = `${data.Lat}, ${data.Long}`;
            const population = data.EstimatedPopulation;
            const wages = data.TotalWages;

            this.setState({ city, state, location, population, wages, isFound: true });
        })
        .catch((error) => console.log(error));
    }

    render()
    {
        return (
            this.state.isFound ?
            <section>
                <h3>{this.state.city}, {this.state.state}</h3>
                <ul>
                    <li>State: {this.state.state}</li>
                    <li>Location: ({this.state.location})</li>
                    <li>Populated (estimated): {this.state.population}</li>
                    <li>Total Wages: {this.state.wages}</li>
                </ul>
            </section>
            : <></>
        );
    }
}

ZipCode.propTypes =
{
    zipCode: PropTypes.number.isRequired
}