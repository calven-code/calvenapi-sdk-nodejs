/** Copyright 2023 Calven Pty Ltd

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, 
provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE 
INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY 
SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, 
WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION 
WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

*/

import { CalvenEventResult } from './calven-types'

export interface CalvenAccessCredentialRequest {
  data: CalvenAccessCredentialData[]
}

export interface CalvenAccessCredentialData {
  updateId: string
  username: string
  credentials: CalvenAccessCredential[]
}

export interface CalvenAccessCredential {
  active: boolean
  cardNumber: string
  credentialType: string
  facilityCode?: string
  scanData: string[]
}

export interface CalvenAccessCredentialResponse {
  updateId: string
  result: CalvenAccessCredentialResultType
  message: string
  results: CalvenAccessCredentialResult[]
}

export interface CalvenAccessCredentialResult {
  cardNumber: string
  facilityCode?: string
  result: CalvenAccessCredentialResultType
  message: string
}

export enum CalvenAccessCredentialResultType {
  CARD_UPDATE_FAILED = 'CARD_UPDATE_FAILED',
  OK = 'OK',
  PARTIAL_UPDATE = 'PARTIAL_UPDATE',
  USER_NOT_FOUND = 'USER_NOT_FOUND',
}
