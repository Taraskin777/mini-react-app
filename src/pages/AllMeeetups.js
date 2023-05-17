import { useState, useEffect } from "react";

import { MeetupList } from "../components/meetups/MeetupList";

export const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setloadedMeetups] = useState([]);

  const getAllMeetups = () => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-5a3ff-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setloadedMeetups(meetups);
      });
  };

  useEffect(() => {
    getAllMeetups();
  }, []);

  if (isLoading) {
    return (
      <section>
        <div>Loading...</div>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};
