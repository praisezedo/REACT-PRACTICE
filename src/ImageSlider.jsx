import img1 from './assets/background2.jpg'
import img2 from './assets/food1.jpg'
import img3 from './assets/food2.jpg'
import img4 from './assets/food3.jpg'
import img5 from './assets/nature.jpg'

import { useEffect, useState } from 'react'

const SLIDE_DURATION = 5000 // 5 seconds
const TICK_RATE = 50        // progress update interval

export default function ImageSlider() {
    const images = [img1, img2, img3, img4, img5]

    const [imgIndex, setImgIndex] = useState(0)
    const [isFading, setIsFading] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if (isPaused) return

        const increment = 100 / (SLIDE_DURATION / TICK_RATE)

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setIsFading(true)

                    setTimeout(() => {
                        setImgIndex((i) => (i + 1) % images.length)
                        setIsFading(false)
                        setProgress(0)
                    }, 500)

                    return 0
                }

                return prev + increment
            })
        }, TICK_RATE)

        return () => clearInterval(interval)
    }, [isPaused, images.length])

    return (
        <div
            className="select-none flex flex-col items-center gap-4 w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
        >
            {/* Image */}
            <div className="flex justify-center items-center h-150">
                <img
                    src={images[imgIndex]}
                    alt={`Slide ${imgIndex + 1}`}
                    className={`object-contain max-w-150 mx-auto transition-opacity duration-1000
                    ${isFading ? 'opacity-0' : 'opacity-100'}`}
                />
            </div>

            {/* Progress bar */}
            <div className="w-64 h-1 bg-gray-300 rounded overflow-hidden">
                <div
                    className="h-full bg-black transition-[width] duration-50"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Dots */}
            <div className="flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setImgIndex(index)
                            setProgress(0)
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300
                        ${imgIndex === index
                            ? 'bg-black scale-125'
                            : 'bg-gray-400 hover:bg-gray-600'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}
