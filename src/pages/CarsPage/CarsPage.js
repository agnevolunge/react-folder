
import { v4 as uuid } from 'uuid'

import CarForm from "../../Components/CarForm"
import CarItem from "../../Components/CarItem"
import Container from "../../Components/Container/container"
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
          discount: '',
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
          discount: '',
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
          discount: '',
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
          discount: '',
        },
    ]
 
    const [cars, setCars] = useState(carsData)
    const [editCar, setEditCar] = useState(null)

    const removeCarHandler = (removeElementId) => {
        setCars(prevState => {
            const newState = prevState.filter(item => item.id !== removeElementId)

            return newState
        })
    }
    // removeCarHandler()
    const editCarHandler = (editCarId) => {
      console.log(editCarId)
      const selectedEditCar = cars.find((car) => car.id === editCarId)
      setEditCar(selectedEditCar)
    }
    
    const newCarHandler = (newCar) => {
      if (editCar) {
        console.log('redaguojame')
        setCars(prevState => {
          const editCarId = newCar.id
          const editCarIndex = prevState.findIndex(car => car.id === editCarId)
          const newState = [...prevState]
          newState[editCarIndex] = newCar

          setEditCar(null)
          return newState
        })
      } else {
        setCars(prevState => [newCar, ...prevState])
      }
        
    }
    

    return (
    <Container>
       <CarForm editCarData={editCar} onNewCar={newCarHandler}/>


        <div className="cars-list">
            {cars.map((car, index) =>  <CarItem onEditCar={editCarHandler} onRemoveCar={removeCarHandler} data={car} key={index} />)}
           
        </div>

    </Container>
  )
}

export default CarsPage
