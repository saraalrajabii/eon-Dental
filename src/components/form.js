import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Grid,Card ,Button, CardContent, makeStyles} from "@material-ui/core";
import { sizing } from '@material-ui/system';

const styles ={
  root:{
    background: "rgba(92,98,102,.09)!important",
    width:"100%" ,
    fontSize: "1em",
    borderRadius: ".5em!important",
    border: "none!important",
    padding:"7px"
  }
}

const useStyles  = makeStyles(styles);

function Basic(){
  const classes = useStyles();
return(
<Card>
  <CardContent>
<Formik initialValues={{firstName:"",lastName :"",country:"",
 city_of_residence:"",email:""}}
  onSubmit={async(values)=>{
    console.log("my values",values ); 
    return new Promise(res => setTimeout(res, 2500));
  }}  >
  {({values, errors ,isSubmitting}) =>(
<Form>
<Grid container spacing={3} >

<Grid  item lg={6} xs={12}  ><Field className ={classes.root} name="firstName"  width="100%"   placeholder="First Name" /></Grid>
     <Grid  item lg={6} xs={12} ><Field  className ={classes.root} name="lastName" placeholder="Last Name"/></Grid>
     <Grid item lg={6} xs={12} ><Field  className ={classes.root} name="country" placeholder="Country"/></Grid>
     <Grid  item lg={6} xs={12} ><Field  className ={classes.root}  name="city_of_residence" placeholder="City Of Residence"/></Grid>
     <Grid item lg={6} xs={12} ><Field className ={classes.root}  name="email" placeholder="Email"/></Grid>
     <Grid item lg={6} xs={12} ><Field className ={classes.root}  name="email" placeholder="Email"/>
     </Grid>
     <Grid item lg={6} xs={12} >
       <Button  disabled={isSubmitting}type="submit"
       variant="contained"
       color="#3dcdba">submit</Button> 
       </Grid>
       


</Grid>
<pre>{JSON.stringify(values, null, 2)}</pre>
We only treat patients age 16 and up.
</Form>

  )}
    
   </Formik>
  </CardContent>

</Card>
  
)
}
export default Basic ;











{/* <div>
<Formik  initialValues={{
          firstName: ""}}
        onSubmit={(data) => { console.log("submit: ", data) }}>
    
    {({values, handleChange, handleBlur,handleSubmit})=>(
    <Grid container spacing={2} onSubmit={handleSubmit}>
     
     <Grid item lg={6} xs={12} ><TextField name="firstName" value ={values.firstName}  onChange={handleChange} onBlur={handleBlur} /></Grid>
 
     <Grid  item lg={6} xs={12}  ><p style={{background:"blue"}}>2</p></Grid>
     <Grid  item lg={6} xs={12} ><p style={{background:"blue"}}>2</p></Grid>
     <Grid item lg={6} xs={12} ><p style={{background:"blue"}}>2</p></Grid>
     <Grid  item lg={6} xs={12} ><p style={{background:"blue"}}>2</p></Grid>
     <Grid item lg={6} xs={12} ><p style={{background:"blue"}}>2</p></Grid>
     <div>  <Button  type="submit">submit</Button> </div>
   
             
     <pre>{JSON.stringify(values, null, 2)}</pre>
 </Grid>


)}</Formik>
  </div>
);
export default Basic ;

 */}