import React, { createElement } from 'react';
import { PaginationTable } from './components/PaginationTable';
import './bootstrap.css';
import { format } from 'date-fns';
const App = () => {
  const data2 = [
    {
      id: 1,
      name: 'A super long line with text that should create line breaks that should create line breaks that should create line breaks that should create line breaks',
      shortName: 'Admin', balance: {
        today: 50,
        yesterday: 100
      }
    },
    {
      id: 2,
      name: 'Administartion module',
      shortName: 'Admin',
      balance: {
        today: 5,
        yesterday: 10
      }
    },
    {
      id: 3,
      name: 'Administartion module',
      shortName: 'Test',
    },
    {
      id: 4,
      name: 'Administartion module',
      shortName: 'Admin',
    },
    {
      id: 5,
      name: 'Administartion module',
      shortName: 'Admin',
    },
    {
      id: 6,
      name: 'Administartion module',
      shortName: 'Admin',
    },
    {
      id: 7,
      name: 'Administartion module',
      shortName: 'Admin',
    },
    {
      id: 8,
      name: 'Administartion module',
      shortName: 'Admin',
    },
    {
      id: 9,
      name: 'Administartion module',
      shortName: 'Admin',
    },
    {
      id: 10,
      name: 'Administartion module',
      shortName: 'Admin',
    },
    {
      id: 11,
      name: 'Administartion module',
      shortName: 'Admin',
    },
  ];

  const data = [
    {
      "logs": {
        "dates": [
          "2022-07-26T14:03:39.738Z",
          "2022-07-26T14:04:50.585Z",
          "2022-07-27T09:38:55.876Z",
          "2022-07-29T08:20:36.314Z",
          "2022-07-29T14:00:32.784Z",
          "2022-07-30T09:58:10.474Z",
          "2022-07-30T16:07:35.924Z",
          "2022-07-31T09:51:28.599Z",
          "2022-08-01T08:17:16.916Z",
          "2022-08-01T13:42:42.255Z",
          "2022-08-02T08:40:04.499Z",
          "2022-08-02T14:13:57.721Z",
          "2022-08-04T07:59:06.041Z",
          "2022-08-08T13:28:40.000Z",
          "2022-08-09T09:18:04.946Z",
          "2022-08-10T07:59:01.839Z",
          "2022-08-10T13:24:32.736Z",
          "2022-08-11T07:52:00.788Z",
          "2022-08-11T16:24:20.503Z",
          "2022-08-12T07:59:56.657Z",
          "2022-08-16T09:03:52.523Z",
          "2022-08-16T09:08:08.505Z",
          "2022-08-16T14:04:37.178Z",
          "2022-08-16T14:22:34.537Z",
          "2022-08-16T14:23:26.252Z",
          "2022-08-16T14:24:11.857Z",
          "2022-08-16T14:29:51.678Z",
          "2022-08-16T15:43:43.440Z",
          "2022-08-16T15:45:04.202Z",
          "2022-08-16T15:47:18.161Z",
          "2022-08-16T15:55:29.141Z",
          "2022-08-16T16:01:51.302Z",
          "2022-08-18T07:48:51.049Z",
          "2022-08-18T09:49:14.453Z",
          "2022-08-18T12:37:18.330Z",
          "2022-08-18T15:55:07.587Z"
        ],
        "count": 35
      },
      "portalSettings": {
        "rightSidebar": true
      },
      "userType": "shield",
      "siteAccess": [
        "600816b8943f700b64dfc0f0",
        "600816c0943f700b64dfc0f1",
        "61237f495ae4ed11881f79d1",
        "607fe4059b383e41f0ff8d6a",
        "615c5a290c62665dc8c244c1",
        "60a0ea5a69e2661a4084c217",
        "61aa2ea9c36df025e431528d",
        "600816a7943f700b64dfc0ee",
        "627a3b2a40894b16104f1feb",
        "61aa2e0f26575853d09ef416",
        "6059ce4d96e4210094467f01",
        "600816b3943f700b64dfc0ef"
      ],
      "groupAccess": [
        "615c3ba33527b27754df0682",
        "61aa2b9026575853d09ef415",
        "615c3bc53527b27754df0683"
      ],
      "featureFlags": [
        {
          "_id": "6124d37be1a91137f0cb7cc6",
          "name": "admin-update-client-bandwidth",
          "description": "Ability to update clients bandwidth",
          "__v": 0,
          "type": "user"
        },
        {
          "_id": "612cb903d680105f38579e6b",
          "name": "admin-floorports-delete-all",
          "description": "Delete all floorports button",
          "__v": 0,
          "type": "user"
        },
        {
          "_id": "613f4abbcbd9d558a084a5a0",
          "name": "admin-delete-client",
          "description": "Deleting client",
          "type": "user",
          "__v": 0
        },
        {
          "_id": "6183a87cd832d008c0b8caf5",
          "name": "admin-delete-client-wizard",
          "description": "admin-delete-client-wizard",
          "type": "user",
          "__v": 0
        },
        {
          "_id": "61a755190224a63218785627",
          "name": "admin-telephony-data",
          "description": "Telephony and Data overview",
          "type": "user",
          "__v": 0
        },
        {
          "_id": "61dc1ac681ebe149d8a2bd05",
          "name": "admin-search-macaddress",
          "description": "admin-search-macaddress",
          "type": "user",
          "__v": 0
        },
        {
          "_id": "61ebe16c824fbd02b8aa3a27",
          "name": "admin-ip-to-integer",
          "description": "admin-ip-to-integer",
          "type": "user",
          "__v": 0
        }
      ],
      "permissions": [],
      "favouriteSites": [
        "60a0ea5a69e2661a4084c217"
      ],
      "_id": "600c15f55f38d813b0dc30ef",
      "username": "jakub.koudela",
      "firstName": "Jakub",
      "lastName": "Koudela",
      "email": "czkoudy@gmail.com",
      "password": "$2a$10$MHdFjh0DzAkvBjpXDeJZfer4JO84OoFyX5eiWVrjApjwaFNOMcIum",
      "createdAt": "2021-01-23T12:26:29.242Z",
      "__v": 0,
      "lastLog": [
        "2021-12-23T14:29:25.016Z",
        "2021-12-23T14:30:06.960Z",
        "2021-12-23T14:55:20.971Z",
        "2021-12-27T12:05:28.942Z",
        "2021-12-29T11:16:25.696Z",
        "2021-12-30T10:19:17.342Z",
        "2021-12-31T09:34:33.718Z",
        "2021-12-31T14:30:14.035Z",
        "2022-01-04T10:39:19.906Z",
        "2022-01-04T16:48:07.690Z",
        "2022-01-05T08:53:28.814Z",
        "2022-01-05T15:26:04.754Z",
        "2022-01-06T08:29:28.999Z",
        "2022-01-06T14:18:12.394Z",
        "2022-01-07T09:52:56.865Z",
        "2022-01-07T17:58:30.838Z",
        "2022-01-08T09:11:58.283Z",
        "2022-01-08T14:49:25.562Z",
        "2022-01-09T09:28:32.115Z",
        "2022-01-10T09:58:39.589Z",
        "2022-01-10T15:05:58.345Z",
        "2022-01-11T10:59:01.385Z",
        "2022-01-12T10:59:23.095Z",
        "2022-01-12T16:02:45.760Z",
        "2022-01-13T09:20:46.888Z",
        "2022-01-13T14:50:55.425Z",
        "2022-01-14T09:17:43.142Z",
        "2022-01-14T15:21:16.799Z",
        "2022-01-15T11:59:39.240Z",
        "2022-01-16T11:12:15.539Z",
        "2022-01-17T08:35:49.870Z",
        "2022-01-17T14:05:27.469Z",
        "2022-01-18T08:23:07.896Z",
        "2022-01-18T14:59:17.249Z",
        "2022-01-20T09:45:50.247Z",
        "2022-01-20T11:39:38.366Z",
        "2022-01-20T12:36:56.102Z",
        "2022-01-20T17:37:59.747Z",
        "2022-01-21T10:11:35.611Z",
        "2022-01-21T16:44:22.655Z",
        "2022-01-22T09:56:06.386Z",
        "2022-01-22T10:08:48.099Z",
        "2022-01-24T11:54:37.684Z",
        "2022-01-24T15:07:54.104Z",
        "2022-01-25T08:52:04.467Z",
        "2022-01-25T14:52:47.337Z",
        "2022-01-26T09:13:28.363Z",
        "2022-01-26T14:59:48.116Z",
        "2022-01-27T08:55:33.141Z",
        "2022-01-27T14:57:49.509Z",
        "2022-01-28T09:50:53.701Z",
        "2022-01-29T10:32:29.636Z",
        "2022-01-31T08:37:03.385Z",
        "2022-01-31T16:48:10.967Z",
        "2022-02-01T09:00:35.593Z",
        "2022-02-01T14:48:06.268Z",
        "2022-02-02T08:46:25.540Z",
        "2022-02-06T11:10:57.589Z",
        "2022-02-07T14:13:58.120Z",
        "2022-02-07T19:16:03.372Z",
        "2022-02-08T08:28:44.269Z",
        "2022-02-08T14:17:38.800Z",
        "2022-02-12T11:28:24.281Z",
        "2022-02-12T16:18:44.019Z",
        "2022-02-12T16:19:37.789Z",
        "2022-02-13T10:19:01.470Z",
        "2022-02-14T09:41:50.822Z",
        "2022-02-14T15:02:16.070Z",
        "2022-02-15T08:46:28.133Z",
        "2022-02-15T14:35:13.638Z",
        "2022-02-16T09:03:20.806Z",
        "2022-02-17T09:53:18.182Z",
        "2022-02-17T15:01:08.367Z",
        "2022-02-18T10:50:39.569Z",
        "2022-02-18T16:36:23.004Z",
        "2022-02-20T10:31:22.673Z",
        "2022-02-21T15:27:36.172Z",
        "2022-02-22T09:07:06.333Z",
        "2022-02-22T15:48:54.550Z",
        "2022-02-23T08:58:04.083Z",
        "2022-02-25T09:51:40.667Z",
        "2022-02-25T11:57:49.064Z",
        "2022-02-25T17:02:03.591Z",
        "2022-03-03T09:18:49.411Z",
        "2022-03-04T14:19:46.691Z",
        "2022-03-07T09:41:53.893Z",
        "2022-03-07T15:25:29.635Z",
        "2022-03-08T09:24:13.098Z",
        "2022-03-08T14:59:43.966Z",
        "2022-03-09T08:51:20.172Z",
        "2022-03-09T14:03:45.160Z",
        "2022-03-10T08:37:52.399Z",
        "2022-03-10T14:12:11.273Z",
        "2022-03-11T09:40:12.016Z",
        "2022-03-11T16:19:11.534Z",
        "2022-03-12T10:12:54.464Z",
        "2022-03-12T15:35:08.280Z",
        "2022-03-14T16:08:11.481Z",
        "2022-03-15T09:33:59.208Z",
        "2022-03-15T14:51:24.913Z",
        "2022-03-16T09:28:05.826Z",
        "2022-03-17T08:45:39.467Z",
        "2022-03-18T09:21:00.479Z",
        "2022-03-18T15:25:39.823Z",
        "2022-03-20T10:43:56.881Z",
        "2022-03-21T08:58:20.600Z",
        "2022-03-21T15:00:02.802Z",
        "2022-03-22T09:26:32.714Z",
        "2022-03-27T09:18:18.832Z",
        "2022-03-28T08:41:37.427Z",
        "2022-03-28T14:04:51.025Z",
        "2022-03-29T11:01:01.615Z",
        "2022-03-29T16:51:06.997Z",
        "2022-03-30T09:02:40.366Z",
        "2022-03-31T09:46:29.911Z",
        "2022-03-31T10:18:05.198Z",
        "2022-03-31T13:46:08.805Z",
        "2022-04-01T09:43:49.279Z",
        "2022-05-03T09:47:54.380Z",
        "2022-05-03T15:20:55.618Z",
        "2022-05-05T15:30:21.357Z",
        "2022-05-06T13:25:49.832Z",
        "2022-05-10T10:06:00.336Z",
        "2022-05-10T15:56:10.907Z",
        "2022-05-11T12:59:19.534Z",
        "2022-05-12T14:13:49.498Z",
        "2022-05-12T14:15:40.819Z",
        "2022-05-12T14:16:08.745Z",
        "2022-05-12T14:16:31.236Z",
        "2022-05-12T14:16:49.452Z",
        "2022-05-12T14:18:08.642Z",
        "2022-05-12T14:18:29.045Z",
        "2022-05-12T14:19:02.475Z",
        "2022-05-12T14:21:01.826Z",
        "2022-05-12T14:22:09.986Z",
        "2022-05-12T14:23:46.760Z",
        "2022-05-12T14:24:12.148Z",
        "2022-05-12T14:25:12.406Z",
        "2022-05-12T14:25:54.822Z",
        "2022-05-12T14:31:38.500Z",
        "2022-05-12T14:43:33.178Z",
        "2022-05-12T14:46:07.428Z",
        "2022-05-12T14:53:28.742Z",
        "2022-05-12T14:55:22.059Z",
        "2022-05-12T15:18:17.997Z",
        "2022-05-12T15:20:02.746Z",
        "2022-05-12T15:20:06.312Z",
        "2022-05-12T15:20:07.635Z",
        "2022-05-12T15:20:28.815Z",
        "2022-05-12T15:21:09.830Z",
        "2022-05-12T15:21:27.523Z",
        "2022-05-12T15:22:24.193Z",
        "2022-05-12T15:22:43.674Z",
        "2022-05-13T07:59:20.973Z",
        "2022-05-13T09:01:29.920Z",
        "2022-05-13T10:45:46.310Z",
        "2022-05-17T11:33:51.788Z",
        "2022-05-17T11:51:16.840Z",
        "2022-05-17T13:42:37.429Z",
        "2022-05-17T13:46:32.050Z",
        "2022-05-17T13:48:55.188Z",
        "2022-05-18T08:50:41.461Z",
        "2022-05-18T09:05:29.622Z",
        "2022-05-18T13:11:33.054Z",
        "2022-05-19T08:58:24.728Z",
        "2022-05-19T10:55:58.891Z",
        "2022-05-20T08:29:18.684Z",
        "2022-05-20T13:54:46.858Z",
        "2022-05-22T13:42:59.668Z",
        "2022-05-23T09:26:54.487Z",
        "2022-06-06T15:25:45.586Z",
        "2022-06-08T13:01:11.991Z",
        "2022-06-08T16:04:36.862Z",
        "2022-06-09T08:17:34.137Z",
        "2022-06-09T13:29:27.269Z",
        "2022-06-10T08:11:14.778Z",
        "2022-06-10T10:29:44.629Z",
        "2022-06-10T11:48:15.591Z",
        "2022-06-11T11:38:33.553Z",
        "2022-06-13T07:46:05.352Z",
        "2022-06-13T08:49:43.347Z",
        "2022-06-13T13:55:50.017Z",
        "2022-06-14T08:06:24.841Z",
        "2022-06-14T09:37:37.642Z",
        "2022-06-15T08:12:12.393Z",
        "2022-06-15T13:19:49.854Z",
        "2022-06-15T13:19:50.032Z",
        "2022-06-16T08:07:21.774Z",
        "2022-06-16T14:03:06.901Z",
        "2022-06-17T07:44:29.560Z",
        "2022-06-17T12:49:59.139Z",
        "2022-06-18T13:11:15.422Z",
        "2022-06-18T14:19:50.844Z",
        "2022-06-20T07:57:08.827Z",
        "2022-06-20T15:44:46.563Z",
        "2022-06-21T07:41:50.741Z",
        "2022-06-21T16:26:05.532Z",
        "2022-06-22T07:52:10.979Z",
        "2022-06-22T13:17:12.324Z",
        "2022-06-23T07:57:01.227Z",
        "2022-06-23T13:18:56.504Z",
        "2022-06-24T08:14:53.026Z",
        "2022-06-24T13:38:11.319Z",
        "2022-06-25T14:16:59.943Z",
        "2022-06-26T12:37:13.716Z",
        "2022-06-27T07:30:19.539Z",
        "2022-06-28T07:42:31.997Z",
        "2022-06-28T14:59:41.685Z",
        "2022-06-30T09:39:49.077Z",
        "2022-07-01T08:14:31.789Z",
        "2022-07-01T13:36:50.199Z",
        "2022-07-04T08:00:33.519Z",
        "2022-07-04T13:53:10.958Z",
        "2022-07-04T13:54:37.171Z",
        "2022-07-05T07:58:44.870Z",
        "2022-07-05T13:06:04.665Z",
        "2022-07-06T07:59:03.112Z",
        "2022-07-06T12:53:39.914Z",
        "2022-07-07T07:15:16.924Z",
        "2022-07-07T12:20:23.225Z",
        "2022-07-08T12:40:53.020Z",
        "2022-07-08T13:51:14.225Z",
        "2022-07-08T17:42:33.249Z",
        "2022-07-09T13:00:03.402Z",
        "2022-07-09T20:14:32.303Z",
        "2022-07-18T07:56:42.808Z",
        "2022-07-18T13:47:47.672Z",
        "2022-07-19T07:39:57.203Z",
        "2022-07-19T14:34:49.449Z",
        "2022-07-20T08:20:46.621Z",
        "2022-07-20T13:59:04.855Z",
        "2022-07-21T08:10:14.880Z",
        "2022-07-21T14:16:12.998Z",
        "2022-07-22T08:39:34.399Z",
        "2022-07-22T13:48:06.250Z",
        "2022-07-22T13:59:14.154Z",
        "2022-07-23T14:30:42.179Z",
        "2022-07-23T22:39:27.912Z",
        "2022-07-24T09:55:57.248Z",
        "2022-07-25T08:44:55.309Z",
        "2022-07-25T14:14:02.747Z",
        "2022-07-26T07:55:41.743Z",
        "2022-07-26T13:57:55.576Z"
      ]
    },
    {
      "logs": {
        "dates": [],
        "count": 0
      },
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [
        "600816b8943f700b64dfc0f0",
        "600816a7943f700b64dfc0ee"
      ],
      "groupAccess": [
        "615c3ba33527b27754df0682"
      ],
      "featureFlags": [],
      "permissions": [
        "60898a756d2ae93f743aebf7"
      ],
      "favouriteSites": [],
      "_id": "60ba396fb1e35b565808f597",
      "lastLog": [],
      "username": "reception.leeds",
      "firstName": "Reception",
      "lastName": "Leeds",
      "email": "cc3@lll.com",
      "password": "$2a$10$G1zJAMCOccg9EXNMK4DKHukEIftVrNvlZvPR.G7zL.yEzXKXAByrq",
      "createdAt": "2021-06-04T14:32:15.152Z",
      "__v": 0
    },
    {
      "logs": {
        "dates": [],
        "count": 0
      },
      "portalSettings": {
        "rightSidebar": true
      },
      "userType": "admin",
      "siteAccess": [
        "61237f495ae4ed11881f79d1",
        "60a0ea5a69e2661a4084c217"
      ],
      "groupAccess": [
        "615c3ba33527b27754df0682"
      ],
      "featureFlags": [],
      "permissions": [
        "61829ad266f0ff36da9cf1a2",
        "6089832e6d2ae93f743aebbb"
      ],
      "favouriteSites": [
        "60a0ea5a69e2661a4084c217"
      ],
      "_id": "61237e1d5ae4ed11881f79d0",
      "lastLog": [
        "2022-01-21T12:23:18.290Z",
        "2022-01-21T16:35:13.203Z",
        "2022-01-22T14:26:28.127Z",
        "2022-01-24T11:04:47.653Z",
        "2022-01-24T11:05:38.034Z",
        "2022-01-24T11:07:09.747Z",
        "2022-01-24T11:08:05.683Z",
        "2022-01-24T11:13:52.580Z",
        "2022-01-24T11:14:34.898Z",
        "2022-01-24T11:15:19.841Z",
        "2022-01-24T11:26:26.212Z",
        "2022-01-24T12:16:23.791Z",
        "2022-01-24T12:17:31.312Z",
        "2022-02-01T16:36:36.923Z",
        "2022-02-01T16:38:59.188Z",
        "2022-06-13T09:47:16.645Z",
        "2022-06-23T10:39:43.890Z",
        "2022-07-07T13:05:02.748Z",
        "2022-07-22T15:53:12.271Z"
      ],
      "username": "demo.user",
      "firstName": "demo",
      "lastName": "user",
      "email": "development@silver-lining.com",
      "password": "$2a$10$tH84zPYoTKhMYzBwNKdK7ORjc4fu4s2/5bL7sr97D5CBWedVGY6F.",
      "createdAt": "2021-08-23T10:53:17.546Z",
      "__v": 0
    },
    {
      "logs": {
        "dates": [],
        "count": 0
      },
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "super",
      "siteAccess": [
        "60a0ea5a69e2661a4084c217"
      ],
      "groupAccess": [
        "615c3ba33527b27754df0682"
      ],
      "featureFlags": [
        {
          "_id": "6141f219e35f5346f87e68a6",
          "name": "admin-bandwidth-overview",
          "description": "Bandwidth oveview",
          "type": "user",
          "__v": 0
        }
      ],
      "permissions": [],
      "favouriteSites": [],
      "_id": "614203ef8f1db61080960c19",
      "lastLog": [],
      "username": "lucy.test",
      "firstName": "Lucy",
      "lastName": "Test",
      "email": "sss@kkk.com",
      "password": "$2a$10$7O42IuW5CCtNHspOGij5v.oX3duoZI021YgLjvkvrJbYVYKIrIYWS",
      "createdAt": "2021-09-15T14:32:15.969Z",
      "__v": 0
    },
    {
      "logs": {
        "dates": [],
        "count": 0
      },
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [
        "615c5a290c62665dc8c244c1"
      ],
      "groupAccess": [
        "615c3ba33527b27754df0682",
        "615c3bc53527b27754df0683"
      ],
      "featureFlags": [],
      "permissions": [],
      "favouriteSites": [],
      "_id": "614b35b359ac6e4274aac144",
      "lastLog": "2021-10-08T10:57:02.587Z",
      "username": "test.tester",
      "firstName": "Test",
      "lastName": "Tester",
      "email": "test@test.com",
      "password": "$2a$10$3xKXULguJMCj8kTGVjwek.ET4xY2uH3UkK9R.sE.4XcIxj060KWJO",
      "createdAt": "2021-09-22T13:54:59.169Z",
      "__v": 0
    },
    {
      "logs": {
        "dates": [],
        "count": 0
      },
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [
        "60a0ea5a69e2661a4084c217",
        "627a3b2a40894b16104f1feb"
      ],
      "groupAccess": [
        "615c3ba33527b27754df0682"
      ],
      "featureFlags": [
        {
          "_id": "61dc1ac681ebe149d8a2bd05",
          "name": "admin-search-macaddress",
          "description": "admin-search-macaddress",
          "type": "user",
          "__v": 0
        }
      ],
      "permissions": [
        "61efd3ec230d1c0fb4cd4f46"
      ],
      "favouriteSites": [],
      "_id": "61bb4fd1c19cee44ccd04882",
      "lastLog": [
        "2022-01-22T13:42:44.955Z",
        "2022-01-22T13:43:19.732Z",
        "2022-01-22T13:44:22.965Z",
        "2022-01-22T13:51:43.208Z",
        "2022-01-22T13:58:28.965Z",
        "2022-01-25T12:22:12.778Z",
        "2022-01-25T12:27:22.651Z",
        "2022-01-25T12:43:46.275Z",
        "2022-01-25T12:48:33.755Z",
        "2022-01-25T14:12:25.091Z",
        "2022-01-27T11:18:26.538Z",
        "2022-03-27T09:50:08.782Z",
        "2022-07-21T14:50:55.213Z",
        "2022-07-21T15:01:55.766Z",
        "2022-07-21T15:09:01.221Z"
      ],
      "username": "czkoudy",
      "firstName": "Jakub",
      "lastName": "Koudela",
      "email": "jakubk@fastmail.com",
      "password": "$2a$10$NcuiXg1w5IwjfTQDAgj/puNlVWX2VGqWFbOrDJHZ4nhdhdTtv0ObC",
      "createdAt": "2021-12-16T14:40:17.800Z",
      "__v": 0
    },
    {
      "logs": {
        "dates": [],
        "count": 0
      },
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [],
      "groupAccess": [],
      "featureFlags": [],
      "permissions": [],
      "favouriteSites": [],
      "_id": "61d5a2785ecc21324c55d5ab",
      "lastLog": [],
      "username": "test.site",
      "firstName": "Test",
      "lastName": "Site",
      "email": "test@tedst.com",
      "password": "$2a$10$PhsVNZUAttPsHCI2dabf5OtnvB2rQ0Rwd553Kd/vpKBmD.Z26gIxy",
      "createdAt": "2022-01-05T13:51:52.213Z",
      "__v": 0
    }
  ]

  const handleOnRowClick = (id) => {
    console.log(id);
  };

  const handleOnRowClick22 = (result) => {
    console.log(result);
  };

  const bytesToMB = (bytes) => {
    if (typeof bytes === undefined) {
      return "jjj"
    } else {
      return bytes
    }
    // if (bytes) {


    //   if (typeof bytes === 'number') {
    //     let result = parseFloat(bytes / 1024 / 1024);
    //     result = Math.round(result);

    //     if (result > 1000) {
    //       return (result / 1024).toFixed(2) + ' GB';
    //     } else {
    //       return result + ' MB';
    //     }
    //   } else {
    //     return 0 + ' MB';
    //   }
    // } else {
    //   return 0 + ' MB';

    // }
  };

  function millisecondsToDate(seconds) {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor(((seconds % 86400) % 3600) / 60);
    return `${days > 0 ? `${days} d ` : ''}${hours > 0 ? `${hours} h ` : ''}${minutes > 0 ? `${minutes} m ` : ''}`;
  }

  // const header = [{ label: 'ID', onRowClick: 'id' }, { label: 'Long Name' }, { label: 'Short Name', title: 'Last Name' }, { label: 'Balance', title: 'Balance' }];
  // const body = [{ key: 'id' }, { key: 'name', title: 'First Name' }, { key: 'shortName' }, { key: 'balance.today', useDot: true }];
  const formatUserType = (type) => {
    return type
  };


  const formatLastLogs = (log) => {
    if (Array.isArray(log)) {
      if (log?.length === 0) return 'Never Logged In';
      const sortedArrayOfDates = log?.sort((a, b) => (a < b ? 1 : -1));
      const lastLog = sortedArrayOfDates[0];
      if (!lastLog) return 'Never Logged In';
      const formatedDate = format(new Date(lastLog), 'dd MMM yyyy, HH:mm');
      if (formatedDate === '01 Jan 1970, 01:00') {
        return 'Never Logged In';
      } else {
        return formatedDate;
      }
    }
  };

  const formatTotalLogs = (logs) => {
    if (logs) {
      return logs + ' x';
    }

    return 0 + 'x';
  };

  const header = [{ label: 'Username', onRowClick: 'username', width: '200px' }, { label: 'First Name', width: '150px' }, { label: 'Last Name', width: '150px' }, { label: 'Email' }, { label: 'user type', width: '50px' }, { label: 'Last Log', width: '150px' }, { label: 'Total', width: '60px' }];

  const body = [{ key: 'username' }, { key: 'firstName' }, { key: 'lastName' }, { key: 'email' }, { key: 'userType' }, { key: 'logs.dates', function: formatLastLogs }, { key: 'logs.count', function: formatTotalLogs }];
  const options = {
    // className: 'table table-sm table-hover table-striped',

    // onRowClick: {
    //   function: handleOnRowClick,
    //   key: 'id',
    // },
    perPage: 2,
    // emptyRows: true,
    // lengthChange: true,
    search: true,
    sort: true,
    // info: {
    //   text: "entries"
    // }
    // selection: {
    //   backgroundColor: 'rgba(255, 165, 0, 0.5)',
    //   key: '_id',
    //   info: true,
    //   // className: options?.selection?.className || '',
    //   maxCount: 5,
    //   buttons: [
    //     {
    //       className: 'btn btn-sm btn-danger',
    //       onClickFunction: (data) => handleDeleteSelected(data),
    //       label: 'Delete Selected',
    //     },
    //   ],
    // },
  };

  return (
    <div style={{ width: '500px' }}>
      <PaginationTable data={data} header={header} body={body} options={options} />
    </div>
  );
};

export default App;
