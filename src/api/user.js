import axiosClient from './axiosClient';

const userApi = {
  search: (params) => axiosClient.get('/v1/search',{
    params : params
  }),

  currentPlaylistApi: (params) => axiosClient.get('/v1/albums',{
    params : params
  }),
};

export default userApi;

