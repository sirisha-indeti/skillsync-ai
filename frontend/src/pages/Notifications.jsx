import NotificationItem from '../components/notifications/NotificationItem.jsx'

function Notifications({ notifications, onMarkRead }) {
  return (
    <div className="page-card">
      <h2>Notifications</h2>
      <p>Review the latest activity and system alerts.</p>
      <div className="notifications-list">
        {notifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} onMarkRead={onMarkRead} />
        ))}
      </div>
    </div>
  )
}

export default Notifications
