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
                                        <p>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                                        </p>

                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                                        </p> 

                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                                        </p> 

                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                                        </p> 

                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                                        </p> 
                                    </>:
                                    (activeTab =='2')?
                                    <>
                                        <p>
                                            Donec ultrices viverra auctor. Maecenas pellentesque ut sapien a pulvinar. Nunc dignissim mi egestas, efficitur est sit amet, suscipit diam. Sed sollicitudin mi vitae euismod ultricies. Quisque finibus efficitur dui, vitae tincidunt velit pretium et. Nunc rutrum rhoncus varius. Donec quam nunc, tristique vitae nulla sit amet, pharetra vestibulum purus. Vestibulum accumsan consequat leo, a convallis ante efficitur ut. Quisque et dapibus turpis. Curabitur vestibulum libero felis, a molestie ante blandit id. Vestibulum pulvinar ultrices porta. Sed imperdiet vitae metus sed auctor.                                        
                                        </p>

                                        <p>
                                            Donec ultrices viverra auctor. Maecenas pellentesque ut sapien a pulvinar. Nunc dignissim mi egestas, efficitur est sit amet, suscipit diam. Sed sollicitudin mi vitae euismod ultricies. Quisque finibus efficitur dui, vitae tincidunt velit pretium et. Nunc rutrum rhoncus varius. Donec quam nunc, tristique vitae nulla sit amet, pharetra vestibulum purus. Vestibulum accumsan consequat leo, a convallis ante efficitur ut. Quisque et dapibus turpis. Curabitur vestibulum libero felis, a molestie ante blandit id. Vestibulum pulvinar ultrices porta. Sed imperdiet vitae metus sed auctor.                                        
                                        </p>
                                            
                                    </>:
                                        
                                    <>
                                        <p>
                                            Suspendisse hendrerit tempus lacus ut ultrices. In varius dapibus massa vel interdum. Duis vel quam non tortor faucibus porta et sed massa. Suspendisse auctor aliquet dignissim. Sed facilisis eros neque, id porttitor ipsum porttitor in. Sed sit amet orci suscipit, luctus ligula a, pharetra turpis. Donec risus libero, maximus non arcu id, ultrices ornare tellus. Pellentesque fringilla ac tortor vel varius. Fusce non nulla ipsum. Aenean lobortis leo nec sapien ultricies tempor. Nullam metus arcu, aliquet in bibendum quis, volutpat non tellus. Integer pellentesque varius consequat. Donec a ex neque. Morbi congue, magna quis lacinia tristique, augue lectus tincidunt purus, eget consequat turpis orci at tortor.
                                        </p>

                                        <p>
                                            Suspendisse hendrerit tempus lacus ut ultrices. In varius dapibus massa vel interdum. Duis vel quam non tortor faucibus porta et sed massa. Suspendisse auctor aliquet dignissim. Sed facilisis eros neque, id porttitor ipsum porttitor in. Sed sit amet orci suscipit, luctus ligula a, pharetra turpis. Donec risus libero, maximus non arcu id, ultrices ornare tellus. Pellentesque fringilla ac tortor vel varius. Fusce non nulla ipsum. Aenean lobortis leo nec sapien ultricies tempor. Nullam metus arcu, aliquet in bibendum quis, volutpat non tellus. Integer pellentesque varius consequat. Donec a ex neque. Morbi congue, magna quis lacinia tristique, augue lectus tincidunt purus, eget consequat turpis orci at tortor.
                                        </p>

                                        <p>
                                            Suspendisse hendrerit tempus lacus ut ultrices. In varius dapibus massa vel interdum. Duis vel quam non tortor faucibus porta et sed massa. Suspendisse auctor aliquet dignissim. Sed facilisis eros neque, id porttitor ipsum porttitor in. Sed sit amet orci suscipit, luctus ligula a, pharetra turpis. Donec risus libero, maximus non arcu id, ultrices ornare tellus. Pellentesque fringilla ac tortor vel varius. Fusce non nulla ipsum. Aenean lobortis leo nec sapien ultricies tempor. Nullam metus arcu, aliquet in bibendum quis, volutpat non tellus. Integer pellentesque varius consequat. Donec a ex neque. Morbi congue, magna quis lacinia tristique, augue lectus tincidunt purus, eget consequat turpis orci at tortor.
                                        </p>
                                    </>
                                        
                                    }
                                </div>
                                
                        
                </div>
            </div>
                  
        </div>
        
        
        
    )
};
