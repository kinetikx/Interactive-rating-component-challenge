import React, { Component } from 'react';
import star from "../asset/icon-star.svg"
function card (){ 
        return (
            <div className=' h-[400px] max-w-[350px]  rounded-3xl p-[35px] bg-DarkBlue   m-auto'>
                <div className='flex flex-col '>
                    <div className='staricon   '>
                    <img className='rounded-full bg-Deneme  p-4' src={star}/>
                    </div>
                    
                    <div className='paragraph flex flex-col mt-3'>
                        <h2 className='text-White font-bold'> How did we do?</h2>
                        <span className='text-sm py-4 text-MediumGrey font-normal'> Please left us know how we did width your support
                            request. All feedback is appreciated to help us 
                            impove our offering!
                        </span>
                    </div>

                    <div className='ratedbutton flex flex-row justify-between my-3' >
                        <span className='flex bg-Deneme rounded-full text-LightGrey hover:bg-Orange w-[40px] h-[40px] text-center justify-center items-center '>1</span>
                        <span className='flex bg-Deneme rounded-full text-LightGrey hover:bg-Orange w-[40px] h-[40px] text-center justify-center items-center '>2</span>
                        <span className='flex bg-Deneme rounded-full text-LightGrey hover:bg-Orange w-[40px] h-[40px] text-center justify-center items-center '>3</span>
                        <span className='flex bg-Deneme rounded-full text-LightGrey hover:bg-Orange w-[40px] h-[40px] text-center justify-center items-center '>4</span>
                        <span className='flex bg-Deneme rounded-full text-LightGrey hover:bg-Orange w-[40px] h-[40px] text-center justify-center items-center '>5</span>
                        
                    </div>

                        <span className='p-2 mt-4 w-full text-center text-white font-normal  rounded-3xl  bg-Orange '>SUBMIT</span>

                </div>
            </div>
        );
    }   

export default card;