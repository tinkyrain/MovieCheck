import { useDispatch } from 'react-redux'
import './SearchBlock.css'

const SearchBlock = () => {
    const dispatch = useDispatch();

    const search = () => {
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