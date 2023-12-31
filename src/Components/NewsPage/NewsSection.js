import LargeButton from "./LargeButton"
import MainNews from "./MainNews"
import SecondaryNews from "./SecondaryNews"

const NewsSection = () => {

    return (

        <section className="news-section">
            <h1 className="page-title">Naujienos</h1>

            <MainNews />
            <SecondaryNews />
            <LargeButton title="Visos naujienos" url="/"/>

       </section>
    )

}

export default NewsSection