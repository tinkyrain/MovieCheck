import './InfoTopLine.css';
import { useDispatch } from 'react-redux';


const InfoTopLine = ({ title }) => {

    const dispatch = useDispatch();

    const back = () => {
        dispatch({type: 'VISION', visionChange: true})
    }

    return (
        <div className='topInfoLine'>
            <button className='backBtn' onClick={() => back()}>
               <img className='backArrow' alt='back' src='/img/backArrow.png'/>
            </button>
            <div className='block-name'>
                <h3 className='name'>{title}</h3>
            </div>
        </div>
    );
}

export default InfoTopLine;