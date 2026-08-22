import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the brilliant minds and dedicated students behind TEDx IEM Salt Lake 2026.",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
