import axios from 'axios';
import { baseUrl } from '../constants';

const pathWithId = (id: number) => `${baseUrl}/item/${id}.json`;

export const fetchNews = async () => {
  const { data } = await axios.get(`${baseUrl}/topstories.json`);
  const hundredNewsIds = data.slice(0, 100);
  const news = await Promise.all(hundredNewsIds.map((id: number) => axios.get(pathWithId(id))));
  return news;
};

export const fetchNewsById = async (id: number) => {
  const { data } = await axios.get(pathWithId(id));
  return data;
};

export const fetchComments = async (kid: number) => {
  const { data } = await axios.get(pathWithId(kid));
  const comment = (await Promise.all(data.kids.map((id: number) => axios.get(pathWithId(id)))));
  return comment;
};