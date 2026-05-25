import Sidebar from "../components/sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({
  children,
}: Props) {
  return (
    <div
      className="
        min-h-screen
        bg-[#EAEAEA]
        p-[12px]
        overflow-x-hidden
      "
    >
      <div
        className="
          flex
          gap-[12px]
          h-[calc(100vh-24px)]
        "
      >
        <Sidebar />

        <main
          className="
            flex-1
            min-w-0
            overflow-y-auto
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
}