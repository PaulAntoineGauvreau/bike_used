export async function GET(request) {
  return new Response('Hello, Next.js!')
}


export async function getHero(params) {

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


