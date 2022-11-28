import React, { useEffect, useState } from 'react';

export const ProgressMusic = (props) => {
    const time = { props };
    let widthMax = 0;
    const [progress, setProgress] = useState(
        {
            height: '10px',
            transition: '',
            backgroundColor: '#149ddd',
            width: '0%',
            borderRadius: '16px'
        }
    );

    useEffect(() => {
        const getSecondsMethod = () => {
            let secondsSplitArray = time.props.time.split(':');

            let seconds = parseInt(secondsSplitArray[0]) * 60 + parseInt(secondsSplitArray[1]);
            return seconds
        }

        let seconds = getSecondsMethod();
        setProgress({ ...progress, transition: `all ${seconds}s`, width: '100%' });
        widthMax = seconds;
    }, [])



    return (
        <>
            <audio controls style={{ width: '100%' }} src={props.song} />

            {/*<div
                className="progress-bar"
                role={'progressbar'}
                aria-valuemin={0}
                aria-valuemax={widthMax}
                style={progress}
            >
    </div>*/}
        </>

    )
}
