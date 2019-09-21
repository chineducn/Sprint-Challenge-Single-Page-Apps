import React from "react";
import { Formik, Form, Field } from 'formik';


export default function SearchForm(props) {
  const { initialValues, onSubmit, inputValue, onChange, clickMe } = props;

  return (


    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}      
      render={props => {
        return (
          <Form>
            <div>
              <label>
                Search Character
                <Field
                  name='name'
                  value={inputValue}
                  type='text'
                  placeholder='Name'
                  onChange={onChange}
                />
              </label>
              <button type='submit'>Submit</button>
              <button type='button' onClick={clickMe}>Show All Characters</button>
            </div>
          </Form>
        )
      }
      }
    />
  );
}
