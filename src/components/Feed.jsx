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

  if (feed?.data.length === 0)
    return <h1 className="flex justify-center my-10"> No Users Found</h1>;

  return (
    feed?.data[0] && (
      <div className="flex justify-center py-10">
        <UserCard user={feed?.data[0]} />
      </div>
    )
  );
};

export default Feed;
