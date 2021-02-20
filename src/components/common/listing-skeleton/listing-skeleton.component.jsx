import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';


const ListingSkeleton = (props) => {
    return (
        <Grid item xs={1} >
            <Skeleton variant="text" width={230} height={20} />
            <Skeleton variant="text" width={230} height={20} />
            <Skeleton variant="text" width={230} height={20} />
            {/* <Skeleton variant="circle" width={40} height={40} /> */}
            <Skeleton variant="rect" width={230} height={140} />
        </Grid>
    )

}

export default ListingSkeleton