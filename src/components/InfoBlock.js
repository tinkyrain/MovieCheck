import './InfoBlock.css';
import InfoMainBlock from './InfoMainBlock';
import InfoTopLine from './InfoTopLine';


const InfoBlock = () => {
    return (
        <section className='info-section'>
            <div className='infoBlock'>
                <InfoTopLine/>
                <InfoMainBlock/>
            </div>
        </section>
    );
}

export default InfoBlock;