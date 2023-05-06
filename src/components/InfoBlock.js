import { useSelector } from 'react-redux';
import './InfoBlock.css';
import InfoMainBlock from './InfoMainBlock';
import InfoTopLine from './InfoTopLine';


const InfoBlock = () => {
    const info = useSelector(state => state);
    console.log(info)

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
                />
            </div>
        </section>
    );
}

export default InfoBlock;