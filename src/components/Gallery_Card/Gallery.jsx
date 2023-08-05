import React from 'react';
import './Gallery.css';
import { GallCard } from './GalCard';

const CardGrid = () => {
  return (
    <div className="container-fluid mx-auto mt-4" style = {{overflowX : "scroll"}}>
      <div className = "flexRow">
        <GallCard image = {require('../../assets/images/1.jpg')} heading = "Alvin" description = "jose"/>
        <GallCard image = {require('../../assets/images/4.jpg')} heading = "Alvin" description = "jose"/>
        <GallCard image = {require('../../assets/images/5.jpg')} heading = "Alvin" description = "jose"/>
        <GallCard image = {require('../../assets/images/6.jpg')} heading = "Alvin" description = "jose"/>
        <GallCard image = {require('../../assets/images/7.jpg')} heading = "Alvin" description = "jose"/>
        <GallCard image = {require('../../assets/images/8.jpg')} heading = "Alvin" description = "jose"/>
        <GallCard image = {require('../../assets/images/9.jpg')} heading = "Alvin" description = "jose"/>
      </div>
    </div>
  );
};

export default CardGrid;
