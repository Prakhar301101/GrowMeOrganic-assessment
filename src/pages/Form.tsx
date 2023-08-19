import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material";




interface Data {
  name: string;
  phoneNumber: string;
  email: string;
  error: boolean;
}
const Form:React.FC = ()=> {
  const navigate =useNavigate();
  const [formData, setFormData] = useState<Data>({
    name: '',
    phoneNumber: '',
    email: '',
    error: false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const{name,phoneNumber,email}=formData
    
    if(name===''||phoneNumber===''||email===''){
      setFormData((prev)=>({
        ...prev,
        error:true
      }))
    }
    else{
      setFormData((prev)=>({
        ...prev,
        error:false
      }))
      localStorage.setItem('myData',JSON.stringify(formData));
      navigate("./Page2");
    }
  };

  return (
    <section className="body-container">
      <div className="form-container">
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          ></input>
          <label htmlFor="number">Number:</label>
          <input
            type="tel"
            placeholder="Enter Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          ></input>
          <label htmlFor="mail">Mail:</label>
          <input
            type="email"
            placeholder="Enter mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
          ></input>
           {formData.error ? <p>Please Complete the form!</p> : null}
        <div className="btn">
          <Button onClick={handleSubmit} variant="contained">
            Submit and Continue
          </Button>
        </div>
        </form>
      </div>
    </section>
  );
}

export default Form;
