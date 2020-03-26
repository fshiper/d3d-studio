import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Formik, Form, useField } from "formik"
import * as Yup from "yup"

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="relative flex items-center justify-center py-4">
      <label
        className="text-gray-700 text-sm text-right italic w-4/12 pr-2"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        className="appearance-none bg-transparent border-b-1 border-teal-500 w-8/12 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <span className="absolute inset-x-auto bottom-0 text-red-500 text-xs">
          {meta.error}
        </span>
      ) : null}
    </div>
  )
}

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="flex items-center justify-center py-2">
      <label
        className="text-gray-700 text-sm text-right italic w-4/12 pr-2"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <textarea
        className="appearance-none bg-transparent border-1 border-teal-500 w-8/12 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-xs">{meta.error}</div>
      ) : null}
    </div>
  )
}
const validationSchema = Yup.object({
  name: Yup.string()
    .required("Pole wymagane")
    .max(50),
  email: Yup.string()
    .email("Nieprawidłowy adres email")
    .required("Pole wymagane"),
})

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h2>Zapraszamy do kontaktu</h2>
    <div className="mt-16 w-8/12 mx-auto text-gray-800">
      <Formik
        initialValues={{ name: "", email: "", title: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <MyTextInput
              label="Imię / Nazwa firmy"
              name="name"
              type="text"
              placeholder="imię / nazwa "
            />

            <MyTextInput
              label="Adres email"
              name="email"
              type="email"
              placeholder="email"
            />

            <MyTextInput
              label="Tytuł"
              name="title"
              type="text"
              placeholder="tytuł wiadomości"
            />
            <MyTextArea
              label="Wiadomość"
              name="message"
              type="textarea"
              placeholder="treść wiadomości"
            />
            <button
              className="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-normal py-1 px-4 rounded mt-3 float-right"
              type="submit"
              disabled={isSubmitting}
            >
              Wyślij
            </button>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          </Form>
        )}
      </Formik>
    </div>
  </Layout>
)

export default ContactPage
