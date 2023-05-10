// Document types
import collection from './documents/collection'
import page from './documents/page'
import product from './documents/product'

const documents = [collection, page, product]

// Object types
import linkExternal from './objects/linkExternal'
import linkInternal from './objects/linkInternal'
import seoShopify from './objects/seo/shopify'
import shopifyCollection from './objects/shopifyCollection'
import shopifyCollectionRule from './objects/shopifyCollectionRule'
import shopifyProduct from './objects/shopifyProduct'
import shopifyProductVariant from './objects/shopifyProductVariant'
import navigation from './navigation'
import navigationItem from './navigation/item'
import banner from './banner'
import templateCampaign from "./pageTemplates/campaign"
import templateBasic from "./pageTemplates/basic"
import proxyString from './objects/proxyString'
import placeholderString from './objects/placeholderString'

const objects = [
  linkExternal,
  linkInternal,
  seoShopify,
  shopifyCollection,
  shopifyCollectionRule,
  shopifyProduct,
  shopifyProductVariant,
  proxyString,
  placeholderString,
  // Navigation
  navigationItem,
  navigation,
  banner,
  templateCampaign,
  templateBasic,
]

export const schemaTypes = [...documents, ...objects]
