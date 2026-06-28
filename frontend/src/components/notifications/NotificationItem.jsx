function NotificationItem({ notification, onMarkRead }) {
  return (
    <div className={`notification-item ${notification.read ? 'read' : ''}`}>
      <div>
        <strong>{notification.title}</strong>
        <p>{notification.message}</p>
      </div>
      {!notification.read && <button onClick={() => onMarkRead(notification.id)}>Mark as read</button>}
    </div>
  )
}

export default NotificationItem
