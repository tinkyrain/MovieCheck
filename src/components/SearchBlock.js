import './SearchBlock.css'

const SearchBlock = () => {
    return(
        <div className='searchBlock'>
            <input className='input' placeholder='Поиск...'/>
            <button className='searchBtn'>
                <img 
                    className='searchIcon'
                    src='/img/searchIcon.png'
                />
            </button>
        </div>
    );
} 

export default SearchBlock;