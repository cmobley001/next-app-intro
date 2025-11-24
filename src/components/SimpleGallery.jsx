'use client'

import React, { useEffect } from 'react'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

export default function SimpleGallery({ images, galleryID }) {
  // code block
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      initialZoomLevel: 'fit',
      secondaryZoomLevel: 1,
      maxZoomLevel: 1,
    })

    lightbox.addFilter('itemData', (itemData, index) => {
      return {
        ...itemData,
        w: parseInt(itemData.element.dataset.pswpWidth || '0'),
        h: parseInt(itemData.element.dataset.pswpHeight || '0'),
      }
    })

    lightbox.init()

    return () => {
      lightbox.destroy()
      lightbox = null
    }
  }, [])

  return (
    <div className="pswp-gallery flex gap-5" id={galleryID}>
      {images.map((image, index) => (
        <a
          href={image.largeURL}
          key={galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
          className="shrink-0"
          data-pswp-width={image.width || 800}
          data-pswp-height={image.height || 600}
        >
          <img
            src={image.thumbnailURL}
            alt=""
            className="h-40 w-auto object-cover rounded-md hover:opacity-80 transition-opacity"
          />
        </a>
      ))}
    </div>
  )
}
