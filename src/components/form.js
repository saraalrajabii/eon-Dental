import React from 'react';
import { Formik, Field,ErrorMessage, Form } from 'formik';
import { Grid,Card ,Button, CardContent, makeStyles} from "@material-ui/core";
import Select from 'react-select';
import * as Yup from 'yup';
import { TextField } from './TextField';

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
    width: "318px!important",
    margin: "25px 0!important",
    cursor: "pointer",
  },
  form:{
    border:"none" }

}
const useStyles  = makeStyles(styles);



function Basic(){
  const classes = useStyles();



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
      .required('Phone is required'),
  })
return(
<Card>
  <CardContent>
<Formik initialValues={{firstName:"",lastName :"",country:"",
 city_of_residence:"",email:"" ,countryCode :"",Phone:""  }}
 
 validationSchema={validate}
 onSubmit={values => {
   console.log(values)
 }}
   >
{formik => (
      <Form  className ={classes.form}    >
      <Grid container spacing={2} >
          <Grid  item lg={6} xs={12}  ><TextField      className ={classes.root} 
         name="firstName" type="text "  placeholder="First Name" /></Grid>
          <Grid  item lg={6} xs={12} ><TextField  className ={classes.root}
          name="lastName" type="text" placeholder="Last Name"/></Grid>
          <Grid item lg={6} xs={12} ><TextField  className ={classes.root} 
          name="country"   type="text" placeholder="Country"/></Grid>
           <Grid item lg={6} xs={12} ><TextField  className ={classes.root} 
          name="city_of_residence" placeholder="City Of Residence"   type="text" /></Grid>
          <Grid item lg={6} xs={12} ><TextField className ={classes.root} 
           name="email" type="email"  placeholder="Email"/></Grid>
        
       <Grid item lg={2} xs={5} ><TextField className ={classes.root}  name="countryCode"   placeholder="+1"/></Grid>
       <Grid item lg={4} xs={7} ><TextField className ={classes.root}  name="Phone" type="number" placeholder="111 111"/></Grid>
 
      <Grid item lg={6} xs={12} ><button  className ={classes.button} type="submit">Get result</button> 
       </Grid>
       </Grid>

<p> We only treat patients age 16 and up.</p>
</Form>
      )}

   </Formik>
  </CardContent>

</Card>
  
)
}
export default Basic ;













