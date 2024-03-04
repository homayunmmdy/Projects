"use client"
import "./Form.scss"
import AccountForm from "./AccountForm"
import AddressForm from "./AddressForm"
import { FormData } from "@/models/FormData"
import { FormEvent, useState } from "react"
import { useMultistepForm } from "./useMultistepForm"
import UserForm from "./UserForm"
import { useRouter } from "next/navigation"


//--------data for form fileds--------
const INITAL_DATA : FormData = {
    firstName : "",
    lastName : "" ,
    age : "",
    street : "" ,
    city : "" ,
    state : ""  ,
    zip : "",
    email : "" ,
    password : "" ,
}
const Form = () => {

    const router = useRouter()
    const [data , setData] = useState(INITAL_DATA)
    
    //--update from & spreading the existing form data and modifid fields--
    function updateFields(fields : Partial<FormData>){
        setData(prev=> {
            return {...prev , ...fields}
        })
    }

    //--to manage the multisteps form functionality--
    const {steps , currtentStepIndex , setp , isFirstStep , isLastStep , back , next} = 
    useMultistepForm([
        <UserForm    {...data} updateFields={updateFields} />,
        <AddressForm {...data} updateFields={updateFields} />,
        <AccountForm {...data} updateFields={updateFields} />,
    ])
    //--------The last step--------
    function onSubmit(e : FormEvent){
        e.preventDefault()
        //When the form is done
        if (!isLastStep) return next()
        router.push("/")
    }

  return (
    <div className="Container">
      <form onSubmit={onSubmit}>
        <div className="LengthNumber">
            {/* The number of the pages  */}
            {currtentStepIndex + 1} / {steps.length}
        </div>
        {/* the currnet index page*/}
        {setp}
        <div className="main">
            {/* back button */}
            {!isFirstStep && (
                <button type="button" onClick={back}>
                     Back
                </button>
            )}
            {/* next and finish */}
            <button type="submit">{isLastStep ? "Finish" : "Next >"}</button>
        </div>
      </form>
    </div>
  )
}

export default Form
