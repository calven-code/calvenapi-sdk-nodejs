/** Copyright 2023 Calven Pty Ltd

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, 
provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE 
INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY 
SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, 
WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION 
WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

*/

import { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import {
  CALVEN_API_BASE,
  CalvenClientConfig,
  CalvenTimeOffEvent,
  CalvenTimeOffRequest,
  CalvenTimeOffResponse,
} from '../types'
import { BaseAuthenticatedClient } from './baseAuthenticatedClient'

/** TimeoffClient
 *  This client is used to send time off events to Calven.
 */

export class TimeoffClient extends BaseAuthenticatedClient<
  CalvenTimeOffRequest,
  CalvenTimeOffResponse
> {
  axios: AxiosInstance

  private static path = 'v1/timeoff'

  /**
   * Constructor
   * @param apiKey The API key to use when authenticating with Calven.
   * @param secret The secret to use when authenticating with Calven.
   * @param config The config for the Calven client.
   * @param correlationId The correlation ID to use when sending requests to Calven.  This is optional.
   * @returns A new `TimeoffClient` instance.
   */

  constructor(
    apiKey: string,
    secret: string,
    config: CalvenClientConfig,
    correlationId?: string
  ) {
    super(apiKey, secret, config, TimeoffClient.path, correlationId)
  }

  /**
   * SendTimeOff
   * This method is used to send time off events to Calven.
   * @param timeOffEvents The time off events to send to Calven.
   * @returns A `CalvenTimeOffResponse` instance.
   */

  async sendTimeOff(
    timeOffEvents: CalvenTimeOffEvent[]
  ): Promise<CalvenTimeOffResponse> {
    const request: CalvenTimeOffRequest = {
      timeOffEvents,
    }

    return this.post(request)
  }
}
