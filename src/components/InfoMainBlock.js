import './InfoMainBlock.css';

const InfoMainBlock = () => {
    return(
        <div className='InfoMainBlock'>
            <div className='InfoText'>
                <ul className='InfoList'>
                    <li>Год: 2022</li>
                    <li>Страны: США, КАНАДА, ЯПОНИЯ</li>
                    <li>Жанры: Фантастика, Фэнтези, Боевик, Приключения, Комедия</li>
                    <li>Актёры: Джеймс Марсден, Бен Шварц, Наташа Ротуэлл</li>
                    <li>Мировые сборы: 1234567890$</li>
                    <li>Премьера в мире: 25 января 2020 </li>
                </ul>
                <p class='rating-text'>Рейтинг КП: 6.4</p>
            </div>

            <div className='InfoImg'>
                <img src='/img/poster.jpg' alt='poster' className='poster'/>
            </div>
        </div>
    );
}

export default InfoMainBlock;