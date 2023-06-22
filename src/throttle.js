import React from 'react';

// function throttle(fn, delay) {
//     // throttle: invoke then wait; invoke at most once per delay
//     let lastFn; // save the function that needs to be throttled
//     let lastRan; // save the last time when the function ran
//     return function(...args) {
//         if(!lastRan){ 
//             fn.apply(this, args);
//             lastRan = Date.now();
//         } else {
//             clearTimeout(lastFn);
//             lastFn = setTimeout(() => {
//                 if ((Date.now() - lastRan) >= delay){
//                     fn.apply(this, args);
//                     lastRan = Date.now();
//                 }
//             }, delay - (Date.now() - lastRan));
//     }
// }}

// function ThrottleBtn() {
//     const throttledOnClick = React.useCallback(throttle(() => {
//         console.log('throttled btn clicked!');
//     }, 2000), []);

//     return (<button onClick={throttledOnClick}>Throttled Button</button>);
// }

// export default ThrottleBtn;

function throttle(fn, delay, options = {}) {
    let lastFn; // save the last time when function ran
    let lastRan; // save the first run as boolean
    let { leading = true, trailing = true } = options;

    return function(...args) {
        const context = this;
        // wrap function in a closure and include the run time
        const runFn = () => {
            fn.apply(context, args);
            lastRan = Date.now(); // set time every time when the function runs
        };

        // if ( leading && !lastRan ) {
        //     runFn();
        //     return;
        // }

    //     if (!lastRan) { // condition for the first run
    //         if (leading) {
    //         runFn(); // if leading, immediately fire the funciton
    //         // if click again within delay, function does not fire until delay passed
    //         if ((Date.now() - lastRan) >= delay) {
    //             runFn();
    //         }

    //     } else {
    //         lastRan = Date.now();
    //     }
    // }

        if (!lastRan) {
            if (leading) {
                runFn();
            }
            lastRan = Date.now();
        } else if (leading && Date.now() - lastRan >= delay) {
            runFn();
        }

        if(trailing) { // trailing condition
            clearTimeout(lastFn);
            lastFn = setTimeout(() => {
                if ( leading && ((Date.now() - lastRan) >= delay)) {
                    runFn();
                } else if (!leading) {
                    runFn();
                }
        }, (delay));
    }
}}

function ThrottleBtn() {
    const options = { leading: true, trailing: false };
    const throttledOnClick = React.useCallback(throttle(() => {
        console.log('throttled btn clicked!');
        console.log('leading:', options.leading, ', trailing:', options.trailing);
    }, 2000, options), []);

    return (<button onClick={throttledOnClick}>Throttled Button</button>);
}

export default ThrottleBtn;