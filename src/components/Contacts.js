import React from 'react'

function Contacts(props) {
    // here props shows extra infomation about the router
    // console.log(props)

    // redirects to about page after 3 sec
    // this is possible because Contacts component has route path its props recieve additional objects from the router
    setTimeout(() => {
        props.history.push('/about')
    }, 3000);

    return (
        <div className= "container">
            <h3 className= "center">Contacts</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus dolorem vel, laboriosam aspernatur dolorum unde
                quibusdam odit possimus iusto blanditiis assumenda officia,
                natus ratione odio inventore consequatur fugit modi aliquid.
            </p>
        </div>
    )
}

export default Contacts;