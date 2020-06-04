import React, { Component } from 'react';

export default class SearchBar extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {

        }
    }

    handleSubmit()
    {

    }

    render()
    {
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <label for="search-bar">Zip Code: </label>
                    <input type="text" id="search-bar" />
                </form>
            </section>
        );
    }
}