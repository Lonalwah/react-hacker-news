import React, { useEffect, useState } from 'react';
import HN, { HNItem } from '../services/hn-api';
import PropTypes from 'prop-types';
import Comments from './Comments';

const Comment: React.FC<{ id: number, level: number }> = ({ id, level }) => {
  const [item, setItem] = useState<HNItem | null>(null);

  useEffect(() => {
    HN.GetItem(id).then(res => setItem(res));
    return () => {
      setItem(null);
    }
  }, [id])

  return (
    <div className='comment'>
      <div className="header">
        <p>Author: <span>{item?.deleted ? 'deleted' : item?.by}</span> {item?.id}</p>
      </div>
      <div className="content">
        {item?.deleted ?
          <div>deleted</div> :
          <div dangerouslySetInnerHTML={{ __html: item?.text || '' }} />}
        {item?.kids ? <Comments commentIds={item?.kids} level={level + 1} /> : ''}
      </div>

    </div >
  )
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired
}

export default Comment
