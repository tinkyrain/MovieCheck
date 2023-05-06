import './InfoMainBlock.css';

const InfoMainBlock = () => {
    return(
        <div className='InfoMainBlock'>
            <div className='InfoText'>
                <ul className='InfoList'>
                    <li>Year: </li>
                    <li>Country: </li>
                    <li>Genre: </li>
                    <li>Actors: </li>
                    <li>Director: </li>
                    <li>Relased: </li>
                </ul>
                <p className='rating-text'>IMDRatings: </p>
            </div>

            <div className='InfoImg'>
                <img src='/img/poster.jpg' alt='poster' className='poster'/>
            </div>
        </div>
    );
}

export default InfoMainBlock;