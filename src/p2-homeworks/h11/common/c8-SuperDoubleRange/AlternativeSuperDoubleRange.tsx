import React from 'react';
import styled from 'styled-components';
// import ReactSlider from 'react-slider'

// const StyledSlider = styled(ReactSlider)`
//     width: 100%;
//     height: 25px;
// `;

const StyledThumb = styled.div`
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    background-color: #000;
    color: #fff;
    border-radius: 50%;
    cursor: grab;
`;

const Thumb = (props: any, state: any) => <StyledThumb {...props}>{state.valueNow}</StyledThumb>;

const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${props => (props.key === 2 ? '#f00' : props.key === 1 ? '#0f0' : '#ddd')};
    border-radius: 999px;
`;

const Track = (props: any, state: any) => <StyledTrack {...props} index={state.index} />;

const StyledContainer = styled.div`
    resize: horizontal;
    overflow: auto;
    width: 50%;
    max-width: 100%;
    padding-right: 8px;
`;

const ResizableSlider = () => (
    
    <StyledContainer>
        {/* <StyledSlider defaultValue={[50, 75]} renderTrack={Track} renderThumb={Thumb} /> */}
    </StyledContainer>
);

<ResizableSlider />


{/* <ReactSlider
    className="horizontal-slider"
    thumbClassName="example-thumb"
    trackClassName="example-track"
    defaultValue={[0, 100]}
    ariaLabel={['Lower thumb', 'Upper thumb']}
    ariaValuetext={state => `Thumb value ${state.valueNow}`}
    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    pearling
    minDistance={10}
/> */}