"use client"

import React from "react"

export default function ClientOnly({ children }) {
  // Simple client-only wrapper. Use this to wrap components that require client
  // features (state, effects, browser APIs). It intentionally doesn't do
  // dynamic imports; keep it lightweight and explicit.
  return <>{children}</>
}
