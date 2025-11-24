import SimpleGallery from '@/components/SimpleGallery'
import Navbar from '@/components/Navbar'

export default function About() {
  const images = [
    {
      largeURL: '/img-1.jpg',
      thumbnailURL: '/img-1-tn.jpg',
      width: 1440,
      height: 1920,
    },
    {
      largeURL: '/img-2.jpg',
      thumbnailURL: '/img-2-tn.jpg',
      width: 1024,
      height: 684,
    },
    {
      largeURL: '/img-3.jpg',
      thumbnailURL: '/img-3-tn.jpg',
      width: 1024,
      height: 1280,
    },
    {
      largeURL: '/img-4.jpg',
      thumbnailURL: '/img-4-tn.jpg',
      width: 1024,
      height: 679,
    },
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Photo Gallery</h1>
          <p className="text-center text-gray-600 mb-8">Click any image to view in fullscreen</p>
          <div className="bg-white rounded-lg shadow-xl p-8">
            <SimpleGallery galleryID="img-gallery" images={images} />
          </div>
        </div>
      </div>
    </>
  )
}
