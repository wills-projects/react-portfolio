import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '100%',
  height: 'auto',
  display: 'flex',
  textAlign: 'center',
  background: '#364d79',
};

const Carousel_Home = () => (
    <>
    <div style={{ width: '100%', overflow: 'hidden' }}>
    <Carousel arrows infinite={false}>
      <div style={contentStyle}>
        <a href="./projects"
            ><img
              src="./src/assets/operating systems graphics library.png"
              alt="An image of a drawing I created using a system call graphics library."
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
            />
        </a>
      </div>
      <div style={contentStyle}>
        <a href="./experience"
            ><img
              src="./src/assets/tartanhacks.jpg"
              alt="A picture of my friend and I judging a TartanHacks facial recognition project."
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
            />
        </a>
      </div>
      <div style={contentStyle}>
        <a href="./leadership"
            ><img
              src="./src/assets/jazz ensemble.jpg"
              alt="A picture of the Pitt Jazz Band ensemble rehearsing a song. I'm the vice president!"
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
            />
        </a>
      </div>
    </Carousel>
    </div>
  </>
);

export default Carousel_Home;
