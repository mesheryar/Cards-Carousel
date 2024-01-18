import React from 'react';
import { ActionKind, usePony } from 'pony-props';
import imag1 from '../images/Vector.png'
import imag2 from '../images/profile.png'
import imag3 from '../images/folderimage.png'
import './ADDCardCaro.css'
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";


const ADDCardCaro = () => {
    // Example with image URLs
    const items = [
        { id: 0, imageUrl: imag1 },
        { id: 1, imageUrl: imag2 },
        { id: 2, imageUrl: imag3 }
    ];

    const {
        getSectionProps,
        getHeadingProps,
        getCarouselWrapperProps,
        getCarouselProps,
        getCarouselItemProps,
        getButtonProps,
        getAnnouncerProps,
        state
    } = usePony({ numItems: items.length });

    return (
        <div {...getSectionProps()} className='ADDCardCaro-Main'>
            <h1 {...getHeadingProps()}></h1>
            <div {...getCarouselWrapperProps()}>
                <ul {...getCarouselProps()}>
                    {items.map((item, idx) => (
                        <li key={item.id} {...getCarouselItemProps(idx)}>
                            <img src={item.imageUrl} alt={item.name} style={{ width: '60%', height: 'auto' }} />
                            {/* <p>{item.name}</p> */}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='CAROButtons'>
                <button {...getButtonProps(ActionKind.Previous)}><GrFormPrevious />Previous</button>
                <button {...getButtonProps(ActionKind.Next)}>Next<GrFormNext /></button>
            </div>
            <div {...getAnnouncerProps()}>
                <p>{`Item ${state.activeSlideIndex + 1} of ${items.length}`}</p>
            </div>
        </div>
    );
};

export default ADDCardCaro;
