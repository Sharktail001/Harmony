import React from 'react';
import './Questions.css';
import { Country, State, City }  from 'country-state-city';
import SelectList from 'react-select';
import Select from 'react-select';
import { useState, useEffect } from 'react';
import { Slider } from '@mui/material'

const countries = Country.getAllCountries();
const countryDropdown = [];

const inter = [
  {
    value: 'Online',
    label: 'Online',
  },
  {
    value: 'In Person',
    label: 'In Person',
  },
  {
    value: 'Both',
    label: 'Both',
  },
];

const marks1 = [
  {
    value: 0,
    label: '<25', //0
  },
  {
    value: 10,
    label: '<50', //2
  },
  {
    value: 20,
    label: '<75', //5
  },
  {
    value: 30,
    label: '<100', //7
  },
  {
    value: 40,
    label: '100+', //10
  },
];

const marks2 = [
  {
    value: 0,
    label: '0-5 Years', //0
  },
  {
    value: 10,
    label: '5-10 Years', //3
  },
  {
    value: 20,
    label: '10-15 Years', //7
  },
  {
    value: 30,
    label: '15+ Years', //10
  },
];



export const Questions = () => {

  async function submit() {
    const data = {
      country: selectedCountry,
      state: selectedState,
      city: selectedCity,
      industry: selectedIndustry,
      employees: selectedEmployees,
      security: selectedSecurity,
      claims: selectedClaims,
      risks: selectedRisks,
      interaction: selectedInteraction,
      age: selectedAge,
      fire: selectedFire,
      nature: selectedNature,
      safety: selectedSafety,
    };
    const response = await fetch('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      mode: 'no-cors',
    });
    const body = await response.json();
    console.log(body);
  }

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedEmployees, setSelectedEmployees] = useState('');
  const [selectedSecurity, setSelectedSecurity] = useState('');
  const [selectedClaims, setSelectedClaims] = useState('');
  const [selectedRisks, setSelectedRisks] = useState('');
  const [selectedInteraction, setSelectedInteraction] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const [selectedFire, setSelectedFire] = useState('');
  const [selectedNature, setSelectedNature] = useState('');
  const [selectedSafety, setSelectedSafety] = useState('');
  //...

  const [stateDropdown, setStateDropdown] = useState([]);
  const [cityDropdown, setCityDropdown] = useState([]);

  useEffect(() => {
    const states = State.getStatesOfCountry(selectedCountry.value);
    const temp = [];
    states.forEach(state => {
      const option = {
        value: state.isoCode,
        label: state.name
      };
      temp.push(option);
    });
    setStateDropdown(temp);
  }, [selectedCountry]);

  useEffect(() => {
    console.log(selectedState);
    const cities = City.getCitiesOfState(selectedCountry.value, selectedState.value);
    const temp = [];
    cities.forEach(city => {
      const option = {
        value: city.name,
        label: city.name
      };
      temp.push(option);
    });
    console.log(temp);
    setCityDropdown(temp);
  }, [selectedState]);

  countries.forEach(country => {
    const option = {
      value: country.isoCode,
      label: country.name
    };
    countryDropdown.push(option);
  });


  return (
    <div className="container">
      <header>
        <h1>harmony</h1>
      </header>

      {/* Ask the customer a set of questions and get an input from the user */}
      <div className="question">
        <h2>What is the location of your business?</h2>
        <Select 
          options={countryDropdown} 
          placeholder="Select Country"
          defaultValue={"None"}
          onChange={(e) => setSelectedCountry(e)}
        />
        <Select
          options={stateDropdown}
          defaultValue={"None"}
          placeholder="Select State"
          onChange={(e) => setSelectedState(e)}
        />
        <Select
          options={cityDropdown}
          defaultValue={"None"}
          placeholder="Select City"
          onChange={(e) => setSelectedCity(e)}
        />
        <h2>What industry does your business operate in?</h2>
        <input type="text" placeholder="Enter" onEndEditing={(e) => setSelectedIndustry(e)}/>
        <h2>How many employees work in your business?</h2>
        <Slider
          aria-label="Custom marks"
          defaultValue={0}
          step={10}
          max={40}
          valueLabelDisplay="auto"
          marks={marks1}
          getAriaValueText={(value) => {setSelectedEmployees(value)}}
        />
        <h2>Do you have security measures in place?</h2>
        <button value="Yes" onClick={(e) => setSelectedSecurity(e)}>Yes</button>
        <button value="No" onClick={(e) => setSelectedSecurity(e)}>No</button>
        <h2>Have you made any insurance claims in the past?</h2>
        <button value="Yes" onClick={(e) => setSelectedClaims(e)}>Yes</button>
        <button value="No" onClick={(e) => setSelectedClaims(e)}>No</button>
        <h2>Is your business located near potential risks, such as bodies of water, fault lines, or high-risk fire areas?</h2>
        <button value="Yes" onClick={(e) => setSelectedRisks(e)}>Yes</button>
        <button value="No" onClick={(e) => setSelectedRisks(e)}>No</button>
        <h2>How do you interact with your customers?</h2>
        <Select
          options={inter}
          defaultValue={"None"}
          placeholder="Select Interaction"
          onChange={(e) => setSelectedInteraction(e)}
        />
        <h2>How old is the building your business is located in?</h2>
        <Slider
          aria-label="Custom marks"
          defaultValue={0}
          valueLabelDisplay="auto"
          step={10}
          marks={marks2}
          max={30}
        />
        <h2>Do you have fire safety measures in place, such as fire extinguishers, sprinklers, or fire alarms?</h2>
        <button value="Yes" onClick={(e) => setSelectedSecurity(e)}>Yes</button>
        <button value="No" onClick={(e) => setSelectedSecurity(e)}>No</button>
        <h2>Do you have a business continuity plan in case of emergencies (e.g., natural disasters, power outages)?</h2>
        <button value="Yes" onClick={(e) => setSelectedNature(e)}>Yes</button>
        <button value="No" onClick={(e) => setSelectedNature(e)}>No</button>
        <h2>Do your employees receive safety training?</h2>
        <button value="Yes" onClick={(e) => setSelectedSafety(e)}>Yes</button>
        <button value="No" onClick={(e) => setSelectedSafety(e)}>No</button>
      </div>
        
        <button className="submit" onClick={() => {
          submit();
        }}>Submit</button>
    </div>
  );
}

export default Questions;