import React, { useEffect, useState } from 'react'
import {useSearchParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import HN, {HNItem} from '../services/hn-api';

const Item: React.FC = () => {
  const [item, setItem] = useState<HNItem|null>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let idParam: string = searchParams.get('id') as string;
    HN.GetItem(parseInt(idParam)).then(res => setItem(res));
    return () => {
      setItem(null);
    }
  }, [searchParams.get("id")])

  if(!item) return (
    <div className="progress">
      <div className="indeterminate"></div>
    </div>
  )

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-content">
              <span className="badge orange white-text">{item?.score}</span>
              <span className="card-title">{item?.title}</span>
              <p>{item?.text}</p>
            </div>
            <div className="card-action">
              <a href="#">123 comments</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
