export const bg_img = (img) => {
  console.log('get image', img)
  return ({
    backgroundImage: 'url(./images/' + img + '.jpg)'
  })
}
