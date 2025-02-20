const heading = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{id:"mainHeading"},"Main Heaing"),
            React.createElement("h1",{id:"mainHeading2"},"Main Heaing2")]    ));
    const root = ReactDOM.createRoot( document.getElementById('root'));
    root.render(heading);