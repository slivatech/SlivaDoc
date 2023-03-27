import AppointmentBox from './AppointmentBox'
import { serviceAppointments } from './fakeData'



const ServicesList = () => {
  return (
    <div style={{flex:0.6,display:"flex",flexDirection:"column",gap:"1rem"}}>
        {serviceAppointments.map((appointment,i)=>(
            <AppointmentBox key={i} {...appointment} />
        ))}
    </div>
  )
}

export default ServicesList