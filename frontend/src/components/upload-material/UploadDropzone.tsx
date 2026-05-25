// src/components/upload-material/UploadDropzone.tsx

import type React from "react";

import toast from "react-hot-toast";

type Props = {
  mobile?: boolean;

  uploadedFile: File | null;

  setUploadedFile: (
    file: File | null
  ) => void;
};

export default function UploadDropzone({
  mobile = false,
  uploadedFile,
  setUploadedFile,
}: Props) {
  const validateFile = (
    file: File
  ) => {
    const isPdf =
      file.type ===
        "application/pdf" ||
      file.name
        .toLowerCase()
        .endsWith(".pdf");

    if (!isPdf) {
      toast.error(
        "Only PDF files are allowed"
      );

      return false;
    }

    if (
      file.size >
      10 * 1024 * 1024
    ) {
      toast.error(
        "Maximum file size is 10MB"
      );

      return false;
    }

    return true;
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file =
      e.target.files?.[0];

    if (!file) return;

    const isValid =
      validateFile(file);

    if (!isValid) {
      e.target.value = "";

      return;
    }

    setUploadedFile(file);

    toast.success(
      "File uploaded successfully"
    );
  };

  const handleDrop = (
    e: React.DragEvent<HTMLLabelElement>
  ) => {
    e.preventDefault();

    const file =
      e.dataTransfer.files?.[0];

    if (!file) return;

    const isValid =
      validateFile(file);

    if (!isValid) return;

    setUploadedFile(file);

    toast.success(
      "File uploaded successfully"
    );
  };

  const handleDragOver = (
    e: React.DragEvent<HTMLLabelElement>
  ) => {
    e.preventDefault();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLLabelElement>
  ) => {
    if (
      e.key === "Enter" ||
      e.key === " "
    ) {
      e.preventDefault();

      const input =
        e.currentTarget.querySelector(
          "input"
        );

      input?.click();
    }
  };

  return (
    <div>
      {/* LABEL */}

      <label
        className={`
          font-[700]

          text-[#1F1F1F]

          ${
            mobile
              ? "text-[15px]"
              : "text-[18px]"
          }
        `}
      >
        Upload Material
      </label>

      {/* DROPZONE */}

      <label
        onDrop={handleDrop}
        onDragOver={
          handleDragOver
        }
        onKeyDown={
          handleKeyDown
        }
        aria-label="Upload PDF material"
        tabIndex={0}
        className={`
          mt-[14px]

          w-full

          border-2
          border-dashed

          ${
            uploadedFile
              ? "border-[#22C55E]"
              : "border-[#DADADA]"
          }

          rounded-[28px]

          flex
          flex-col

          items-center
          justify-center

          cursor-pointer

          bg-[#FAFAFA]

          transition-all
          duration-200

          hover:border-[#111111]

          focus-within:border-[#111111]
          focus-within:ring-2
          focus-within:ring-[#11111110]

          ${
            mobile
              ? "h-[220px]"
              : "h-[280px]"
          }
        `}
      >
        {/* INPUT */}

        <input
          type="file"
          accept=".pdf,application/pdf"
          hidden
          onChange={
            handleFileChange
          }
        />

        {/* ICON */}

        <div className="text-[52px]">
          {uploadedFile
            ? "✅"
            : "📄"}
        </div>

        {/* TITLE */}

        <h3
          className="
            mt-[18px]

            text-[18px]
            font-[700]

            text-[#1F1F1F]

            text-center

            px-[20px]

            break-all
          "
        >
          {uploadedFile
            ? uploadedFile.name
            : "Upload PDF Material"}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            mt-[8px]

            text-[14px]

            text-[#7B7B7B]

            text-center
          "
        >
          {uploadedFile
            ? "File ready for AI processing"
            : "Drag & drop or click to upload"}
        </p>

        {/* FILE SIZE */}

        {!uploadedFile && (
          <p
            className="
              mt-[8px]

              text-[12px]

              text-[#A0A0A0]
            "
          >
            Max size: 10MB
          </p>
        )}
      </label>
    </div>
  );
}