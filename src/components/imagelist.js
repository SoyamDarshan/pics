import React from 'react';
import ImageCard from './image_card';
import './imagelist.css';

const ImageList = (props) => {
    //console.log(props);
    const images = props.images.map(image => {
        return <div key={image.id}><ImageCard image={image} /></div>
});
    return (<div className="image-list">
        {images}
        </div>);
};

export default ImageList;