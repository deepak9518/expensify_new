import React, { useState, useEffect } from 'react'
import Axios from 'axios';

const Income = () => {
    const [results, setResults] = useState({
        income: [],
    });

  useEffect(() => {
        Axios.get('http://localhost:5000/api/')
            .then(response => {
                setResults({ income: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div>
<h3>Income</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Date</th>
                        
                    </tr>
                </thead>
                <tbody>

                    {
                        results.income.map((list,index) => {
                            return (

                                <tr key={index}>
                                    <td>{list.name}</td>
                                    <td>{list.desc}</td>
                                    <td>{list.amount}</td>
                            <td>{list.date}</td>

                                   </tr>
                            )
                        })
                    }

                </tbody>
            </table>            
        </div>
    )
}

export default Income