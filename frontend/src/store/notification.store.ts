import { create } from "zustand";

import { persist } from "zustand/middleware";

export interface Notification {
  id: string;

  title: string;

  message: string;

  read: boolean;

  createdAt: string;
}

interface NotificationStore {
  notifications: Notification[];

  addNotification: (
    notification: Notification
  ) => void;

  markAsRead: (
    id: string
  ) => void;

  clearNotifications: () => void;
}

export const useNotificationStore =
  create<NotificationStore>()(
    persist(
      (set) => ({
        notifications: [],

        addNotification:
          (
            notification
          ) =>
            set((state) => ({
              notifications: [
                notification,
                ...state.notifications,
              ],
            })),

        markAsRead:
          (id) =>
            set((state) => ({
              notifications:
                state.notifications.map(
                  (
                    notification
                  ) =>
                    notification.id ===
                    id
                      ? {
                          ...notification,
                          read: true,
                        }
                      : notification
                ),
            })),

        clearNotifications:
          () =>
            set({
              notifications: [],
            }),
      }),

      {
        name:
          "veda-notifications",
      }
    )
  );