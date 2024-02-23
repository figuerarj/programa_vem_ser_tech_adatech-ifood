import React from 'react'
import './styles.css'
import Card from '../card'

const SearchResults = ({results}) => {
  return (
    <div className='results-list'>
      { results.map((games) => 
              <Card
                title={games.title}
                short_description={games.short_description}
                thumbnail={games.thumbnail}
                // release={games.release_date}
                // developer={games.developer}
                // genre={games.genre}
            />
            )}
      </div>
  )
}

export default SearchResults