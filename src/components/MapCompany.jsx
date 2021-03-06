import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Mark from '../components/Mark'

const MapCompany = (props) =>  {
  const reforms = props.reforms
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
        console.log(reform),
        <Marker position={reform.mark}>
        <Mark coord={reform.mark} key={index}/>
        <Popup>
          <a href={`../propuesta/${reform._id}`}>{reform.title}</a>
        </Popup>
      </Marker>
     
      // 
     
      
    )
    })}
 
    </MapContainer>
    </>
  )
}

export default MapCompany