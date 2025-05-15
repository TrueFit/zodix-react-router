import { Form, useLoaderData } from 'react-router';
import { z } from 'zod';
import { zx } from '../../../src';
import type { Route } from './+types';

export async function loader(args: Route.ClientLoaderArgs) {
  const { query } = zx.parseQuery(args.request, {
    query: z.string().optional(),
  });
  const results = query ? searchAnimals(query) : [];
  return { query, results };
}

export default function Search() {
  const { query, results } = useLoaderData<typeof loader>();
  return (
    <>
      <h1>Search</h1>
      <Form method="get">
        <input name="query" defaultValue={query} />
        <button type="submit">Search</button>
      </Form>
      {results.length > 0 && (
        <div>
          <h2>Results for "{query}":</h2>
          <ul>
            {results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

function searchAnimals(query: string) {
  return [
    'dog',
    'cat',
    'bird',
    'fish',
    'whale',
    'dolphin',
    'shark',
    'tiger',
    'lion',
    'elephant',
    'giraffe',
    'zebra',
    'horse',
    'cow',
    'pig',
    'chicken',
    'duck',
    'goose',
    'frog',
    'snake',
    'lizard',
    'turtle',
  ].filter((animal) => animal.includes(query));
}
