import './InfoBlock.css';
import InfoMainBlock from './InfoMainBlock';
import InfoTopLine from './InfoTopLine';


const InfoBlock = () => {
    return (
        <div className='infoBlock'>
            <InfoTopLine/>
            <InfoMainBlock/>
        </div>
    );
}

export default InfoBlock;