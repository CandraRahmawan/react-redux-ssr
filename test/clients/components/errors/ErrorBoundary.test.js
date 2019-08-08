import ErrorBoundary from '../../../../src/clients/components/errors/ErrorBoundary';
import { Card, CardContent } from '@material-ui/core';

describe('<ErrorBoundary />', () => {
  const component = shallow(<ErrorBoundary children="" />);

  test('Should be render ErrorBoundary', () => {
    const wrapper = component.setState({ hasError: true });
    expect(
      wrapper
        .find('div')
        .find('h1')
        .exists()
    ).toBe(true);
    expect(
      wrapper
        .find(Card)
        .find(CardContent)
        .find('h2')
        .exists()
    ).toBe(true);
    expect(
      wrapper
        .find(Card)
        .find(CardContent)
        .find('p')
        .exists()
    ).toBe(true);
  });

  test('Should be not render ErrorBoundary', () => {
    const wrapper = component.setState({ hasError: false });
    expect(
      wrapper
        .find('div')
        .find('h1')
        .exists()
    ).toBe(false);
    expect(
      wrapper
        .find(Card)
        .find(CardContent)
        .find('h2')
        .exists()
    ).toBe(false);
    expect(
      wrapper
        .find(Card)
        .find(CardContent)
        .find('p')
        .exists()
    ).toBe(false);
  });
});
