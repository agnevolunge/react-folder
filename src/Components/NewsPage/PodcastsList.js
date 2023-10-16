import PodcastItem from "./PodcastItem"
import PodcastImage from "../Images/podcast-image-border-min.jpg"

const PodcastsList = () => {
return (
    <div className="podcast-list">

       <PodcastItem 
       imageSrc={PodcastImage}
       imageAlt="Test" 
       length="5:45" 
       title="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas" 
       date="2023-02-14"
       />

       <PodcastItem 
       imageSrc={PodcastImage}
       imageAlt="Test" 
       length="7:55" 
       title="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas" 
       date="2022-02-20"
       />

       <PodcastItem 
       imageSrc={PodcastImage}
       imageAlt="Test" 
       length="7:55" 
       title="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas" 
       date="2022-02-20"
       />

       <PodcastItem 
       imageSrc={PodcastImage}
       imageAlt="Test" 
       length="7:55" 
       title="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas" 
       date="2022-02-20"
       />


        
    </div>
)

}

export default PodcastsList