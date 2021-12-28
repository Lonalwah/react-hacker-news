import React, { useEffect, useState } from "react";
import HN, { HNItem } from "../services/hn-api";
import PropTypes from 'prop-types';

const Item: React.FC<{id:number}> = ({id}) => {
  const [item, setItem] = useState<HNItem|null>(null);

  useEffect(() => {
    HN.GetItem(id).then(res => setItem(res));
    return () => {
      setItem(null);
    }
  }, [id])

  if(!item) return (
    <div className="collection-item">
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    </div>
  );
  
  return (
    <a href={item.url} className="news-item collection-item">
      <span className="badge white-text orange lighten-2">{item.score}</span>
      <span className="title">{item.title}</span>
    </a>
  );
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Item;
