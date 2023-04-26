import './InfoTopLine.css';
import { useDispatch } from 'react-redux';


const InfoTopLine = () => {

    const dispatch = useDispatch();

    const back = () => {
        dispatch({type: 'VISION', visionChange: true})
    }

    return (
        <div className='topInfoLine'>
            <button className='backBtn' onClick={() => back()}>
               <img className='backArrow' alt='Назад' src='/img/backArrow.png'/>
            </button>
            <h3 className='name'>Название фильма</h3>
        </div>
    );
}

export default InfoTopLine;