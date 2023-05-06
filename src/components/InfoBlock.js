import { useSelector } from 'react-redux';
import './InfoBlock.css';
import InfoMainBlock from './InfoMainBlock';
import InfoTopLine from './InfoTopLine';


const InfoBlock = () => {
    const info = useSelector(state => state);

    return (
        <section className='info-section'>
            <div className='infoBlock'>
                <InfoTopLine title={info.title}/>
                <InfoMainBlock 
                    year={info.year}
                    country={info.country}
                    genre={info.genre}
                    actors={info.actors}
                    director={info.director}
                    released={info.released}
                    rating={info.rating}
                    src={info.poster}
                />
            </div>
        </section>
    );
}

export default InfoBlock;