import { NextResponse } from "next/server";
import birthdayData from "../../../site-data.json";

export const dynamic = "force-static";

function resolveSiteContent(value: unknown, recipientName: string): unknown {
  if (typeof value === "string") {
    const personalized = value.replace(/\{\{name\}\}/g, () => recipientName);
    if (personalized.startsWith("./assets/")) {
      return personalized.replace("./assets/", "/theme/assets/");
    }
    return personalized;
  }

  if (Array.isArray(value)) {
    return value.map((item) => resolveSiteContent(item, recipientName));
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, resolveSiteContent(item, recipientName)]),
    );
  }

  return value;
}

export function GET() {
  return NextResponse.json(
    resolveSiteContent(birthdayData, birthdayData.site.recipientName),
    {
      headers: {
        "Cache-Control": "public, max-age=0, s-maxage=60, stale-while-revalidate=3600",
      },
    },
  );
}
