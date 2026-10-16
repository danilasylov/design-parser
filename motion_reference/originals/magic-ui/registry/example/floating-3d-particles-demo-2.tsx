"use client"

import { useTheme } from "next-themes"

import { Floating3DParticles } from "@/registry/magicui/floating-3d-particles"

export default function Component() {
  const { resolvedTheme } = useTheme()
  const color = resolvedTheme === "dark" ? "#c4b5fd" : "#6d28d9"

  return (
    <div className="bg-background relative h-[500px] w-full overflow-hidden rounded-lg border">
      <Floating3DParticles
        color={color}
        depth={0.8}
        opacity={0.55}
        quantity={1000}
      />
    </div>
  )
}
