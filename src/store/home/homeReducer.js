import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getDiscountData, getGoodPriceData, getHighScoreData, getHotRecommendData, getLongForData, getPlusData } from "@/services/modules/home-data";

/**异步请求性价比房源 */
const getGoodPriceAction = createAsyncThunk('goodPrice', async () => {
  const data = await getGoodPriceData();
  return data;
});

/**异步请求高分房源数据*/
const getHighScoreAction = createAsyncThunk('highscore', async () => {
  const data = await getHighScoreData();
  return data;
});

/**异步请求折扣房源 */
const getDiscountAction = createAsyncThunk('discount', async () => {
  const data = await getDiscountData();
  return data;
});

/**异步请求热门推荐 */
const getHotRecommendAction = createAsyncThunk('hotRecommend', async () => {
  const data = await getHotRecommendData();
  return data;
});

/**异步请求想去数据 */
const getLongForAction = createAsyncThunk('longfor', async () => {
  const data = await getLongForData();
  return data;
});

/**异步请求Plus数据 */
const getPlusAction = createAsyncThunk('plus', async () => {
  const data = await getPlusData();
  return data;
});

const homeSlice = createSlice({
  name: "homeSlice",
  
  initialState: {
    goodPriceData: {},
    highScoreData: {},
    discountData: {},
    hotRecommendData: {},
    longForData: {},
    plusData: {}
  },

  reducers: {
    setGoodPriceData(state, action) {
      state.goodPriceData = action.payload;
    }
  },
  
  extraReducers: {
    [getGoodPriceAction.fulfilled](state, action) {
      state.goodPriceData = action.payload;
    },
    [getHighScoreAction.fulfilled](state, action) {
      state.highScoreData = action.payload;
    },
    [getDiscountAction.fulfilled](state, action) {
      state.discountData = action.payload;
    },
    [getHotRecommendAction.fulfilled](state, action) {
      state.hotRecommendData = action.payload;
    },
    [getLongForAction.fulfilled](state, action) {
      state.longForData = action.payload;
    },
    [getPlusAction.fulfilled](state, action) {
      state.plusData = action.payload;
    }
  }
});

export { getGoodPriceAction, getHighScoreAction, getDiscountAction, getHotRecommendAction, getLongForAction, getPlusAction };
export default homeSlice.reducer;