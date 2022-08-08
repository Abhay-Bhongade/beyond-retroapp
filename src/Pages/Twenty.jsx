import React, { useState } from 'react'
import ImagesData from './ImagesData'
import PicData from './PicData'
import {NavLink} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { ADD } from '../redux/Action/Action'

const Twenty = () => {
    const [data, setData] = useState(ImagesData)
    const [item, setItem] = useState(PicData)
    // console.log(ImagesData);
    // console.log(data);

    const dispatch = useDispatch();
    

    const Send = (e) =>{
        // console.log(e)
        dispatch(ADD(e))
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        item.map((elem,i)=>{
                            return (
                                <div className="col-md-3 col-6 my-3" key={elem.id}>
                                    <img src={elem.img} alt="" className='first img-fluid' />
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className="row">
                    <div className="col-md-12 py-3">
                        <h1 className='text-center title-text main-heading fw-bold text-uppercase'>
                            20 YEARS OF BEYOND RETRO
                        </h1>
                        <p className='title-text-p'>2022 marks 20 years as the sustainable option in the business of fashion for our vintage business, Beyond Retro.

                            <br /> <br />

                            From the first store in Cheshire Street opening 2002 - to a global business with 15 stores and e-commerce, entering our 20th year being incredibly proud to have saved over 7 million pieces of vintage clothing from landfill.
                            <br /> <br />
                            Beyond Retro Vintage is the home of vintage mens and womens clothing, vintage sportswear, vintage dresses, vintage sweatshirts, vintage t-shirts and vintage jeans. We hand pick every item of used clothing we find so you can shop sustainably. We have brands from vintage Nike sweatshirts to vintage Levi's jeans, and we stock 60s to 90s clothing, vintage Y2K, plus size vintage and vintage football, NFL, NBA, baseball and basketball. We are the biggest vintage online store for used clothing, preloved and thrift clothing.</p>

                        <h2 className='text-center py-4 title-text fw-bold htwobg'>SHOP THE BEST OF VINTAGE</h2>
                    </div>
                    </div>
                    <div className="row mb-3">
                    
                        {
                            data.map((ele,i) => {
                                return (
                                    <>
                                        <div className="col-md-3 col-6" key={i}>
                                    
                                          <span> <img src={ele.img} alt="" width={275} height={357} className="img-fluid" /> </span>
                                            <button className='btn btn-warning text-secondary col-md-8 ms-md-5 ms-4 fw-bold' onClick={()=>Send(ele)}>Add to Cart</button>
                                           
                                        </div>
                                    
                                    </>
                                )
                            })
                        }

                  
                </div>
            </div>
        </>
    )
}

export default Twenty