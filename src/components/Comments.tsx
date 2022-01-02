import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

const Comments: React.FC<{ commentIds: number[], level: number }> = ({ commentIds, level }) => {
  const [loadComments, setLoadComments] = useState<boolean>(level < 2)

  if (!loadComments) {
    return <button onClick={(e) => setLoadComments(true)}>Load more</button>
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
