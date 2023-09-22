import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

const FavoritesPage = () => {
  const favoritesCxt = useContext(FavoritesContext);

  let content;

  if (favoritesCxt.totalFavorites === 0) {
    content = <p>You have no favorites!</p>;
  } else {
    content = <MeetupList meetups={favoritesCxt.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
