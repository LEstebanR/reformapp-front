import {Marker} from 'react-leaflet';
import { LocationIcon } from './LocationIcon';

const Mark = (props) => {
  const coord = props.coord
  return (
  <Marker 
    position={coord}
    icon={ LocationIcon   }
    
  />
  )
}

export default Mark;