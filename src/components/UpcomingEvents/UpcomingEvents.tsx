import styles from './UpcomingEvents.module.css';

type Event = {
  eventName: string;
  performer: string;
  location: string;
  dateTime: string;
};

const events: Event[] = [
  {
    eventName: 'Uptown Acoustic Vibes',
    performer: 'Klane Zurbano',
    location: 'Uptown Mall BGC',
    dateTime: 'June 8, 2025 - 5:00 PM',
  },
  {
    eventName: 'Sunset Sessions',
    performer: 'Ron & Bea',
    location: 'Ayala Malls Circuit',
    dateTime: 'June 15, 2025 - 6:30 PM',
  },
];

export const UpcomingEvents = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Upcoming Performances</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Performer</th>
            <th>Location</th>
            <th>Date & Time</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.eventName}</td>
              <td>{event.performer}</td>
              <td>{event.location}</td>
              <td>{event.dateTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}; 