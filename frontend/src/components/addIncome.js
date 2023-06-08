import React, { useState } from 'react'
import axios from 'axios';




const AddIncome = () => {
    const [state, setState] = useState({
        name: '',
        desc: '',
        amount: 0,
        date: '',
      });

      const handleChange =(e)=>{
      const {name,value} =e.target;
      setState({
        ...state,
        [name]:value
      })  
      }

 const onSubmit=(e) =>{
    e.preventDefault();

     
    const income = {
      name:state.name,
      desc:state.desc,
      amount: state.amount,
      date:state.date
    }

    console.log(income);
    axios.post('http://localhost:5000/api/add',income)
      .then(res => console.log(res.data));
 
    window.location = '/'
  }


return (
        <div>
        <h3>Create New Income Log</h3>
       
    
               <div className="form-group"> 
            <label>Name: </label>
            <input type='text' name='name' className="form-control" onChange={handleChange} value={state.name} />
          </div>
          <div className="form-group"> 
            <label>Description: </label>
            <input type='text' name='desc' className="form-control" onChange={handleChange} value={state.desc}/>
          </div>
          <div className="form-group">
            <label>Amount : </label>
            <input type='number' className="form-control" name='amount' onChange={handleChange} value={state.amount}/>
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
                <input type='date' className="form-control" name='date' onChange={handleChange} value={state.date}/>
            </div>
          </div>
              
                <div className="form-group">
 <button className="btn btn-primary" onClick={onSubmit}>onSubmit</button>          
             </div>
                   
      </div>    )
}

export default AddIncome




