import React from 'react';
import './Home.css'

function Home(){
    return(
        <div>
            <div className='add-to-cart'>
                <img  src='https://www.convertize.com/wp-content/uploads/2019/03/Amazon-add-to-cart-button.jpg' alt=''/>
            </div>
            <h1>Home component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img  src="https://cdn.vox-cdn.com/thumbor/SJcmPEheS_cbdujd4zbIPTpuXfg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315959/akrales_181019_3014_0770.jpg" alt='Phone pic'/>
                </div>
                <div className='text-wrapper item'>
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price : $1000.00
                    </span>
                </div>
                <div className='btn-wrapper item'>
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home