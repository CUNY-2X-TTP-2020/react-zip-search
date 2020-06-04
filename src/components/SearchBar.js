import React, { Component } from 'react';

export default class SearchBar extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            prevSearch: "Try 10016"
        }
    }

    handleSubmit = (event) =>
    {
        // Prevent browser reload/refresh
        event.preventDefault();

        this.setState({ prevSearch: event.target.searchbar.value });
    }

    render()
    {
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <label for="searchbar">Zip Code: </label>
                    <input type="text" name="searchbar" id="searchbar" placeholder={this.state.prevSearch} />
                </form>
            </section>
        );
    }
}