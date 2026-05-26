import { create } from "zustand";

import { persist } from "zustand/middleware";

interface UserStore {
  schoolName: string;

  schoolLocation: string;

  teacherName: string;

  setSchoolName: (
    value: string
  ) => void;

  setSchoolLocation: (
    value: string
  ) => void;

  setTeacherName: (
    value: string
  ) => void;
}

export const useUserStore =
  create<UserStore>()(
    persist(
      (set) => ({
        schoolName:
          "Delhi Public School",

        schoolLocation:
          "Bokaro Steel City",

        teacherName:
          "John Doe",

        setSchoolName: (
          value
        ) =>
          set({
            schoolName:
              value,
          }),

        setSchoolLocation:
          (value) =>
            set({
              schoolLocation:
                value,
            }),

        setTeacherName:
          (value) =>
            set({
              teacherName:
                value,
            }),
      }),

      {
        name:
          "veda-user-store",
      }
    )
  );