import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      ...(
        process.env?.NEXT_PUBLIC_DOMAINS?.split(",") ?? [
          "localhost",
          "127.0.0.1",
        ]
      ).flatMap((hostname) => [
        {
          protocol: "http" as const,
          hostname,
        },
        {
          protocol: "https" as const,
          hostname,
        },
      ]),
    ],
  },
  redirects: async () => {
    const redirects = [];

    const productionRedirects = [
      {
        source: "/theme",
        destination: "/404",
        permanent: true,
      },
    ];

    if (process.env.NODE_ENV === "production") {
      return [...productionRedirects, ...redirects];
    }

    return redirects;
  },
};

export default nextConfig;
