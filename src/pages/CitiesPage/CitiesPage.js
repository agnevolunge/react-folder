import React from 'react'
import Container from '../../Components/Container/container'
import { useState } from 'react'
import CityItem from '../../Components/CityItem'
import './CitiesPage.css'
import CitiesForm from '../../Components/CitiesForm'
import { v4 as uuid } from 'uuid'

const CitiesPage = () => {
    
    const citiesData = [
        {
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),   
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
        id: uuid(),    
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
    const [editCity, setEditCity] = useState(null)

    
    const addCityHandler = (newCity) => {

        if (editCity) {
            setCities (prevState => {
                const editId = editCity.id
                const editCityIndex = prevState.findIndex(city => city.id === editId)
                const newState = [...prevState]
                newState[editCityIndex] = newCity

                setEditCity(null)
                return newState
            })
        } else {
            setCities(prevState => [newCity, ...prevState])
        }
        

    }

    const removeCityHandler = (index) => {
        setCities(prevState => {
            const newState = [...prevState]
            newState.splice(index, 1)
            return newState
        })
    }
    const editCityHandler = (index) => {
        console.log(index)
        const selectedCity = cities[index]
        setEditCity(selectedCity)
        }


    const citiesListElement = cities.map((city, index) => {
        const lastOddElement = index + 1 === cities.length && index % 2 === 0
        
        return <CityItem onCityEdit={editCityHandler} onCityDelete={removeCityHandler} index={index} key={index} data={city} fullWidth={lastOddElement}/>
    })

  return (
    <Container>
       <CitiesForm editCityData={editCity} onNewCity={addCityHandler}/>
      
      <div className="cities-list">
        {citiesListElement}
      </div>
    </Container>
  )
}


export default CitiesPage
