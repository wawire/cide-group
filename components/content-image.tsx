import Image from "next/image"

type ContentImageProps = {
  src: string
  alt: string
  sizes: string
}

export default function ContentImage({ src, alt, sizes }: ContentImageProps) {
  return (
    <div className="relative aspect-[3/2] w-full overflow-hidden bg-surface">
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  )
}
