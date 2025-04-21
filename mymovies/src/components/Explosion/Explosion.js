import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'


const Explosion = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 6000);
    return () => clearTimeout(timer);
  },[])
//style={{position:'absolute',top: '50%',left:'50%', transform:'translate{-50%, -50%}', pointer_events:'none', z_index:'10',animation:'boom 0.06 ease-out'}}
  return (
    <div >
      {showConfetti && <Confetti width={100} height={100}  numberOfPieces={680} recycle={false}  />}
    </div>
     

  )
}

export default Explosion