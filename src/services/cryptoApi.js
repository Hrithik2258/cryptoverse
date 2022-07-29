 import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

 const cryptoApiHeaders={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
   'x-rapidapi-key': 'b22caad690msh44730cfa6695992p1e0c12jsn58f6639648c6'

 }
 const baseUrl="https://coinranking1.p.rapidapi.com";
 const createRequest = (url) =>({ url,headers:cryptoApiHeaders})

 export const cryptoApi  = createApi({
     reducerPath:'cryptoApi',
     baseQuery:fetchBaseQuery({ baseUrl}),
     endpoints: (builder) => ({
         getCryptos:builder.query({
             query: (count) => createRequest(`/coins?limit=${count}`),
         }),
         getCryptoDetails: builder.query({
             query:(coinId) => createRequest(`/coin/${coinId}`)
         }),
         getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
          }),
          getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
     
     })
 });

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetExchangesQuery
}= cryptoApi;
