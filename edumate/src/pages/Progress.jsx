import React from 'react';
import Container from "react-bootstrap/Container";
import vidoImage from "../assets/video.png";

function Progress() {
    const isMobile = window.innerWidth <= 767;
    return (
        <div>
        {isMobile ? (
            <Container className="p-4" style={ {
                minHeight: '80vh',
                display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                backgroundColor: "#F5F5F5",
                flexDirection: 'column',
            }}>
                 <div className="">
                <h3>My Progress</h3>
                <div className='d-flex flex-row justify-content-between w-100 mt-4 border'>
                    <div className='d-flex flex-column w-50 border border-black align-items-center'>
                        <h5>Quizzes Taken</h5>
                        <span style={{fontSize: "40px", fontWeight: "bolder", color: "blue"}}>24</span>
                    </div>
                    <div className='d-flex flex-column border border-black w-50 align-items-center'>
                        <h5>Speech Practiced</h5>
                        <span style={{fontSize: "40px", fontWeight: "bolder", color: "blue"}}>15</span>
                    </div>
                </div>
                <h3 className='mt-4 mb-4'>Recently watched</h3>
                <div>
                    <div className='d-flex flex-row bg-white rounded mb-4'>
                        <div className='w-50'>
                            <img src={vidoImage} alt='video' />
                        </div>
                        <div>
                            <h5>
                                Chap 12. Introduction to p
                            </h5>
                        </div>
                    </div>
                    <div className='d-flex flex-row bg-white rounded mb-4'>
                        <div className='w-50'>
                            <img src={vidoImage} alt='video' />
                        </div>
                        <div>
                            <h5>
                                Chap 12. Introduction to p
                            </h5>
                        </div>
                    </div>
                    <div className='d-flex flex-row bg-white rounded'>
                        <div className='w-50'>
                            <img src={vidoImage} alt='video' />
                        </div>
                        <div>
                            <h5>
                                Chap 12. Introduction to p
                            </h5>
                        </div>
                    </div>
                </div>
              </div>
            </Container>
        ) : (
            <div>
            <h1>Laptop</h1>
            </div>
        )}
        </div>
    );
}

export default Progress
