import location from '../assets/media/location.svg'
import L from 'leaflet'


export const LocationIcon  = L.icon({
  iconUrl: location,
  iconSize: [30, 30],
  iconAnchor: [15, 15],
  popupAnchor: [0, -15],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null
  
  
})

