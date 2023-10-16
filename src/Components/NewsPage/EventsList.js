import EventsItem from "./EventsItem"

const EventsList = () => {

    return (
        <div className="events-list">
           <EventsItem 
             url="/"
             title="Big Data Conference Europe 2023"
             location="Vilnius, Lithuania & Online"
             day="21"
             month="Lap"
             imageSrc="https://codeacademy.lt/wp-content/uploads/2023/08/77307444_1014197978913829_6397086150799917056_n-300x188.jpg"
             imageAlt="test"
           />

           <EventsItem 
             url="/"
             title="Big Data Conference Europe 2023"
             day="21"
             month="Lap" 
           />

           <EventsItem 
             url="/"
             title="Big Data Conference Europe 2023"
             location="Vilnius, Lithuania & Online"
             
           />
                
        </div>
    )

}

export default EventsList