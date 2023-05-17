import { useContext } from "react";

import { Card } from "../ui/Card";
import classes from "./Meetupitem.module.css";
import { FavoritesContext } from "../../store/favorite-context";

export const MeetupItem = (props) => {
  const { id, title, description, image, address, deleteItem } = props;
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  

  const togglefavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(id);
    } else {
      favoritesCtx.addFavorite({
        id: id,
        title: title,
        description: description,
        image: image,
        adress:address,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={togglefavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To favorites"}
          </button>
          <button onClick={()=>deleteItem(id)}>Delete</button>
        </div>
      </Card>
    </li>
  );
};
