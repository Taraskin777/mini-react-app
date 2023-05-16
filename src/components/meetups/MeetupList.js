import { MeetupItem } from "./MeetupItem";
import classes from "./MeetupList.module.css";

export const MeetupList = (props) => {
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
        />
      ))}
    </ul>
  );
};
