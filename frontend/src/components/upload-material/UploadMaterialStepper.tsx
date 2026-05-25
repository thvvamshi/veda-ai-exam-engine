// src/components/upload-material/UploadMaterialStepper.tsx

type Props = {
  mobile?: boolean;
};

export default function UploadMaterialStepper({
  mobile = false,
}: Props) {
  if (mobile) {
    return (
      <div
        className="
          flex
          items-center
          gap-[10px]
        "
      >
        <div
          className="
            flex-1
            h-[8px]

            rounded-full

            bg-[#5B5B5B]
          "
        />

        <div
          className="
            flex-1
            h-[8px]

            rounded-full

            bg-[#E9E9E9]
          "
        />
      </div>
    );
  }

  return (
    <div
      className="
        max-w-[760px]

        mx-auto

        flex
        items-center
        gap-[14px]
      "
    >
      <div
        className="
          flex-1
          h-[6px]

          rounded-full

          bg-[#5B5B5B]
        "
      />

      <div
        className="
          flex-1
          h-[6px]

          rounded-full

          bg-[#E9E9E9]
        "
      />
    </div>
  );
}