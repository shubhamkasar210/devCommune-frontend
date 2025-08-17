import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";
import axios from "axios";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);

  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (error) {}
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    feed?.data[0] && (
      <div className="flex justify-center py-10">
        <UserCard user={feed?.data[0]} />
      </div>
    ) || <h2 className="flex justify-center py-10">no new users found!!!</h2>
  );
};

export default Feed;
