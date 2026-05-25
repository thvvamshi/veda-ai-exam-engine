import { useState } from "react";

import NotificationDropdown from "./NotificationDropdown";

import { useNotificationStore } from "../../store/notification.store";

export default function NotificationBell() {
  const [open, setOpen] =
    useState(false);

  const notifications =
    useNotificationStore(
      (state) => state.notifications
    );

  const unreadCount =
    notifications.filter(
      (item) => !item.read
    ).length;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="
          relative

          w-[42px]
          h-[42px]

          rounded-full

          bg-[#F4F4F4]

          flex
          items-center
          justify-center

          text-[22px]
        "
      >
        🔔

        {unreadCount > 0 && (
          <div
            className="
              absolute
              top-[2px]
              right-[2px]

              min-w-[18px]
              h-[18px]

              px-[4px]

              rounded-full

              bg-[#FF5A1F]

              flex
              items-center
              justify-center

              text-white
              text-[10px]
              font-bold
            "
          >
            {unreadCount}
          </div>
        )}
      </button>

      {open && (
        <NotificationDropdown />
      )}
    </div>
  );
}