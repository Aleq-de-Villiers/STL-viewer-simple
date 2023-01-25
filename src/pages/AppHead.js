import React from "react";

export class AppHead extends React.Component {
    // constructor() {
    //     super()
    // }

    render() {
        return (
        <div className="App-header">
            <h3 id="test_head">
            STL viewer simple
            </h3>

            <form>
            <label>
                <pre>Target URL: </pre>
                <input id="url_input" type="text" name="target_url" onChange={() => {}} />
                <input id="url_submit" type="submit" value="Submit"/>
            </label>
            
            </form>
        </div>
        )
    }
}