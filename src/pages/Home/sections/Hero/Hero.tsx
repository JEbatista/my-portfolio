import { Button, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

    const StyledHero = styled("div")(()=>({
        backgroundColor: "black",
        height: "100vh"
    }))

    const StyledImg = styled("img")(()=>({
        width: "100%",
        borderRadius: "50%",
    }))

    return (
      <>
       <StyledHero>
            <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <StyledImg src={Avatar} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography color="primary" variant="h1" textAlign="center">Everton Batista</Typography>
                    <Typography color="primary" variant="h2" textAlign="center">I am a front-end developer</Typography>
                    <Grid container display="flex" justifyContent="center">
                        <Grid item xs={12} md={4} display="flex" justifyContent="center">
                             <Button><LinkedInIcon/>LinkedIn</Button>
                        </Grid>
                        <Grid item xs={12} md={4} display="flex" justifyContent="center">
                            <Button><EmailIcon/>Contact me</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Container>
       </StyledHero>
      </>
    )
  }
  
  export default Hero