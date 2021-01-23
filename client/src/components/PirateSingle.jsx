import { Link, navigate } from "@reach/router"
import axios from "axios"
const PirateSingle = (props) => {
    console.log(props)
    const handleClick = (e) => {
        const r = window.confirm("Are you sure you want to delete it!")
        if (r === true) {
            axios
                .delete("http://localhost:8000/api/pirate/" + props.pirate._id)
                .then((res) => {
                    props.setisupdate(true)
                    navigate("/dashboard")
                })
                .catch(err => console.log(err))
        } else {
            alert('ok')
        }
    }
    return (
        <>
            {/* <div>
                <p>{props.author.name}</p>
                <Link to={`/edit/${props.author._id}`}><button>Edit</button></Link>
                <button onClick={handleClick}>Delete</button>
                
            </div> */}    
        <div class="container blockquote text-center">
                    <div className="divsingle"> 
                    <div className="left">
                    <img src={props.pirate.imgUrl} alt={props.pirate.name} style={{width: '150px', height:'100px'}}/>
                    </div>
                    <p  class="p1">{props.pirate.name}</p>
                    <p  class="p1">
                        <Link to={`/about/${props.pirate._id}`}><button class="b2">view pirate</button></Link> 
                        <button class="b1" onClick={handleClick}>walk the blank</button>
                    </p>
                    </div>
        </div>


        </>
    )
}

export default PirateSingle