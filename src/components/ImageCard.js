import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {spans: 0}
      this.imageRef = React.createRef()
    }

    componentDidMount () {
        const height = this.imageRef.current.clientHeight;
        const spans =  Math.ceil(height/150);
        this.setState({spans})
    }


    render () {
        console.log(this.props.resultObj)
        const {urls, description} = this.props.resultObj;
        return (
            <div style = {{gridRowEnd: `span ${this.state.spans}`}} >
               <img src = {urls.regular} alt = {description} ref = {this.imageRef}/>
            </div>
        )
    }
}

export default ImageCard