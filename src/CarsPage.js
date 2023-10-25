
import { v4 as uuid } from 'uuid'

import CarForm from "./Components/CarForm"
import CarItem from "./Components/CarItem"
import Container from "./Components/Container/container"
import { useState } from 'react'

const CarsPage = () => {

    const carsData = [
        {
          id: uuid(),  
          brand: 'Audi',
          model: 'A3',
          engine: 'electric',
          basePrice: 18000,
          mileage: 20000,
          image: '',
          color: 'black',
        },
        {
          id: uuid(),  
          brand: 'Toyota',
          model: 'Rav4',
          engine: 'hybrid',
          basePrice: 20000,
          mileage: 2000,
          image: '',
          color: 'black',
        },
        {
          id: uuid(), 
          brand: 'Volkswagen',
          model: 'Passat',
          engine: 'petrol',
          basePrice: 10000,
          mileage: 110000,
          image: '',
          color: 'black',
        },
        {
          id: uuid(),  
          brand: 'Suzuki',
          model: 'Vitara',
          engine: 'diesel',
          basePrice: 15000,
          mileage: 1000,
          image: '',
          color: 'black',
        },
    ]
 
    const [cars, setCars] = useState(carsData)

    const removeCarHandler = (removeElementId) => {
        setCars(prevState => {
            const newState = prevState.filter(item => item.id !== removeElementId)

            return newState
        })
    }
    // removeCarHandler()

    const newCarHandler = (newCar) => {
        setCars(prevState => [newCar, ...prevState])
    }

    return (
    <Container>
       <CarForm onNewCar={newCarHandler}/>


        <div className="cars-list">
            {cars.map((car, index) =>  <CarItem onRemoveCar={removeCarHandler} data={car} key={index} />)}
           
        </div>

    </Container>
  )
}

export default CarsPage
