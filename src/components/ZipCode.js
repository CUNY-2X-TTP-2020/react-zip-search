import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import ZipCard from './ZipCard';
export default class ZipCode extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            zipCode: props.zipCode,
            data: [],
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
            const data = response.data;

            this.setState({ data, isFound: true });
        })
        .catch((error) => 
        {
            console.log(error);
            this.setState({ data: [], isFound: false });
        });
    }

    render()
    {
        return (
            this.state.isFound ?
            this.generateZipCards(this.state.data) : 
            <p>No results found 🙁</p>
        );
    }

    generateZipCards(data)
    {
        let cards = [];

        data.forEach(element => 
        {
            const city = element.City;
            const state = element.State;
            const location = `${element.Lat}, ${element.Long}`;
            const population = element.EstimatedPopulation;
            const wages = element.TotalWages;

            cards.push(<ZipCard 
                city={city} 
                state={state}
                location={location}
                population={population}
                wages={wages}
            />);
        });

        return cards;
    }
}

ZipCode.propTypes =
{
    zipCode: PropTypes.number.isRequired
}