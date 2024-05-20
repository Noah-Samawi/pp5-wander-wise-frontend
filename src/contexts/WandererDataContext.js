import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";
import { followHelper, unfollowHelper } from "../utils/utils";

export const WandererDataContext = createContext();
export const SetWandererDataContext = createContext();

export const useWandererData = () => useContext(WandererDataContext);
export const useSetWandererData = () => useContext(SetWandererDataContext);

// Provider component for managing wanderer data
export const WandererDataProvider = ({ children }) => {
  const [wandererData, setWandererData] = useState({
    pageWanderer: { results: [] },
    popularWanderers: { results: [] },
  });
  const currentUser = useCurrentUser();

  // Handle follow action for a clicked wanderer
  const handleFollow = async (clickedWanderer) => {
    try {
      const { data } = await axiosRes.post("/followers/", {
        followed: clickedWanderer.id,
      });

      setWandererData((prevState) => ({
        ...prevState,
        pageWanderer: {
          results: prevState.pageWanderer.results.map((wanderer) =>
            followHelper(wanderer, clickedWanderer, data.id)
          ),
        },
        popularWanderers: {
          ...prevState.popularWanderers,
          results: prevState.popularWanderers.results.map((wanderer) =>
            followHelper(wanderer, clickedWanderer, data.id)
          ),
        },
      }));
    } catch (err) {
      console.log(err);
    }
  };

  // Handle unfollow action for a clicked wanderer
  const handleUnFollow = async (clickedWanderer) => {
    try {
      await axiosRes.delete(`/followers/${clickedWanderer.following_id}`);
      setWandererData((prevState) => ({
        ...prevState,
        pageWanderer: {
          results: prevState.pageWanderer.results.map((wanderer) =>
            unfollowHelper(wanderer, clickedWanderer)
          ),
        },
        popularWanderers: {
          ...prevState.popularWanderers,
          results: prevState.popularWanderers.results.map((wanderer) =>
            unfollowHelper(wanderer, clickedWanderer)
          ),
        },
      }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // Fetch popular wanderers data on component mount or when the current user changes
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/wanderers/?ordering=-followers_count"
        );
        setWandererData((prevState) => ({
          ...prevState,
          popularWanderers: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <WandererDataContext.Provider value={wandererData}>
      <SetWandererDataContext.Provider
        value={{ setWandererData, handleFollow, handleUnFollow }}
      >
        {children}
      </SetWandererDataContext.Provider>
    </WandererDataContext.Provider>
  );
};
