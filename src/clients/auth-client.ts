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
import { BaseClient } from './baseClient'
import {
  CalvenApiTokenRequest,
  CalvenApiTokenResponse,
  CalvenClientConfig,
} from '../types'
import * as crypto from 'crypto'

export class AuthClient extends BaseClient<
  CalvenApiTokenRequest,
  CalvenApiTokenResponse
> {
  axios: AxiosInstance

  private static path = 'v1/auth'

  private token: CalvenApiTokenResponse | undefined

  constructor(
    private readonly apiKey: string,
    private readonly secret: string,
    config: CalvenClientConfig,
    correlationId?: string
  ) {
    super(config, AuthClient.path, correlationId)
  }

  async getToken(): Promise<CalvenApiTokenResponse> {
    const timestamp = Math.floor(Date.now() / 1000)
    const hash = this.generateHash(this.apiKey, this.secret, timestamp)

    const request: CalvenApiTokenRequest = {
      apiKey: this.apiKey,
      timestamp,
      hash,
    }

    const result = await this.post(request)
    return result
  }

  private generateHash(
    apiKey: string,
    apiSecret: string,
    timestamp: number
  ): string {
    const hash = crypto
      .createHmac('sha256', apiSecret)
      .update(apiKey + timestamp)
      .digest('hex')

    return hash
  }
}
