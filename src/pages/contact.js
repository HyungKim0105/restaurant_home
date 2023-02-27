
import contactform from '../components/contactValidation'
import { useFormik } from 'formik'

const onSubmit = (values, actions) => {
  alert("Your message has been sent")
  actions.resetForm()
}

const Contact = () => {

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      inquiry: "",
      message: "",
    },
    validationSchema: contactform,
    onSubmit,
  })

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h1>Contact Us</h1>
      <label>First Name</label>
      <input
        placeholder='First Name'
        type="text"
        id="firstName"
        name='firstName'
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.firstName && touched.firstName ? "input-error" : ""}
      />
      {errors.firstName && touched.firstName && <p className="error">{errors.firstName}</p>}
      <label>Last Name</label>
      <input
        placeholder='Last Name'
        type="text"
        id="lastName"
        name='lastName'
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.lastName && touched.lastName ? "input-error" : ""}
      />
      {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}
      <label>Email Address</label>
      <input
        placeholder='Email Address'
        id="email"
        name='email'
        type="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
       <label htmlFor="aboutSelector">What is this about?</label>
      <select id="aboutSelector" name='inquiry' value={values.inquiry} onChange={handleChange}>
        <option value="" disabled hidden>Choose an Option</option>
        <option value="inquiry">INQUIRY</option>
        <option value="complaint">COMPLAINT</option>
        <option value="compliment">COMPLIMENT</option>
        <option value="suggestion">SUGGESTION</option>
      </select>
      <label>Your message</label>
      <textarea
        placeholder='Your Message'
        type="text"
        id="message"
        name="message"
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.message && touched.message ? "input-error" : ""}
      />
      {errors.message && touched.message && <p className="error">{errors.message}</p>}
      <button type="submit">Submit</button>
    </form>
  )
}

export default Contact