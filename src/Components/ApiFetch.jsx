import React, {useEffect, useState} from 'react'

function ApiFetch() {
const [data, setdata] = useState([]);

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setdata(data))
    .catch(error => console.error('Error fetching data:', error));


}, []);


  return (
    <div className='page-wrapper'>
        <h1>Data From Api</h1>
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.address.street}</li>
            ))}
        </ul>
    </div>

  )
}

export default ApiFetch