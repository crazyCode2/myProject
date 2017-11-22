// 引入二维码处理函数
import jsQR from 'jsqr'

// 扫描
export function scan (imageData, locateOnly) {
  let location = null
  let content = null
  // 二进制图片
  const binaryImage = jsQR.binarizeImage(
    imageData.data,
    imageData.width,
    imageData.height
  )
  // 位置
  location = jsQR.locateQRInBinaryImage(binaryImage)

  if (location !== null && !locateOnly) {
    // 提取二进制图片
    const qrcode = jsQR.extractQRFromBinaryImage(binaryImage, location)
    // 解码二维码
    content = jsQR.decodeQR(qrcode)
  }

  return { location, content }
}

// 解码
export function decode (imageData) {
  return scan(imageData, false).content
}

// 位于
export function locate (imageData) {
  return scan(imageData, true).location
}
