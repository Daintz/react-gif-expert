
import { render, screen } from '@testing-library/react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import { GifItem } from '../../src/components';

describe('Prueba en GifItem', () => { 

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';
    
    test('Debe hacer match con el snapshot', () => { 
        const { container } = render( <GifItem title={ title } url={ url } />);
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el URL y ALT indicado', () => { 
        render( <GifItem title={ title } url={ url } />);
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    test('Debe de mostrar el titulo en el componente', () => { 
        render( <GifItem title={ title } url={ url } />);
        expect( screen.getByText( title )).toBeTruthy();
    });

})
