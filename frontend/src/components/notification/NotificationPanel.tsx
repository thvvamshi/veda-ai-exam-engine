import {
  useNotificationStore,
} from "../../store/notification.store";

type Props = {
  onClose: () => void;
};

export default function NotificationPanel({
  onClose,
}: Props) {
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

  return (
    <div
      className="
        absolute
        top-[58px]
        right-0

        w-[380px]
        max-h-[500px]

        overflow-y-auto

        rounded-[24px]

        bg-white

        p-[18px]

        shadow-[0px_20px_60px_rgba(0,0,0,0.15)]

        z-[9999]
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
            text-[20px]
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
              text-[13px]
              font-[600]

              text-[#FF5B1F]
            "
          >
            Clear All
          </button>
        )}
      </div>

      {/* EMPTY */}
      {notifications.length ===
        0 && (
        <div
          className="
            py-[60px]

            text-center
          "
        >
          <p
            className="
              text-[#8A8A8A]
            "
          >
            No notifications yet
          </p>
        </div>
      )}

      {/* LIST */}
      <div className="mt-[18px] flex flex-col gap-[12px]">
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
                w-full

                rounded-[18px]

                border

                p-[16px]

                text-left

                transition-all
                duration-200

                ${
                  notification.read
                    ? `
                      border-[#ECECEC]
                      bg-[#FAFAFA]
                    `
                    : `
                      border-[#FFD7C9]
                      bg-[#FFF5F1]
                    `
                }
              `}
            >
              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-[12px]
                "
              >
                <div>
                  <h3
                    className="
                      text-[15px]
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
                      mt-[6px]

                      text-[14px]
                      leading-[22px]

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

                      shrink-0

                      mt-[6px]
                    "
                  />
                )}
              </div>

              <p
                className="
                  mt-[12px]

                  text-[12px]

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
    </div>
  );
}