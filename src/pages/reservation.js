import reservation from "../assets/reservation.png"
import { useForm } from 'react-hook-form'
import { useEffect } from "react"


const Reservation = () => {
  const { register, formState, formState: { errors, isSubmitSuccessful }, handleSubmit, reset } = useForm (
    {
      firstAndLastName: "",
      email: "",
    }
  )
  useEffect (() => {
    if (formState.isSubmitSuccessful) {
      reset()
    }
  }, [formState, reset])

  const onSubmit = (data) => {
    return (
    alert("Reservation has been made")
    )
    }

   return (
    <form className="reservation-container" onSubmit={handleSubmit(onSubmit)}>
      <div className="reservation">
        <h1>Reservations</h1>
        <p>Name</p>
        <input
          {...register("firstAndLastName", {required: true})}
          type="text"
          placeholder="First and Last Name"
          aria-invalid={errors.firstAndLastName ? "true" : "false"}
        />
        {errors.firstAndLastName?.type === "required" && <p role="alert" style={{fontSize: "12px", color: "red"}}>*First and Last Name is Required!</p>}
        <p>Email</p>
        <input
          {...register("email", {required: true})}
          type="email"
          placeholder="Email"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email?.type === "required" && <p role="alert" style={{fontSize: "12px", color: "red"}}>*Email is Required</p>}
        <p>Date</p>
        <input {...register("date")} type="date" />
        <label htmlFor="time">Time</label>
        <select id="time" {...register("time")}>
          <option value="">Select Time</option>
          <option value="6:00PM">6:00PM</option>
          <option value="7:00PM">7:00PM</option>
          <option value="8:00PM">8:00PM</option>
          <option valu="9:00PM">9:00PM</option>
        </select>
        <div>
        <button>Submit</button>
        </div>
      </div>
      <div className="reservation-image">
        <img src={reservation} alt="reservation"/>
      </div>
    </form>
  )
}

export default Reservation