import Image from "next/image"
import { cn } from "@/lib/utils"

interface MDXImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string
    alt: string
    fill?: boolean
    priority?: boolean
    aspectRatio?: 'video' | 'square' | 'portrait' | 'none'
    sizes?: string
}

export function MDXImage({
    src,
    alt,
    className,
    fill = true,  // Default to fill behavior
    priority = false,
    aspectRatio = 'video',
    sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    ...props
}: MDXImageProps) {
    const aspectClass = {
        video: 'aspect-video',
        square: 'aspect-square',
        portrait: 'aspect-[3/4]',
        none: ''
    }[aspectRatio]

    if (aspectRatio === 'none' || !fill) {
        // For cases where you don't want the wrapper
        return (
            <Image
                src={src}
                alt={alt}
                fill={fill}
                className={className}
                priority={priority}
                sizes={sizes}
            />
        )
    }

    return (
        <div className={cn("relative w-full overflow-hidden rounded-lg border bg-muted my-6", className)}>
            <div className={cn("relative", aspectClass)}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    priority={priority}
                    sizes={sizes}
                />
            </div>
        </div>
    )
}