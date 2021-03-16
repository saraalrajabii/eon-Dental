import React from "react";
import { ErrorMessage, useField } from "formik";
import { makeStyles } from "@material-ui/core";

const styles = {
  root: {
    color: "red",
  },
};
const useStyles = makeStyles(styles);

export const TextField = ({ label, ...props }) => {
  const classes = useStyles();
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control ${meta.touched && meta.error && "is-invalid"}`}
        {...field}
        {...props}
        // autoComplete="off"
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className={classes.root}
      />
    </div>
  );
};