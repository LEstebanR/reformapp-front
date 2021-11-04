import { Player } from '@lottiefiles/react-lottie-player';
import { Typography } from '@mui/material';

const animURL = 'https://assets2.lottiefiles.com/private_files/lf30_3scgfuxp.json'

const ErrorPage = () => {
  return (
    <div className="error-page">
      <Typography variant="h1" color="initial" align="center">Error</Typography>
      <Typography variant='body1' color="initial" align="center">Lo sentimos pero no hemos encontrados la página que buscas.</Typography>
      <Player
        src={animURL}
        autoplay
        loop
        speed={1}
        style={{
          width: '60%',
          height: '60%',
          margin: '0 auto',
        }}
      />
    </div>
  );
}

export default ErrorPage;