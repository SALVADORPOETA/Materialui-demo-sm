import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, Box } from '@mui/material';
import { PhotoCamera } from "@mui/icons-material";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" >
        <Toolbar>
          <PhotoCamera sx={{ mr: 2 }} />
          <Typography variant="h6" >
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box sx={{ bgColor: 'background.paper', pt: 8, pb: 6}}>
          <Container maxWidth="sm" >
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hello everyone! 
              This is a photo album and I'm trying to practice my skills with 
              Material UI so I can increase my knowledge about front-end development.
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center" pt={4} direction="row">
                <Grid item >
                  <Button variant="contained" color="primary" >
                    See my photos
                  </Button>
                </Grid>
                <Grid item >
                  <Button variant="outlined" color="primary" >
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4} >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                    // 16:9
                  sx={{pt: '56.25%'}}
                  image="https://source.unsplash.com/random/?House"
                  alt="random"
                  title="Image title"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">View</Button>
                  <Button size="small" color="primary">Edit</Button>
                </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </Box>
    </>
  );
}

export default App;
