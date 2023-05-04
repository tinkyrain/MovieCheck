import { useDispatch } from 'react-redux'
import './SearchBlock.css'

const KEY = '7f9a3b82';
const URL = `http://www.omdbapi.com/?t=DARK&apikey=${KEY}`;

const SearchBlock = () => {
    const dispatch = useDispatch();

    const getData = () => {
        fetch(`${URL}`)
            .then(response => response.json())
            .then(data => console.log(data))
    }

    const search = () => {
        getData();
        dispatch({type: 'VISION', visionChange: false})
    }

    return(
        <section className='search-section'>
            <div className='searchBlock'>
                <input className='input' placeholder='Поиск...'/>
                <button className='searchBtn' onClick={() => search()}>
                    <img 
                        className='searchIcon'
                        src='/img/searchIcon.png'
                        alt='Поиск'
                    />
                </button>
            </div>
        </section>
    );
} 

export default SearchBlock;