export function bg_img(img) {
  return ({
    backgroundImage: `url(http://localhost:3000/${img})`
  })
}
export function url_img([img]) {
  return ({
    backgroundImage: `url(http://localhost:3000/images/${img.url})`
  })
}
