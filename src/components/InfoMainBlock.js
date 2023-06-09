import './InfoMainBlock.css';

const InfoMainBlock = ({ year, country, genre, actors, director, released, rating, src }) => {
    return(
        <div className='InfoMainBlock'>
            <div className='InfoText'>
                <ul className='InfoList'>
                    <li>Year: {year}</li>
                    <li>Country: {country}</li>
                    <li>Genre: {genre}</li>
                    <li>Actors: {actors}</li>
                    <li>Director: {director}</li>
                    <li>Released: {released}</li>
                </ul>
                <p className='rating-text'>IMDRatings: {rating}</p>
            </div>

            <div className='InfoImg'>
                <img src={src === 'N/A' ? '/img/poster.jpg': src} alt='poster' className='poster'/>
            </div>
        </div>
    );
}

export default InfoMainBlock;