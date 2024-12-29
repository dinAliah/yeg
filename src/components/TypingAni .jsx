'use client'
import Typed from 'react-typed';

const TypingAni  = () => {

 
  return (
    <div className="typing-animation">
      <h1 className="title">React Typing Animation Effect</h1>
      { (
        <Typed
          strings={[
            "I'm a Full Stack Developer",
            "I Love Software Development",
            "I Love All Mwy Subscribers",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
      )}
      <div className="buttons">
        <button className="btn-pink">Learn More</button>
        <button className="btn-purple">Talk To Us Now</button>
      </div>
      <style jsx>{`
        .typing-animation {
          text-align: center;
          margin-top: 50px;
        }
        .title {
          font-size: 2rem;
          margin-bottom: 20px;
        }
        .buttons {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 20px;
        }
        .btn-pink,
        .btn-purple {
          padding: 10px 20px;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 1rem;
        }
        .btn-pink {
          background-color: #ff69b4;
        }
        .btn-purple {
          background-color: #6a0dad;
        }
      `}</style>
    </div>
  );
};

export default TypingAni ;
