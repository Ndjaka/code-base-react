// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { cleanup } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});
