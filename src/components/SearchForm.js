import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';


export default function SearchForm(props) {
  const { initialValues, onSubmit } = props;

  return (


    <Formik
      initialValues={initialValues} onSubmit={onSubmit}
      render={props => {
        return (
          <Form>
            <div>
              <label>
                Search Character
                <Field
                  name='name'
                  type='text' placeholder='Name'
                />
              </label>
              <button type='submit'>Submit</button>
            </div>
          </Form>
        )
      }
      }
    />
  );
}
