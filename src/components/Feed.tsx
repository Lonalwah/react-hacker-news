import React, { useEffect, useState } from 'react'
import HN from '../services/hn-api';
import Item from './Item';

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
    <div className='collection'>
      {items.map((v, i) => (
        <Item key={i} id={v}></Item>
      ))}
    </div>
  )
}

export default Feed;