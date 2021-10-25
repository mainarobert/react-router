import React, { Component } from 'react'
import axios from 'axios';

class Home extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.setState({
                posts: res.data.slice(0,10) // gets the first ten items
            });
        });
    }

    render() {
        const {posts} = this.state
        // cycles through posts when we have data
        const postlists = posts.length ? (
            posts.map(post => {
                return(
                <div className='post card' key= {post.id} >
                    <div className="card-content">
                        <span className="card title">{post.title}</span>
                        <p>{post.body}</p>
                    </div>
                </div>
                )

            })
            // else
        ) : (
            <div className= 'center'>
                No posts yet
            </div>
        );

        return (
            <div className= "container">
                <h3 className= "center">Home</h3>
                <p>{postlists}</p>
            </div>
        );
    }

}

export default Home;