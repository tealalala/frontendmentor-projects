import Avatar from './Avatar';

export default function Card ({name, subtitle, imageUrl, pullQuote, fullQuote}) {
  return (
    <div className='card'>
      <Avatar 
        name={name}
        subtitle={subtitle}
        imageUrl={imageUrl}
      />
      <div className='pull-quote'>
        {pullQuote}
      </div>
      <div className='full-quote'>
        {fullQuote}
      </div>
    </div>
  )
}