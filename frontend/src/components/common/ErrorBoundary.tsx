import React from "react";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="
            min-h-screen

            flex
            items-center
            justify-center
          "
        >
          <div
            className="
              rounded-[24px]

              bg-white

              p-[32px]
            "
          >
            <h1
              className="
                text-[28px]
                font-[800]
              "
            >
              Something went wrong
            </h1>

            <p className="mt-[12px]">
              Please refresh the page.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}