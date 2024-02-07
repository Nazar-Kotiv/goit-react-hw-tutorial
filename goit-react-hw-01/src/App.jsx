import "./App.css";
import { Profile } from "./components/Profile";
import userData from "./userData.json";
import { FriendList } from "./components/FriendList";
import friends from "./friends.json";

export const App = () => {
  return (
    <>
      <Profile props={userData} />

      <FriendList friends={friends} />
    </>
  );
};
