import React, { use, useState } from 'react';
import Country from '../Country/Country.jsx';
import './Countries.css';

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        // console.log("clicked", country);
        if (!visitedCountries.includes(country)) {
            const newVisitedCountries = [...visitedCountries, country];

            setVisitedCountries(newVisitedCountries);
        }
        else{
            const  newVisitedCountries = visitedCountries.filter(item => item.ccn3.ccn3 !== country.ccn3.ccn3);
            setVisitedCountries(newVisitedCountries);
        }


    }
    const handleVisitedFlag = (flag) => {
        // console.log('flag', flag);
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);
    return (
        <div>
            <h2>In the countries: {countries.length}</h2>
            <h3>Total Country Visited: {visitedCountries.length}
            </h3>
            <h3>Total Flags Visited: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key = {country.ccn3.ccn3}>{country.name.common}</li>
                    )
                }
            </ol>
            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries} handleVisitedFlag = {handleVisitedFlag}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;