import './ImageList.css'
import React from "react";
import ImageCard from './ImageCard'



class ImageList extends React.Component {
    render() {
      const images = this.props.results.map(image => {
         return (
         <ImageCard 
         key={image.id} 
         resultObj = {image}
         />)
        })

        return (
        <div className = "image-list">{images}</div>
        )

    }
}


export default ImageList;