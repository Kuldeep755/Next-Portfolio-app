import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withSentryConfig(nextConfig, {
  // Sentry options
  authToken: process.env.SENTRY_AUTH_TOKEN,  // Ensure this token is correct
  silent: true,
  org: 'm-tech-pe',  // Your Sentry organization slug (ensure it's correct, case-sensitive)
  project: 'javascript-nextjs',  // Your Sentry project slug (ensure it's correct)
}, {
  // Additional Sentry configuration
  widenClientFileUpload: true,  // Optional: for larger source maps
  transpileClientSDK: true,  // Optional: if you need to support IE11
  hideSourceMaps: true,  // Optional: hides source maps from bundles
  disableLogger: true,  // Optional: reduces bundle size by tree-shaking Sentry logs
  automaticVercelMonitors: true,  // Optional: for automatic instrumentation of Vercel Cron Monitors
});
