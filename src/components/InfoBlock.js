import './InfoBlock.css';
import { useDispatch } from 'react-redux';


const InfoBlock = () => {

    const dispatch = useDispatch();

    const back = () => {
        dispatch({type: 'VISION', visionChange: true})
    }

    return (
        <div className='infoBlock'>
            <div className='topInfoLine'>
                <button className='backBtn' onClick={() => back()}>
                    <img className='backArrow' alt='Назад' src='/img/backArrow.png'/>
                </button>
            </div>
        </div>
    );
}

export default InfoBlock;