import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

const Comments: React.FC<{ commentIds: number[], level: number }> = ({ commentIds, level }) => {
  const [loadComments, setLoadComments] = useState<boolean>(level < 2)

  const LoadComments = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setLoadComments(true)
  }

  if (!loadComments) {
    return <div className="comment" onClick={(e) => LoadComments(e)}>Load more comments</div>
  }

  return (
    <div>{commentIds.map((v, i) => <Comment key={v} id={v} level={level} />)}</div>
  )
}

Comments.propTypes = {
  commentIds: PropTypes.array.isRequired,
  level: PropTypes.number.isRequired
}

export default Comments
