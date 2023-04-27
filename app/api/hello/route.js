import "server-only";

export async function GET(request) {
  return new Response('Hello, Next.js!')
}


export async function getHero() {

  const Cosmic = require('cosmicjs')
  const api = Cosmic()
  const bucket = api.bucket({
    slug: process.env.COSMIC_BUCKET_SLUG,
    read_key: process.env.COSMIC_READ_KEY,
  })
  const hero = await bucket.objects.find({
    type: 'hero',
    slug: 'la-vie-est-en-velo'
  })
  .props('slug,title,content,metadata')

      return (
          hero
      )
} 


export async function getCategories() {

  const Cosmic = require('cosmicjs')
  const api = Cosmic()
  const bucket = api.bucket({
    slug: process.env.COSMIC_BUCKET_SLUG,
    read_key: process.env.COSMIC_READ_KEY,
  })
  const caterogies = await bucket.objects.find({
    type: 'categories'
  })
  .props('slug,title,content')
  .limit(20)

  return (
    caterogies
  )
}


export async function getBikes() {

  const Cosmic = require('cosmicjs')
  const api = Cosmic()
  const bucket = api.bucket({
    slug: process.env.COSMIC_BUCKET_SLUG,
    read_key: process.env.COSMIC_READ_KEY,
  })
  const data = await bucket.objects.find({
    type: 'bikes'
  })
  .props('slug,title,content,metadata')
  .limit(20)

  return (
   data
  )
}


