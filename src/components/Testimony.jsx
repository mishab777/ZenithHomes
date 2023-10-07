import React from 'react'
function Test() {
    return (
        <>
        <div className='test'>
            <h1>TESTIMONIALS</h1>
            <div className="prev">
                <span>Prev</span>
                <span>Next</span>
            </div>
        </div> 
        <div className="persons">
            <div className="person-1">
                <img src="https://preview.colorlib.com/theme/props/images/person_1.jpg" alt="" />
                <h2>Synthia Cameron</h2>
                <span>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</span>
                <span className='dcf'>Designer co-founder</span>
            </div>
            <div className="person-1">
                <img src="https://preview.colorlib.com/theme/props/images/person_3.jpg" alt="" />
                <h2>James Smith</h2>
                <span>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</span>
                <span className='dcf'>Designer co-founder</span>
            </div>
            <div className="person-1">
                <img src="https://preview.colorlib.com/theme/props/images/person_4.jpg" alt="" />
                <h2>Davin Smith</h2>
                <span>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</span>
                <span className='dcf'>Designer co-founder</span>
            </div>
        </div>
        </>
     );
}

export default Test;