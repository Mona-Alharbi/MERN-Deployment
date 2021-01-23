import Login from './Login';
import Register from './Register';

const FirstPage = ({ setUser }) => {
    return (
        <div class="blockquote text-center">
            <h1>Welcome to Pirates Crew</h1>
            <Register setUser={setUser} />
            <Login setUser={setUser} />
        </div>)
}
export default FirstPage