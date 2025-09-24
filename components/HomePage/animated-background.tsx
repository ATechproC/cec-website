"use client"

import { useEffect, useRef } from "react"

interface Node {
    x: number
    y: number
    vx: number
    vy: number
    connections: number[]
}

export function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animationRef = useRef<number>(null)
    const nodesRef = useRef<Node[]>([])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const createNodes = () => {
            const nodes: Node[] = []
            const nodeCount = Math.min(50, Math.floor((window.innerWidth * window.innerHeight) / 15000))

            for (let i = 0; i < nodeCount; i++) {
                nodes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    connections: [],
                })
            }

            nodesRef.current = nodes
        }

        const drawConnections = () => {
            const nodes = nodesRef.current
            const maxDistance = 150

            ctx.strokeStyle = "rgba(251, 191, 36, 0.3)" // Golden yellow with transparency
            ctx.lineWidth = 1

            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x
                    const dy = nodes[i].y - nodes[j].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * 0.5
                        ctx.strokeStyle = `rgba(251, 191, 36, ${opacity})`

                        ctx.beginPath()
                        ctx.moveTo(nodes[i].x, nodes[i].y)
                        ctx.lineTo(nodes[j].x, nodes[j].y)
                        ctx.stroke()
                    }
                }
            }
        }

        const drawNodes = () => {
            const nodes = nodesRef.current

            nodes.forEach((node, index) => {
                // Update position
                node.x += node.vx
                node.y += node.vy

                // Bounce off edges
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1

                // Keep nodes in bounds
                node.x = Math.max(0, Math.min(canvas.width, node.x))
                node.y = Math.max(0, Math.min(canvas.height, node.y))

                // Draw node
                const pulse = Math.sin(Date.now() * 0.003 + index) * 0.5 + 0.5
                const radius = 2 + pulse * 2

                ctx.beginPath()
                ctx.arc(node.x, node.y, radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(251, 191, 36, ${0.6 + pulse * 0.4})`
                ctx.fill()

                // Add glow effect
                ctx.beginPath()
                ctx.arc(node.x, node.y, radius * 2, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(251, 191, 36, ${0.1 + pulse * 0.1})`
                ctx.fill()
            })
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            drawConnections()
            drawNodes()

            animationRef.current = requestAnimationFrame(animate)
        }

        resizeCanvas()
        createNodes()
        animate()

        const handleResize = () => {
            resizeCanvas()
            createNodes()
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [])

    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }} />
}
