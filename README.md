# Calven API Client Library

This library provides clients for the Calven API.

## Installation

```bash
npm install @calven-code/calvenapi
```

## Usage

The library provides clients for the following Calven API services:
* Occupancy events
* Presence events
* Timeoff notification events

The library exposes the `CalvenAPI` class, which provides static factory methods for creating clients for the above services.

Each method accepts an API Key and an API key secret.  You can optionally provide the base URL for the Calven API.  If you do not provide a base URL, the client will use the default Calven API URL.

### Occupancy client

```typescript
import { CalvenAPI, CalvenOccupancyEvent, CalvenLocationType } from '@calven-code/calvenapi'
import {v4 as uuidv4} from 'uuid'

const occupancyClient = CalvenAPI.occupancyClient(apiKey,apiSecret)

const occupancyEvent: CalvenOccupancyEvent = {
  eventId: uuidv4(),
  timestamp: new Date(),
  locationId: 'DF253A05-573C-4A9F-BFF8-64795029572D',
  locationType: CalvenLocationType.LOCATION,
  occupied: true,
  occupancy: 5,
}

const occupancyResult = await occupancyClient.sendOccupancy('my-source-id',[occupancyEvent])
```

### Presence client

```typescript
import { CalvenClient, CalvenPresenceEvent, CalvenLocationType } from '@calven-code/client'
import {v4 as uuidv4} from 'uuid'

const presenceClient = CalvenClient.presenceClient(apiKey,apiSecret)

const presenceEvent: CalvenPresenceEvent = {
  eventId: uuidv4(),
  timestamp: new Date(),
  sourceUserId:'1234',
  userEmail:'Mary.Jones@example.com',
  locationId: 'DF253A05-573C-4A9F-BFF8-64795029572D',
  locationType: CalvenLocationType.LOCATION
}

const presenceResult = await presenceClient.sendPresence('my-source-id',[presenceEvent])
```

### Timeoff client

```typescript
import { CalvenClient, CalvenTimeOffEvent, CalvenTimeOffEventType } from '@calven-code/client'
import {v4 as uuidv4} from 'uuid'

const timeoffClient = CalvenClient.timeoffClient(apiKey,apiSecret)

const timeOffEvent: CalvenTimeOffEvent = {
  eventId:uuidv4(),
  startDate: new Date('02-26-2023'),
  endDate: new Date('02-27-2023'),
  email:'Mary.Jones@example.com',
  eventType: CalvenTimeOffEventType.SCHEDULED,
  timeOffType: CalvenTimeOffType.LEAVE
}

const timeOffResult = await timeoffClient.sendTimeoff([timeOffEvent])
```

## Endpoint and region selection

The Calven API is available in multiple regions.  You can specify the region to use by passing an optional `CalvenClientConfig` when
creating a client.  If you do not specify a region, the client will use the default region, which is the US.

For example, to select the Austrialian region:

```typescript
import { CalvenAPIRegion, CalvenClient, CalvenLocationType, CalvenPresenceEvent, } from '@calven-code/client'

const presenceClient = CalvenClient.presenceClient(apiKey,apiSecret, { region: CalvenAPIRegion.AU})
```

You can also pass a `baseUrl` in the `CalvenClientConfig` to specify a custom Calven API URL.  The default value
is the production Calven endpoint.
