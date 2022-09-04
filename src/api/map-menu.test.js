import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-menu', () => {
  it('should return a predefined object when called without data ', () => {
    const menu = mapMenu();
    expect(menu.text).toBe('');
    expect(menu.srcImg).toBe('');
    expect(menu.link).toBe('');
  });

  it('should map menu with required keys and values', () => {
    const menu = mapMenu({
      id: 1,
      logo_link: '#home',
      logo_text: 'Logo',
      logo: {
        data: {
          id: 5,
          attributes: {
            name: 'landing-page-2.svg',
            alternativeText: 'Landing Page Logo',
            caption: 'Landing Page Logo',
            width: null,
            height: null,
            formats: null,
            hash: 'landing_page_2_c6baa21725',
            ext: '.svg',
            mime: 'image/svg+xml',
            size: 2.51,
            url: 'https://res.cloudinary.com/deosirvhi/image/upload/v1652081175/landing_page_2_c6baa21725.svg',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'landing_page_2_c6baa21725',
              resource_type: 'image',
            },
            createdAt: '2022-05-09T07:26:17.235Z',
            updatedAt: '2022-05-09T07:26:17.235Z',
          },
        },
      },
      menu_links: [
        {
          id: 2,
          link_text: 'intro',
          url: '#intro',
          open_in_new_tab: false,
        },
        {
          id: 1,
          link_text: 'grid-one',
          url: '#grid-one',
          open_in_new_tab: false,
        },
      ],
    });
    expect(menu.text).toBe('Logo');
    expect(menu.srcImg).toBe(
      'https://res.cloudinary.com/deosirvhi/image/upload/v1652081175/landing_page_2_c6baa21725.svg',
    );
    expect(menu.link).toBe('#home');
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe('intro');
    expect(menu.links[0].link).toBe('#intro');
  });

  it('should return an empty array if there are no links ', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it('should map links if it receives a populated array ', () => {
    const links = mapMenuLinks([
      {
        id: 2,
        link_text: 'intro',
        url: '#intro',
        open_in_new_tab: false,
      },
      {},
    ]);
    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe('intro');
    expect(links[0].link).toBe('#intro');
  });
});
