import TemplateHtml from '../../src/app-html/TemplateHtml';

describe('<TemplateHtml />', () => {
  const baseProps = {
    assets: {
      javascript: {
        app: 'bundle.js'
      },
      styles: {
        app: 'bundle.css'
      }
    },
    appHtml: '<div></div>',
    muiCss: 'style'
  };
  const component = shallow(<TemplateHtml {...baseProps} />);

  test('Should be render correct structure html', () => {
    expect(
      component
        .find('html')
        .find('head')
        .exists()
    ).toBe(true);
    expect(
      component
        .find('html')
        .find('body')
        .exists()
    ).toBe(true);
  });

  test('Should be render wrapper id = app', () => {
    expect(
      component
        .find('body')
        .find('div')
        .prop('id')
    ).toEqual('app');
  });

  test('Should be render inline muiCSS', () => {
    expect(
      component
        .find('body')
        .find('style')
        .prop('id')
    ).toEqual('jss-server-side');
  });

  test('Should be render script js', () => {
    expect(component.find('html').find('script')).toHaveLength(1);
  });

  test('Should be render stylesheet css', () => {
    expect(component.find('head').find('link')).toHaveLength(1);
  });
});
