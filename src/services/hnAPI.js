import axios from "axios";
import { selectFields } from '../utils/selectFields'

export const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news/trendingtopics';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async storyId => {
    const result = await axios
        .get(`${storyUrl + storyId}.json`)
        .then(({ data }) => data && selectFields(data));
    return result;
};
