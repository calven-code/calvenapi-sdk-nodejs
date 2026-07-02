/** Copyright 2023 Calven Pty Ltd

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, 
provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE 
INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY 
SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, 
WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION 
WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

*/

import {
  AccessCredentialClient,
  OccupancyClient,
  PresenceClient,
  TimeoffClient,
} from '.'
import { DEFAULT_CALVEN_CLIENT_CONFIG, CalvenClientConfig } from '../types'

/**
 * Calven client factory
 */

export class CalvenAPI {
  /**
   * Create a new `AccessCredentialClient` instance.
   * @param apiKey The API key to use when authenticating with Calven.
   * @param secret The secret to use when authenticating with Calven.
   * @param config The Calven API client configuration.
   * @param correlationId The correlation ID to use when sending requests to Calven.  This is optional.
   * @returns A new `OccupancyClient` instance.
   */

  static accessCredentialClient(
    apiKey: string,
    secret: string,
    config: CalvenClientConfig = DEFAULT_CALVEN_CLIENT_CONFIG,
    correlationId?: string
  ): AccessCredentialClient {
    return new AccessCredentialClient(apiKey, secret, config, correlationId)
  }

  /**
   * Create a new `OccupancyClient` instance.
   * @param apiKey The API key to use when authenticating with Calven.
   * @param secret The secret to use when authenticating with Calven.
   * @param config The Calven API client configuration.
   * @param correlationId The correlation ID to use when sending requests to Calven.  This is optional.
   * @returns A new `OccupancyClient` instance.
   */

  static occupancyClient(
    apiKey: string,
    secret: string,
    config: CalvenClientConfig = DEFAULT_CALVEN_CLIENT_CONFIG,
    correlationId?: string
  ): OccupancyClient {
    return new OccupancyClient(apiKey, secret, config, correlationId)
  }

  /**
   * Create a new `PresenceClient` instance
   * @param apiKey The API key to use when authenticating with Calven.
   * @param secret The secret to use when authenticating with Calven.
   * @param config The Calven API client configuration.
   * @param correlationId The correlation ID to use when sending requests to Calven.  This is optional.
   * @returns A bw `PresenceClient` instance.
   */

  static presenceClient(
    apiKey: string,
    secret: string,
    config: CalvenClientConfig = DEFAULT_CALVEN_CLIENT_CONFIG,
    correlationId?: string
  ): PresenceClient {
    return new PresenceClient(apiKey, secret, config, correlationId)
  }

  /**
   * Create a new `TimeoffClient` instance
   * @param apiKey The API key to use when authenticating with Calven.
   * @param secret The secret to use when authenticating with Calven.
   * @param config The Calven API client configuration.
   * @param correlationId The correlation ID to use when sending requests to Calven.  This is optional.
   * @returns A new `TimeoffClient` instance.
   */

  static timeoffClient(
    apiKey: string,
    secret: string,
    config: CalvenClientConfig = DEFAULT_CALVEN_CLIENT_CONFIG,
    correlationId?: string
  ): TimeoffClient {
    return new TimeoffClient(apiKey, secret, config, correlationId)
  }
}
