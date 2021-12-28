import axios from 'axios';

export interface HNItem {
  id: number,
  deleted?: boolean,
  type: ['job', 'story', 'comment', 'poll', 'pollopt'],
  by: string,
  time: number,
  text: string,
  dead?: boolean,
  parent?: number,
  poll?: number,
  kids?: number[],
  url?: string,
  score: number,
  title?: string,
  parts?: number[],
  descendants?: number
}

let HN = {
  GetFeed: async function (): Promise<number[]> {
    return await axios
    .get('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(res => {
        return res.data;
    })
    .catch(e => {
      console.error(e);
    });
  },
  GetItem: async (id: number): Promise<HNItem> => {
    return await axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(res => {
        return res.data;
      })
      .catch(e => {
        console.error(e);
      })
  }
};

export default HN;