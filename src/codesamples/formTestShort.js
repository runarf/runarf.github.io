import React from 'react'
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
} from 'formik'
import * as Yup from 'yup'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import 'bootstrap/dist/css/bootstrap.css'

const schema = Yup.object().shape({
  accounts: Yup.array().of(
    Yup.object().shape({
      email: Yup.string()
        .email('invalid email')
        .required('Required'),
      password: Yup.string()
        .min(6, 'too short password')
        .required('Required'),
    })
  ),
})
export default () => (
  <div className="container-fluid">
    <h1 class="row">
      Any place in your app
    </h1>
    <Formik
      initialValues={{
        accounts: [
          {
            nickNames: [],
            email: 'test@sa.com',
            password: 'asa',
          },
        ],
      }}
      validationSchema={schema}
      onSubmit={(
        values,
        { setSubmitting }
      ) => {
        setTimeout(() => {
          alert(
            JSON.stringify(
              values,
              null,
              2
            )
          )
          setSubmitting(false)
        }, 400)
      }}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <FieldArray name="accounts">
            {arrayHelpers => (
              <div>
                {values.accounts.map(
                  (account, index) => (
                    <div
                      className="row"
                      key={index}
                    >
                      <div className="col">
                        <Field
                          type="email"
                          name={`accounts[${index}].email`}
                        />
                        <ErrorMessage
                          name={`accounts[${index}].email`}
                          component="div"
                        />
                      </div>
                      <div className="col">
                        <Field
                          type="password"
                          name={`accounts[${index}.password]`}
                        />
                        <ErrorMessage
                          name={`accounts[${index}.password]`}
                          component="div"
                        />
                      </div>
                      <button
                        className="col-1"
                        type="button"
                        onClick={() =>
                          arrayHelpers.remove(
                            index
                          )
                        }
                      >
                        -
                      </button>
                    </div>
                  )
                )}
                <button
                  type="button"
                  onClick={() =>
                    arrayHelpers.push({
                      email: '',
                      password: '',
                    })
                  }
                >
                  +
                </button>
                <button
                  type="submit"
                  disabled={
                    isSubmitting
                  }
                >
                  Submit
                </button>
              </div>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
  </div>
)
