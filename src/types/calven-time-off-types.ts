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

export interface CalvenTimeOffRequest {
  timeOffEvents: CalvenTimeOffEvent[]
}

export interface CalvenTimeOffEvent {
  eventId: string
  email?: string
  uid?: string
  eventType: CalvenTimeOffEventType
  startDate: Date
  endDate: Date
  timeOffType?: CalvenTimeOffType
}

export enum CalvenTimeOffEventType {
  CANCELLED = 'cancelled',
  SCHEDULED = 'scheduled',
}

export enum CalvenTimeOffType {
  HOLIDAY = 'holiday',
  LEAVE = 'leave',
  SICK = 'sick',
}

const timeoffEventTypeMap = new Map<string, CalvenTimeOffEventType>(
  Object.values(CalvenTimeOffEventType).map((v) => [v, v])
)

export function calvenTimeOffEventTypeFromString(
  value: string
): CalvenTimeOffEventType | undefined {
  return timeoffEventTypeMap.get(value)
}

const timeoffTypeMap = new Map<string, CalvenTimeOffType>(
  Object.values(CalvenTimeOffType).map((v) => [v, v])
)

export function calvenTimeOffTypeFromString(
  value: string
): CalvenTimeOffType | undefined {
  return timeoffTypeMap.get(value)
}
export interface CalvenTimeOffResponse {
  timestamp: Date
  results: CalvenEventResult[]
}
