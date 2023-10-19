import EventsItem from "./EventsItem"

const EventsList = () => {

  const eventsData = [
    {
      url: "/",
      title: "Big Data Conference Europe 2023",
      location: "Vilnius, Lithuania & Online",
      day: "21",
      month: "Lap",
      imageSrc: "https://codeacademy.lt/wp-content/uploads/2023/08/77307444_1014197978913829_6397086150799917056_n-300x188.jpg",
      imageAlt: "test",
    },
    {
      url: "/",
      title: "Big Data Conference Europe 2023",
      location: "Vilnius, Lithuania & Online",
      day: "21",
      month: "Lap",
    },
    {
      url: "/",
      title: "Big Data Conference Europe 2023",
      location: "Vilnius, Lithuania & Online",
      day: "21",
      month: "Lap",
    },
  ]

  const eventsListElement = eventsData.map((event, index) => {
    let {url, title, location, day, month, imageSrc, imageAlt} = event

    return (
      <EventsItem 
        key = {index}
        url = {url}
        title = {title}
        location = {location}
        day = {day}
        month = {month}
        imageSrc = {imageSrc}
        imageAlt = {imageAlt}
      />
    )
  })

    return (
        <div className="events-list">
          {eventsListElement}   
        </div>
    )
}

export default EventsList