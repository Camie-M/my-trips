import Image from 'next/image'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description: {
      html: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  return (
    <>
      <h1>{place.name}</h1>

      <div dangerouslySetInnerHTML={{ __html: place.description.html }} />

      {place.gallery.map((image, index) => (
        <Image
          src={image.url}
          alt={place.name}
          key={`photo-${index}`}
          width={100}
          height={100}
        />
      ))}
    </>
  )
}
