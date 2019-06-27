import axios from "axios";

import {
  GET_DAILY_DATA,
  GET_WEEKLY_DATA,
  GET_MONTHLY_DATA,
  GET_YEARLY_DATA,
  POST_SLEEP_OBJECT,
  UPDATE_SLEEP_OBJECT,
  DELETE_SLEEP_OBJECT,
  GET_YEARLY_ALL,
  GET_ERRORS
} from "./types";
import { axiosWithAuth } from "../../util/axiosWithAuth";

const link = "https://bw-sleep-tracker-app.herokuapp.com";
// const link = "https://be-bw-sleep-tracker.herokuapp.com"

export const getDailyData = id => dispatch => {
  axios
    .get(`${link}/tracker/${id}/limit/1/order/desc`)
    .then(res =>
      dispatch({
        type: GET_DAILY_DATA,
        payload: res.data[0] || ""
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getWeeklyData = id => dispatch => {
  axios
    .get(`${link}/tracker/${id}/limit/7/order/desc`)
    .then(res =>
      dispatch({
        type: GET_WEEKLY_DATA,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getMonthlyData = id => dispatch => {
  axios
    .get(`${link}/tracker/${id}/month/6`)
    .then(res =>
      dispatch({
        type: GET_MONTHLY_DATA,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getYearlyData = id => dispatch => {
  axios
    .get(`${link}/tracker/${id}/year/2019`)
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_YEARLY_DATA,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getYearlyAll = id => dispatch => {
  axios
    .get(`${link}/tracker/${id}/yearall/2019`)
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_YEARLY_ALL,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const postSleepObject = data => dispatch => {
  axios
    .post(`${link}/tracker`, data)
    .then(res =>
      dispatch({
        type: POST_SLEEP_OBJECT,
        payload: res.data
      })
    )
    .catch(
      err => console.log(err)
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: err.response.data
      // })
    );
};

export const deleteSleepObject = (id, month, day, year) => dispatch => {
  axios
    .delete(
      `${link}/tracker/${id}/date/${month}%2F${day}%2F${year}/year/${year}`
    )
    .then(res => {
      console.log(res);
      dispatch({
        type: DELETE_SLEEP_OBJECT,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const updateSleepObject = data => dispatch => {
  axios
    .put(`${link}/tracker/`, data)
    .then(res => {
      console.log(res);
      dispatch({
        type: UPDATE_SLEEP_OBJECT,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
