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
        .catch((error) => console.log(error));
    }

    render()
    {
        return (
            this.state.isFound ?
            this.generateZipCards(this.state.data)
            : <></>
        );
    }

    generateZipCards(data)
    {
        
    }
}

ZipCode.propTypes =
{
    zipCode: PropTypes.number.isRequired
}