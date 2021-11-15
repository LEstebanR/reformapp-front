import { MapContainer, Popup, TileLayer, Marker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Mark from '../components/Mark'

const MapCreate = (props) =>  {
  return (
    <>
    <MapContainer center={[6.317299789650186, -75.55304450668937]} zoom={15} scrollWheelZoom={false}> 
      <TileLayer  
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      atributions='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
 
    <Mark coord={[6.317299789650186, -75.55304450668937]}/>

  
    </MapContainer>
    </>
  )
}

export default MapCreate
