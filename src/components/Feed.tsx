import React, { useEffect, useState } from 'react'
import FeedItem from './FeedItem';
import HN from '../services/hn-api';

function Feed() {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    HN.GetFeed().then(res => setItems(res));
    return () => setItems([]);
  }, [])

  if (!(items.length > 0)) {
    <div className="progress">
      <div className="indeterminate"></div>
    </div>
  }

  console.log(items);

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className='collection'>
            {items.map((v, i) => (
              <FeedItem key={i} id={v} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feed;