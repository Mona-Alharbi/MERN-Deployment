import { Link } from "@reach/router"
const PirateForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div class="div0">
                <p>
                    name
                <input
                        type="text"
                        name="name"
                        value={props.formInputs.name}
                        onChange={props.handleChange}
                    />
                </p>
                {props.formInputsError.title ? <p style={{ color: "red" }}>{props.formInputsError.title}</p> : ""}
                <p>
                    imgUrl
                <input
                        type="text"
                        name="imgUrl"
                        value={props.formInputs.imgUrl}
                        onChange={props.handleChange}
                    />
                </p>
                <p>
                    # of Treasure Chests
                <input
                        type="number"
                        name="treasure"
                        value={props.formInputs.treasure}
                        onChange={props.handleChange}
                    />
                </p>
                <p>
                    # Pirate catch phreas
                <input
                        type="text"
                        name="phreas"
                        value={props.formInputs.phreas}
                        onChange={props.handleChange}
                    />
                </p>
                <p>
                    # Crew Position
                <select name="position" onChange={props.handleChange}>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quater Master">Quater Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                </p>
                <p>
                    Peg Leg
                    <input type="checkbox" onChange={props.handleChange} name='pegLeg'   value={props.formInputs.pegLeg}/>
                </p>
                <p>
                    Eye Patch
                    <input type="checkbox" onChange={props.handleChange} name='eyePatch'  value={props.formInputs.eyePatch}/>

                </p>
                <p>
                    Hook Hand
                    <input type="checkbox" onChange={props.handleChange} name='hookHand'   value={props.formInputs.hookHand}/>

                </p>
                <button type="submit" class="btn btn-primary">Add pirate</button>
                <Link to="/dashboard"><button >cancel</button></Link>
            </div>
        </form>
    )
}

export default PirateForm