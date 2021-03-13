import React from 'react';
import  { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { Grid,Card, CardContent, makeStyles} from "@material-ui/core";
import Select from 'react-select';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { TextField } from './TextField';
import ReactFlagsSelect from 'react-flags-select';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { useLocation }from "react-router-dom"



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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function InnerForm ( props){
  let query = useQuery();
  const { t } = useTranslation();
console.log(props)  /// props = lang = en 
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

  useEffect(() => {
  if (props.lang==="en"){
    console.log('render english !');
    i18next.changeLanguage(props.lang);
        document.body.style.direction="ltr";
  }
  if (props.lang==="ar"){
    console.log('render  arabic!');
    i18next.changeLanguage(props.lang);
    document.body.style.direction="rtl";
  }
  
  }, [])


  

  const queryString = require('query-string');
  let url = window.location.search
  ? `${window.location.search}&email=${input}&contry="jo"`
  : `?email=${input}&contry="jo`;


  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required( `${t('val_Firstname.1')}`),
      lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required( `${t('val_lastname.1')}`),
      country: Yup.string()
      .required(`${t('val_Country.1')}`),
      city_of_residence: Yup.string()
      .required(`${t('val_City.1')}`),
      email: Yup.string()
      .email('Email is invalid')
      .required(`${t('val_Email.1')}`),
      countryCode : Yup.string()
      .required(`${t('val_code.1')}`),
      Phone: Yup.string()
      .max(10, 'Must be 10 characters')
      .min(10 ,'Must be 10 characters')
      .required(`${t('val_phone.1')}`),
    
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
         name="firstName" type="text "  placeholder={t('form_Firstname.1')} /></Grid>
          <Grid  item lg={6} xs={12} ><TextField  
          name="lastName" type="text" placeholder={t('form_lastname.1')}/></Grid>
          <Grid item lg={6} xs={12} >
        <Select className ={classes.root}
            name="country" isSearchable  placeholder={t('form_Country.1')}
          value={selectedOption}
          onChange={handleChange1}
          options={options1}
           />
          </Grid>
           <Grid item lg={6} xs={12} >
          <Select   className ={classes.root} 
             name="city_of_residence" isSearchable  placeholder={t('form_City.1')}
          value={selectedOption2.value}
          onChange={handleChange2}
          options={filteredOptions}
            />
            </Grid>
          <Grid item lg={6} xs={12} ><TextField required
           name="email" type="email"  placeholder={t('form_Email.1')}  value={input}
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
     {t('form_button.1')} 
      </Link>
      <p>   {t('form_note.1')} </p>
       </Grid>
       </Grid>

{/* <pre>{JSON.stringify(values, null, 2)}</pre>
 <pre>{JSON.stringify(errors, null, 2)}</pre> */}
</Form>
      )}

   </Formik>
  </CardContent>

</Card>
  
)
}
export default InnerForm ;













