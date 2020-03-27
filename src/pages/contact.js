import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Formik, Form, useField } from "formik"
import * as Yup from "yup"

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="flex items-center justify-center ">
      <label
        className="text-right w-4/12 pr-2 transition duration-500 ease-in-out text-gray-700"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <div className="relative w-8/12 pb-6 xs:pt-2 md:pt-6">
        <input
          className={`appearance-none bg-transparent border-b-1 transition duration-500 ease-in-out ${meta.touched && meta.error ? "border-red-500" : "border-teal-500"} w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none`}
          {...field}
          {...props}
        />
        <p className={`absolute left-0 bottom-1 text-red-500 italic text-xs ${meta.touched && meta.error ? "block" : "hidden"}`}>
          {meta.error}
        </p>
      </div>
    </div>
  )
}

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="flex items-center justify-center py-6">
      <label
        className="text-right w-4/12 pr-2 transition duration-500 ease-in-out text-gray-700"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <div className="relative w-8/12 ">

        <textarea rows="8"
          className={`appearance-none rounded bg-transparent border-1 transition duration-500 ease-in-out ${meta.touched && meta.error ? "border-red-500" : "border-teal-500"} w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none`}
          {...field}
          {...props}
        />
        <p className={`absolute left-0 bottom-1 text-red-500 italic text-xs ${meta.touched && meta.error ? "block" : "hidden"}`}>
          {meta.error}
        </p>
      </div>
    </div>
  )
}
const validationSchema = Yup.object({
  name: Yup.string()
    .max(50, "*Limit 50 znaków"),
  email: Yup.string()
    .email("*Nieprawidłowy adres email")
    .required("*Wymagane"),
  title: Yup.string()
    .required("*Wymagane")
    .max(30, "*Limit do 50 znaków"),
  message: Yup.string()
    .required("*Wymagane")
    .min(10, "*Minimum 10 znaków")
    .max(300, "*Limit do 300 znaków"),
})

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="xs:text-xs sm:text-sm md:text-base md:w-8/12 xs:w-10/12 mx-auto text-gray-800 md:mt-8 lg:mt-16">
      <h2 className="">Zapraszamy do kontaktu</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
    </p>
      <div className="xs:mt-2 sm:mt-4 md:mt-8 lg:mt-16">
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
          {({ isSubmitting }) => (
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </Layout>
)

export default ContactPage
