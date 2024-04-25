import type { SWRConfiguration } from 'swr';
import useSWRImmutable from 'swr/immutable';

const useSWRStore = <T>(key: string | null, options?: SWRConfiguration) =>
  useSWRImmutable<T | null>(key, null, {
    ...(options ?? {}),
  });

export default useSWRStore;
