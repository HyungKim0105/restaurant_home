import * as yup from "yup"

const contactform = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is Required"),
    email: yup.string().email("Please enter a valid email address").required("Email Address is Required"),
    inquiry: yup.string().required("Please make a selection"),
    message: yup.string().min(10).max(1000).required("Message is required"),
})
export default contactform