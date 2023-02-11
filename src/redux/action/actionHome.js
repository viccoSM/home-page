import {ERROR_GET_HOME_API, GET_HOME_API} from "../types";
import axios from "axios";

export const getHomeApi = async (dispatch) => {
  try {
    const response = await axios.get('https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp')

    console.log(response)
    const {data} = response

    dispatch({
      type: GET_HOME_API,
      payload: data,
    })
  }catch (e) {
    dispatch({
      type: ERROR_GET_HOME_API,
      payload: e,
    });
  }
}

