
import {DefaultDocumentNodeResolver} from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'
import { SanityDocument } from 'sanity'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {

  switch (schemaType) {
    case `navigation`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `http://localhost:3000/preview/navigation/sidebar`,
          })
          .title('Preview'),
      ])
    case `page`:
    // const slug = S.document().;

      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: SanityDocument) => {
              const type = doc._type;
              if(type === 'page' && "slug" in doc) {
                // @ts-ignore
                const slug =  doc.slug.current;
                if(slug === "home-page") return `http://localhost:3000/`
                if(doc.template === "campaign") return `http://localhost:3000/campaigns/preview/${slug}`
              }
            }
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}