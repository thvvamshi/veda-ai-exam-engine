export const successResponse = (
  data: unknown = null,

  message = "Success",
) => {
  return {
    success: true,

    message,

    data,
  };
};

export const errorResponse = (
  message = "Something went wrong",

  errors: unknown = undefined,
) => {
  return {
    success: false,

    message,

    errors,
  };
};
