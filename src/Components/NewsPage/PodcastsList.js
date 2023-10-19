import PodcastItem from "./PodcastItem"
import PodcastImage from "../Images/podcast-image-border-min.jpg"

const PodcastsList = () => {

const data = [
    {
    imageSrc: {PodcastImage},
    imageAlt: "Test" ,
    length: "5:45" ,
    title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas" ,
    date: "2023-02-14",
    },
    {
    imageSrc: {PodcastImage},
    imageAlt: "Test" ,
    length: "5:45" ,
    title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas" ,
    date: "2023-02-14",
    },
    {
    imageSrc: {PodcastImage},
    imageAlt: "Test" ,
    length: "5:45" ,
    title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas" ,
    date: "2023-02-14",
    },
    {
    imageSrc: {PodcastImage},
    imageAlt: "Test" ,
    length: "5:45" ,
    title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas" ,
    date: "2023-02-14",
    },
]

const podcastsListElement = data.map((podcast, index) => {
    let {imageAlt, length, title, date} = podcast
    
    return (
        <PodcastItem 
        key = {index}
        imageSrc = {PodcastImage}
        imageAlt = {imageAlt}
        length = {length}
        title = {title}
        date = {date}
        />
    )
})
 
  return (
    <div className="podcast-list">
       {podcastsListElement}
    </div>
  )
}

export default PodcastsList