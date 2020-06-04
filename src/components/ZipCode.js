import React, { Component } from 'react';
import PropTypes from 'prop-types';

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