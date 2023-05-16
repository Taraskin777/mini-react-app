import { useContext } from "react";

import { Card } from "../ui/Card";
import classes from "./Meetupitem.module.css";
import { FavoritesContext } from "../../store/favorite-context";

export const MeetupItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  const togglefavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        adress: props.address,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.adress}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={togglefavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};