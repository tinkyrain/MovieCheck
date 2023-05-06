import { useDispatch } from 'react-redux';
import { useState } from 'react';
import './SearchBlock.css'

const KEY = '7f9a3b82';

const SearchBlock = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const URL = `http://www.omdbapi.com/?t=${name}&apikey=${KEY}`;


    async function search () {
        const response = await fetch(`${URL}`);
        if(response.ok){
            const data = await response.json();
            if(data.Response === 'False'){
                alert(data.Error)
            } else {
                dispatch({type: 'INFO', infoChange: data})
                dispatch({type: 'VISION', visionChange: false});
            }
        } else {
            alert('Error');
        }
    }

    return(
        <section className='search-section'>
            <div className='searchBlock'>
                <input 
                    className='input' 
                    placeholder='Search...' 
                    onChange={(event) => setName(event.target.value)}
                />
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