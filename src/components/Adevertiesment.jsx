import react from 'react'
import '../styles/advertiesment.css'
import { RxCross2 } from "react-icon/rx" ;
import {GoInfo } from "react-icons/go";
function advertiesment() {
    return (
        <main className='ad-container'>
            <div className="add-box">
                <button className='close-btn'><RxCross2 /></button>
                <button className='info-btn'><GoInfo /></button>
                <img src="../..public/spaces-img/spaceimg3.jpg" alt=""/>
           </div>
           <div className="adds-box">
              <button className='close-btn'><RxCross2 /></button>
              <button className='info-btn'><GoInfo /></button>
              <img src="../..public/spaces-img/spaceimg5.jpg"alt=""/>
           </div>
           <div className="ad-footer">
            <p>Advertisement</p>
           </div>
        </main>
    )
}

export default Adervertisemet


{/* const AdCards = () => {
  return (
    <>
      <div className="adds-box">
        <button className='close-btn'><RxCross2 /></button>
        <button className='info-btn'><GoInfo /></button>
        <img src="../../public/spaces-img/spaceimg5.jpg" alt="" />
      </div>
      <div className="ad-footer">
        <p>Advertisement</p>
      </div>
    </>
  )
}
 */}