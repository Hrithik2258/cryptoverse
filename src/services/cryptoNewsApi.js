import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';



const cryptoNewsHeaders={
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-bingapis-sdk': 'true',
    'x-rapidapi-key': 'b22caad690msh44730cfa6695992p1e0c12jsn58f6639648c6'
}
const baseUrl= 'https://bing-news-search1.p.rapidapi.com';
const createRequest =(url)=> ({url,headers:cryptoNewsHeaders})


export const  cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query:({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;