import React from 'react';

function Hero () {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
            <center>  
            <img src='media/images/homeHero.png'height='500'width='1000' alt='Hero'className='mb-5' />

            <h1 className='mt-5'>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className='p-6 btn btn-primary fd-5 mb-5' style={{width:"20%", backgroundColor:'blue',borderColor: "blue", color:'white'}}>Signup Now</button>
            </center>  
            </div>  
        </div>
     );
}

export default Hero ;