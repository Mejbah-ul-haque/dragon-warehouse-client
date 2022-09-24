import React from 'react';
import { Link } from 'react-router-dom';

const Answer1 = () => {
    return (
        <>
            <div className='py-10 bg-white text-center shadow-2xl'>
                <h3 className='text-3xl font-bold'>What is the Difference between Javascript and Node.js?</h3>
                <div style={{ height: '1px' }} className='bg-slate-400 my-5 block mx-auto'></div>
                <Link to='/blog'>
                    <button style={{ border: '2px solid #003366', borderRadius: '50px', backgroundColor: '#003366' }} className='text-center font-bold mt-4 py-2 px-3 text-white btn add-new-item-btn'>Back to Blog page</button>
                </Link>
            </div>
            <div className="container mx-auto mt-3">
                <div className="">
                    <div className="w-auto mx-auto">
                        <div className="card border-0">
                            <table className="table-fixed p-4">
                                <thead className='table-info'>
                                    <tr className='bg-red-100 '>

                                        <th className='w-24 text-center py-5' scope="col">compare</th>
                                        <th className='w-24' scope="col">Javascript</th>
                                        <th className='w-24' scope="col">Nodejs</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    <tr>

                                        <td >Type</td>
                                        <td className='p-10 text-left'>JavaScript is a programming language. It is running in any web browser with a proper browser engine.</td>
                                        <td className='p-10 text-left'>It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.</td>
                                    </tr>
                                    <tr className='my-10 bg-green-100'>

                                        <td>Utility</td>
                                        <td className='p-10 text-left'>Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.</td>
                                        <td className='p-10 text-left'>It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.</td>
                                    </tr>
                                    <tr>

                                        <td>Running Engine</td>
                                        <td className='p-10 text-left'>	JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).</td>
                                        <td className='p-10 text-left'>Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Answer1;