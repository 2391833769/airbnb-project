
import hyRequest from '@/services/request/index';

/*获取goodprice高性价比数据*/
export const getGoodPriceData = () => {
  return hyRequest.get({ url: "/home/goodPrice"});
  
}

/*获取highscore高性价比数据*/
export const getHighScoreData = () => {
  return hyRequest.get({ url: "/home/highScore"});

}

/*获取discount数据 */
export const getDiscountData = () => {
  return hyRequest.get({ url: "/home/discount"});
}

/**获取hotRecommend数据 */
export const getHotRecommendData = () => {
  return hyRequest.get({ url : "/home/hotRecommenddest"});
}

/**获取longfor数据 */
export const getLongForData = () => {
  return hyRequest.get({ url : "/home/longFor"});
}

/**获取plus数据 */
export const getPlusData = () => {
  return hyRequest.get({ url: "/home/plus"});
}