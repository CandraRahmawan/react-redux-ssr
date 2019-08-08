import PageNotFound from '../../../../src/clients/components/errors/PageNotFound';

describe('<PageNotFound />', () => {
  const component = shallow(<PageNotFound />);

  test('Should be render PageNotFound', () => {
    expect(
      component
        .find('div')
        .find('div')
        .exists()
    ).toBe(true);
    expect(
      component
        .find('div')
        .find('h1')
        .exists()
    ).toBe(true);
    expect(
      component
        .find('div')
        .find('h2')
        .exists()
    ).toBe(true);
  });
});
