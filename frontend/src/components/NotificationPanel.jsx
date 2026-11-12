import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, ShieldCheck, Cpu, Sparkles, Clock, CheckCheck } from 'lucide-react';
import { getNotifications, markNotificationAsRead, markAllNotificationsAsRead } from '../utils/storage';

export const NotificationPanel = ({ onClose, onUpdate }) => {
  const [notifications, setNotifications] = useState(getNotifications());
  const navigate = useNavigate();

  const handleNotificationClick = (notif) => {
    markNotificationAsRead(notif.id);
    setNotifications(getNotifications());
    if (onUpdate) onUpdate();
    if (onClose) onClose();
    if (notif.link) {
      navigate(notif.link);
    }
  };

  const handleMarkAllRead = () => {
    const updated = markAllNotificationsAsRead();
    setNotifications(updated);
    if (onUpdate) onUpdate();
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="w-80 sm:w-96 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden text-slate-900 animate-fade-in z-50">
      {/* Header */}
      <div className="px-4 py-3 bg-[#12212E] text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-[#EA9940]" />
          <h3 className="font-bold text-sm font-serif">Notifications</h3>
          {unreadCount > 0 && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#EA9940] text-[#12212E]">
              {unreadCount} New
            </span>
          )}
        </div>
        {unreadCount > 0 && (
          <button
            onClick={handleMarkAllRead}
            className="text-[11px] text-[#6CA3A2] hover:text-white flex items-center gap-1 transition-colors"
          >
            <CheckCheck className="w-3.5 h-3.5" />
            <span>Mark read</span>
          </button>
        )}
      </div>

      {/* List */}
      <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto">
        {notifications.length > 0 ? (
          notifications.map((notif) => (
            <div
              key={notif.id}
              onClick={() => handleNotificationClick(notif)}
              className={`p-3.5 hover:bg-slate-50 cursor-pointer transition-colors flex items-start gap-3 ${
                !notif.read ? 'bg-sky-50/40' : ''
              }`}
            >
              <div
                className={`p-2 rounded-xl shrink-0 ${
                  notif.type === 'blockchain'
                    ? 'bg-teal-100 text-teal-700'
                    : notif.type === 'ai'
                    ? 'bg-sky-100 text-sky-700'
                    : 'bg-amber-100 text-amber-700'
                }`}
              >
                {notif.type === 'blockchain' ? (
                  <ShieldCheck className="w-4 h-4" />
                ) : notif.type === 'ai' ? (
                  <Cpu className="w-4 h-4" />
                ) : (
                  <Sparkles className="w-4 h-4" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-bold text-xs text-[#12212E] truncate">{notif.title}</h4>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1 shrink-0">
                    <Clock className="w-3 h-3" />
                    {notif.time}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                  {notif.message}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-slate-400 text-xs">
            No notifications at this time.
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationPanel;
