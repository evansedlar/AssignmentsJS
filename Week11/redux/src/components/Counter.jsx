
// connect allows your component to connect to the global state
import { connect } from "react-redux"

function Counter(props) {



    return (
        <>
            <button onClick = {handleIncrement}>Increment</button>
        </>

    )

}

const mapStateToProps = (state) => {

    return {
        ctr: state.counter,
    }
}

export default connect(mapStateToProps)(Counter)