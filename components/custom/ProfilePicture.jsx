"use client"
import Image from "next/image"
export default function ProfilePicture({source, alt, size}) {
    return (
        <div className="relative aspect-square overflow-hidden rounded-full">
        <Image
          src={source}
          alt={alt}
          width={size}
          height={size}
          className="object-cover"
          priority
        />
      </div>
    )
}