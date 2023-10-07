import React from 'react'
function Property() {
    return ( 
        <>
        <div className='properties'>
            <h1>POPULAR PROPERTIES</h1>
          <button>View All Properties</button>
        </div>
        <div className='houses'>
            <div className="house">
                <img src="https://preview.colorlib.com/theme/props/images/img_8.jpg" alt="" />
                <div className="details">
                <div className='dts'>
                    <h1>$3,298,000</h1>
                    <span>5232 North Carolina Ave. 21BC</span>
                    <h2>Carolina, USA</h2>
                    <div className="bed">
                        <img src="https://cdn-icons-png.flaticon.com/128/632/632339.png" alt="" />
                        <span>2 beds</span>
                        <img src="https://cdn-icons-png.flaticon.com/128/637/637270.png" alt="" />
                        <span>2 bath</span>
                    </div>
                    </div>

                </div>
            </div>
            <div className="house">
                <img src="https://preview.colorlib.com/theme/props/images/img_9.jpg" alt="" />
                <div className="details">
                    <div className="dts">
                <h1>$3,298,000</h1>
                    <span>5232 North Carolina Ave. 21BC</span>
                    <h2>Carolina, USA</h2>
                    <div className="bed">
                        <img src="https://cdn-icons-png.flaticon.com/128/632/632339.png" alt="" />
                        <span>2 beds</span>
                        <img src="https://cdn-icons-png.flaticon.com/128/637/637270.png" alt="" />
                        <span>2 bath</span>
                    </div>
                    </div>
                </div>
            </div>
            <div className="house">
                <img src="https://preview.colorlib.com/theme/props/images/img_1.jpg" alt="" />
                <div className="details">
                    <div className='dts'>
                <h1>$3,298,000</h1>
                    <span>5232 North Carolina Ave. 21BC</span>
                    <h2>Carolina, USA</h2>
                    <div className="bed">
                        <img src="https://cdn-icons-png.flaticon.com/128/632/632339.png" alt="" />
                        <span>2 beds</span>
                        <img src="https://cdn-icons-png.flaticon.com/128/637/637270.png" alt="" />
                        <span>2 bath</span>
                    </div>
                    </div>

                </div>
            </div>


        </div>
     
        </>
        
     );
}

export default Property;