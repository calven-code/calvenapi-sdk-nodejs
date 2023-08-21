/** Copyright 2023 Calven Pty Ltd

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, 
provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE 
INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY 
SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, 
WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION 
WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

*/

export const CALVEN_API_BASE = 'https://api.calven.com'

/**
 * Configuration options for the Calven API client
 * @property baseUrl - The base URL of the Calven API
 * @property region - The region of the Calven API
 */
export interface CalvenClientConfig {
  /** @property baseUrl - The base url of the Calven API service */
  baseUrl?: string
  /** @property region - The region of the Calven API service */
  region?: CalvenAPIRegion
}

export enum CalvenAPIRegion {
  AU = 'ause1',
  US = 'usce1',
}

export const DEFAULT_CALVEN_CLIENT_CONFIG: CalvenClientConfig = {
  baseUrl: CALVEN_API_BASE,
  region: CalvenAPIRegion.US,
}
