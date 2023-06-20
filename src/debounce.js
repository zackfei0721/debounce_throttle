import React from 'react';

function debounce(fn, delay) {
    // debounce: wait and invoke later
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);    
    }
}

function DebounceBtn() {
    const debouncedOnClick = React.useCallback(debounce(() => {
        console.log('debounced btn clicked!');
    }, 2000), {});

    return (<button onClick={debouncedOnClick}>Debounced Button</button>);
}


export default DebounceBtn;