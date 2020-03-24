import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Formik, Form, Field, ErrorMessage } from "formik"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h2>Zapraszamy do kontaktu</h2>
    <div className="w-5/12">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={values => {
          const errors = {}
          if (!values.email) {
            errors.email = "Required"
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address"
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              className="transition-colors duration-100 ease-in-out bg-white shadow-md focus:outline-0 border border-transparent placeholder-gray-600 rounded-lg py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input"
              type="email"
              name="email"
            />
            <ErrorMessage name="email" component="div" />
            <Field
              className="transition-colors duration-100 ease-in-out bg-white shadow-md focus:outline-0 border border-transparent placeholder-gray-600 rounded-lg py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input"
              type="password"
              name="password"
            />
            <ErrorMessage name="password" component="div" />
            <button
              className="rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-teal-500 hover:bg-teal-600 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  </Layout>
)

export default ContactPage
