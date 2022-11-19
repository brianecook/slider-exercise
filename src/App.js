import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Slider from './components/Slider';

const Wrapper = styled.div`
  overflow: hidden;
  img {
    max-width: 100%;
  }
`;

function App() {
  const [slides, setSlides] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://frontend-assessment-service.vcomm.io/',
      );

      const { data } = result.data;

      setSlides(data);
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      {slides.length &&
        <Slider slides={slides} />
      }
    </Wrapper>
  );
}

export default App;
