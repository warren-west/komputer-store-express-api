# Norroff Assignment Express Server API
A RESTful API using ExpressJS to serve JSON data for the Noroff assignments.

## Endpoints
### `GET /`
Retrieves the index page (JSON formatted).
```json
{
    "status": "Success",
    "message": "Welcome to the Norroff API!",
    "endpoints": [
        "GET '/computers': Returns all computers in the database.",
        "GET '/computers/{:id}': Returns a single computer where the ID matches.",
        "GET '/guitars': Returns all guitars in the database.",
        "GET '/guitars/{:id}': Returns a single guitar where the ID matches."
    ]
}
```

### `GET /computers`
Retrieves a list of computers.
```json
[
    {
        "id": 1,
        "title": "Classic Notebook",
        "description": "A little old, but turns on.",
        "specs": [
            "Has a screen",
            "Keyboard works, mostly",
            "32MB Ram (Not upgradable)",
            "6GB Hard Disk",
            "Comes with Floppy Disk Reader (Free) ### Requires cable",
            "Good exercise to carry"
        ],
        "price": 200,
        "stock": 1,
        "active": true,
        "image": "https://vignette.wikia.nocookie.net/ipod/images/c/c1/Mac_11.jpg"
    },
    {
        ...
    },
]

```
### `GET /computers/1`
Retrieves a computer by ID.
```json
{
    "id": 1,
    "title": "Classic Notebook",
    "description": "A little old, but turns on.",
    "specs": [
        "Has a screen",
        "Keyboard works, mostly",
        "32MB Ram (Not upgradable)",
        "6GB Hard Disk",
        "Comes with Floppy Disk Reader (Free) - Requires cable",
        "Good exercise to carry"
    ],
    "price": 200,
    "stock": 1,
    "active": true,
    "image": "https://vignette.wikia.nocookie.net/ipod/images/c/c1/Mac_11.jpg"
}
```

### `GET /guitars`
Retrieves a list of guitars.
```json
[
    {
        "id": "916E597F-C629-4306-BD31-BBF767D9A8AA",
        "model": "Telecaster Thinline Original '60s",
        "manufacturer": "Fender",
        "bodyType": "Semi-Hollow",
        "materials": {
            "neck": "Maple",
            "fretboard": "Maple (Coated)",
            "body": "Mahogany"
        },
        "strings": 6,
        "image": "https://www.fmicassets.com/Damroot/ZoomJpg/10001/0110172834_gtr_frt_001_rr.jpg"
    },
    {
        ...
    },
]
```
### `GET /computers/1`
Retrieves a computer by ID.
```json
{
    "id": "916E597F-C629-4306-BD31-BBF767D9A8AA",
    "model": "Telecaster Thinline Original '60s",
    "manufacturer": "Fender",
    "bodyType": "Semi-Hollow",
    "materials": {
        "neck": "Maple",
        "fretboard": "Maple (Coated)",
        "body": "Mahogany"
    },
    "strings": 6,
    "image": "https://www.fmicassets.com/Damroot/ZoomJpg/10001/0110172834_gtr_frt_001_rr.jpg"
},
```

## Error Responses
If the queried ID does not exist, an error 404 is returned.

```json
{
    "status": "Error 404",
    "message": "Computer with id: 8 not found!"
}
```

If a request is sent to an endpoint that does not exist, an error 404 is returned.

```json
{
    "status": "Error 404",
    "message": "GET /products does not exist!"
}
```

**⚠️ Note:** No `POST` functionality exists. You cannot add, edit, or delete computer data. It is read only.

```json
{
    "status": "Error 404",
    "message": "POST /computers does not exist!"
}
```

## 🔴 Live API
The service is currently hosted on [Render](https://render.com). The base URL you need to prefix your requests with is `https://komputer-store-express-api.onrender.com`, for example: https://komputer-store-express-api.onrender.com/computers.

## License

[MIT](https://choosealicense.com/licenses/mit/)

&copy; Noroff 2025 | Warren West (@warren-west)
