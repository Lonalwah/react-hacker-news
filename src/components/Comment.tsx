import React, { useEffect, useState } from 'react';
import HN, { HNItem } from '../services/hn-api';
import PropTypes from 'prop-types';
import Comments from './Comments';

const Comment: React.FC<{ id: number, level: number }> = ({ id, level }) => {
  const [item, setItem] = useState<HNItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [collapsed, setCollapsed] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    HN.GetItem(id).then(res => {
      setItem(res)
      setLoading(false);
    });
    return () => {
      setItem(null);
    }
  }, [id])

  const ToggleCollapse = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCollapsed(!collapsed);
  }

  if (loading) {
    return (
      <div className="comment">
        Loading comment...
      </div>
    )
  }

  return (
    <div className={`comment ${collapsed ? 'collapsed' : ''}`} onClick={e => ToggleCollapse(e)}>
      <div className="header">
        <p>{item?.deleted ? 'deleted' : item?.by}</p>
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
