import Dashboard from '../../../../src/clients/components/dashboard/Dashboard';
import AppWrapper from '../../../../src/app-html/AppWrapper';

describe('<Dashboard />', () => {
  const component = shallow(<Dashboard />);

  test('Should be render AppWrapper', () => {
    expect(component.find(AppWrapper).exists()).toBe(true);
  });
});
