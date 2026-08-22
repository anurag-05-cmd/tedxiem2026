import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speakers",
  description: "Discover the thought leaders, innovators, and visionaries speaking at TEDx IEM Salt Lake 2026.",
};

export default function SpeakersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
