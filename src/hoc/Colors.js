// the idea here is that hoc randomizes text color in another component
// custom higher order component

import React from 'react'

const Colors = (WrappedComponent) => {
    const colors = ['red', 'blue', 'pink', 'purple', 'torquise', 'gold', 'orange'];
    const randomcolors = colors[Math.floor(Math.random()*6)];
    const className = randomcolors + '-text'

    return (props) => {
        return(
            <div className= {className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Colors
