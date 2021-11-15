import { MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Mark from '../components/Mark'
import { MarkAsUnread } from '@mui/icons-material'

const MapCompany = (props) =>  {
  const reforms = props.reforms
  console.log(reforms)
  return (
    <>
    <MapContainer 
      center={[6.317299789650186, -75.55304450668937]} 
      zoom={15}
      > 
      <TileLayer  
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      atributions='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    {reforms.map((reform, index) => {
      return (
      <Mark coord={reform.mark} key={index}/>
    )
    })}
 
    </MapContainer>
    </>
  )
}

export default MapCompany