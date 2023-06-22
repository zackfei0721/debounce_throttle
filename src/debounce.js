import React from 'react';

function debounce(fn, delay, options = {}) {
    // debounce: wait and invoke later
    let timer;
    let firstInvoke = true;
    let {leading = false, trailing = true} = options;
    return function(...args) {
        const context = this;
        if (firstInvoke && leading) {
            fn.apply(context, args);
            firstInvoke = false;
        }
        clearTimeout(timer);
        if (trailing) {
            timer = setTimeout(() => {
                fn.apply(context, args); 
                firstInvoke = true;
             }, delay);  
            } else {
                timer = setTimeout(() => {
                    firstInvoke = true;
                }, delay);
            }
        }
    }

function DebounceBtn() {
    const options = { leading: true, trailing: true };
    const debouncedOnClick = React.useCallback(debounce(() => {
        console.log('debounced btn clicked!');
        console.log('leading:', options.leading, ' trailing:', options.trailing);
    }, 2000, options), []);

    return (<button onClick={debouncedOnClick}>Debounced Button</button>);
}


export default DebounceBtn;