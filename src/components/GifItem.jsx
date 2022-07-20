import PropTypes from 'prop-types';

export const GifItem = ({ title, url, id }) => {

  return (
    <div className='card'>
      <img alt={ title } src={ url } />
      <p>{ title }</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}