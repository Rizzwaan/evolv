import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container';
import CustomCard from '../../components/custom-card/custom-card.component';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ListingSkeleton from '../../components/common/listing-skeleton/listing-skeleton.component';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 20
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const BlogWrapper = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const classes = useStyles();

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
        <Container component='div' maxWidth="lg" className={classes.root}>
            <Grid container spacing={3}>
                {
                    loading && [0, 0, 0, 0, 0, 0, 0, 0].map((item, idx) => (
                        <Grid key={idx} item xs={12} sm={6} lg={3}>
                            <ListingSkeleton />
                        </Grid>
                    ))
                }
                {
                    posts.map((post, idx) => (
                        <Grid key={post.id} item xs={12} sm={6} lg={3}>
                            <CustomCard post={post} loading={loading} />
                        </Grid>
                    ))
                }
            </Grid>
        </Container >
    )
}

export default BlogWrapper