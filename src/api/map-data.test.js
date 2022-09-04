import { mapData } from './map-data';

describe('map-data', () => {
  it('should map data even if there is no data', () => {
    const pageData = mapData()[0];
    expect(pageData.footerHtml).toBe('');
    expect(pageData.slug).toBe('');
    expect(pageData.title).toBe('');
  });

  it('should map data even if there is data', () => {
    const pageData = mapData([
      {
        attributes: {
          footer_text: '<p>Hey</p>',
          slug: 'slug',
          title: 'title',
          sections: [1, 2, 3, 4],
          menu: { link: '', links: [], newTab: false, srcImg: '', text: '' },
        },
      },
    ])[0];
    expect(pageData.footerHtml).toBe('<p>Hey</p>');
    expect(pageData.slug).toBe('slug');
    expect(pageData.title).toBe('title');
    expect(pageData.sections).toEqual([1, 2, 3, 4]);
    expect(pageData.menu).toEqual({
      link: '',
      links: [],
      newTab: false,
      srcImg: '',
      text: '',
    });
  });
});
