import React from 'react';

const Banner = () => {
    return (
        <div style={{ height: '500px' }} className="carousel w-fit mb-14">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Hgvnx41/parts.jpg" className="w-full" /> /
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://s14761.pcdn.co/wp-content/uploads/2019/05/Service-Tipps-Bike-Fruehling-Spring-3913.jpg" className="w-full" /> /
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://st2.depositphotos.com/2977159/8660/i/950/depositphotos_86608650-stock-photo-bicycle-tools-background.jpg" className="w-full" /> /
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;