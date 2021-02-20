import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container';
import Skeleton from '@material-ui/lab/Skeleton';

const BlogPage = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data.slice(0, 10))
                setLoading(false)
            })
            .catch(err => {
                console.log('Error')
                setPosts([])

            })
    }, [])
    return (
        <Container component='div' maxWidth="lg">
            {
                posts.map((post, idx) => (
                    <div>{JSON.stringify(post)}</div>
                ))
            }
        </Container>
    )
}

export default BlogPage