import axios from "axios";

const url = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=757c8421e36449478239d1855ba1f24e";

export const getNewsFeed = async() => {
    return await axios.get(url)
}
