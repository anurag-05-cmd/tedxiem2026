import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about TEDx IEM Salt Lake, our mission, and what to expect at our 2026 event focusing on Loneliness in the era of AI.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
