import React from 'react'
import Container from './Components/Container/container'
import { useState } from 'react'
import CityItem from './Components/CityItem'
import './CitiesPage.css'

const CitiesPage = () => {

    const [name, setName] = useState('')
    const [population, setPopulation] = useState(0)
    const [continent, setContinent] = useState('')
    const [country, setCountry] = useState('')
    const [isCapital, setIsCapital] = useState(false)
    const [touristAttractions, setTouristAttractions] = useState([])
    
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

    const newCityHandler = (event) => {
        event.preventdefault()
        
        const newCity = {
            name,
            population,
            location: {
                continent: continent,
                country: country,
            },
            touristAttractions: touristAttractions,
            isCapital: isCapital,
        }


        setName('')
        setPopulation(0)
        setContinent('')
        setCountry('')
        setIsCapital(false)
        setTouristAttractions([])

        // setCities(prevState => {
        //     const newState = [...prevState]
        //     newState.unshift(newCity)
        //     return newState
        // })

        setCities(prevState => {
            const newState = [newCity, ...prevState]
            return newState
        })
    }

    const nameInputHandler = (event) => {
        setName(event.target.value)
    }

    const populationInputHandler = (event) => {
        setPopulation(event.target.valueAsNumber)
    }

    const continentInputHandler = (event) => {
        setContinent(event.target.value)
    }
    const countryInputHandler = (event) => {
        setCountry(event.target.value)
    }

    const capitalInputHandler = () => {
        setIsCapital(prevState => !prevState)
    }

    const touristAttractionsInputHandler = (event) => {
        const enteredValue = event.target.value
        const touristAttractionArr = enteredValue.split(',')
        const updatedTouristAttractionsArr = touristAttractionArr.map(location => {
            const trimmedLocation = location.trim()
            const updatedLocation = trimmedLocation.length > 0 ? trimmedLocation.at(0).toUpperCase() + trimmedLocation.slice(1) : ''
            return updatedLocation
        })

        setTouristAttractions(updatedTouristAttractionsArr)
    }

  return (
    <Container>
        <form id="city-form" onSubmit={newCityHandler}>
            <div className="form-control">
                <label htmlFor="name">City name:</label>
                <input 
                type="text" 
                id="name" 
                name="name" 
                value={name} 
                onChange={nameInputHandler}
                />
            </div>

            <div className="form-control">
                <label htmlFor="population">City population:</label>
                <input 
                type="number"
                min={0}
                step={1000} 
                id="population" 
                name="population" 
                value={population}
                onChange={populationInputHandler}
                />
            </div>

            <div className="form-control">
                <label htmlFor="continent">City continent:</label>
                <input 
                type="text"
                id="continent" 
                name="continent" 
                value={continent}
                onChange={continentInputHandler}
                />
            </div>

            <div className="form-control">
                <label htmlFor="country">City country:</label>
                <input 
                type="text"
                id="country" 
                name="country" 
                value={country}
                onChange={countryInputHandler}
                />
            </div>

            <div className="form-control form-control-inline">
                <input 
                type="checkbox"
                id="capital" 
                name="capital" 
                checked={isCapital}
                onChange={capitalInputHandler}
                // value={country}
                // onChange={countryInputHandler}
                />
                 <label htmlFor="capital">Capital</label>
            </div>

            <div className="form-control">
                <label htmlFor="tourist-attractions">City tourist attractions:</label>
                <textarea
                rows={5}
                value={touristAttractions.join(', ')}
                id="tourist-attractions" 
                name="tourist-attractions" 
                onChange={touristAttractionsInputHandler}
                >
                </textarea> 
            </div>


            <input type="submit" value="Create new City" />
        </form>
      
      
      <div className="cities-list">
        {citiesListElement}
      </div>
    </Container>
  )
}
export default CitiesPage
