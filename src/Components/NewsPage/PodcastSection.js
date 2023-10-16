import PodcastsList from "./PodcastsList"
import SectionTitle from "../partials/SectionTitle"

const PodcastSection = () => {

    return (
        <section className="podcast-section">
            <SectionTitle title="Padcastai ir radijo laidos"/>
            <PodcastsList />
        </section>
    )
}

export default PodcastSection 