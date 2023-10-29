import React, { useState } from 'react'
import Container from '../../Components/Container/container'

const AIPage = () => {

    const [name, setName] = useState('')
    const [gender, setGender] = useState(null)
    const [age, setAge] = useState(null)
    const [nationality, setNationality] = useState(null)

    let outputText = ''
    if (age && name && gender && nationality) {
        outputText = <p>{name} is {age} years old a {gender} from {nationality}.</p>
    }

    const nameInputHandler = event => setName(event.target.value)

    const nameFormHandler = async(event) => {
        event.preventDefault()

        console.log(name)

        const ageRes = await fetch(`https://api.agify.io?name=${name}`)
        const ageData = await ageRes.json()

        const nationalityRes = await fetch(`https://api.nationalize.io?name=${name}`)
        const nationalityData = await nationalityRes.json()

        const genderRes = await fetch(`https://api.genderize.io?name=${name}`)
        const genderData = await genderRes.json()

        
        setGender(genderData.gender)
        setAge(ageData.age)
        setNationality(nationalityData.country[0].country_Id)

        // fetch(`https://api.agify.io?name=${name}`)
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        // })
    }

  return (
    <Container>
        <form onSubmit={nameFormHandler}>
            <div className="form-control">
                <label htmlFor="name">Name:</label>
                <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={nameInputHandler}
                />
            </div>

            <input type="submit" value="Submit"></input>
        </form>
        {outputText}
    </Container>
    
   
  )
}

export default AIPage