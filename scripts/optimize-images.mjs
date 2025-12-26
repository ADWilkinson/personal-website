import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join, extname, basename, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const imagesDir = join(__dirname, '../src/images')

// Skip these files
const skipFiles = new Set([
  'og-image.png',
  'favicon.ico',
])

// Max dimensions
const MAX_WIDTH = 1920
const PORTRAIT_MAX = 1024

async function getImageFiles(dir) {
  const files = []
  const items = await readdir(dir)

  for (const item of items) {
    const fullPath = join(dir, item)
    const stats = await stat(fullPath)

    if (stats.isDirectory()) {
      files.push(...await getImageFiles(fullPath))
    } else if (['.jpg', '.jpeg', '.png'].includes(extname(item).toLowerCase())) {
      if (!skipFiles.has(item)) {
        files.push(fullPath)
      }
    }
  }

  return files
}

async function optimizeImage(filePath) {
  const ext = extname(filePath)
  const name = basename(filePath, ext)
  const dir = dirname(filePath)

  // Determine max width
  const isPortrait = name.includes('portrait') || name.includes('avatar')
  const maxWidth = isPortrait ? PORTRAIT_MAX : MAX_WIDTH

  try {
    const image = sharp(filePath)
    const metadata = await image.metadata()

    // Skip if already small enough
    if (metadata.width <= maxWidth && metadata.size < 500000) {
      console.log(`⏭️  Skipping ${name}${ext} (already optimized)`)
      return
    }

    const outputPath = join(dir, `${name}.webp`)

    await image
      .resize(maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside',
      })
      .webp({ quality: 85 })
      .toFile(outputPath)

    const originalSize = (metadata.size / 1024 / 1024).toFixed(2)
    const newStats = await stat(outputPath)
    const newSize = (newStats.size / 1024 / 1024).toFixed(2)
    const saved = ((1 - newStats.size / metadata.size) * 100).toFixed(1)

    console.log(`✅ ${name}${ext}: ${originalSize}MB → ${newSize}MB (${saved}% smaller)`)
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message)
  }
}

async function main() {
  console.log('🖼️  Finding images to optimize...\n')

  const imageFiles = await getImageFiles(imagesDir)
  const largeImages = []

  for (const file of imageFiles) {
    const stats = await stat(file)
    if (stats.size > 500000) { // > 500KB
      largeImages.push(file)
    }
  }

  console.log(`Found ${largeImages.length} images to optimize\n`)

  for (const file of largeImages) {
    await optimizeImage(file)
  }

  console.log('\n✨ Done!')
}

main().catch(console.error)
