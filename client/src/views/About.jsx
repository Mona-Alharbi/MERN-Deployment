import { Link,navigate } from "@reach/router"
import axios from "axios"
import { useEffect, useState } from "react"
import PirateForm from "../components/PirateForm"
// const Edit = (props) => {
//   const { id } = props

const Edit = ({ id }) => {
    const [errors, setErrors] = useState([])
    const [formInputs, setFormInputs] = useState({
        name: "",
        imgUrl: "",
        treasure: "",
        position: "",
        phreas: "",
        pegLeg: "",
        eyePatch: "",
        hookHand: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .put("http://localhost:8000/api/pirate/" + id, formInputs)
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
        console.log("e.target.name: ", e.target.name)
        console.log("e.target.value: ", e.target.value)
        setFormInputs({
            ...formInputs,
            [e.target.name]: e.target.value,
        })
    }

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/pirate/" + id)
            .then((res) => {
                setFormInputs(res.data)
            })
            .catch((err) => console.log(err))
    }, [id])
    return (
        <div className="div0">
            <div class="dname">
            <p  class="p1">{formInputs.name}</p>
            <Link to="/dashboard"><button>Crew Board</button></Link>
            </div>
            <div className="all">
            <div className="left">
            <img src={formInputs.imgUrl} alt={formInputs.name} style={{width: '200px'}}/>
            <p >{formInputs.phreas}</p>
            </div>
            <br></br>
            <div class="right">
            <h3>About</h3>
            <p  class="p1">Treasure: {formInputs.treasure}</p>
            <p  class="p1">Position: {formInputs.position}</p>
            <p  class="p1">pegLeg:{formInputs.pegLeg.toString()}</p>
            <p  class="p1">eyePatch:{formInputs.eyePatch.toString()}</p>
            <p  class="p1">hookHand:{formInputs.hookHand.toString()}</p>
            </div>
            </div>
        </div>
    )
}
export default Edit