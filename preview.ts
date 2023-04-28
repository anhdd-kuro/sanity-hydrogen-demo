
import {DefaultDocumentNodeResolver} from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'

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
    default:
      return S.document().views([S.view.form()])
  }
}