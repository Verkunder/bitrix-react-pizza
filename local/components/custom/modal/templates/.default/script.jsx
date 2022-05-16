import React from 'react';
import ReactDOM from 'react-dom';
import TheModal from './TheModal'

document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
        <TheModal />,
        document.getElementById('modal-content')
    );
});
