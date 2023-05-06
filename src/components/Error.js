import './Error.css';
import { useDispatch } from 'react-redux';

const Error = ({ errorText }) => {

    const dispatch = useDispatch();

    const ChangeErrorVision = () => {
        dispatch({type: 'ERROR', errorChange: false});
    }

    return (
        <section className='error-section'>
            <div className='error-section__popup'>
                <h1>Error! :(</h1>
                <h2>The following error has occurred: {errorText}</h2>
                <button className='backBtn' onClick={() => ChangeErrorVision()}>
                    <img src='/img/backArrow.png' alt='back' className='back'/>
                </button>
            </div>
        </section>
    );
}

export default Error;