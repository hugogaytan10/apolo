import React, { useEffect, useState } from 'react'

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
    
    useEffect(()=>{
        function getSeconds() {
            let seconds = 0, pos = 0;
            let auxTime = time.props.time.toString().length;
            for(let i = 0; i< auxTime; i++){
                if(time.props.time[i] === ':'){
                    pos = i + 1;
                    break;
                }
                seconds += parseInt(time.props.time[i]) * 60;
            }
            if(time.props.time[pos] === '0'){
                seconds+= parseInt(time.props.time[pos+1]);
            }else{
                let aux = time.props.time[pos] + "" + time.props.time[pos+1] + "";
                seconds += parseInt(aux);
            }
            return seconds;
        }
        let seconds = getSeconds();
        setProgress({...progress, transition: `all ${seconds}s`, width: '100%'});
        widthMax = seconds;
    },[])
    return (
        <div
            className="progress-bar"
            role={'progressbar'}
            aria-valuemin={0}
            aria-valuemax={widthMax}
            style={progress}
        >
        </div>
    )
}
