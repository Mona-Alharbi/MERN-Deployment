import PirateSingle from './PirateSingle'

const PirateList = (props) => {

    return (
        <div class="blockquote text-center">
            {props.data.length > 0 &&
                props.data.sort((a, b) => a.name.localeCompare(b.name)).map((pirate) => <PirateSingle key={pirate._id} pirate={pirate} isupdate={props.isupdate} setisupdate={props.setisupdate}  />)}
        </div>
    )
}
export default PirateList