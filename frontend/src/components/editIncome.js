import React,{useState,useEffect} from 'react'
import axios from "axios";





const EditIncome = (props) => {
    const [values, setValues] = useState({
        name: '',
        desc: '',
        amount: "",
        date: '',
      })
      

    useEffect(() => {
 axios.get(`http://localhost:5000/api/income/`+props.match.params.id)
        .then(response => {
          setValues({
            name: response.data.name,
            desc: response.data.desc,
            amount: response.data.amount,
            date: response.data.date
          })   
        })
        .catch(function (error) {
          console.log(error);
        })
  console.log(props.match.params.id)
    },[]);
    console.log(props)
  const handleChange =(e)=>{
        const {name,value}=e.target;
        setValues({
            ...values,
            [name]:value
        })
    };

const handleAmountChange =(e)=>{
  setValues({amount:e.target.value});
};
     const onSubmit=(e)=> {
        e.preventDefault();
    
    
        const income = {
          name:values.name,
          desc:values.desc,
          amount:values.amount,
          date:values.date
         }
        console.log(income);
    
        axios.post('http://localhost:5000/api/update/'+props.match.params.id , income)
          .then(res => console.log(res.data));
    console.log(props);
       window.location = '/balancesheet';
      }
      return (
        <div>
        <h3>Edit Exercise Log</h3>
      
          <div className="form-group"> 
            <label>Username:</label>
      <input type='text' name='name' onChange={handleChange} value={values.name} className="form-control" />
          </div>
          <div className="form-group"> 
            <label>Description: </label><input type='text' name="desc" onChange={handleChange} value={values.desc} className="form-control"/>
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input type="text" className="form-control" value={values.amount}  onChange={handleAmountChange} name='amount'/>
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <input type='time' value={values.date} name='date' onChange={handleChange} className="form-control" />
            </div>
          </div>
  
          <div className="form-group">
           <button onClick={onSubmit} className="btn btn-primary">submit</button>
           </div>
       </div>
      )
}

export default EditIncome
