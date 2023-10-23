import React from 'react'
import Container from './Components/Container/container'
import { useState } from 'react'
import CityItem from './Components/cityItem'
import './CitiesPage.css'
import CitiesForm from './Components/CitiesForm'

const CitiesPage = () => {
    
    const citiesData = [
        {
        name: 'Kaunas',
        population: 200000,
        location: {
            continent: "Europe",
            country: 'Lithuania',
        },
        touristAttractions: ['Kaunas Castle', 'Old Town', 'National M. K. Ciurlionis Art Museum'],
        isCapital: false,
        },
    
        {
        name: 'Warsaw',
        population: 1780000,
        location: {
            continent: "Europe",
            country: 'Poland',
        },
        touristAttractions: ['Old Town', 'Royal Route'],
        isCapital: true,
        },
        
        {
        name: 'Krakow',
        population: 766000,
        location: {
            continent: "Europe",
            country: 'Poland',
        },
        touristAttractions: ['St.Mary Basilica', 'Wawel Royal Castle', 'Old Town', 'Main Market Square'],
        isCapital: false,
        },
    
        {
        name: 'Rio de Janeiro',
        population: 6700000,
        location: {
            continent: "South America",
            country: 'Brasil',
        },
        touristAttractions: ['Corcovado'],
        isCapital: false,
        },
    
        {
        name: 'San Francisco',
        population: 800000,
        location: {
            continent: "North America",
            country: 'USA',
        },
        touristAttractions: ['Golden Gate Bridge', 'Alcatraz Island'],
        isCapital: false,
        },
    
        {
        name: 'Jonava',
        population: 30000,
        location: {
            continent: "Europe",
            country: 'Lithuania',
        },
        touristAttractions: [],
        isCapital: false,
        },
    
        {
        name: 'Paris',
        population: 12000000,
        location: {
            continent: "Europe",
            country: 'France',
        },
        touristAttractions: ['Eiffel Tower', 'Louvre Museum', 'Cathedrale Notre-Dame', 'Musee dOrsay'],
        isCapital: true,
        },
    
        {
        name: 'Barcelona',
        population: 1600000,
        location: {
            continent: "Europe",
            country: 'Spain',
        },
        touristAttractions: ['Sagrada Familia', 'Park Guell'],
        isCapital: false,
        },
    
        {
        name: 'Alytus',
        population: 50000,
        location: {
            continent: "Europe",
            country: 'Lithuania',
        },
        touristAttractions: [],
        isCapital: false,
        },
    
        {
        name: 'Vilnius',
        population: 500000,
        location: {
            continent: "Europe",
            country: 'Lithuania',
        },
        touristAttractions: ['Gediminas Castle Tower', 'Old Town', 'Cathedral', 'Gates of Dawn'],
        isCapital: true,
        },
    
        {
        name: 'Sydney',
        population: 5500000,
        location: {
            continent: "Australia",
            country: 'Australia',
        },
        touristAttractions: ['Sydney Opera House', 'Bondi Beach'],
        isCapital: false,
        },
    ]

    const [cities, setCities] = useState(citiesData)

    const citiesListElement = cities.map((city, index) => {
        const lastOddElement = index + 1 === cities.length && index % 2 === 0
        
        return <CityItem key={index} data={city} fullWidth={lastOddElement}/>
    })

const AddNewCity = (newCity) => {
    setCities(prevState => [newCity, ...prevState])
}

  return (
    <Container>
       <CitiesForm onNewCity={AddNewCity}/>
      
      <div className="cities-list">
        {citiesListElement}
      </div>
    </Container>
  )
}


export default CitiesPage
