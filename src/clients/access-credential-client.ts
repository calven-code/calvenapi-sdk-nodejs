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
  CalvenAccessCredentialData,
  CalvenAccessCredentialRequest,
  CalvenAccessCredentialResponse,
  CalvenClientConfig,
} from '../types'
import { BaseAuthenticatedClient } from './baseAuthenticatedClient'

/** AccessCredentialClient
 *  This client is used to send access credentials to Calven.
 */

export class AccessCredentialClient extends BaseAuthenticatedClient<
  CalvenAccessCredentialRequest,
  CalvenAccessCredentialResponse
> {
  axios: AxiosInstance

  private static path = 'v1/access-credentials'

  /**
   * Constructor
   * @param apiKey The API key to use when authenticating with Calven.
   * @param secret The secret to use when authenticating with Calven.
   * @param config The config for the Calven client.
   * @param correlationId The correlation ID to use when sending requests to Calven.  This is optional.
   * @returns A new `AccessCredentialClient` instance.
   */

  constructor(
    apiKey: string,
    secret: string,
    config: CalvenClientConfig,
    correlationId?: string
  ) {
    super(apiKey, secret, config, AccessCredentialClient.path, correlationId)
  }

  /**
   * SendTimeOff
   * This method is used to send time off events to Calven.
   * @param timeOffEvents The time off events to send to Calven.
   * @returns A `CalvenTimeOffResponse` instance.
   */

  async sendAccessCredentials(
    data: CalvenAccessCredentialData[]
  ): Promise<CalvenAccessCredentialResponse> {
    const request: CalvenAccessCredentialRequest = {
      data,
    }

    return this.post(request, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
