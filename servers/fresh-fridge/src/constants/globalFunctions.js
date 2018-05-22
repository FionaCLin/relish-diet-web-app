

export default function bg_img(img) {
  return ({
    backgroundImage: 'url(' + img + ')'
  })
}

export const url_img = (img) => {
  return ({
    backgroundImage: 'url(./images/' + img + '.jpg)'
  })
}
