import React from 'react'
import Container from '@material-ui/core/Container';
import BlogWrapper from '../../containers/blog-wrapper/blogwrapper.component';

const BlogPage = () => {

    return (
        <Container component='div' maxWidth="lg" >
            <BlogWrapper />
        </Container>
    )
}

export default BlogPage