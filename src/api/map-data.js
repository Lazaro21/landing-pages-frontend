import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

export const mapData = (pagesData = [{ attributes: {} }]) => {
  return pagesData.map((data) => {
    const {
      footer_text = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data.attributes;
    return {
      footerHtml: footer_text,
      slug: slug,
      title: title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};
