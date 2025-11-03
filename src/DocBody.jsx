import React, { useState } from 'react';
import './DocBody.css';
import DocumentTabs from './DocumentTabs';

export default function DocBody(){

    const [activeTab, setActiveTab] = useState(1);
    return (

        <div class='ParentContainer'>

            <div class='Wrapper'>
                <DocumentTabs value={activeTab} onClick={(newf)=>{setActiveTab(newf)}}/>
                <div class='DocBody' style={{zIndex:4}}>
                                <div style={{marginTop:50, marginInline:50}}>
                                    {activeTab =='1'?
                                        
                                    <>
                                    <h1 className="text-2xl font-bold mb-4">Project Proposal: AI Research Initiative</h1>

                                        <p>
                                            This document outlines the goals, methodology, and expected outcomes of the <strong>AI Research Initiative</strong> for the 2025 fiscal year. Depending on the current mode, users can <b>edit</b> content directly, <b> suggest </b> improvements, or simply <b>view</b> the finalized version.
                                        </p>

                                        <p>
                                            This document outlines the goals, methodology, and expected outcomes of the <strong>AI Research Initiative</strong> for the 2025 fiscal year. Depending on the current mode, users can <b>edit</b> content directly, <b> suggest </b> improvements, or simply <b>view</b> the finalized version.
                                        </p> 

                                        <p>
                                            This document outlines the goals, methodology, and expected outcomes of the <strong>AI Research Initiative</strong> for the 2025 fiscal year. Depending on the current mode, users can <b>edit</b> content directly, <b> suggest </b> improvements, or simply <b>view</b> the finalized version.
                                        </p> 

                                        <p>
                                            This document outlines the goals, methodology, and expected outcomes of the <strong>AI Research Initiative</strong> for the 2025 fiscal year. Depending on the current mode, users can <b>edit</b> content directly, <b> suggest </b> improvements, or simply <b>view</b> the finalized version.
                                        </p> 

                                        <p>
                                            This document outlines the goals, methodology, and expected outcomes of the <strong>AI Research Initiative</strong> for the 2025 fiscal year. Depending on the current mode, users can <b>edit</b> content directly, <b> suggest </b> improvements, or simply <b>view</b> the finalized version.
                                        </p> 
                                    </>:
                                    (activeTab =='2')?
                                    <>
                                    <h2 className="text-xl font-semibold mb-2">1. Project Overview</h2>

                                        <p>
                                            Artificial intelligence continues to transform industries worldwide. Our objective is to expand research efforts in applied AI ethics, autonomous systems, and large-scale model optimization.
                                        </p>

                                        <p>
                                            Artificial intelligence continues to transform industries worldwide. Our objective is to expand research efforts in applied AI ethics, autonomous systems, and large-scale model optimization.
                                        </p>

                                        <p>
                                            Artificial intelligence continues to transform industries worldwide. Our objective is to expand research efforts in applied AI ethics, autonomous systems, and large-scale model optimization.
                                        </p>

                                        <p>
                                            Artificial intelligence continues to transform industries worldwide. Our objective is to expand research efforts in applied AI ethics, autonomous systems, and large-scale model optimization.
                                        </p>
                                            
                                    </>:
                                        
                                    <>
                                    <h2 className="text-xl font-semibold mb-2">2. Goals and Deliverables</h2>

                                        <ul className="list-disc list-inside">
                                            <li>Publish two peer-reviewed papers by Q3.</li>
                                            <li>Develop a prototype ethical decision-making module.</li>
                                            <li>Host an internal AI safety symposium.</li>
                                        </ul>

                                        <ul className="list-disc list-inside">
                                            <li>Publish two peer-reviewed papers by Q3.</li>
                                            <li>Develop a prototype ethical decision-making module.</li>
                                            <li>Host an internal AI safety symposium.</li>
                                        </ul>
                                    
                                        <ul className="list-disc list-inside">
                                            <li>Publish two peer-reviewed papers by Q3.</li>
                                            <li>Develop a prototype ethical decision-making module.</li>
                                            <li>Host an internal AI safety symposium.</li>
                                        </ul>

                                    </>
                                        
                                    }
                                </div>
                                
                        
                </div>
            </div>
                  
        </div>
        
        
        
    )
};
