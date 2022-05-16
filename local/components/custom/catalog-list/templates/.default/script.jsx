import React from 'react';
import ReactDOM from 'react-dom';
import Pizza from './Pizza'

document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
        <Pizza />,
        document.getElementById('catalog-pizza-card')
    );
});
