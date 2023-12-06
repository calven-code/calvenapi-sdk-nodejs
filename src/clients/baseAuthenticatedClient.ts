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
  CalvenApiTokenResponse,
  CalvenClientConfig,
  CalvenTimeOffRequest,
  CalvenTimeOffResponse,
} from '../types'
import { AuthClient } from './auth-client'

export class BaseAuthenticatedClient<T, R> extends BaseClient<T, R> {
  axios: AxiosInstance

  private token?: CalvenApiTokenResponse

  constructor(
    private readonly apiKey: string,
    private readonly secret: string,
    config: CalvenClientConfig,
    path: string,
    correlationId?: string
  ) {
    super(config, path, correlationId)
    this.axios.interceptors.request.use(
      (c) => this.refreshToken(c),
      (error) => {
        return Promise.reject(error)
      },
      { runWhen: (c) => this.checkToken(c) }
    )
  }

  checkToken(config: InternalAxiosRequestConfig): boolean {
    return !this.token || this.token.expiration < Date.now()
  }

  async refreshToken(
    config: InternalAxiosRequestConfig
  ): Promise<InternalAxiosRequestConfig> {
    const authClient = new AuthClient(
      this.apiKey,
      this.secret,
      this.config,
      this.correlationId
    )

    this.token = await authClient.getToken()

    return config
  }

  async addHeaders(
    config: InternalAxiosRequestConfig
  ): Promise<InternalAxiosRequestConfig> {
    if (this.correlationId) {
      config.headers.correlationId = this.correlationId
    }

    return {
      ...config,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      headers: {
        Authorization: `Bearer ${this.token!.token}`,
        'content-type': 'application/json',
        ...config.headers,
      },
    }
  }
}
