"use client"

import { useRef, useEffect } from "react"

const COLORS = ["#FF4D4D", "#FFD700", "#FFA500", "#FF69B4", "#1E90FF", "#ff6347"]

class FallingLeaf {
  x = 0
  y = 0
  size = 0
  color = ""
  speedY = 0
  swayOffset = 0
  angle = 0
  rotationSpeed = 0
  width = 0
  height = 0

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
    this.reset(true)
  }

  reset(initial = false) {
    this.x = Math.random() * this.width
    this.y = initial ? Math.random() * this.height : -20
    this.size = Math.random() * 7 + 6
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)]
    this.speedY = Math.random() * 1.2 + 0.8
    this.swayOffset = Math.random() * 100
    this.angle = Math.random() * Math.PI * 2
    this.rotationSpeed = (Math.random() - 0.5) * 0.05
  }

  update() {
    this.y += this.speedY
    this.x += Math.sin(this.y * 0.02 + this.swayOffset) * 0.8
    this.angle += this.rotationSpeed
    if (this.y > this.height) this.reset()
  }

  draw(ctx: CanvasRenderingContext2D) {
    const size = this.size
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.rotate(this.angle)
    ctx.fillStyle = this.color
    ctx.beginPath()
    const topCurveHeight = size * 0.3
    ctx.moveTo(0, topCurveHeight)
    ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight)
    ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, (size + topCurveHeight) / 1.2, 0, size)
    ctx.bezierCurveTo(0, (size + topCurveHeight) / 1.2, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight)
    ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight)
    ctx.fill()
    ctx.restore()
  }
}

export function InteractiveTree() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const staticCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const rootStartLocations = useRef<{ x: number; y: number; thickness: number }[]>([])
  const fallingLeaves = useRef<FallingLeaf[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      if (!staticCanvasRef.current) {
        staticCanvasRef.current = document.createElement("canvas")
      }
      staticCanvasRef.current.width = canvas.width
      staticCanvasRef.current.height = canvas.height
      initTree()
    }

    const drawHeart = (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      color: string,
      angle = 0,
    ) => {
      context.save()
      context.translate(x, y)
      context.rotate(angle)
      context.fillStyle = color
      context.beginPath()
      const topCurveHeight = size * 0.3
      context.moveTo(0, topCurveHeight)
      context.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight)
      context.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, (size + topCurveHeight) / 1.2, 0, size)
      context.bezierCurveTo(
        0,
        (size + topCurveHeight) / 1.2,
        size / 2,
        (size + topCurveHeight) / 2,
        size / 2,
        topCurveHeight,
      )
      context.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight)
      context.fill()
      context.restore()
    }

    const drawBranch = (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      len: number,
      angle: number,
      width: number,
      depth: number,
    ) => {
      context.save()
      context.translate(x, y)
      context.rotate((angle * Math.PI) / 180)

      context.beginPath()
      context.moveTo(0, 0)
      context.quadraticCurveTo(width / 3, -len / 2, 0, -len)
      context.strokeStyle = "#3e2723"
      context.lineWidth = width
      context.lineCap = "round"
      context.stroke()

      if (depth > 3 && depth < 9 && Math.random() > 0.8) {
        const matrix = context.getTransform()
        const absX = matrix.a * 0 + matrix.c * (-len / 2) + matrix.e
        const absY = matrix.b * 0 + matrix.d * (-len / 2) + matrix.f
        rootStartLocations.current.push({ x: absX, y: absY, thickness: width * 0.3 })
      }

      if (depth > 9 || len < 15) {
        for (let k = 0; k < 5; k++) {
          const s = Math.random() * 7 + 4
          const c = COLORS[Math.floor(Math.random() * COLORS.length)]
          drawHeart(context, (Math.random() - 0.5) * 30, -len + (Math.random() - 0.5) * 30, s, c, Math.random())
        }
      }

      if (depth < 12) {
        const newLen = len * 0.82
        const newWidth = width * 0.75
        drawBranch(context, 0, -len, newLen, -25 - Math.random() * 15, newWidth, depth + 1)
        drawBranch(context, 0, -len, newLen, 25 + Math.random() * 15, newWidth, depth + 1)
      }
      context.restore()
    }

    const drawFinalRoots = (context: CanvasRenderingContext2D) => {
      context.setTransform(1, 0, 0, 1, 0, 0)
      context.strokeStyle = "#5d4037"
      context.globalAlpha = 0.6
      context.lineCap = "butt"

      for (const pt of rootStartLocations.current) {
        context.beginPath()
        context.moveTo(pt.x, pt.y)
        context.lineWidth = pt.thickness
        const distance = canvas.height - pt.y
        context.bezierCurveTo(
          pt.x + Math.random() * 10 - 5,
          pt.y + distance / 3,
          pt.x + Math.random() * 10 - 5,
          pt.y + distance * 0.6,
          pt.x,
          canvas.height + 20,
        )
        context.stroke()
      }
      context.globalAlpha = 1.0
    }

    const initTree = () => {
      const staticCanvas = staticCanvasRef.current
      if (!staticCanvas) return
      const staticCtx = staticCanvas.getContext("2d")
      if (!staticCtx) return

      staticCtx.clearRect(0, 0, staticCanvas.width, staticCanvas.height)
      rootStartLocations.current = []
      drawBranch(staticCtx, canvas.width / 2, canvas.height + 30, 140, 0, 45, 0)
      drawFinalRoots(staticCtx)

      fallingLeaves.current = []
      for (let i = 0; i < 60; i++) {
        fallingLeaves.current.push(new FallingLeaf(canvas.width, canvas.height))
      }
    }

    let animationFrameId: number
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      if (staticCanvasRef.current) {
        ctx.drawImage(staticCanvasRef.current, 0, 0)
      }
      for (const leaf of fallingLeaves.current) {
        leaf.update()
        leaf.draw(ctx)
      }
      animationFrameId = requestAnimationFrame(render)
    }

    window.addEventListener("resize", resize)
    resize()
    render()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}
