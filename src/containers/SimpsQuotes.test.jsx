import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import SimpsonsQuote from './SimpsQuotes';
import { rest, } from 'msw';
import { setupServer } from 'msw/node';


const server = setupServer(
    rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {
            return res(
                    ctx.json([
                    {
                    "quote": "I live in a single room above a bowling alley...and below another bowling alley.",
                    "character": "Frank Grimes",
                    "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FFrankGrimes.png?1497567511887",
                    "characterDirection": "Left"
                    }
                ])
            );
        }
    )
);

describe('Simpsons quote container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    it('fetches a quote from simpsons', async () => {
        render(<SimpsonsQuote />);

        const button = screen.getByRole('button');

        fireEvent.click(button);

        return waitFor(() => {
            screen.getAllByAltText('Frank Grimes');
            screen.getByText('I live in a single room above a bowling alley...and below another bowling alley. - Frank Grimes');
        })
    })
});
