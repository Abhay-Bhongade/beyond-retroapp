import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import JacketData from './JacketData'
import IconData from './IconData'
import Footer from './Footer'
import PayDay from './PayDay'
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { DLT } from '../redux/Action/Action';
import ReactImageMagnify from 'react-image-magnify';

const CartDetails = () => {
    const [data, setData] = useState(JacketData)
    const [icons, setIcons] = useState(IconData);
    const [item, setItem] = useState([]);
    console.log(item);

    const { id } = useParams()
    console.log(id);

    const getData = useSelector((state) => state.Reducer.carts)
    console.log(getData);

    const compare = () => {
        let compareData = getData.filter((e) => {
            return e.id == id;
        })
        setItem(compareData);
    }

    useEffect(() => {
        compare()
    }, [id])

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const DELET = (id) => {
        dispatch(DLT(id))
        navigate("/")
    }


    return (
        <>
            <Navbar />
            <PayDay />


            <div className="container">
                <div className="row py-5">
                    {/* <div className="col-md-4">
                        {
                            item.map((ele) => {
                                return (
                                    <>
                                        <img src={ele.img} width={376} height={476} alt="" className=' img-fluid' />
                                        <span><i className="fa-solid fa-magnifying-glass-plus text-muted me-2"></i>Click Image to Zoom</span>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="col-md-2">
                    {
                        item.map((ele) => {
                            return (
                                <>
                                        {
                                            ele.images.map((elem) => {
                                                return (
                                                    <div className='d-flex flex-column justify-content-between my-4 '>
                                                        <img src={elem} alt="" width={68} height={88} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </>
                            )
                        })
                    }
                    </div> */}



                    <div className="col-md-4">
                        {
                            item.map((ele) => {
                                return (
                                    <>
                                        <img src={ele.img} width={376} height={476} alt="" className=' img-fluid' />
                                        <span><i className="fa-solid fa-magnifying-glass-plus text-muted me-2"></i>Click Image to Zoom</span>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="col-md-2">
                        {
                            item.map((ele) => {
                                return (
                                    <>
                                        {
                                            ele.images.map((elem) => {
                                                return (
                                                    <div className='d-flex flex-column justify-content-between my-4 '>
                                                        <img src={elem} alt="" width={68} height={88} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </>
                                )
                            })
                        }
                    </div>


                    <div className="col-md-6 mb-5">
                        <h4 className='fw-bold'>SAILOR STYLE TEAM JACKET - L</h4>
                        <p className='fs-4'>$150.00</p>
                        <ul>
                            <li><span className='text-muted'>Size:</span>  L <a href="">Size Guide</a></li>
                            <li><span className='text-muted'>Bust:</span>  42 in.</li>
                            <li><span className='text-muted'>Length:</span>  23 in.</li>
                            <li><span className='text-muted'>Sleeve Length:</span>  25 in.</li>
                        </ul>
                        <div className='border border-warning text-center py-2'>
                            <p className='mb-0'>FREE DELIVERY OVER $75</p>
                            <p className='mb-0'>FREE UK RETURNS</p>
                        </div>
                        <div className='my-3'>
                            <button className="btn btn-warning col-12 text-uppercase fw-bold btnHover py-2" onClick={() => { DELET() }}>Remove Item From Bag</button>
                        </div>
                        <div className='text-center'>Add to Wishlist  <i className="fa-solid fa-heart text-danger fs-4"></i></div>
                        <hr />
                        <div className='d-flex justify-content-start align-items-center mt-3'>
                            Share :
                            {
                                icons.map((ele) => {
                                    return (
                                        <div className='mx-2' key={ele.id}>
                                            <span className='divBg d-flex justify-content-center align-items-center'>
                                                <i className={ele.iconName}></i>
                                            </span>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <ul className="nav nav-tabs my-4">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">MORE DETAIL</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">DELIVERY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">RETURNS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" tabIndex="-1">CONDITION</a>
                            </li>
                        </ul>

                        <div>
                            <h5>Description</h5>
                            <p className='text-muted'>80's team jacket in black & yellow with full lining, badges and medals.</p>
                            <span style={{ fontSize: "15px" }}>Sleeve Length: 25 inch</span> <br />
                            <span style={{ fontSize: "15px" }}>Bust: 42 inch</span> <br />
                            <span style={{ fontSize: "15px" }}>Length: 23 inch</span>
                            <hr />
                        </div>
                        <table className="table mb-5">
                            <thead>
                            </thead>
                            <tbody className='text-muted'>
                                <tr>
                                    <td> SKU:</td>
                                    <td>E00756335</td>
                                </tr>
                                <tr>
                                    <td>CONDITION:</td>
                                    <td>GOOD</td>
                                </tr>
                                <tr>

                                    <td>MORE INFORMATION:</td>
                                    <td>POPPERS</td>
                                </tr>
                                <tr>

                                    <td>ERA:</td>
                                    <td>1980S</td>
                                </tr>
                                <tr>

                                    <td>FABRIC:</td>
                                    <td>WOOL BLEND</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <hr />
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className='border border-dark'>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CartDetails