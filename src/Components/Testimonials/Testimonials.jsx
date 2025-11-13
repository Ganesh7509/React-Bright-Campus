import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimonials = () => {
    const slider=useRef();
    let tx=0;


    function slideforward(){
        if(tx>-50){
            tx-=25;
        }
     slider.current.style.transform=`translateX(${tx}%)`
    }
    function slidebackward(){
         if(tx<0){
            tx+=25;
        }
     slider.current.style.transform=`translateX(${tx}%)`

    }
  return (
    <div className='testimonials'>
        <img src={next_icon} alt=''  className='next-btn' onClick={slideforward}/>
         <img src={back_icon} alt='' className='back-btn' onClick={slidebackward}/>
         <div className="slider">
           <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Prathyusha</h3>
                            <span>BrightCampus,Hyderabad</span>
                        </div>
                    </div>
                    <p>My experience at BrightCampus has been truly inspiring. 
The professors are supportive, and the interactive sessions make learning exciting. 
Every day here pushes me to improve and chase my goals with confidence.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Ganesh</h3>
                            <span>BrightCampus,Hyderabad</span>
                        </div>
                    </div>
                    <p>BrightCampus has given me the perfect balance of academics and practical exposure. 
The campus environment motivates me to think creatively and work hard. 
It feels amazing to learn from such talented mentors.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Anusha</h3>
                            <span>BrightCampus, Hyderabad</span>
                        </div>
                    </div>
                    <p>Joining BrightCampus was the best decision of my student life. 
The opportunities to learn, explore, and grow are endless here. 
I’ve gained not only knowledge but also the confidence to achieve my dreams.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Madhukar</h3>
                            <span>BrightCampus,Hyderabad</span>
                        </div>
                    </div>
                    <p>Studying at BrightCampus has been a life-changing experience. 
The friendly faculty, modern learning environment, and focus on personal growth 
have helped me build both confidence and real-world skills. 
I’m proud to be part of such an inspiring community.</p>
                </div>
            </li>
           </ul>
         </div>

    </div>
  )
}

export default Testimonials