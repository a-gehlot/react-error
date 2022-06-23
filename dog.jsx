import React from "react";

class Dog extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <button onClick={this.props.updatePresence}>click me</button>
                <div>{this.props.person.checkPresence()}</div>
            </div>
        )
    }
}

export default Dog