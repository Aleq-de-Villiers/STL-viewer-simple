import {StlViewer} from "react-stl-viewer";
import React from "react"



// const default_url = "https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl"
// const default_url = "https://storage.googleapis.com/ucloud-v3/02e14529f9df9a8ebbe03533.stl"
// const default_url = "https://storage.googleapis.com/ucloud-v3/1aebf6577c7f3c61905583ab.stl"
  
export class Home extends React.Component {
    constructor(prop) {
        super()
        console.log(prop);

        if(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)$/g.test(prop.url)) {
            this.url = prop.url
        } else {
            this.url = "https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl"
        }

        clearInterval(this.ticker)
        this.ticker = setInterval(() => {
            this.forceUpdate()
        }, 50)
    }

    render() {
        return (
        <div>
            <StlViewer
                style={{height: '80vh'}}
                shadows
                url={this.url}
                modelProps={{"rotationZ": (Date.now() / 1000)}} />

            <p>
                model loaded from: <a href={this.url}> {this.url} </a>
            </p>
        </div>
        )
    }
}