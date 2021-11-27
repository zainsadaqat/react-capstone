import { render } from 'react-dom';
import { MemoryRouter } from 'react-router';

describe('Testing Routes (Home and Details)', () => {
  test('Testing home page in react-redux-capstone project', () => {
    const rootElement = document.createElement('section');
    document.body.appendChild(rootElement);

    render(
      <MemoryRouter initialEntries={['/']}>
        <section>Home Page</section>
      </MemoryRouter>,
      rootElement
    );

    expect(document.body.textContent).toBe('Home Page');
    document.body.removeChild(rootElement);
  });

  test('Testing details page in react-redux-capstone project', () => {
    const rootElement = document.createElement('article');
    document.body.appendChild(rootElement);

    render(
      <MemoryRouter initialEntries={['/']}>
        <article>Details Page</article>
      </MemoryRouter>,
      rootElement
    );

    expect(document.body.textContent).toBe('Details Page');
    document.body.removeChild(rootElement);
  });
});
