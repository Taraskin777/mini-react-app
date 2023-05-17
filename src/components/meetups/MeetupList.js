import { MeetupItem } from "./MeetupItem";
import classes from "./MeetupList.module.css";

export const MeetupList = (props) => {
   const { deleteMeetup } = props;
   console.log(deleteMeetup);

  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          description={meetup.description}
          adress={meetup.adress}
          deleteItem ={deleteMeetup}
        />
      ))}
    </ul>
  );
};
