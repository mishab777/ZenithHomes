import React from 'react'
function Content() {
    return ( 
        <div className='cards'>
            <div className="cards-four">
                <img src="https://cdn-icons-png.flaticon.com/128/6832/6832079.png" alt="" />
                <span>New properties</span>

            </div>
            <div className="cards-four">
                <img src="https://cdn-icons-png.flaticon.com/128/2942/2942842.png" alt="" />
                <span>Contat agent</span>
                
                </div>
                <div className="cards-four">
                    <img src="https://cdn-icons-png.flaticon.com/128/916/916771.png" alt="" />
                    <span>Building for sale</span>
                
                </div>
                <div className="cards-four">
                    <img src="https://cdn-icons-png.flaticon.com/128/4954/4954920.png" alt="" />
                    <span>House for sale</span>
                
                </div>
            
        </div>
     );
}

export default Content;