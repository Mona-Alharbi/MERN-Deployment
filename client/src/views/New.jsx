import { Link, navigate } from "@reach/router"
import axios from "axios"
import { useState } from "react"
import PirateForm from "../components/PirateForm"

const New = (props) => {
    const [errors, setErrors] = useState([])
    const [formInputs, setFormInputs] = useState({
        name: "",
        imgUrl: "",
        treasure: "",
        position: "",
        phreas: "",
        pegLeg: true,
        eyePatch: "true",
        hookHand: "true"

    })
    const [formInputsError, setFormInputsError] = useState({
        title: '',
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post("http://localhost:8000/api/pirate/", formInputs)
            .then((res) => {
                console.log(res.data)
                navigate("/dashboard")
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors // Get the errors from err.response.data
                const errorArr = [] // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) {
                    // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr)
            })
    }

    const handleChange = (e) => {

        if (e.target.name === 'name') {
            if (e.target.value.length < 1) {
                setFormInputsError({
                    ...formInputsError,
                    title: " fornt end Title is required!"
                })
            } else if (e.target.value.length < 3) {
                setFormInputsError({
                    ...formInputsError,
                    title: " fornt endTitle must be 3 characters or longer!"
                })
            }

            else {
                setFormInputsError({
                    ...formInputsError,
                    title: "",
                })
            }
        }
        if(e.target.name === "pegLeg"){
            console.log("yes"+e.target.checked)
            setFormInputs({
            
                ...formInputs,
                [e.target.name]: e.target.checked,
            })
        }
        else if(e.target.name === "eyePatch"){
            console.log("yes"+e.target.checked)
            setFormInputs({
            
                ...formInputs,
                [e.target.name]: e.target.checked,
            })
        }
        else if (e.target.name === "hookHand"){
            console.log("yes"+e.target.checked)
            setFormInputs({
            
                ...formInputs,
                [e.target.name]: e.target.checked,
            })
        }
        else setFormInputs({

            ...formInputs,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <Link to="/dashboard">Crew Board</Link>
            <h3>Add Pirate</h3>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <PirateForm
                formInputs={formInputs}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                formInputsError={formInputsError}
            />
        </div>
    )
}
export default New