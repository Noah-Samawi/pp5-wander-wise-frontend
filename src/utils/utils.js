import jwtDecode from "jwt-decode";
import { axiosReq } from "../api/axiosDefaults";

// Fetch more data for infinitive scrolling
export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) {}
};

// Helper function to update wanderer data when following another wanderer
export const followHelper = (wanderer, clickedWanderer, following_id) => {
  return wanderer.id === clickedWanderer.id
    ? // If this is the wanderer I clicked on, update its followers
      // count and set its following id
      {
        ...wanderer,
        followers_count: wanderer.followers_count + 1,
        following_id,
      }
    : wanderer.is_owner
    ? // If this is logged in user, update it's following count
      { ...wanderer, following_count: wanderer.following_count + 1 }
    : // if this is not the clicked on wanderer or the logged
      // in users own, just return it unchanged
      wanderer;
};

// Helper to update wanderer data when unfollowing another user
export const unfollowHelper = (wanderer, clickedWanderer) => {
  return wanderer.id === clickedWanderer.id
    ? {
        ...wanderer,
        followers_count: wanderer.followers_count - 1,
        following_id: null,
      }
    : wanderer.is_owner
    ? { ...wanderer, following_count: wanderer.following_count - 1 }
    : wanderer;
};

// Function to set expiration time stamp fo the refresh token in local storage
export const setTokenTimestamp = (data) => {
  const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
  localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};

// Function to check if the refresh token has an expiration timestamp in local storage
export const shouldRefreshToken = () => {
  return !!localStorage.getItem("refreshTokenTimestamp");
};

// Function to remove the expiration timestamp of the refresh token from local storage
export const removeTokenTimestamp = () => {
  localStorage.removeItem("refreshTokenTimestamp");
};