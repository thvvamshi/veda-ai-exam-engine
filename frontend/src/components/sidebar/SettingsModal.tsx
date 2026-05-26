import { useState } from "react";

import { useUserStore } from "../../store/user.store";

type Props = {
  open: boolean;

  onClose: () => void;
};

export default function SettingsModal({ open, onClose }: Props) {
  const {
    schoolName,
    schoolLocation,
    teacherName,
    setSchoolName,
    setSchoolLocation,
    setTeacherName,
  } = useUserStore();

  const [school, setSchool] = useState(schoolName);

  const [location, setLocation] = useState(schoolLocation);

  const [teacher, setTeacher] = useState(teacherName);

  if (!open) return null;

  const handleSave = () => {
    setSchoolName(school);

    setSchoolLocation(location);

    setTeacherName(teacher);

    onClose();
  };

  return (
    <div
      className="
        fixed
        inset-0

        bg-black/40

        flex
        items-center
        justify-center

        z-[9999]
      "
    >
      <div
        className="
          w-full
          max-w-[480px]

          rounded-[32px]

          bg-white

          p-[32px]
        "
      >
        <h2
          className="
            text-[28px]
            font-[800]

            text-[#1F1F1F]
          "
        >
          Settings
        </h2>

        <div className="mt-[28px] flex flex-col gap-[18px]">
          <div>
            <label
              className="
                text-[14px]
                font-[600]
              "
            >
              School Name
            </label>

            <input
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              className="
                mt-[8px]

                w-full
                h-[52px]

                rounded-[16px]

                border
                border-[#DADADA]

                px-[16px]

                outline-none
              "
            />
          </div>

          <div>
            <label
              className="
                text-[14px]
                font-[600]
              "
            >
              School Location
            </label>

            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="
                mt-[8px]

                w-full
                h-[52px]

                rounded-[16px]

                border
                border-[#DADADA]

                px-[16px]

                outline-none
              "
            />
          </div>

          <div>
            <label
              className="
                text-[14px]
                font-[600]
              "
            >
              Teacher Name
            </label>

            <input
              value={teacher}
              onChange={(e) => setTeacher(e.target.value)}
              className="
                mt-[8px]

                w-full
                h-[52px]

                rounded-[16px]

                border
                border-[#DADADA]

                px-[16px]

                outline-none
              "
            />
          </div>
        </div>

        <div className="mt-[30px] flex justify-end gap-[12px]">
          <button
            onClick={onClose}
            className="
              h-[48px]

              rounded-full

              px-[24px]

              bg-[#F3F3F3]

              font-[600]
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="
              h-[48px]

              rounded-full

              px-[28px]

              bg-[#111111]

              text-white

              font-[600]
            "
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
