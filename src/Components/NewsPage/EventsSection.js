import EventsList from "./EventsList"
import LargeButton from "./LargeButton"
import SectionTitle from "../partials/SectionTitle"

const EventsSection = () => {

    return (
        <section className="events-section">
        <SectionTitle title="Renginiai"/>

        <EventsList />

        <LargeButton title="Daugiau" url="/" />
        
        </section>
    )
}

export default EventsSection 