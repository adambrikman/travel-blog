import React from "react"

const Contact = (props) => {
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Howdy! The form below doesn't actually work as this app is just a demo. Thanks for checking it out!</p>

            <form>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="name" type="text" class="validate"></input>
                        <label for="name">Name</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input id="email" type="text" class="validate"></input>
                        <label for="email">E-mail</label>
                    </div>
                </div>

                <div className="row">
                    <textarea id="message" class="materialize-textarea"></textarea>
                    <label for="message">Message</label>
                </div>

                <button className="btn green lighten-1">Submit</button>
            </form>
        </div>
    )
}

export default Contact