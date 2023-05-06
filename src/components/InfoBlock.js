import { useSelector } from 'react-redux';
import './InfoBlock.css';
import InfoMainBlock from './InfoMainBlock';
import InfoTopLine from './InfoTopLine';


const InfoBlock = () => {
    const info = useSelector(state => state.info);

    return (
        <section className='info-section'>
            <div className='infoBlock'>
                <InfoTopLine title={info.Title}/>
                <InfoMainBlock 
                    year={info.Year}
                    country={info.Country}
                    genre={info.Genre}
                    actors={info.Actors}
                    director={info.Director}
                    released={info.Released}
                    rating={info.imdbRating}
                    src={info.Poster}
                />
            </div>
        </section>
    );
}

export default InfoBlock;