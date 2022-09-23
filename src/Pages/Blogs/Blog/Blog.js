import React from 'react';
import { Link } from 'react-router-dom';
// import PageTitle from '../../Shared/Footer/PageTitle/PageTitle';

import './Blog.css';

const Blog = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            {/* <PageTitle title='Blog'></PageTitle> */}
            <div className='pt-4 bg-white text-center'>
                <h3 className='text-4xl font-bold text-slate-500 uppercase'>Programing <span className='font-bold text-5xl text-green-500'>Q/A</span> </h3>
                <div style={{ height: '1px' }} className='bg-slate-600 w-50 my-10 block mx-auto'></div>
                <h2 className='text-center uppercase text-2xl mt-10 mb-20'><span style={{ color: 'white', borderRadius: '50px', border: '2px solid #003366', backgroundColor: '#003366' }} className='py-2 px-5'>Dragon Warehouse Blog</span></h2>
            </div>
            <div className="container mx-auto">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="col">
                        <div className="card h-100 blog-card">
                            <div className='blog-q'>
                                <h5>Difference between Javascript and Node.js?</h5>
                            </div>

                            <div className="card-body pb-0">
                                <p className="card-text">JavaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all.</p>
                                <Link to={'/answer1'}>
                                    <p className='text-center btn-read-more py-3'><button className='blog-btn border-0'>Read more...</button></p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 blog-card">
                            <div className='blog-q'>
                                <h5>When should you use Node when should you use Mongodb?</h5>
                            </div>

                            <div className="card-body pb-0">
                                <p className="card-text">MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates.</p>
                                <Link to={'/answer2'}>
                                    <p className='text-center py-3 btn-read-more'><button className='blog-btn border-0'>Read more...</button></p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 blog-card">
                            <div className='blog-q'>
                                <h5>What is the different between SQL and noSQL?</h5>
                            </div>

                            <div className="card-body pb-0">
                                <p className="card-text">SQL programming can be effectively used to insert, search, update, delete database records. NoSQL database is used for distributed data stores with humongous data storage needs. </p>
                                <Link to={'/answer3'}>
                                    <p className='text-center py-3 btn-read-more'><button className='blog-btn border-0'>Read more...</button></p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 blog-card">
                            <div className='blog-q'>
                                <h5>What is the purpose of jwt and how does it use?</h5>
                            </div>

                            <div className="card-body pb-0">
                                <p className="card-text">JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. </p>
                                <Link to={'/answer4'}>
                                    <p className='text-center py-3 btn-read-more'><button className='blog-btn border-0'>Read more...</button></p>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;