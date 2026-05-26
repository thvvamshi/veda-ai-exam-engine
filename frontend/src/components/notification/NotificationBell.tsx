import {
  useEffect,
  useRef,
  useState,
} from "react";

import { useNotificationStore } from "../../store/notification.store";

export default function NotificationBell() {
  const [open, setOpen] =
    useState(false);

  const panelRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const notifications =
    useNotificationStore(
      (state) =>
        state.notifications
    );

  const markAsRead =
    useNotificationStore(
      (state) =>
        state.markAsRead
    );

  const clearNotifications =
    useNotificationStore(
      (state) =>
        state.clearNotifications
    );

  const unreadCount =
    notifications.filter(
      (notification) =>
        !notification.read
    ).length;

  // CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside =
      (
        event: MouseEvent
      ) => {
        if (
          panelRef.current &&
          !panelRef.current.contains(
            event.target as Node
          )
        ) {
          setOpen(false);
        }
      };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div
      className="relative"
      ref={panelRef}
    >
      {/* BELL BUTTON */}
      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
          relative

          w-[46px]
          h-[46px]

          rounded-full

          bg-white

          flex
          items-center
          justify-center

          shadow-[0px_2px_10px_rgba(0,0,0,0.05)]

          transition-all
          duration-200

          hover:scale-[1.03]
        "
      >
        <span className="text-[20px]">
          🔔
        </span>

        {/* UNREAD BADGE */}
        {unreadCount >
          0 && (
          <div
            className="
              absolute
              top-[4px]
              right-[4px]

              min-w-[18px]
              h-[18px]

              rounded-full

              bg-[#FF5B1F]

              flex
              items-center
              justify-center

              px-[4px]

              text-white
              text-[10px]
              font-bold
            "
          >
            {unreadCount}
          </div>
        )}
      </button>

      {/* PANEL */}
      {open && (
        <div
          className="
            absolute
            top-[60px]
            right-0

            w-[360px]

            rounded-[24px]

            bg-white

            p-[18px]

            shadow-[0px_24px_60px_rgba(0,0,0,0.14)]

            border
            border-[#EEEEEE]

            z-[999]
          "
        >
          {/* HEADER */}
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <h2
              className="
                text-[18px]
                font-[800]

                text-[#1F1F1F]
              "
            >
              Notifications
            </h2>

            {notifications.length >
              0 && (
              <button
                onClick={
                  clearNotifications
                }
                className="
                  text-[12px]
                  font-[700]

                  text-[#FF5B1F]

                  hover:opacity-70
                "
              >
                Clear All
              </button>
            )}
          </div>

          {/* EMPTY STATE */}
          {notifications.length ===
          0 ? (
            <div
              className="
                py-[40px]

                text-center
              "
            >
              <div className="text-[42px]">
                🔔
              </div>

              <p
                className="
                  mt-[10px]

                  text-[14px]

                  text-[#707070]
                "
              >
                No notifications yet
              </p>
            </div>
          ) : (
            <div
              className="
                mt-[16px]

                max-h-[420px]

                overflow-y-auto

                flex
                flex-col
                gap-[12px]

                pr-[4px]
              "
            >
              {notifications.map(
                (
                  notification
                ) => (
                  <button
                    key={
                      notification.id
                    }
                    onClick={() =>
                      markAsRead(
                        notification.id
                      )
                    }
                    className={`
                      rounded-[18px]

                      p-[14px]

                      text-left

                      transition-all
                      duration-200

                      border

                      ${
                        notification.read
                          ? `
                            bg-[#F8F8F8]
                            border-[#EEEEEE]
                          `
                          : `
                            bg-[#FFF5F1]
                            border-[#FFD9CC]
                          `
                      }
                    `}
                  >
                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-[10px]
                      "
                    >
                      <div>
                        <h3
                          className="
                            text-[14px]
                            font-[700]

                            text-[#1F1F1F]
                          "
                        >
                          {
                            notification.title
                          }
                        </h3>

                        <p
                          className="
                            mt-[4px]

                            text-[13px]
                            leading-[20px]

                            text-[#707070]
                          "
                        >
                          {
                            notification.message
                          }
                        </p>
                      </div>

                      {!notification.read && (
                        <div
                          className="
                            w-[10px]
                            h-[10px]

                            rounded-full

                            bg-[#FF5B1F]

                            mt-[4px]

                            shrink-0
                          "
                        />
                      )}
                    </div>

                    {/* TIME */}
                    <p
                      className="
                        mt-[10px]

                        text-[11px]

                        text-[#A0A0A0]
                      "
                    >
                      {new Date(
                        notification.createdAt
                      ).toLocaleString()}
                    </p>
                  </button>
                )
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}