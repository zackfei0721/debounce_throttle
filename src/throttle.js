import React from 'react';

function throttle(fn, delay) {
    // throttle: invoke then wait; invoke at most once per delay
    let lastFn; // save the function that needs to be throttled
    let lastRan; // save the last time when the function ran
    return function(...args) {
        if(!lastRan){
            fn.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFn);
            lastFn = setTimeout(() => {
                if ((Date.now() - lastRan) >= delay){
                    fn.apply(this, args);
                    lastRan = Date.now();
                }
        }, delay - (Date.now() - lastRan));
    }
}}

function ThrottleBtn() {
    const throttledOnClick = React.useCallback(throttle(() => {
        console.log('throttled btn clicked!');
    }, 2000), []);

    return (<button onClick={throttledOnClick}>Throttled Button</button>);
}

export default ThrottleBtn;