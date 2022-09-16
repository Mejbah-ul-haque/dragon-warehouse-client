import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import bankCard from '../../../assets/BankCard/bankCard.jpg';
import './Footer.css';

const today = new Date();
const year = today.getFullYear();

const Footer = () => {
    return (
        <footer style={{ marginTop: '120px' }} className='shadow-lg'>
            <div style={{ height: '50px', backgroundColor: 'lightgray' }}></div>
            <div style={{ backgroundColor: '#000000' }}>
                <section className='container mx-auto'>
                    <div className="grid text-center md:grid-cols-3 gap-4 md:text-left">
                        <div className="">
                            <div style={{ height: '300px' }} className="text-white border border-slate-600 p-4 pt-5 text-slate-500 leading-10 text-xl">
                                <h3  className='text-3xl text-slate-50'>contact us</h3>
                                <p> <FontAwesomeIcon className=' mt-8' icon={faPhone}></FontAwesomeIcon>
                                    <small className='ml-2'>+8801919999999</small>
                                </p>
                                <p>
                                    <FontAwesomeIcon className='text-muted' icon={faEnvelope}></FontAwesomeIcon>
                                    <small className='ml-2'> atafal@gmail.com</small>
                                </p>
                                <p>
                                    <FontAwesomeIcon className='text-muted' icon={faLocationDot} />
                                    <small className='ml-3'>PO BOX 7091, Dhaka</small>
                                </p>
                                <p>
                                    <FontAwesomeIcon className='text-muted' icon={faClock}></FontAwesomeIcon>
                                    <small className='ml-2'>Opening : 8.00AM-22PM</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div style={{ height: '300px' }} className="text-white border border-slate-600 p-4 pt-5 text-slate-500 leading-10 text-xl">
                                <h5 className='text-xl text-slate-50'>CUSTOMER SERVICE </h5>
                                <p><small>Help and advice</small> </p>
                                <p><small> Shipping & Returns</small> </p>
                                <p><small>Refund Policy</small></p>
                                <p><small>Delivery Information</small></p>
                                <p><small>Delivery Information</small></p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div style={{ height: '300px' }} className="text-white text-center md:text-start border border-slate-600 leading-7  p-4 pt-5">
                                <h5 className='text-xl leading-10'>NEWSLETTER </h5>
                                <p className='leading-10'><small>Sign up newsletter to receive special offers and exclusive news about Metros products</small> </p>
                                <p><input className='w-full text-center p-2 text-black mt-4' type="btn" value="ENTER YOUR ADDRESS" /></p>
                                <p><input className='w-full text-center p-2 mt-3 bg-red-500 text-white' type="btn" value="SUBSCRIBE" /> </p>

                            </div>
                        </div>
                    </div>
                </section>
                <section className='container mx-auto my-10 text-center py-5'>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-white border-r border-slate-600 leading-10">
                            <h1 className='text-center text-3xl font-bold my-2'>Dragon Warehouse</h1>
                            <p className='text-center'><small>the best electronics warehouse</small></p>
                            <p className='text-center'><small><em>" Your satisfaction is our main goal. "</em></small></p>
                        </div>
                        <div className="border-x border-slate-600">   
                            <div className="text-center flex md:flex-col ">
                                <p className='m-3'><Link className='text-decoration-none footer-link border rounded-full py-1 px-5' to="/laptop"><small> Laptop</small></Link></p>
                                <p className='m-3'><Link className='text-decoration-none footer-link border rounded-full py-1 px-5' to="/mobile"><small> Mobile</small></Link></p>
                                <p className='m-3'><Link className='text-decoration-none footer-link border rounded-full py-1 px-5' to="/airPods"><small> AirPods</small></Link></p>
                            </div>
                        </div>
                        <div className="border-l border-slate-600">
                            <div className=" text-center flex mx-auto md:flex-col">
                                <p className='m-3'><Link className='text-decoration-none footer-link border rounded-full py-1 px-8' to="/iron"><small> Iron </small></Link></p>
                                <p className='m-3'><Link className='text-decoration-none footer-link border rounded-full py-1 px-2' to="/watch"><small> SmartWatch </small></Link></p>
                                <p className='m-3'><Link className=' border footer-link rounded-full py-1 px-6' to="/others"><small> Others</small></Link></p>
                            </div>
                        </div>
                    </div>

                </section>
                <div style={{ height: '1px' }} className='bg-slate-300 mx-auto'></div>
                <section className='container mx-auto flex justify-center items-center pb-5 mt-16'>
                    <div>
                    <img className='ml-10' src={bankCard} alt="" />
                    <p className='text-white text-center py-4 mb-0'><small> copyright &copy; {year} Dragon Warehouse. All rights reserved.</small></p>
                    </div>
                </section>
            </div>
        </footer>
    );
};

export default Footer;