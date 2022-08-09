import { Card, CardMedia, Typography, Grid, CardContent, CardActions, Button } from '@mui/material';
import decorebg from '../../images/decorebg.webp';
function DecorationSample(props) {
    var direction = props.options.dir;
    return (
        <>
            {
               

               (direction == "left")? 
               <><Grid item xs={8}>

                        <Card >

                            <CardMedia
                                component="img"
                                height="300"
                                image={decorebg}
                                alt="Paella dish"
                            />
                        </Card>

                    </Grid>
                     <Grid item xs={4}>
                     <CardContent>
                         <Typography gutterBottom variant="h5" component="div">
                            {props.options.title}
                         </Typography>
                         <Typography variant="body2" color="text.secondary">
                            {props.options.desc}
                         </Typography>

                     </CardContent>
                     <CardActions>

                         <Button variant="outlined" href="tel:+918419929338" style={{ 'marginRight': '10px' }}>
                             Call
                         </Button>
                         <Button variant="contained" color="success">
                             Inquiry
                         </Button>

                         <Button size="small">More</Button>
                     </CardActions>
                 </Grid>
                 </>

                    :
                    <>
                 <Grid item xs={4}>
                 <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                        {props.options.title}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                       {props.options.desc}
                     </Typography>

                 </CardContent>
                 <CardActions>

                     <Button variant="outlined" href="tel:+918419929338" style={{ 'marginRight': '10px' }}>
                         Call
                     </Button>
                     <Button variant="contained" color="success">
                         Inquiry
                     </Button>

                     <Button size="small">More</Button>
                 </CardActions>
             </Grid>
             <Grid item xs={8}>

                    <Card >

                        <CardMedia
                            component="img"
                            height="300"
                            image={decorebg}
                            alt="Paella dish"
                        />
                    </Card>

                </Grid>
             </>
                   
            }

        </>

    )
}

export default DecorationSample;