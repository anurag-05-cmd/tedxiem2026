import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule",
  description: "View the full event schedule for TEDx IEM Salt Lake 2026. Plan your day and don't miss out on any talks or activities.",
};

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
