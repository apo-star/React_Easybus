import React from 'react'
import CountUp from 'react-countup';

const Destination = () => {
  return (
    <div>
        <div>
            <h3>OFFER DEALS</h3>
            <h4>Your Destination awaits for you!</h4>
            <p>The journey of a thousand miles begins with a single step.</p>
            <div className="counter">
                <CountUp start={0.0} duration={0.5} end={20}></CountUp>
            </div>
        </div>
    </div>
  )
}

export default Destination