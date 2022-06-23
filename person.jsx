import React from "react";
import Dog from "./dog"
import { Person } from "./person";

class ReactPerson extends React.Component{
    constructor(props) {
        super(props);
        let person = new Person
        this.state = {
            person: person
        }
        this.updatePresence = this.updatePresence.bind(this)
    }

    updatePresence() {
        if (this.state.person.present) {
            this.state.person.present = false;
        } else {
            this.state.person.present = true;
        }

        this.setState( {person: this.state.person} )
    }

    render() {
        return(
            <Dog person={this.state.person}
            updatePresence={this.updatePresence}/>
        )
    }
}

export default ReactPerson;