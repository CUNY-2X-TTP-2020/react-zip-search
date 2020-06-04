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
            zipCode: props.zipCode
        }
    }

    componentDidMount()
    {
        
    }

    render()
    {
        return (
            <>

            </>
        );
    }
}

ZipCode.propTypes =
{
    zipCode: PropTypes.number.isRequired
}