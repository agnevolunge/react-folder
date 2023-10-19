import MapWrapper from './Components/MapWrapper'
import ShopsWrapper from './Components/ShopsWrapper'
import Container from './Components/Container/container'
import './ContactUsPage.css'



function ContactUsPage() {
  return (
    <Container>
      <div className="content-wrapper">
        <ShopsWrapper />
        <MapWrapper />
      </div>
    </Container>
  )
}

export default ContactUsPage