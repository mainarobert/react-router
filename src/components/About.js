import React from 'react';
import Colors from '../hoc/Colors';

function About() {
    return (
        <div className= "container">
            <h3 className= "center">About</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus dolorem vel, laboriosam aspernatur dolorum unde
                quibusdam odit possimus iusto blanditiis assumenda officia,
                natus ratione odio inventore consequatur fugit modi aliquid.
            </p>
        </div>
    )
}

export default Colors(About);
