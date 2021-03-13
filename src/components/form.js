import React from 'react';
import  { useState } from 'react';
import { Formik, Form } from 'formik';
import { Grid,Card, CardContent, makeStyles} from "@material-ui/core";
import Select from 'react-select';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { TextField } from './TextField';
import ReactFlagsSelect from 'react-flags-select';




const styles ={
  root:{
    background: "rgba(92,98,102,.09)!important",
    width:"100%" ,
    fontSize: "1em",
    borderRadius: ".5em!important",
    border: "none!important",
    padding:"7px"
  },
  button:{
    justifySelf: "start",
    backgroundColor: "#3dcdba",
    textAlign: "center",
    border: "none",
    borderRadius: ".5em",
    color: "#fff",
    fontSize:" 1em",
    padding: ".5em",
    width: "100%",
    margin: "25px 0!important",
    cursor: "pointer",
  },
  select:{
    marginTop:"23px",
  },
 
}
const useStyles  = makeStyles(styles);

function InnerForm (props){
  const classes = useStyles();
  const [input, setInput] = useState('');
  const [selectedOption, setSelectedOption] = useState([]); 
  const [selectedOption2, setSelectedOption2] = useState({}); 
  const [selectedOption3, setSelectedOption3] = useState({}); 
  const handleChange1 = selectedOption => {
    setSelectedOption( selectedOption );
  };
  const handleChange2 = selectedOption => {
    setSelectedOption2({selectedOption2:selectedOption });
  };
  const handleChange3 = selectedOption => {
    setSelectedOption3(selectedOption );
  };


  const queryString = require('query-string');
  let url = window.location.search
  ? `${window.location.search}&email=${input}&contry="jo"`
  : `?email=${input}&contry="jo`;


  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required(' firstName required'),
      lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required(' lastName required'),
      country: Yup.string()
      .required('country is required'),
      city_of_residence: Yup.string()
      .required(' city of residence is required'),
      email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
      countryCode : Yup.string()
      .required('country code is required'),
      Phone: Yup.string()
      .max(10, 'Must be 10 characters')
      .min(10 ,'Must be 10 characters')
      .required('Phone is required'),
    
  })
  const options1 = [
    { value: "jo", label: "Jordan" },
    { value: "sa", label: "Saudi Arabia" },
    { value: "kw", label: "Kuwait" },
    { value: "qa", label: "Qatar" },
    { value: "ae", label: "Dubai" },
];
const options2 = [
    {value: 'dubai', label: 'Dubai', link: 'ae'},
    {value: 'abudhabi', label: 'Abu Dhabi', link: 'ae'},
    {value: 'amman', label: 'Amman', link: 'jo'},
    {value: 'doha', label: 'Doha', link: 'qa'},
    {value: 'kuwait', label: 'Kuwait', link: 'kw'},
    {value: 'riyadh', label: 'Riyadh', link: 'sa'},
    {value: 'jeddah', label: 'Jeddah', link: 'sa'},
    {value: 'khobar', label: 'Khobar', link: 'sa'},
    {value: 'dhahran', label: 'Dhahran', link: 'sa'},
    {value: 'dammam', label: 'Dammam', link: 'sa'}
];
const options3 = [
  {  value: "+962", label: "+962", code: "jo" },
  { value: "+966", label: "+966", code: "sa" },
  { value: "+965", label: "+965", code: "kw" },
  { value: "+974", label: "+974", code: "qa" },
];
const filteredOptions = options2.filter (o => o.link.includes(selectedOption.value) )
console.log(selectedOption )
 console.log(filteredOptions)
 const filteredOptions3= options3.filter (o => o.code === selectedOption.value )
let sara = (selectedOption3.value) ? selectedOption3 : filteredOptions3;
console.log(selectedOption3)
console.log(filteredOptions3)
console.log(sara)

return(
<Card>
  <CardContent>
<Formik initialValues={{firstName:"",lastName :"",country:"",
 city_of_residence:"",email:"" ,countryCode :"",Phone:""  }}
 validationSchema={validate}
   >

    {({ values, errors, handleSubmit, isValid }) => (
  
      <Form  className ={classes.form}>
      <Grid container spacing={2} >
          <Grid  item lg={6} xs={12}  ><TextField     
         name="firstName" type="text "  placeholder="First Name" /></Grid>
          <Grid  item lg={6} xs={12} ><TextField  
          name="lastName" type="text" placeholder="Last Name"/></Grid>
          <Grid item lg={6} xs={12} >
        <Select className ={classes.root}
            name="country" isSearchable  placeholder="Country"
          value={selectedOption}
          onChange={handleChange1}
          options={options1}
           />
          </Grid>
           <Grid item lg={6} xs={12} >
          <Select   className ={classes.root} 
             name="city_of_residence" isSearchable  placeholder="City Of Residence"
          value={selectedOption2.value}
          onChange={handleChange2}
          options={filteredOptions}
            />
            </Grid>
          <Grid item lg={6} xs={12} ><TextField required
           name="email" type="email"  placeholder="Email"   value={input}
           onChange={(e) => setInput(e.target.value)}  
            /></Grid>
             {console.log(input)}
       <Grid item lg={2} xs={5} >
        <Select
          name="countryCode"   placeholder="+1"
          value= {sara}    className ={classes.select}
          onChange={handleChange3}
          options={options3}
        />
        
        </Grid>
       <Grid item lg={4} xs={7} ><TextField 
         name="Phone"  placeholder="111 111"/></Grid>
     {  console.log("my values",values ) }
      <Grid item lg={6} xs={12} >
         <Link to={`/${props.lang}/email${url}`} className ={classes.button}
      type="submit">
      Get result
      </Link>
       </Grid>
       </Grid>
<p> We only treat patients age 16 and up.</p>
<pre>{JSON.stringify(values, null, 2)}</pre>
 <pre>{JSON.stringify(errors, null, 2)}</pre>
</Form>
      )}

   </Formik>
  </CardContent>

</Card>
  
)
}
export default InnerForm ;













