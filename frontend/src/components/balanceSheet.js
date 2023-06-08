import React ,{useState,useEffect}from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BalanceSheet = () => {
    const [results, setResults] = useState({
        income: [],
    });

  useEffect(() => {
        axios.get('http://localhost:5000/api/')
            .then(response => {
                setResults({ income: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const deleteExercise = (id) => {
        axios.delete('http://localhost:5000/api/' + id)
            .then(response => { console.log(response.data) });

        setResults({
            income: results.income.filter(el => el._id !== id)
        })
    }


    return (
        <div>
            <h3>Logged Exercises</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Actions</th>
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

                                    <td>
                                        <Link to={"/editincome/" + list._id}>edit</Link> | <a href="#" onClick={() => { deleteExercise(list._id) }}>delete</a>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default BalanceSheet
