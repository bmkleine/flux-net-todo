var FluxCartApp = require('./components/app.jsx');
var api = require("./utils/API");
var React = require('react');

React.render(
        <FluxCartApp/> ,
    document.getElementById('todoapp')
);

api.getTasks();