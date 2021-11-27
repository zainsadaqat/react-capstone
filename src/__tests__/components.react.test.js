import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from '../store/index';
import EnglandData from '../components/data/england/EnglandData';
import IrelandData from '../components/data/ireland/IrelandData';

describe('Testing react-redux-capstone project Components', () => {
  test('Testing EnglandData Component', () => {
    const englandData = renderer.create(
      <Provider store={store}>
        <EnglandData />
      </Provider>,
    );
    const tree = englandData.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Testing IrelandData Component', () => {
    const irelandData = renderer.create(
      <Provider store={store}>
        <IrelandData />
      </Provider>,
    );
    const tree = irelandData.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
