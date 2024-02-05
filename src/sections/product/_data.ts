import {v4 as uuid} from 'uuid'

export const _productsImage = [
    "https://cdn-images.farfetch-contents.com/off-white-full-leather-varsity-jacket_21255521_52255768_1000.jpg",
    "https://cdn-images.farfetch-contents.com/off-white-full-leather-varsity-jacket_21255521_52255775_1000.jpg",
    "https://cdn-images.farfetch-contents.com/off-white-full-leather-varsity-jacket_21255521_52255771_1000.jpg",
    "https://cdn-images.farfetch-contents.com/off-white-full-leather-varsity-jacket_21255521_52255773_1000.jpg",
    "https://cdn-images.farfetch-contents.com/off-white-full-leather-varsity-jacket_21255521_52255772_1000.jpg"
]

export const _products = _productsImage.map(product => ({id: uuid(), url: product}))