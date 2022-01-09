import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import HN, { HNItem } from '../services/hn-api';
import Comments from "./Comments";

const Item: React.FC = () => {
  const [item, setItem] = useState<HNItem | null>(null);
  const [comments, setComments] = useState<number[]>([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let idParam: string = searchParams.get('id') as string;
    HN.GetItem(parseInt(idParam)).then(res => setItem(res));
    return () => {
      setItem(null);
    }
  }, [searchParams])

  useEffect(() => {
    if (item && item.kids) {
      setComments(item.kids);
    }
  }, [item])

  if (!item) return (
    <div className="progress">
      <div className="indeterminate"></div>
    </div>
  )

  return (
    <main>
      <div className="container">
        <section>
          <div className="row">
            <div className="col s12">
              <div className="card">
                <div className="card-content">
                  <span className="badge orange white-text">{item?.score}</span>
                  <span className="card-title"><a href={item.url}>{item?.title}</a></span>
                  <p>{item?.text}</p>
                </div>
                <div className="card-action">
                  <a href={`/item?id=${item.id}`}>{item.descendants} comments</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row">
            <div className="col s12">
              <div className="card">
                <div className="card-content">
                  <Comments commentIds={comments} level={0} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Item
