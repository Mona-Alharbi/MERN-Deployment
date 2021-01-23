import { navigate } from "@reach/router"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "@reach/router"
import PirateList from '../components/PirateList'

const Dashboard = ({ user }) => {
    const [users, setUsers] = useState([])
    const [pirate, setpirate] = useState([])
    const [isupdate, setisupdate] = useState(false)
    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
        // load all the users from the db
        console.log(user)
        axios
            .get("http://localhost:8000/api/users", { withCredentials: true })
            .then((res) => {
                console.log(res.data.users)
                setUsers(res.data.users)
            })
            .catch((err) => console.log(err))
    }, [user])
    useEffect(() => {
        axios.get('http://localhost:8000/api/pirate')
            .then((res) => {
                setpirate(res.data)
            })
            .catch(err => console.log(err))
    }, [isupdate])
    const handleClick = (e) => {
        axios
            .get("http://localhost:8000/api/logout")
            .then((res) => {
                console.log(res)
                navigate("/login")
            })
            .catch((err) => console.log(err))
    }

    return (
        <>
            <button onClick={handleClick}>Logout</button>
            <div>
                <h1>Welcome {user && user.firstName} to the Pirates App </h1>
                {/* {users.length > 0 &&
                users.map((user) => <User key={user.id} user={user} />)} */}
                {/* new by me */}
                <div class="dname">
                    <h3 class="pc"> Pirates Crew</h3>
                    <Link class="pc" to="/new"><button>Add an Pirate</button></Link>
                </div>
                <PirateList data={pirate} isupdate={isupdate} setisupdate={setisupdate} />
            </div>
        </>
    )
}
export default Dashboard