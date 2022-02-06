import React, { createElement } from 'react';
import { PaginationTable } from './components/PaginationTable';
import './bootstrap.css';
import { format } from 'date-fns';
const App = () => {
  const data = [
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
    // {
    //   id: 3,
    //   name: 'Administartion module',
    //   shortName: 'Test',
    // },
    // {
    //   id: 4,
    //   name: 'Administartion module',
    //   shortName: 'Admin',
    // },
    // {
    //   id: 5,
    //   name: 'Administartion module',
    //   shortName: 'Admin',
    // },
    // {
    //   id: 6,
    //   name: 'Administartion module',
    //   shortName: 'Admin',
    // },
    // {
    //   id: 7,
    //   name: 'Administartion module',
    //   shortName: 'Admin',
    // },
    // {
    //   id: 8,
    //   name: 'Administartion module',
    //   shortName: 'Admin',
    // },
    // {
    //   id: 9,
    //   name: 'Administartion module',
    //   shortName: 'Admin',
    // },
    // {
    //   id: 10,
    //   name: 'Administartion module',
    //   shortName: 'Admin',
    // },
    // {
    //   id: 11,
    //   name: 'Administartion module',
    //   shortName: 'Admin',
    // },
  ];

  const wifiData =
    [
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1633279548,
        "latest_assoc_time": 1633279553,
        "oui": "Ubiquiti",
        "user_id": "61dccb77afc64b6fd8d452cc",
        "mac": "80:2a:a8:4e:f1:5e",
        "is_guest": false,
        "first_seen": 1641859959,
        "last_seen": 1641922729,
        "is_wired": true,
        "hostname": "Ops-Glass-Office",
        "_id": "61dccb77afc64b6fd8d452cc",
        "_uptime_by_usw": 8643181,
        "_last_seen_by_usw": 1641922729,
        "_is_guest_by_usw": false,
        "sw_mac": "f0:9f:c2:06:40:9b",
        "sw_depth": 1,
        "sw_port": 34,
        "network": "SLData",
        "network_id": "5f43c56eafc64b1d080e9bc8",
        "ip": "10.10.11.125",
        "satisfaction": 100,
        "uptime": 8643181,
        "wired-tx_bytes": 372507326,
        "wired-rx_bytes": 10183706869,
        "wired-tx_packets": 4446619,
        "wired-rx_packets": 7702511,
        "wired-tx_bytes-r": 5856,
        "wired-rx_bytes-r": 158432
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1635787655,
        "latest_assoc_time": 1641889560,
        "oui": "SamsungE",
        "user_id": "61dccb6aafc64b6fd8d452a5",
        "mac": "54:bd:79:d0:eb:b6",
        "is_guest": false,
        "first_seen": 1641859946,
        "last_seen": 1641922739,
        "is_wired": false,
        "hostname": "Samsung",
        "_id": "61dccb6aafc64b6fd8d452a5",
        "_uptime_by_uap": 33184,
        "_last_seen_by_uap": 1641922739,
        "_is_guest_by_uap": false,
        "ap_mac": "b4:fb:e4:96:52:26",
        "channel": 48,
        "radio": "na",
        "radio_name": "wifi1",
        "essid": "Silver Lining",
        "bssid": "b4:fb:e4:98:52:26",
        "powersave_enabled": false,
        "is_11r": false,
        "ccq": 333,
        "rssi": 39,
        "noise": -100,
        "signal": -57,
        "tx_rate": 300000,
        "rx_rate": 300000,
        "tx_power": 40,
        "idletime": 912,
        "ip": "10.10.15.146",
        "dhcpend_time": 310,
        "satisfaction": 100,
        "anomalies": 0,
        "vlan": 0,
        "radio_proto": "ac",
        "uptime": 6135084,
        "tx_bytes": 76439488,
        "rx_bytes": 42331495,
        "tx_packets": 313761,
        "tx_retries": 50132,
        "wifi_tx_attempts": 277766,
        "rx_packets": 332709,
        "bytes-r": 1,
        "tx_bytes-r": 0,
        "rx_bytes-r": 1,
        "qos_policy_applied": true,
        "roam_count": 2
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1633278922,
        "latest_assoc_time": 1641889481,
        "oui": "HonHaiPr",
        "user_id": "61dccb6aafc64b6fd8d452a8",
        "mac": "d8:5d:e2:0a:84:63",
        "is_guest": false,
        "first_seen": 1641859946,
        "last_seen": 1641922800,
        "is_wired": false,
        "_id": "61dccb6aafc64b6fd8d452a8",
        "_uptime_by_uap": 33323,
        "_last_seen_by_uap": 1641922800,
        "_is_guest_by_uap": false,
        "ap_mac": "f0:9f:c2:33:15:8a",
        "channel": 6,
        "radio": "ng",
        "radio_name": "wifi0",
        "essid": "Silver Lining",
        "bssid": "f6:9f:c2:34:15:8a",
        "powersave_enabled": false,
        "is_11r": false,
        "ccq": 1000,
        "rssi": 59,
        "noise": -105,
        "signal": -37,
        "tx_rate": 0,
        "rx_rate": 1000,
        "tx_power": 34,
        "idletime": 957,
        "ip": "10.10.11.66",
        "dhcpend_time": 0,
        "satisfaction": 100,
        "anomalies": 0,
        "vlan": 0,
        "radio_proto": "ng",
        "uptime": 8643878,
        "tx_bytes": 2970,
        "rx_bytes": 3366,
        "tx_packets": 22,
        "tx_retries": 0,
        "wifi_tx_attempts": 400,
        "rx_packets": 22,
        "bytes-r": 0,
        "tx_bytes-r": 0,
        "rx_bytes-r": 0,
        "qos_policy_applied": true,
        "roam_count": 2
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1633279548,
        "latest_assoc_time": 1633279553,
        "oui": "Ubiquiti",
        "user_id": "61dccb77afc64b6fd8d452c7",
        "mac": "80:2a:a8:4e:60:df",
        "is_guest": false,
        "first_seen": 1641859959,
        "last_seen": 1641922729,
        "is_wired": true,
        "hostname": "Front-Door-Internal",
        "_id": "61dccb77afc64b6fd8d452c7",
        "_uptime_by_usw": 8643181,
        "_last_seen_by_usw": 1641922729,
        "_is_guest_by_usw": false,
        "sw_mac": "f0:9f:c2:06:40:9b",
        "sw_depth": 1,
        "sw_port": 28,
        "network": "SLData",
        "network_id": "5f43c56eafc64b1d080e9bc8",
        "ip": "10.10.11.81",
        "satisfaction": 100,
        "uptime": 8643181,
        "wired-tx_bytes": 375997701,
        "wired-rx_bytes": 10226369033,
        "wired-tx_packets": 4493442,
        "wired-rx_packets": 7714923,
        "wired-tx_bytes-r": 6031,
        "wired-rx_bytes-r": 165149
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1633279550,
        "latest_assoc_time": 1633279555,
        "oui": "Ubiquiti",
        "user_id": "61dccb77afc64b6fd8d452c6",
        "mac": "04:18:d6:50:3b:04",
        "is_guest": false,
        "first_seen": 1641859959,
        "last_seen": 1641922729,
        "is_wired": true,
        "hostname": "Car-Park-Camera-1",
        "_id": "61dccb77afc64b6fd8d452c6",
        "_uptime_by_usw": 8643179,
        "_last_seen_by_usw": 1641922729,
        "_is_guest_by_usw": false,
        "sw_mac": "f0:9f:c2:06:40:9b",
        "sw_depth": 1,
        "sw_port": 27,
        "network": "SLData",
        "network_id": "5f43c56eafc64b1d080e9bc8",
        "ip": "10.10.11.73",
        "satisfaction": 100,
        "uptime": 8643179,
        "wired-tx_bytes": 629757190,
        "wired-rx_bytes": 23919477363,
        "wired-tx_packets": 8403296,
        "wired-rx_packets": 16552782,
        "wired-tx_bytes-r": 10634,
        "wired-rx_bytes-r": 407263
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1641910536,
        "latest_assoc_time": 1641910739,
        "oui": "",
        "user_id": "61d40dfdafc64b6fd8619508",
        "_id": "61d40dfdafc64b6fd8619508",
        "mac": "f4:b3:01:e7:df:bf",
        "is_guest": false,
        "first_seen": 1641287165,
        "last_seen": 1641922793,
        "is_wired": false,
        "hostname": "Hythe-LT-008851",
        "_uptime_by_uap": 12058,
        "_last_seen_by_uap": 1641922793,
        "_is_guest_by_uap": false,
        "ap_mac": "78:8a:20:d9:42:74",
        "channel": 44,
        "radio": "na",
        "radio_name": "wifi1",
        "essid": "Silver Lining",
        "bssid": "7e:8a:20:db:42:74",
        "powersave_enabled": true,
        "is_11r": false,
        "ccq": 333,
        "rssi": 49,
        "noise": -101,
        "signal": -47,
        "tx_rate": 400000,
        "rx_rate": 6000,
        "tx_power": 40,
        "idletime": 0,
        "ip": "10.10.15.124",
        "dhcpend_time": 180,
        "satisfaction": 100,
        "anomalies": 0,
        "vlan": 0,
        "radio_proto": "ac",
        "uptime": 12257,
        "tx_bytes": 14814450,
        "rx_bytes": 3419242,
        "tx_packets": 11188,
        "tx_retries": 4294967320,
        "wifi_tx_attempts": 6188,
        "rx_packets": 91686,
        "bytes-r": 176,
        "tx_bytes-r": 0,
        "rx_bytes-r": 176,
        "qos_policy_applied": true
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1633279551,
        "latest_assoc_time": 1633279556,
        "oui": "Ubiquiti",
        "user_id": "61dccb77afc64b6fd8d452ca",
        "mac": "04:18:d6:f0:27:3e",
        "is_guest": false,
        "first_seen": 1641859959,
        "last_seen": 1641922729,
        "is_wired": true,
        "hostname": "Main-Hall",
        "_id": "61dccb77afc64b6fd8d452ca",
        "_uptime_by_usw": 8643178,
        "_last_seen_by_usw": 1641922729,
        "_is_guest_by_usw": false,
        "sw_mac": "f0:9f:c2:06:40:9b",
        "sw_depth": 1,
        "sw_port": 31,
        "network": "SLData",
        "network_id": "5f43c56eafc64b1d080e9bc8",
        "ip": "10.10.11.124",
        "satisfaction": 100,
        "uptime": 8643178,
        "wired-tx_bytes": 639223699,
        "wired-rx_bytes": 24885681810,
        "wired-tx_packets": 8624620,
        "wired-rx_packets": 17138917,
        "wired-tx_bytes-r": 10922,
        "wired-rx_bytes-r": 407524
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1638550743,
        "latest_assoc_time": 1638550748,
        "oui": "Ubiquiti",
        "user_id": "61dccb77afc64b6fd8d452c9",
        "mac": "80:2a:a8:4e:f0:28",
        "is_guest": false,
        "first_seen": 1641859959,
        "last_seen": 1641922729,
        "is_wired": true,
        "hostname": "PicnicContainers",
        "_id": "61dccb77afc64b6fd8d452c9",
        "_uptime_by_usw": 3371986,
        "_last_seen_by_usw": 1641922729,
        "_is_guest_by_usw": false,
        "sw_mac": "f0:9f:c2:06:40:9b",
        "sw_depth": 1,
        "sw_port": 30,
        "network": "SLData",
        "network_id": "5f43c56eafc64b1d080e9bc8",
        "ip": "10.10.11.140",
        "satisfaction": 100,
        "uptime": 3371986,
        "wired-tx_bytes": 386771384,
        "wired-rx_bytes": 10465259063,
        "wired-tx_packets": 4622204,
        "wired-rx_packets": 7899257,
        "wired-tx_bytes-r": 6195,
        "wired-rx_bytes-r": 168320
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1641889405,
        "latest_assoc_time": 1641889438,
        "oui": "Chongqin",
        "user_id": "61dccb74afc64b6fd8d452bd",
        "_id": "61dccb74afc64b6fd8d452bd",
        "mac": "ec:5c:68:79:8c:b4",
        "is_guest": false,
        "first_seen": 1641859956,
        "last_seen": 1641922784,
        "is_wired": false,
        "_uptime_by_uap": 33350,
        "_last_seen_by_uap": 1641922784,
        "_is_guest_by_uap": false,
        "ap_mac": "f0:9f:c2:33:15:8d",
        "channel": 6,
        "radio": "ng",
        "radio_name": "wifi0",
        "essid": "Silver Lining",
        "bssid": "f0:9f:c2:34:15:8d",
        "powersave_enabled": true,
        "is_11r": false,
        "ccq": 991,
        "rssi": 30,
        "noise": -106,
        "signal": -66,
        "tx_rate": 65000,
        "rx_rate": 24000,
        "tx_power": 34,
        "idletime": 0,
        "ip": "10.10.15.67",
        "dhcpend_time": 0,
        "satisfaction": 100,
        "anomalies": 0,
        "vlan": 0,
        "radio_proto": "ng",
        "uptime": 33379,
        "tx_bytes": 34770,
        "rx_bytes": 3252498,
        "tx_packets": 192,
        "tx_retries": 37,
        "wifi_tx_attempts": 229,
        "rx_packets": 113748,
        "bytes-r": 98,
        "tx_bytes-r": 0,
        "rx_bytes-r": 98,
        "qos_policy_applied": true,
        "roam_count": 1
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1641859769,
        "latest_assoc_time": 1641889537,
        "oui": "AmazonTe",
        "user_id": "61dccb6bafc64b6fd8d452aa",
        "mac": "00:71:47:c0:55:f4",
        "is_guest": false,
        "first_seen": 1641859947,
        "last_seen": 1641922793,
        "is_wired": false,
        "hostname": "amazon-e26f7ba30",
        "_id": "61dccb6bafc64b6fd8d452aa",
        "_uptime_by_uap": 33262,
        "_last_seen_by_uap": 1641922793,
        "_is_guest_by_uap": false,
        "ap_mac": "78:8a:20:d9:42:74",
        "channel": 44,
        "radio": "na",
        "radio_name": "wifi1",
        "essid": "Silver Lining",
        "bssid": "7e:8a:20:db:42:74",
        "powersave_enabled": false,
        "is_11r": false,
        "ccq": 333,
        "rssi": 47,
        "noise": -101,
        "signal": -49,
        "tx_rate": 121500,
        "rx_rate": 135000,
        "tx_power": 40,
        "idletime": 3,
        "ip": "10.10.15.115",
        "dhcpend_time": 650,
        "satisfaction": 98,
        "anomalies": 0,
        "vlan": 0,
        "radio_proto": "na",
        "uptime": 63024,
        "tx_bytes": 7299428,
        "rx_bytes": 35665781,
        "tx_packets": 86800,
        "tx_retries": 34562,
        "wifi_tx_attempts": 200717,
        "rx_packets": 969104,
        "bytes-r": 1133,
        "tx_bytes-r": 148,
        "rx_bytes-r": 984,
        "qos_policy_applied": true,
        "roam_count": 2
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1641915680,
        "latest_assoc_time": 1641922544,
        "oui": "",
        "user_id": "61d41095afc64b6fd861c415",
        "_id": "61d41095afc64b6fd861c415",
        "mac": "ae:0b:4c:54:31:02",
        "is_guest": false,
        "first_seen": 1641287829,
        "last_seen": 1641922788,
        "is_wired": false,
        "hostname": "Galaxy-S21-Ultra",
        "_uptime_by_uap": 244,
        "_last_seen_by_uap": 1641922788,
        "_is_guest_by_uap": false,
        "ap_mac": "78:8a:20:d9:5c:d2",
        "channel": 44,
        "radio": "na",
        "radio_name": "wifi1",
        "essid": "Silver Lining",
        "bssid": "7e:8a:20:db:5c:d2",
        "powersave_enabled": false,
        "is_11r": false,
        "ccq": 333,
        "rssi": 28,
        "noise": -102,
        "signal": -68,
        "tx_rate": 351000,
        "rx_rate": 6500,
        "tx_power": 40,
        "idletime": 243,
        "ip": "10.10.15.142",
        "dhcpend_time": 0,
        "satisfaction": 100,
        "anomalies": 0,
        "vlan": 0,
        "radio_proto": "ac",
        "uptime": 7108,
        "tx_bytes": 725826,
        "rx_bytes": 390632,
        "tx_packets": 1305,
        "tx_retries": 66,
        "wifi_tx_attempts": 4627,
        "rx_packets": 1970,
        "bytes-r": 0,
        "tx_bytes-r": 0,
        "rx_bytes-r": 0,
        "qos_policy_applied": true,
        "roam_count": 6
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1641548428,
        "latest_assoc_time": 1641919228,
        "oui": "SamsungE",
        "user_id": "5d1097aaafc64b361d07ad99",
        "_id": "5d1097aaafc64b361d07ad99",
        "mac": "74:eb:80:21:69:88",
        "is_guest": false,
        "first_seen": 1561368490,
        "last_seen": 1641922788,
        "is_wired": false,
        "hostname": "android-e8ff44a95f7c76db",
        "usergroup_id": "",
        "name": "Small Meeting Room Galaxy",
        "noted": true,
        "_uptime_by_uap": 3562,
        "_last_seen_by_uap": 1641922788,
        "_is_guest_by_uap": false,
        "ap_mac": "78:8a:20:d9:5c:d2",
        "channel": 11,
        "radio": "ng",
        "radio_name": "wifi0",
        "essid": "Silver Lining",
        "bssid": "7e:8a:20:da:5c:d2",
        "powersave_enabled": true,
        "is_11r": false,
        "ccq": 991,
        "rssi": 58,
        "noise": -108,
        "signal": -38,
        "tx_rate": 72222,
        "rx_rate": 1000,
        "tx_power": 34,
        "idletime": 2,
        "ip": "10.10.15.113",
        "dhcpend_time": 0,
        "satisfaction": 100,
        "anomalies": 0,
        "vlan": 0,
        "radio_proto": "ng",
        "uptime": 374360,
        "tx_bytes": 12045129,
        "rx_bytes": 7564959,
        "tx_packets": 29080,
        "tx_retries": 23838,
        "wifi_tx_attempts": 53616,
        "rx_packets": 96372,
        "bytes-r": 1,
        "tx_bytes-r": 0,
        "rx_bytes-r": 1,
        "qos_policy_applied": true,
        "roam_count": 43
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1633279551,
        "latest_assoc_time": 1633279556,
        "oui": "Ubiquiti",
        "user_id": "61dccb77afc64b6fd8d452cb",
        "mac": "80:2a:a8:4e:f4:e0",
        "is_guest": false,
        "first_seen": 1641859959,
        "last_seen": 1641922729,
        "is_wired": true,
        "hostname": "Smoking-Area",
        "_id": "61dccb77afc64b6fd8d452cb",
        "_uptime_by_usw": 8643178,
        "_last_seen_by_usw": 1641922729,
        "_is_guest_by_usw": false,
        "sw_mac": "f0:9f:c2:06:40:9b",
        "sw_depth": 1,
        "sw_port": 33,
        "network": "SLData",
        "network_id": "5f43c56eafc64b1d080e9bc8",
        "ip": "10.10.11.127",
        "satisfaction": 100,
        "uptime": 8643178,
        "wired-tx_bytes": 388861330,
        "wired-rx_bytes": 10437801350,
        "wired-tx_packets": 4664162,
        "wired-rx_packets": 7916553,
        "wired-tx_bytes-r": 6335,
        "wired-rx_bytes-r": 171234
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1633279547,
        "latest_assoc_time": 1633279552,
        "oui": "Ubiquiti",
        "user_id": "61dccb77afc64b6fd8d452c8",
        "mac": "80:2a:a8:4e:ef:0a",
        "is_guest": false,
        "first_seen": 1641859959,
        "last_seen": 1641922729,
        "is_wired": true,
        "hostname": "Car-Park-Camera-2",
        "_id": "61dccb77afc64b6fd8d452c8",
        "_uptime_by_usw": 8643182,
        "_last_seen_by_usw": 1641922729,
        "_is_guest_by_usw": false,
        "sw_mac": "f0:9f:c2:06:40:9b",
        "sw_depth": 1,
        "sw_port": 29,
        "network": "SLData",
        "network_id": "5f43c56eafc64b1d080e9bc8",
        "ip": "10.10.11.116",
        "satisfaction": 100,
        "uptime": 8643182,
        "wired-tx_bytes": 372959974,
        "wired-rx_bytes": 10248531720,
        "wired-tx_packets": 4442542,
        "wired-rx_packets": 7774041,
        "wired-tx_bytes-r": 6039,
        "wired-rx_bytes-r": 164059
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1641891426,
        "latest_assoc_time": 1641891432,
        "oui": "HonHaiPr",
        "user_id": "61dccb6bafc64b6fd8d452ad",
        "_id": "61dccb6bafc64b6fd8d452ad",
        "mac": "28:56:5a:95:94:a5",
        "is_guest": false,
        "first_seen": 1641859947,
        "last_seen": 1641922793,
        "is_wired": false,
        "_uptime_by_uap": 31367,
        "_last_seen_by_uap": 1641922793,
        "_is_guest_by_uap": false,
        "ap_mac": "78:8a:20:d9:42:74",
        "channel": 1,
        "radio": "ng",
        "radio_name": "wifi0",
        "essid": "Operations",
        "bssid": "78:8a:20:da:42:74",
        "powersave_enabled": false,
        "is_11r": false,
        "ccq": 991,
        "rssi": 47,
        "noise": -109,
        "signal": -49,
        "tx_rate": 72222,
        "rx_rate": 52000,
        "tx_power": 34,
        "idletime": 3,
        "ip": "10.10.11.63",
        "dhcpend_time": 0,
        "satisfaction": 100,
        "anomalies": 0,
        "vlan": 0,
        "radio_proto": "ng",
        "uptime": 31367,
        "tx_bytes": 4403088,
        "rx_bytes": 3148784,
        "tx_packets": 14857,
        "tx_retries": 120,
        "wifi_tx_attempts": 14977,
        "rx_packets": 13282,
        "bytes-r": 47,
        "tx_bytes-r": 17,
        "rx_bytes-r": 29,
        "qos_policy_applied": true
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1633280168,
        "latest_assoc_time": 1641900594,
        "oui": "Apple",
        "user_id": "61dccb6aafc64b6fd8d452a7",
        "mac": "a4:e9:75:a9:4e:e2",
        "is_guest": false,
        "first_seen": 1641859946,
        "last_seen": 1641922800,
        "is_wired": false,
        "hostname": "iPad-2",
        "_id": "61dccb6aafc64b6fd8d452a7",
        "_uptime_by_uap": 22210,
        "_last_seen_by_uap": 1641922800,
        "_is_guest_by_uap": false,
        "ap_mac": "f0:9f:c2:33:15:8a",
        "channel": 40,
        "radio": "na",
        "radio_name": "wifi1",
        "essid": "Silver Lining",
        "bssid": "f6:9f:c2:35:15:8a",
        "powersave_enabled": true,
        "is_11r": false,
        "ccq": 333,
        "rssi": 43,
        "noise": -101,
        "signal": -53,
        "tx_rate": 866700,
        "rx_rate": 650000,
        "tx_power": 40,
        "idletime": 0,
        "ip": "10.10.15.149",
        "dhcpend_time": 136980,
        "satisfaction": 100,
        "anomalies": 0,
        "vlan": 0,
        "radio_proto": "ac",
        "uptime": 8642632,
        "tx_bytes": 3572155,
        "rx_bytes": 7570845,
        "tx_packets": 15288,
        "tx_retries": 4109,
        "wifi_tx_attempts": 17690,
        "rx_packets": 118458,
        "bytes-r": 20,
        "tx_bytes-r": 10,
        "rx_bytes-r": 10,
        "qos_policy_applied": true,
        "roam_count": 3
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1641909199,
        "latest_assoc_time": 1641922747,
        "oui": "",
        "user_id": "61cc1ba8afc64b6fd80a04ce",
        "_id": "61cc1ba8afc64b6fd80a04ce",
        "mac": "e2:02:30:18:35:ec",
        "is_guest": false,
        "first_seen": 1640766375,
        "last_seen": 1641922788,
        "is_wired": false,
        "hostname": "Pixel-6-Pro",
        "_uptime_by_uap": 41,
        "_last_seen_by_uap": 1641922788,
        "_is_guest_by_uap": false,
        "ap_mac": "78:8a:20:d9:5c:d2",
        "channel": 44,
        "radio": "na",
        "radio_name": "wifi1",
        "essid": "Silver Lining",
        "bssid": "7e:8a:20:db:5c:d2",
        "powersave_enabled": true,
        "is_11r": false,
        "ccq": 464,
        "rssi": 19,
        "noise": -102,
        "signal": -77,
        "tx_rate": 27000,
        "rx_rate": 6000,
        "tx_power": 40,
        "idletime": 40,
        "ip": "10.10.15.111",
        "dhcpend_time": 0,
        "satisfaction": 96,
        "anomalies": 0,
        "vlan": 0,
        "radio_proto": "ac",
        "uptime": 13589,
        "tx_bytes": 66047198,
        "rx_bytes": 4582104,
        "tx_packets": 54636,
        "tx_retries": 13428,
        "wifi_tx_attempts": 66749,
        "rx_packets": 18273,
        "bytes-r": 0,
        "tx_bytes-r": 0,
        "rx_bytes-r": 0,
        "qos_policy_applied": true,
        "roam_count": 4
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1641892617,
        "latest_assoc_time": 1641922112,
        "oui": "",
        "user_id": "61d4070eafc64b6fd86138c9",
        "_id": "61d4070eafc64b6fd86138c9",
        "mac": "b4:0e:de:79:c5:89",
        "is_guest": false,
        "first_seen": 1641285390,
        "last_seen": 1641922739,
        "is_wired": false,
        "hostname": "SL-LT-008806",
        "_uptime_by_uap": 627,
        "_last_seen_by_uap": 1641922739,
        "_is_guest_by_uap": false,
        "ap_mac": "b4:fb:e4:96:52:26",
        "channel": 48,
        "radio": "na",
        "radio_name": "wifi1",
        "essid": "Silver Lining",
        "bssid": "b4:fb:e4:98:52:26",
        "powersave_enabled": false,
        "is_11r": false,
        "ccq": 333,
        "rssi": 22,
        "noise": -100,
        "signal": -74,
        "tx_rate": 162000,
        "rx_rate": 180000,
        "tx_power": 40,
        "idletime": 0,
        "ip": "10.10.15.117",
        "dhcpend_time": 340,
        "satisfaction": 95,
        "anomalies": 0,
        "vlan": 0,
        "radio_proto": "ac",
        "uptime": 30122,
        "tx_bytes": 2108095187,
        "rx_bytes": 794181385,
        "tx_packets": 2280293,
        "tx_retries": 381330,
        "wifi_tx_attempts": 1941632,
        "rx_packets": 1828490,
        "bytes-r": 5500,
        "tx_bytes-r": 2517,
        "rx_bytes-r": 2983,
        "qos_policy_applied": true,
        "roam_count": 3
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1641840962,
        "latest_assoc_time": 1641889523,
        "oui": "SamsungE",
        "user_id": "5d109aceafc64b361d07bbdd",
        "_id": "5d109aceafc64b361d07bbdd",
        "mac": "d4:e6:b7:d2:91:d9",
        "is_guest": false,
        "first_seen": 1561369294,
        "last_seen": 1641922784,
        "is_wired": false,
        "hostname": "android-e905fc693dfe5c23",
        "usergroup_id": "",
        "name": "Board Room Galaxy",
        "noted": true,
        "_uptime_by_uap": 33264,
        "_last_seen_by_uap": 1641922784,
        "_is_guest_by_uap": false,
        "ap_mac": "f0:9f:c2:33:15:8d",
        "channel": 6,
        "radio": "ng",
        "radio_name": "wifi0",
        "essid": "Silver Lining",
        "bssid": "f0:9f:c2:34:15:8d",
        "powersave_enabled": true,
        "is_11r": false,
        "ccq": 720,
        "rssi": 33,
        "noise": -106,
        "signal": -63,
        "tx_rate": 52000,
        "rx_rate": 1000,
        "tx_power": 34,
        "idletime": 0,
        "ip": "10.10.15.138",
        "dhcpend_time": 4070,
        "satisfaction": 100,
        "anomalies": 0,
        "vlan": 0,
        "radio_proto": "ng",
        "uptime": 81822,
        "tx_bytes": 18727153,
        "rx_bytes": 10788663,
        "tx_packets": 46608,
        "tx_retries": 24576,
        "wifi_tx_attempts": 71164,
        "rx_packets": 142288,
        "bytes-r": 731,
        "tx_bytes-r": 458,
        "rx_bytes-r": 273,
        "qos_policy_applied": true,
        "roam_count": 2
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1639589970,
        "latest_assoc_time": 1641889467,
        "oui": "HonHaiPr",
        "user_id": "61dccb6aafc64b6fd8d452a6",
        "mac": "40:b8:9a:5b:e8:f1",
        "is_guest": false,
        "first_seen": 1641859946,
        "last_seen": 1641922800,
        "is_wired": false,
        "hostname": "SL-LT-000455",
        "_id": "61dccb6aafc64b6fd8d452a6",
        "_uptime_by_uap": 33337,
        "_last_seen_by_uap": 1641922800,
        "_is_guest_by_uap": false,
        "ap_mac": "f0:9f:c2:33:15:8a",
        "channel": 40,
        "radio": "na",
        "radio_name": "wifi1",
        "essid": "Silver Lining",
        "bssid": "f6:9f:c2:35:15:8a",
        "powersave_enabled": false,
        "is_11r": false,
        "ccq": 333,
        "rssi": 31,
        "noise": -101,
        "signal": -65,
        "tx_rate": 433300,
        "rx_rate": 433300,
        "tx_power": 40,
        "idletime": 1,
        "ip": "10.10.15.161",
        "dhcpend_time": 270,
        "satisfaction": 99,
        "anomalies": 0,
        "vlan": 0,
        "radio_proto": "ac",
        "uptime": 2332830,
        "tx_bytes": 120836890,
        "rx_bytes": 12011275,
        "tx_packets": 109786,
        "tx_retries": 1714,
        "wifi_tx_attempts": 111485,
        "rx_packets": 76241,
        "bytes-r": 2268,
        "tx_bytes-r": 1769,
        "rx_bytes-r": 498,
        "qos_policy_applied": true
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1641492303,
        "latest_assoc_time": 1641492308,
        "oui": "ArubaAHe",
        "user_id": "60d33025afc64b27898fa978",
        "_id": "60d33025afc64b27898fa978",
        "mac": "f8:60:f0:0c:1d:80",
        "is_guest": false,
        "first_seen": 1624453157,
        "last_seen": 1641922729,
        "is_wired": true,
        "_uptime_by_usw": 430426,
        "_last_seen_by_usw": 1641922729,
        "_is_guest_by_usw": false,
        "sw_mac": "f0:9f:c2:06:40:9b",
        "sw_depth": 0,
        "sw_port": 1,
        "network": "LAN",
        "network_id": "58999a55c2dc0527ac51d962",
        "satisfaction": 100,
        "uptime": 430426
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1641921480,
        "latest_assoc_time": 1641921580,
        "oui": "",
        "user_id": "61d2a260afc64b6fd8516ade",
        "_id": "61d2a260afc64b6fd8516ade",
        "mac": "66:0f:da:33:ba:f2",
        "is_guest": false,
        "first_seen": 1641194080,
        "last_seen": 1641922796,
        "is_wired": false,
        "_uptime_by_uap": 1217,
        "_last_seen_by_uap": 1641922796,
        "_is_guest_by_uap": false,
        "ap_mac": "b4:fb:e4:96:53:8d",
        "channel": 44,
        "radio": "na",
        "radio_name": "wifi1",
        "essid": "Silver Lining",
        "bssid": "b4:fb:e4:98:53:8d",
        "powersave_enabled": true,
        "is_11r": false,
        "ccq": 333,
        "rssi": 40,
        "noise": -101,
        "signal": -56,
        "tx_rate": 300000,
        "rx_rate": 270000,
        "tx_power": 40,
        "idletime": 1,
        "ip": "10.10.15.140",
        "dhcpend_time": 0,
        "satisfaction": 98,
        "anomalies": 0,
        "vlan": 0,
        "radio_proto": "ac",
        "uptime": 1316,
        "tx_bytes": 2591961,
        "rx_bytes": 906314,
        "tx_packets": 2497,
        "tx_retries": 1732,
        "wifi_tx_attempts": 3982,
        "rx_packets": 3092,
        "bytes-r": 9,
        "tx_bytes-r": 3,
        "rx_bytes-r": 6,
        "qos_policy_applied": true,
        "roam_count": 2
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1641889966,
        "latest_assoc_time": 1641922757,
        "oui": "",
        "user_id": "61d406daafc64b6fd8613871",
        "_id": "61d406daafc64b6fd8613871",
        "mac": "5e:88:fa:cf:59:1a",
        "is_guest": false,
        "first_seen": 1641285338,
        "last_seen": 1641922788,
        "is_wired": false,
        "hostname": "John-S10",
        "_uptime_by_uap": 31,
        "_last_seen_by_uap": 1641922788,
        "_is_guest_by_uap": false,
        "ap_mac": "78:8a:20:d9:5c:d2",
        "channel": 44,
        "radio": "na",
        "radio_name": "wifi1",
        "essid": "Silver Lining",
        "bssid": "7e:8a:20:db:5c:d2",
        "powersave_enabled": true,
        "is_11r": false,
        "ccq": 467,
        "rssi": 20,
        "noise": -102,
        "signal": -76,
        "tx_rate": 117000,
        "rx_rate": 6500,
        "tx_power": 40,
        "idletime": 0,
        "ip": "10.10.15.108",
        "dhcpend_time": 0,
        "satisfaction": 98,
        "anomalies": 0,
        "vlan": 0,
        "radio_proto": "ac",
        "uptime": 32822,
        "tx_bytes": 94420941,
        "rx_bytes": 40529903,
        "tx_packets": 123819,
        "tx_retries": 36785,
        "wifi_tx_attempts": 135865,
        "rx_packets": 112576,
        "bytes-r": 0,
        "tx_bytes-r": 0,
        "rx_bytes-r": 0,
        "qos_policy_applied": true,
        "roam_count": 15
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1640270485,
        "latest_assoc_time": 1641889445,
        "oui": "AmazonTe",
        "user_id": "61dccb6aafc64b6fd8d452a9",
        "mac": "b4:7c:9c:2c:8c:05",
        "is_guest": false,
        "first_seen": 1641859946,
        "last_seen": 1641922788,
        "is_wired": false,
        "_id": "61dccb6aafc64b6fd8d452a9",
        "_uptime_by_uap": 33348,
        "_last_seen_by_uap": 1641922788,
        "_is_guest_by_uap": false,
        "ap_mac": "78:8a:20:d9:5c:d2",
        "channel": 44,
        "radio": "na",
        "radio_name": "wifi1",
        "essid": "Silver Lining",
        "bssid": "7e:8a:20:db:5c:d2",
        "powersave_enabled": false,
        "is_11r": false,
        "ccq": 333,
        "rssi": 40,
        "noise": -102,
        "signal": -56,
        "tx_rate": 243000,
        "rx_rate": 300000,
        "tx_power": 40,
        "idletime": 2,
        "ip": "10.10.15.102",
        "dhcpend_time": 22678640,
        "satisfaction": 99,
        "anomalies": 0,
        "vlan": 0,
        "radio_proto": "na",
        "uptime": 1652303,
        "tx_bytes": 542597081,
        "rx_bytes": 39198567,
        "tx_packets": 550545,
        "tx_retries": 60412,
        "wifi_tx_attempts": 401402,
        "rx_packets": 337289,
        "bytes-r": 14338,
        "tx_bytes-r": 13404,
        "rx_bytes-r": 934,
        "qos_policy_applied": true,
        "roam_count": 2
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1641859609,
        "latest_assoc_time": 1641889519,
        "oui": "AmazonCo",
        "user_id": "61dccb74afc64b6fd8d452bc",
        "mac": "5c:41:5a:6b:16:87",
        "is_guest": false,
        "first_seen": 1641859956,
        "last_seen": 1641922784,
        "is_wired": false,
        "hostname": "amazon-592d3ce84",
        "_id": "61dccb74afc64b6fd8d452bc",
        "_uptime_by_uap": 33268,
        "_last_seen_by_uap": 1641922784,
        "_is_guest_by_uap": false,
        "ap_mac": "f0:9f:c2:33:15:8d",
        "channel": 44,
        "radio": "na",
        "radio_name": "wifi1",
        "essid": "Silver Lining",
        "bssid": "f0:9f:c2:35:15:8d",
        "powersave_enabled": true,
        "is_11r": false,
        "ccq": 333,
        "rssi": 27,
        "noise": -101,
        "signal": -69,
        "tx_rate": 150000,
        "rx_rate": 135000,
        "tx_power": 40,
        "idletime": 0,
        "ip": "10.10.15.141",
        "dhcpend_time": 740,
        "satisfaction": 98,
        "anomalies": 0,
        "vlan": 0,
        "radio_proto": "na",
        "uptime": 63175,
        "tx_bytes": 226818794,
        "rx_bytes": 84728345,
        "tx_packets": 325698,
        "tx_retries": 100938,
        "wifi_tx_attempts": 426530,
        "rx_packets": 1962759,
        "bytes-r": 1171,
        "tx_bytes-r": 216,
        "rx_bytes-r": 954,
        "qos_policy_applied": true,
        "roam_count": 2
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1641922253,
        "latest_assoc_time": 1641922282,
        "oui": "",
        "user_id": "61d83054afc64b6fd8999347",
        "_id": "61d83054afc64b6fd8999347",
        "mac": "de:6e:bd:70:cf:33",
        "is_guest": false,
        "first_seen": 1641558100,
        "last_seen": 1641922559,
        "is_wired": false,
        "_uptime_by_uap": 278,
        "_last_seen_by_uap": 1641922559,
        "_is_guest_by_uap": false,
        "ap_mac": "78:8a:20:d9:42:74",
        "channel": 44,
        "radio": "na",
        "radio_name": "wifi1",
        "essid": "Silver Lining",
        "bssid": "7e:8a:20:db:42:74",
        "powersave_enabled": true,
        "is_11r": false,
        "ccq": 333,
        "rssi": 22,
        "noise": -102,
        "signal": -74,
        "tx_rate": 121500,
        "rx_rate": 6500,
        "tx_power": 40,
        "idletime": 3,
        "ip": "10.10.15.131",
        "dhcpend_time": 0,
        "satisfaction": 95,
        "anomalies": 0,
        "vlan": 0,
        "radio_proto": "ac",
        "uptime": 306,
        "tx_bytes": 38631,
        "rx_bytes": 41607,
        "tx_packets": 125,
        "tx_retries": 396,
        "wifi_tx_attempts": 500,
        "rx_packets": 244,
        "bytes-r": 204,
        "tx_bytes-r": 75,
        "rx_bytes-r": 129,
        "qos_policy_applied": true,
        "roam_count": 1
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1641906813,
        "latest_assoc_time": 1641922603,
        "oui": "JuniperN",
        "user_id": "60d33025afc64b27898fa972",
        "_id": "60d33025afc64b27898fa972",
        "mac": "00:10:db:ff:10:01",
        "is_guest": false,
        "first_seen": 1624453157,
        "last_seen": 1641922729,
        "is_wired": true,
        "_uptime_by_usw": 126,
        "_last_seen_by_usw": 1641922729,
        "_is_guest_by_usw": false,
        "sw_mac": "f0:9f:c2:06:40:9b",
        "sw_depth": 0,
        "sw_port": 1,
        "network": "Guest_WiFi",
        "network_id": "5f43c3d5afc64b1d080e93b9",
        "satisfaction": 100,
        "uptime": 15916,
        "ip": "10.11.16.254"
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1641916013,
        "latest_assoc_time": 1641922597,
        "oui": "",
        "user_id": "61d40b75afc64b6fd86174a7",
        "_id": "61d40b75afc64b6fd86174a7",
        "mac": "2a:56:35:d9:d4:be",
        "is_guest": false,
        "first_seen": 1641286517,
        "last_seen": 1641922788,
        "is_wired": false,
        "_uptime_by_uap": 191,
        "_last_seen_by_uap": 1641922788,
        "_is_guest_by_uap": false,
        "ap_mac": "78:8a:20:d9:5c:d2",
        "channel": 11,
        "radio": "ng",
        "radio_name": "wifi0",
        "essid": "SL Sales",
        "bssid": "78:8a:20:da:5c:d2",
        "powersave_enabled": true,
        "is_11r": false,
        "ccq": 981,
        "rssi": 18,
        "noise": -108,
        "signal": -78,
        "tx_rate": 13000,
        "rx_rate": 12000,
        "tx_power": 34,
        "idletime": 7,
        "ip": "10.10.11.102",
        "dhcpend_time": 3270,
        "satisfaction": 99,
        "anomalies": 0,
        "vlan": 0,
        "radio_proto": "ng",
        "uptime": 6775,
        "tx_bytes": 6898614,
        "rx_bytes": 765216,
        "tx_packets": 4913,
        "tx_retries": 582,
        "wifi_tx_attempts": 3421,
        "rx_packets": 4980,
        "bytes-r": 16,
        "tx_bytes-r": 9,
        "rx_bytes-r": 6,
        "qos_policy_applied": true
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1635499990,
        "latest_assoc_time": 1641889452,
        "oui": "SamsungE",
        "user_id": "589b1703c2dce473ad0d4d51",
        "_id": "589b1703c2dce473ad0d4d51",
        "mac": "cc:b1:1a:0e:50:69",
        "is_guest": false,
        "first_seen": 1486558979,
        "last_seen": 1641922800,
        "is_wired": false,
        "name": "Entrance TV",
        "noted": true,
        "_uptime_by_uap": 33351,
        "_last_seen_by_uap": 1641922800,
        "_is_guest_by_uap": false,
        "ap_mac": "f0:9f:c2:33:15:8a",
        "channel": 6,
        "radio": "ng",
        "radio_name": "wifi0",
        "essid": "Silver Lining",
        "bssid": "f6:9f:c2:34:15:8a",
        "powersave_enabled": false,
        "is_11r": false,
        "ccq": 933,
        "rssi": 20,
        "noise": -105,
        "signal": -76,
        "tx_rate": 144444,
        "rx_rate": 39000,
        "tx_power": 34,
        "idletime": 0,
        "ip": "10.10.15.112",
        "dhcpend_time": 380,
        "satisfaction": 99,
        "anomalies": 0,
        "vlan": 0,
        "radio_proto": "ng",
        "uptime": 6422810,
        "tx_bytes": 64277234,
        "rx_bytes": 87226722,
        "tx_packets": 326848,
        "tx_retries": 328714,
        "wifi_tx_attempts": 655560,
        "rx_packets": 472910,
        "bytes-r": 1255,
        "tx_bytes-r": 543,
        "rx_bytes-r": 711,
        "qos_policy_applied": true
      },
      {
        "site_id": "58999a55c2dc0527ac51d95f",
        "assoc_time": 1636536844,
        "latest_assoc_time": 1636536849,
        "oui": "Ubiquiti",
        "user_id": "61dccb77afc64b6fd8d452cd",
        "mac": "80:2a:a8:4e:60:f9",
        "is_guest": false,
        "first_seen": 1641859959,
        "last_seen": 1641922729,
        "is_wired": true,
        "hostname": "Comms-Room",
        "_id": "61dccb77afc64b6fd8d452cd",
        "_uptime_by_usw": 5385885,
        "_last_seen_by_usw": 1641922729,
        "_is_guest_by_usw": false,
        "sw_mac": "f0:9f:c2:06:40:9b",
        "sw_depth": 1,
        "sw_port": 35,
        "network": "SLData",
        "network_id": "5f43c56eafc64b1d080e9bc8",
        "ip": "10.10.11.144",
        "satisfaction": 100,
        "uptime": 5385885,
        "wired-tx_bytes": 634748248,
        "wired-rx_bytes": 24843317048,
        "wired-tx_packets": 8560003,
        "wired-rx_packets": 16966817,
        "wired-tx_bytes-r": 9892,
        "wired-rx_bytes-r": 386004
      }
    ]

  const vlans = [
    {
      "_id": "60a293289aba083e5db24b8e",
      "inUse": false,
      "clientId": null,
      "description": "",
      "vlan": 436,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232270336,
        "firstDhcp": 3232270436,
        "lastDhcp": 3232270535,
        "gateway": 3232270337
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b98",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 446,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232272896,
        "firstDhcp": 3232272996,
        "lastDhcp": 3232273095,
        "gateway": 3232272897
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24ba0",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 454,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232274944,
        "firstDhcp": 3232275044,
        "lastDhcp": 3232275143,
        "gateway": 3232274945
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b74",
      "inUse": true,
      "clientId": {
        "_id": "612f9896b42a3411ba9a30aa",
        "tickets": {
          "others": [],
          "initial": 72025
        },
        "suites": [
          "60b5ffcdae111e529a3139ea",
          "60b5ffcdae111e529a3139db"
        ],
        "telephony": {
          "active": false
        },
        "connection": {
          "bandwidth": 20,
          "type": "ded",
          "monitoring": {
            "active": false,
            "ifIndex": null,
            "ifDevice": null
          }
        },
        "logo": false,
        "archive": false,
        "name": "Print IQ Limited",
        "shortName": "printiqlimited",
        "siteId": "609e8d94174b2a276ce76c3d",
        "startedDate": "2021-08-31T23:00:00.000Z",
        "__v": 0
      },
      "description": null,
      "vlan": 410,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232263680,
        "firstDhcp": 3232263780,
        "lastDhcp": 3232263879,
        "gateway": 3232263681
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b8b",
      "inUse": true,
      "clientId": {
        "_id": "61c2f6e85a606f2ef10c093b",
        "tickets": {
          "others": [],
          "initial": 74627
        },
        "suites": [
          "60b5f2adae111e529a313994"
        ],
        "telephony": {
          "active": false
        },
        "connection": {
          "bandwidth": 10,
          "type": "ded",
          "monitoring": {
            "active": false,
            "ifIndex": null,
            "ifDevice": null
          },
          "firewallGroup": "probitas_436"
        },
        "logo": false,
        "archive": false,
        "name": "Probitas",
        "shortName": "probitas",
        "siteId": "609e8d94174b2a276ce76c3d",
        "startedDate": "2022-01-01T00:00:00.000Z",
        "__v": 0
      },
      "description": "",
      "vlan": 433,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232269568,
        "firstDhcp": 3232269668,
        "lastDhcp": 3232269767,
        "gateway": 3232269569
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b7a",
      "inUse": true,
      "clientId": {
        "_id": "614df9c79346370612023c5b",
        "tickets": {
          "others": [],
          "initial": 72505
        },
        "suites": [
          "60b5ffcdae111e529a3139e1",
          "60b5ffcdae111e529a3139e2",
          "60b5ffcdae111e529a3139e3",
          "60b5ffcdae111e529a3139e4",
          "60b5ffcdae111e529a3139e5",
          "60b5ffcdae111e529a3139e8"
        ],
        "telephony": {
          "active": false
        },
        "connection": {
          "bandwidth": 100,
          "type": "ded",
          "monitoring": {
            "active": true,
            "ifIndex": 614,
            "ifDevice": "60afbe89e2025433988863cb"
          }
        },
        "logo": false,
        "archive": false,
        "name": "Cinch Cars Limited",
        "shortName": "cinchcarslimited",
        "siteId": "609e8d94174b2a276ce76c3d",
        "startedDate": "2021-09-30T23:00:00.000Z",
        "__v": 0
      },
      "description": null,
      "vlan": 416,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232265216,
        "firstDhcp": 3232265316,
        "lastDhcp": 3232265415,
        "gateway": 3232265217
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b87",
      "inUse": true,
      "clientId": null,
      "description": "",
      "vlan": 429,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232268544,
        "firstDhcp": 3232268644,
        "lastDhcp": 3232268743,
        "gateway": 3232268545
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b89",
      "inUse": true,
      "clientId": null,
      "description": "",
      "vlan": 431,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232269056,
        "firstDhcp": 3232269156,
        "lastDhcp": 3232269255,
        "gateway": 3232269057
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b78",
      "inUse": true,
      "clientId": {
        "_id": "613f3c9b4f8ffb8ebada8ed9",
        "tickets": {
          "others": [],
          "initial": 72232
        },
        "suites": [
          "60b5ffcdae111e529a3139d7",
          "60b5ffcdae111e529a3139e9",
          "60b5ffcdae111e529a3139eb"
        ],
        "telephony": {
          "active": false
        },
        "connection": {
          "bandwidth": 10,
          "type": "ded",
          "monitoring": {
            "active": true,
            "ifIndex": 605,
            "ifDevice": "60afbe89e2025433988863cb"
          }
        },
        "logo": false,
        "archive": false,
        "name": "77 Diamonds Limited",
        "shortName": "77diamondslimited",
        "siteId": "609e8d94174b2a276ce76c3d",
        "startedDate": "2021-11-01T00:00:00.000Z",
        "__v": 0
      },
      "description": null,
      "vlan": 414,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232264704,
        "firstDhcp": 3232264804,
        "lastDhcp": 3232264903,
        "gateway": 3232264705
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b85",
      "inUse": true,
      "clientId": {
        "_id": "61a0fe6f2c8ece48a35c0058",
        "tickets": {
          "others": []
        },
        "suites": [],
        "telephony": {
          "active": false
        },
        "connection": {
          "type": "ded",
          "bandwidth": 40,
          "monitoring": {
            "active": true,
            "shadow": false,
            "shadowId": "",
            "shadowIndex": "",
            "ifDevice": "60afbe89e2025433988863cb",
            "ifIndex": 632
          }
        },
        "logo": false,
        "archive": false,
        "name": "HH Associates",
        "shortName": "hhassociates",
        "siteId": "609e8d94174b2a276ce76c3d",
        "startedDate": "2021-11-22T00:00:00.000Z",
        "__v": 0
      },
      "description": "",
      "vlan": 427,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232268032,
        "firstDhcp": 3232268132,
        "lastDhcp": 3232268231,
        "gateway": 3232268033
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b9a",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 448,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232273408,
        "firstDhcp": 3232273508,
        "lastDhcp": 3232273607,
        "gateway": 3232273409
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b6e",
      "inUse": true,
      "clientId": {
        "_id": "60e844936389918429a0ba25",
        "tickets": {
          "others": [],
          "initial": 70840
        },
        "suites": [
          "60b5ffcdae111e529a3139d1"
        ],
        "telephony": {
          "active": true,
          "company": {
            "guid": "6f800a00-a109-0011-8567-005056beb9d0",
            "name": "MAH - QED Legal"
          }
        },
        "connection": {
          "bandwidth": 20,
          "type": "ded",
          "monitoring": {
            "active": true,
            "ifIndex": 581,
            "ifDevice": "60afbe89e2025433988863cb"
          }
        },
        "logo": false,
        "archive": false,
        "name": "QED Legal LLP",
        "shortName": "qedlegalllp",
        "siteId": "609e8d94174b2a276ce76c3d",
        "startedDate": "2021-07-31T23:00:00.000Z",
        "__v": 0
      },
      "description": "",
      "vlan": 404,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232262144,
        "firstDhcp": 3232262244,
        "lastDhcp": 3232262343,
        "gateway": 3232262145
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b94",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 442,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232271872,
        "firstDhcp": 3232271972,
        "lastDhcp": 3232272071,
        "gateway": 3232271873
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b8d",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 435,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232270080,
        "firstDhcp": 3232270180,
        "lastDhcp": 3232270279,
        "gateway": 3232270081
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b90",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 438,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232270848,
        "firstDhcp": 3232270948,
        "lastDhcp": 3232271047,
        "gateway": 3232270849
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b96",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 444,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232272384,
        "firstDhcp": 3232272484,
        "lastDhcp": 3232272583,
        "gateway": 3232272385
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b9e",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 452,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232274432,
        "firstDhcp": 3232274532,
        "lastDhcp": 3232274631,
        "gateway": 3232274433
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b6c",
      "inUse": true,
      "clientId": {
        "_id": "60decfaf22301f7fb28008c5",
        "tickets": {
          "initial": {
            "id": 70633,
            "title": "New client created - Brown Bob Productions",
            "description": "New client has been created via Orega Portal"
          },
          "others": [
            71232
          ]
        },
        "suites": [
          "60b5f2adae111e529a31399e"
        ],
        "telephony": {
          "active": true,
          "company": {
            "guid": "42e40900-1f61-fe10-8567-005056beb9d0",
            "name": "MAH - Brown Bob Productions"
          }
        },
        "connection": {
          "bandwidth": 10,
          "type": "ded",
          "monitoring": {
            "active": true,
            "ifIndex": 575,
            "ifDevice": "60afbe89e2025433988863cb"
          }
        },
        "logo": false,
        "archive": false,
        "name": "Brown Bob Productions",
        "shortName": "brownbobproductions",
        "siteId": "609e8d94174b2a276ce76c3d",
        "startedDate": "2021-07-04T23:00:00.000Z",
        "__v": 0
      },
      "description": null,
      "vlan": 402,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232261632,
        "firstDhcp": 3232261732,
        "lastDhcp": 3232261831,
        "gateway": 3232261633
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b75",
      "inUse": true,
      "clientId": {
        "_id": "6136213598d45c43c59110b0",
        "tickets": {
          "others": [],
          "initial": 72110
        },
        "suites": [
          "60b5ffcdae111e529a3139d6"
        ],
        "telephony": {
          "active": false
        },
        "connection": {
          "bandwidth": 10,
          "type": "ded",
          "monitoring": {
            "active": false,
            "ifIndex": null,
            "ifDevice": null
          }
        },
        "logo": false,
        "archive": false,
        "name": "Neil Pike Limited",
        "shortName": "neilpikelimited",
        "siteId": "609e8d94174b2a276ce76c3d",
        "startedDate": "2021-09-30T23:00:00.000Z",
        "__v": 0
      },
      "description": null,
      "vlan": 411,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232263936,
        "firstDhcp": 3232264036,
        "lastDhcp": 3232264135,
        "gateway": 3232263937
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b7e",
      "inUse": true,
      "clientId": null,
      "description": "Orega WiFi",
      "vlan": 420,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232266240,
        "firstDhcp": 3232266340,
        "lastDhcp": 3232266439,
        "gateway": 3232266241
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b82",
      "inUse": true,
      "clientId": null,
      "description": "Orega LAN",
      "vlan": 424,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232267264,
        "firstDhcp": 3232267364,
        "lastDhcp": 3232267463,
        "gateway": 3232267265
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b84",
      "inUse": true,
      "clientId": null,
      "description": "",
      "vlan": 426,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232267776,
        "firstDhcp": 3232267876,
        "lastDhcp": 3232267975,
        "gateway": 3232267777
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b95",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 443,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232272128,
        "firstDhcp": 3232272228,
        "lastDhcp": 3232272327,
        "gateway": 3232272129
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b97",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 445,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232272640,
        "firstDhcp": 3232272740,
        "lastDhcp": 3232272839,
        "gateway": 3232272641
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b6a",
      "inUse": true,
      "clientId": null,
      "description": "",
      "vlan": 400,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232261120,
        "firstDhcp": 3232261220,
        "lastDhcp": 3232261319,
        "gateway": 3232261121
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b70",
      "inUse": true,
      "clientId": {
        "_id": "61b872f6b23f73ecbb9e3718",
        "tickets": {
          "others": [],
          "initial": 74464
        },
        "suites": [
          "60b5f2adae111e529a31399b"
        ],
        "telephony": {
          "active": false
        },
        "connection": {
          "type": "ownFirewall",
          "bandwidth": 50,
          "firewallGroup": "",
          "monitoring": {
            "active": false,
            "shadow": false,
            "shadowId": null,
            "shadowIndex": null
          }
        },
        "logo": false,
        "archive": false,
        "name": "Quooker",
        "shortName": "quooker",
        "siteId": "609e8d94174b2a276ce76c3d",
        "startedDate": "2021-12-17T00:00:00.000Z",
        "__v": 0
      },
      "description": "",
      "vlan": 406,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232262656,
        "firstDhcp": 3232262756,
        "lastDhcp": 3232262855,
        "gateway": 3232262657
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b83",
      "inUse": true,
      "clientId": null,
      "description": "",
      "vlan": 425,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232267520,
        "firstDhcp": 3232267620,
        "lastDhcp": 3232267719,
        "gateway": 3232267521
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b8f",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 437,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232270592,
        "firstDhcp": 3232270692,
        "lastDhcp": 3232270791,
        "gateway": 3232270593
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b99",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 447,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232273152,
        "firstDhcp": 3232273252,
        "lastDhcp": 3232273351,
        "gateway": 3232273153
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b9b",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 449,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232273664,
        "firstDhcp": 3232273764,
        "lastDhcp": 3232273863,
        "gateway": 3232273665
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b9f",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 453,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232274688,
        "firstDhcp": 3232274788,
        "lastDhcp": 3232274887,
        "gateway": 3232274689
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24ba3",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 457,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232275712,
        "firstDhcp": 3232275812,
        "lastDhcp": 3232275911,
        "gateway": 3232275713
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b72",
      "inUse": true,
      "clientId": {
        "_id": "611e2e238339337a07dcb039",
        "tickets": {
          "others": [],
          "initial": 71777
        },
        "suites": [
          "60b5f2adae111e529a31398d"
        ],
        "telephony": {
          "active": false
        },
        "connection": {
          "bandwidth": 10,
          "type": "ded",
          "monitoring": {
            "active": true,
            "ifIndex": 590,
            "ifDevice": "60afbe89e2025433988863cb"
          }
        },
        "logo": false,
        "archive": false,
        "name": "Whitecap Consulting Limited",
        "shortName": "whitecapconsultinglimited",
        "siteId": "609e8d94174b2a276ce76c3d",
        "startedDate": "2021-08-31T23:00:00.000Z",
        "__v": 0
      },
      "description": null,
      "vlan": 408,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232263168,
        "firstDhcp": 3232263268,
        "lastDhcp": 3232263367,
        "gateway": 3232263169
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b79",
      "inUse": true,
      "clientId": {
        "_id": "614dedbf9346370612023866",
        "tickets": {
          "others": [],
          "initial": 72504
        },
        "suites": [
          "60b5ffcdae111e529a3139d2"
        ],
        "telephony": {
          "active": false
        },
        "connection": {
          "bandwidth": 10,
          "type": "ded",
          "monitoring": {
            "active": false,
            "ifIndex": null,
            "ifDevice": null
          }
        },
        "logo": false,
        "archive": false,
        "name": "Petroplan Europe Limited",
        "shortName": "petroplaneuropelimited",
        "siteId": "609e8d94174b2a276ce76c3d",
        "startedDate": "2021-09-26T23:00:00.000Z",
        "__v": 0
      },
      "description": null,
      "vlan": 415,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232264960,
        "firstDhcp": 3232265060,
        "lastDhcp": 3232265159,
        "gateway": 3232264961
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b81",
      "inUse": true,
      "clientId": null,
      "description": "",
      "vlan": 423,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232267008,
        "firstDhcp": 3232267108,
        "lastDhcp": 3232267207,
        "gateway": 3232267009
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b88",
      "inUse": true,
      "clientId": null,
      "description": "",
      "vlan": 430,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232268800,
        "firstDhcp": 3232268900,
        "lastDhcp": 3232268999,
        "gateway": 3232268801
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b8c",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 434,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232269824,
        "firstDhcp": 3232269924,
        "lastDhcp": 3232270023,
        "gateway": 3232269825
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24ba5",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 459,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232276224,
        "firstDhcp": 3232276324,
        "lastDhcp": 3232276423,
        "gateway": 3232276225
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b76",
      "inUse": true,
      "clientId": {
        "_id": "61c1be163b74d9276e7b576b",
        "tickets": {
          "others": [],
          "initial": 74607
        },
        "suites": [
          "60b5f2adae111e529a31399c",
          "60b5ffcdae111e529a3139cf"
        ],
        "telephony": {
          "active": false
        },
        "connection": {
          "bandwidth": 10,
          "type": "ded",
          "monitoring": {
            "active": true,
            "ifIndex": 602,
            "ifDevice": "60afbe89e2025433988863cb"
          },
          "firewallGroup": "fourrecruitmentlim_412"
        },
        "logo": false,
        "archive": false,
        "name": "Four Recruitment Limited",
        "shortName": "fourrecruitmentlimited",
        "siteId": "609e8d94174b2a276ce76c3d",
        "startedDate": "2022-01-01T00:00:00.000Z",
        "__v": 0
      },
      "description": "",
      "vlan": 412,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232264192,
        "firstDhcp": 3232264292,
        "lastDhcp": 3232264391,
        "gateway": 3232264193
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b7c",
      "inUse": true,
      "clientId": {
        "_id": "61572642b11bee748790640e",
        "tickets": {
          "others": [],
          "initial": 72696
        },
        "suites": [],
        "telephony": {
          "active": false
        },
        "connection": {
          "bandwidth": 10,
          "type": "ded",
          "monitoring": {
            "active": true,
            "ifIndex": 620,
            "ifDevice": "60afbe89e2025433988863cb"
          }
        },
        "logo": false,
        "archive": false,
        "name": "QJG Limited",
        "shortName": "qjglimited",
        "siteId": "609e8d94174b2a276ce76c3d",
        "startedDate": "2021-10-03T23:00:00.000Z",
        "__v": 0
      },
      "description": null,
      "vlan": 418,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232265728,
        "firstDhcp": 3232265828,
        "lastDhcp": 3232265927,
        "gateway": 3232265729
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b7d",
      "inUse": true,
      "clientId": {
        "_id": "6166fff6d611808575f7f8b5",
        "tickets": {
          "others": [],
          "initial": 72984
        },
        "suites": [
          "60b5ffcdae111e529a3139ee"
        ],
        "telephony": {
          "active": false
        },
        "connection": {
          "bandwidth": 10,
          "type": "ded",
          "monitoring": {
            "active": true,
            "ifIndex": 623,
            "ifDevice": "60afbe89e2025433988863cb"
          }
        },
        "logo": false,
        "archive": false,
        "name": "Dimensional Consulting Limited",
        "shortName": "dimensionalconsultinglimited",
        "siteId": "609e8d94174b2a276ce76c3d",
        "startedDate": "2021-11-01T00:00:00.000Z",
        "__v": 0
      },
      "description": "",
      "vlan": 419,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232265984,
        "firstDhcp": 3232266084,
        "lastDhcp": 3232266183,
        "gateway": 3232265985
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b7b",
      "inUse": true,
      "clientId": {
        "_id": "61541e04b5ac340f6d19982f",
        "tickets": {
          "others": [],
          "initial": 72506
        },
        "suites": [],
        "telephony": {
          "active": false
        },
        "connection": {
          "bandwidth": 100,
          "type": "ded",
          "monitoring": {
            "active": true,
            "ifIndex": 617,
            "ifDevice": "60afbe89e2025433988863cb"
          }
        },
        "logo": false,
        "archive": false,
        "name": "Cinch Guest",
        "shortName": "cinchguest",
        "siteId": "609e8d94174b2a276ce76c3d",
        "startedDate": "2021-09-30T23:00:00.000Z",
        "__v": 0
      },
      "description": null,
      "vlan": 417,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232265472,
        "firstDhcp": 3232265572,
        "lastDhcp": 3232265671,
        "gateway": 3232265473
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b86",
      "inUse": true,
      "clientId": {
        "_id": "61a101a22d360148f63d55fa",
        "tickets": {
          "others": []
        },
        "suites": [
          "60b5ffcdae111e529a3139ed"
        ],
        "telephony": {
          "active": false
        },
        "connection": {
          "type": "ded",
          "bandwidth": 10,
          "monitoring": {
            "active": true,
            "shadow": false,
            "shadowId": "",
            "shadowIndex": "",
            "ifDevice": "60afbe89e2025433988863cb",
            "ifIndex": 635
          }
        },
        "logo": false,
        "archive": false,
        "name": "Axiom",
        "shortName": "axiom",
        "siteId": "609e8d94174b2a276ce76c3d",
        "startedDate": "2021-11-15T00:00:00.000Z",
        "__v": 0
      },
      "description": "",
      "vlan": 428,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232268288,
        "firstDhcp": 3232268388,
        "lastDhcp": 3232268487,
        "gateway": 3232268289
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b91",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 439,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232271104,
        "firstDhcp": 3232271204,
        "lastDhcp": 3232271303,
        "gateway": 3232271105
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b6b",
      "inUse": true,
      "clientId": null,
      "description": "",
      "vlan": 401,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232261376,
        "firstDhcp": 3232261476,
        "lastDhcp": 3232261575,
        "gateway": 3232261377
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b6f",
      "inUse": true,
      "clientId": {
        "_id": "61028e38bf36237c842c627d",
        "tickets": {
          "others": [],
          "initial": 71313
        },
        "suites": [
          "60b5f2adae111e529a31399d"
        ],
        "telephony": {
          "active": false
        },
        "connection": {
          "bandwidth": 10,
          "type": "ded",
          "monitoring": {
            "active": true,
            "ifIndex": 584,
            "ifDevice": "60afbe89e2025433988863cb"
          }
        },
        "logo": false,
        "archive": false,
        "name": "Sapien Labs Limited ",
        "shortName": "sapienlabslimited",
        "siteId": "609e8d94174b2a276ce76c3d",
        "startedDate": "2021-08-29T23:00:00.000Z",
        "__v": 0
      },
      "description": "",
      "vlan": 405,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232262400,
        "firstDhcp": 3232262500,
        "lastDhcp": 3232262599,
        "gateway": 3232262401
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b73",
      "inUse": true,
      "clientId": {
        "_id": "6128bc6b842280d4bc389c47",
        "tickets": {
          "others": [],
          "initial": 71944
        },
        "suites": [
          "60b5ffcdae111e529a3139d4"
        ],
        "telephony": {
          "active": false
        },
        "connection": {
          "bandwidth": 10,
          "type": "ded",
          "monitoring": {
            "active": true,
            "ifIndex": 593,
            "ifDevice": "60afbe89e2025433988863cb"
          }
        },
        "logo": false,
        "archive": false,
        "name": "Eleven Worldwide Limited",
        "shortName": "elevenworldwidelimited",
        "siteId": "609e8d94174b2a276ce76c3d",
        "startedDate": "2021-08-29T23:00:00.000Z",
        "__v": 0
      },
      "description": null,
      "vlan": 409,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232263424,
        "firstDhcp": 3232263524,
        "lastDhcp": 3232263623,
        "gateway": 3232263425
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b77",
      "inUse": true,
      "clientId": {
        "_id": "61c1be163b74d9276e7b576b",
        "tickets": {
          "others": [],
          "initial": 74607
        },
        "suites": [
          "60b5f2adae111e529a31399c",
          "60b5ffcdae111e529a3139cf"
        ],
        "telephony": {
          "active": false
        },
        "connection": {
          "bandwidth": 10,
          "type": "ded",
          "monitoring": {
            "active": true,
            "ifIndex": 602,
            "ifDevice": "60afbe89e2025433988863cb"
          },
          "firewallGroup": "fourrecruitmentlim_412"
        },
        "logo": false,
        "archive": false,
        "name": "Four Recruitment Limited",
        "shortName": "fourrecruitmentlimited",
        "siteId": "609e8d94174b2a276ce76c3d",
        "startedDate": "2022-01-01T00:00:00.000Z",
        "__v": 0
      },
      "description": null,
      "vlan": 413,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232264448,
        "firstDhcp": 3232264548,
        "lastDhcp": 3232264647,
        "gateway": 3232264449
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b9c",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 450,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232273920,
        "firstDhcp": 3232274020,
        "lastDhcp": 3232274119,
        "gateway": 3232273921
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24ba2",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 456,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232275456,
        "firstDhcp": 3232275556,
        "lastDhcp": 3232275655,
        "gateway": 3232275457
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b7f",
      "inUse": true,
      "clientId": null,
      "description": "",
      "vlan": 421,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232266496,
        "firstDhcp": 3232266596,
        "lastDhcp": 3232266695,
        "gateway": 3232266497
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b8a",
      "inUse": true,
      "clientId": null,
      "description": "",
      "vlan": 432,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232269312,
        "firstDhcp": 3232269412,
        "lastDhcp": 3232269511,
        "gateway": 3232269313
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24ba4",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 458,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232275968,
        "firstDhcp": 3232276068,
        "lastDhcp": 3232276167,
        "gateway": 3232275969
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b6d",
      "inUse": true,
      "clientId": {
        "_id": "60ded3c022301f7fb2800926",
        "tickets": {
          "initial": {
            "id": 70635,
            "title": "New client created - Rapid Pictures Limited",
            "description": "New client has been created via Orega Portal"
          }
        },
        "suites": [
          "60dee83620db868e5f05d9e8",
          "60dee83620db868e5f05d9e9",
          "60dee83620db868e5f05d9ea",
          "60dee83620db868e5f05d9eb",
          "60dee83620db868e5f05d9ec"
        ],
        "telephony": {
          "active": true,
          "company": {
            "guid": "473e0800-d0ae-ff10-8567-005056beb9d0",
            "name": "MAH - Rapid Productions"
          }
        },
        "connection": {
          "bandwidth": "600",
          "monitoring": {
            "active": true,
            "ifIndex": "578"
          },
          "type": "ded"
        },
        "logo": false,
        "archive": false,
        "name": "Rapid Pictures Limited",
        "shortName": "rapidpictureslimited",
        "siteId": "609e8d94174b2a276ce76c3d",
        "startedDate": "2021-07-04T23:00:00.000Z",
        "__v": 0
      },
      "description": null,
      "vlan": 403,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232261888,
        "firstDhcp": 3232261988,
        "lastDhcp": 3232262087,
        "gateway": 3232261889
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b80",
      "inUse": true,
      "clientId": null,
      "description": "",
      "vlan": 422,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232266752,
        "firstDhcp": 3232266852,
        "lastDhcp": 3232266951,
        "gateway": 3232266753
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b9d",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 451,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232274176,
        "firstDhcp": 3232274276,
        "lastDhcp": 3232274375,
        "gateway": 3232274177
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b71",
      "inUse": true,
      "clientId": {
        "_id": "6113e7286cd4662c2535d0fb",
        "tickets": {
          "others": [],
          "initial": 71616
        },
        "suites": [
          "60b5ffcdae111e529a3139d3"
        ],
        "telephony": {
          "active": false
        },
        "connection": {
          "bandwidth": 10,
          "type": "ded",
          "monitoring": {
            "active": true,
            "ifIndex": 587,
            "ifDevice": "60afbe89e2025433988863cb"
          }
        },
        "logo": false,
        "archive": false,
        "name": "Dairy Drop Ltd ",
        "shortName": "dairydropltd",
        "siteId": "609e8d94174b2a276ce76c3d",
        "startedDate": "2021-08-10T23:00:00.000Z",
        "__v": 0
      },
      "description": null,
      "vlan": 407,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232262912,
        "firstDhcp": 3232263012,
        "lastDhcp": 3232263111,
        "gateway": 3232262913
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b92",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 440,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232271360,
        "firstDhcp": 3232271460,
        "lastDhcp": 3232271559,
        "gateway": 3232271361
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24b93",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 441,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232271616,
        "firstDhcp": 3232271716,
        "lastDhcp": 3232271815,
        "gateway": 3232271617
      },
      "__v": 0
    },
    {
      "_id": "60a293289aba083e5db24ba1",
      "inUse": false,
      "clientId": null,
      "description": null,
      "vlan": 455,
      "siteId": "609e8d94174b2a276ce76c3d",
      "internalSubnet": {
        "subnet": 3232275200,
        "firstDhcp": 3232275300,
        "lastDhcp": 3232275399,
        "gateway": 3232275201
      },
      "__v": 0
    }
  ]

  const users = [
    {
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "admin",
      "siteAccess": [
        "602259e07fc8b7a5c3b924f9",
        "60225a247fc8b7a5c3b924fa",
        "60225a3a7fc8b7a5c3b924fc",
        "60225a317fc8b7a5c3b924fb",
        "608968635825a23c5703d449",
        "609e8d94174b2a276ce76c3d",
        "60d346a5f6a5d4f96664d5cb"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [],
      "featureFlags": [
        {
          "_id": "610173a34f2bf6cb697b2ef8",
          "name": "admin-bandwidth-overview",
          "description": "Overview of bandwidth of all sites with access"
        }
      ],
      "permissions": [],
      "_id": "60ffdd733a99986510cd0fa2",
      "username": "reza.mashedy",
      "firstName": "Reza",
      "lastName": "Mashedy",
      "email": "rmashedy@orega.com",
      "password": "$2a$10$nP390IihflR6K8/9wRAUVeJ78aBizeieZA5bBA4RhrKherGelO/ye",
      "createdAt": "2021-07-27T10:18:27.722Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [
        "609e8d94174b2a276ce76c3d"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [],
      "featureFlags": [],
      "permissions": [],
      "_id": "60e30ed3f376b74be2aaa8fd",
      "username": "tilly.hardwick",
      "firstName": "Tilly",
      "lastName": "Hardwick",
      "email": "thardwick@orega.com",
      "password": "$2a$10$CMfmXrFShpicGPGRaLStbuDNnT3S.8m.rEt1Gfft2wX8kV20RytHG",
      "createdAt": "2021-07-05T13:53:23.761Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": true
      },
      "userType": "super",
      "siteAccess": [
        "602259e07fc8b7a5c3b924f9",
        "60225a247fc8b7a5c3b924fa",
        "60225a3a7fc8b7a5c3b924fc",
        "609e8d94174b2a276ce76c3d",
        "608968635825a23c5703d449",
        "60225a317fc8b7a5c3b924fb",
        "60d346a5f6a5d4f96664d5cb"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [],
      "featureFlags": [],
      "permissions": [],
      "_id": "60e30d60f376b74be2aaa8cd",
      "username": "michael.holland",
      "firstName": "Michael",
      "lastName": "Holland",
      "email": "michael.holland@silver-lining.com",
      "password": "$2a$10$2Qkzhnz9NSM38y9.EdxqKuHezqFcHEqUgeqz.xc4Nhtmf.vFmwDIu",
      "createdAt": "2021-07-05T13:47:12.877Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": true
      },
      "userType": "shield",
      "siteAccess": [
        "602259e07fc8b7a5c3b924f9",
        "60225a247fc8b7a5c3b924fa",
        "60225a317fc8b7a5c3b924fb",
        "60225a3a7fc8b7a5c3b924fc",
        "608968635825a23c5703d449",
        "609e8d94174b2a276ce76c3d",
        "60d346a5f6a5d4f96664d5cb",
        "61790ec8a1c190ebdfa0deb5",
        "618a8f8b7762d674745810b5",
        "61aa3cc269b5aa93ebd1fc4c",
        "6124d5680b5bc1b64440b905",
        "61dadb83c7a359f6b71e57ec",
        "61db292305ddfb1281418c9c",
        "61db2c1505ddfb1281418deb"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082",
        "618a8f7b7762d674745810b4",
        "61c45c63d7a9483da20b29c3"
      ],
      "lastLog": [
        "2022-01-08T17:21:45.559Z",
        "2022-01-08T17:27:31.471Z",
        "2022-01-09T12:51:53.918Z",
        "2022-01-09T18:05:16.304Z",
        "2022-01-10T08:22:09.257Z",
        "2022-01-10T17:23:18.449Z",
        "2022-01-11T08:58:27.134Z",
        "2022-01-11T16:08:01.888Z",
        "2022-01-12T10:50:59.996Z",
        "2022-01-13T16:02:45.651Z",
        "2022-01-14T09:12:57.339Z",
        "2022-01-14T14:49:19.322Z",
        "2022-01-15T10:18:22.047Z",
        "2022-01-17T10:24:09.178Z",
        "2022-01-18T08:58:28.630Z",
        "2022-01-18T14:11:17.959Z",
        "2022-01-18T15:05:54.702Z",
        "2022-01-20T09:51:25.708Z",
        "2022-01-21T12:21:35.881Z",
        "2022-01-22T11:09:37.104Z",
        "2022-01-22T14:16:06.311Z",
        "2022-01-24T11:10:24.564Z",
        "2022-01-25T08:25:58.441Z",
        "2022-01-25T14:19:24.471Z",
        "2022-01-26T09:13:59.307Z",
        "2022-01-26T15:34:55.270Z",
        "2022-01-27T10:53:39.087Z",
        "2022-01-28T10:29:04.236Z",
        "2022-01-28T16:17:50.047Z",
        "2022-01-29T11:50:17.771Z",
        "2022-01-31T11:34:27.655Z",
        "2022-01-31T17:04:44.649Z",
        "2022-02-01T09:00:48.880Z",
        "2022-02-01T15:16:42.980Z",
        "2022-02-02T11:56:55.142Z",
        "2022-02-03T11:47:36.445Z",
        "2022-02-04T11:10:04.397Z",
        "2022-02-04T17:03:27.643Z",
        "2022-02-06T10:42:18.243Z"
      ],
      "featureFlags": [
        {
          "_id": "610173864f2bf6cb697b2ef7",
          "name": "admin-telephony-data",
          "description": "Overview of clients for telephony and data",
          "type": "user"
        },
        {
          "_id": "6124d55e0b5bc1b64440b904",
          "name": "admin-update-client-bandwidth",
          "description": "Ability to update clients bandwidth",
          "__v": 0,
          "type": "user"
        },
        {
          "_id": "612cb969e9dea7f3e8ae5f24",
          "name": "admin-floorports-delete-all",
          "description": "Delete all floorports button",
          "__v": 0,
          "type": "user"
        },
        {
          "_id": "6182910accdb0533bfbf713d",
          "name": "admin-delete-client-wizard",
          "description": "admin-delete-client-wizard",
          "type": "user",
          "__v": 0
        },
        {
          "_id": "61dada7cc7a359f6b71e577e",
          "name": "admin-search-macaddress",
          "description": "admin-search-macaddress",
          "type": "user",
          "__v": 0
        }
      ],
      "permissions": [],
      "_id": "602172008a78457031275918",
      "username": "jakub.koudela",
      "firstName": "Jakub",
      "lastName": "Koudela",
      "email": "jakub.koudela@silver-lining.com",
      "password": "$2a$10$Jdq3BjAtAoGLEX3Sbs5qU.IiVfBLabSqgHvod4nigoCnB77sDGNxu",
      "createdAt": "2021-02-08T17:16:48.615Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [
        "609e8d94174b2a276ce76c3d"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [],
      "featureFlags": [],
      "permissions": [],
      "_id": "60e30e82f376b74be2aaa8fc",
      "username": "gemma.gilliland",
      "firstName": "Gemma",
      "lastName": "Gilliland",
      "email": "ggilliland@orega.com",
      "password": "$2a$10$M5fmmUrvs4EKdXtJkLYJjOasAR9.rCrgW9a8VseZf./OiLKk59zcm",
      "createdAt": "2021-07-05T13:52:02.298Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [],
      "featureFlags": [],
      "permissions": [],
      "_id": "6093edbc28bc759ed2e04bc5",
      "username": "reception.bristol",
      "firstName": "Reception",
      "lastName": "Bristol",
      "email": "reception.bristol@orega.com",
      "password": "$2a$10$Yln7XOOynY8vvrmP0AQ0oOd8.u2PH4aPlbV23BqhPiU..U6NTG7Ce",
      "createdAt": "2021-05-06T13:23:08.474Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [
        "602259e07fc8b7a5c3b924f9",
        "60225a247fc8b7a5c3b924fa",
        "60225a317fc8b7a5c3b924fb",
        "60225a3a7fc8b7a5c3b924fc",
        "608968635825a23c5703d449",
        "609e8d94174b2a276ce76c3d",
        "60d346a5f6a5d4f96664d5cb"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [],
      "featureFlags": [
        {
          "_id": "610173864f2bf6cb697b2ef7",
          "name": "admin-telephony-data",
          "description": "Overview of clients for telephony and data"
        }
      ],
      "permissions": [],
      "_id": "610175f722231a76279822ce",
      "username": "david.robertson",
      "firstName": "David",
      "lastName": "Robertson",
      "email": "david.robertson@silver-lining.com",
      "password": "$2a$10$Td7DXtrhgEH7TGtdk0jrAuFa7o/tGNmm6KFLwiD8QhGPx1SMpfGtW",
      "createdAt": "2021-07-28T15:21:27.289Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": true
      },
      "userType": "super",
      "siteAccess": [
        "602259e07fc8b7a5c3b924f9",
        "60225a247fc8b7a5c3b924fa",
        "60225a3a7fc8b7a5c3b924fc",
        "609e8d94174b2a276ce76c3d",
        "608968635825a23c5703d449"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [
        "2022-01-26T11:57:15.160Z",
        "2022-01-27T09:04:36.739Z",
        "2022-01-27T21:29:54.730Z",
        "2022-02-01T10:23:50.226Z",
        "2022-02-02T09:53:50.008Z",
        "2022-02-02T15:14:18.340Z"
      ],
      "featureFlags": [
        {
          "_id": "610173864f2bf6cb697b2ef7",
          "name": "admin-telephony-data",
          "description": "Overview of clients for telephony and data",
          "type": "user"
        },
        {
          "_id": "610173a34f2bf6cb697b2ef8",
          "name": "admin-bandwidth-overview",
          "description": "Overview of bandwidth of all sites with access",
          "type": "user"
        }
      ],
      "permissions": [],
      "_id": "60e49a4c5347215820be7da2",
      "username": "sean.gabellini",
      "firstName": "Sean",
      "lastName": "Gabellini",
      "email": "sean.gabellini@silver-lining.com",
      "password": "$2a$10$bG8zC6OTNJkWH11z31xrBOGk5iVp3bTRdqJHMDheuO.AFJ0SLFoZe",
      "createdAt": "2021-07-06T18:00:44.839Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [
        "60d346a5f6a5d4f96664d5cb"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [],
      "featureFlags": [],
      "permissions": [],
      "_id": "60f14a138d247bd9e4c68e87",
      "username": "tracey.mahoney",
      "firstName": "Tracey",
      "lastName": "Mahoney",
      "email": "tmahoney@orega.com",
      "password": "$2a$10$.z.LPTji9wXUN07Uyd27u.2Yx4/trico/VDRTSsmiyXJnTgTQHYcq",
      "createdAt": "2021-07-16T08:57:55.338Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": true
      },
      "userType": "user",
      "siteAccess": [
        "608968635825a23c5703d449"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [
        "2022-01-20T10:50:25.266Z",
        "2022-01-20T10:51:31.483Z",
        "2022-01-20T10:51:56.675Z",
        "2022-01-20T11:09:20.034Z",
        "2022-01-20T11:24:39.491Z",
        "2022-01-21T11:30:06.022Z",
        "2022-01-21T11:30:06.027Z",
        "2022-01-21T12:24:50.071Z",
        "2022-01-22T12:12:55.733Z",
        "2022-01-25T12:22:57.892Z"
      ],
      "featureFlags": [
        {
          "_id": "6124d55e0b5bc1b64440b904",
          "name": "admin-update-client-bandwidth",
          "description": "Ability to update clients bandwidth",
          "__v": 0
        }
      ],
      "permissions": [],
      "_id": "6124d5c30b5bc1b64440b906",
      "username": "demo.user",
      "firstName": "Demo",
      "lastName": "User",
      "email": "development@silver-lining.com",
      "password": "$2a$10$UsEp8lHKDH8ITv0AyGPNB.QoCZ.X5TgUGJPB2gkbbotxEIdCtK20y",
      "createdAt": "2021-08-24T11:19:31.290Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [
        "60225a3a7fc8b7a5c3b924fc"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [
        "2022-01-12T10:15:37.843Z"
      ],
      "featureFlags": [],
      "permissions": [],
      "_id": "61013ccc7a8e5973ed8e3acc",
      "username": "anca.rosca",
      "firstName": "Anca",
      "lastName": "Rosca",
      "email": "arosca@orega.com",
      "password": "$2a$10$0vCXzTeGASJDKJDGwJvwYOHW0ZcgKNqeYN0I6tCxOGAnvpSnfGCFW",
      "createdAt": "2021-07-28T11:17:32.183Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [
        "602259e07fc8b7a5c3b924f9",
        "61790ec8a1c190ebdfa0deb5"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [],
      "featureFlags": [],
      "permissions": [],
      "_id": "60225a697fc8b7a5c3b924fd",
      "username": "damien.vanderhaegen",
      "firstName": "Damien",
      "lastName": "Vanderhaegen",
      "email": "damien.vanderhaegen@silver-lining.com",
      "password": "$2a$10$JloYiFFO//DaY9QgCYfQVuAnSWogGw.ZuGiKoT6OfAMPTHbLBkucm",
      "createdAt": "2021-02-09T09:48:25.298Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [
        "60225a3a7fc8b7a5c3b924fc"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [
        "2022-01-18T09:18:23.389Z",
        "2022-01-24T18:06:38.464Z",
        "2022-01-28T11:03:13.289Z"
      ],
      "featureFlags": [],
      "permissions": [],
      "_id": "60d99dc9a73365351c2a2948",
      "username": "joe.clubb",
      "firstName": "Joe",
      "lastName": "Clubb",
      "email": "jclubb@orega.com",
      "password": "$2a$10$RvDm5h3A6doVwJvxgaD/MO9yuoL255LhmEmKEnLUDjeoacZRcxW3O",
      "createdAt": "2021-06-28T10:00:41.174Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": true
      },
      "userType": "super",
      "siteAccess": [
        "602259e07fc8b7a5c3b924f9",
        "60225a247fc8b7a5c3b924fa",
        "60225a3a7fc8b7a5c3b924fc",
        "609e8d94174b2a276ce76c3d",
        "608968635825a23c5703d449",
        "60d346a5f6a5d4f96664d5cb"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [
        "2022-01-28T15:19:42.438Z",
        "2022-01-31T09:28:18.288Z",
        "2022-02-01T17:26:28.938Z",
        "2022-02-04T11:15:04.365Z"
      ],
      "featureFlags": [],
      "permissions": [],
      "_id": "60e49a235347215820be7d73",
      "username": "tyler.smedmor",
      "firstName": "Tyler",
      "lastName": "Smedmor",
      "email": "tyler.smedmor@silver-lining.com",
      "password": "$2a$10$fxv4yg57rFuEhOy9CoDdteHHuGrXGb4Vv/JFUjTCyyL.pdCG9DRT6",
      "createdAt": "2021-07-06T18:00:03.521Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [
        "608968635825a23c5703d449"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [
        "2022-01-14T14:41:10.056Z",
        "2022-01-17T10:47:01.626Z",
        "2022-01-18T11:13:07.109Z",
        "2022-01-20T10:11:58.555Z",
        "2022-01-21T11:22:05.896Z",
        "2022-01-21T12:12:25.798Z",
        "2022-01-24T10:44:52.622Z",
        "2022-01-25T14:03:53.927Z",
        "2022-01-26T12:45:14.590Z",
        "2022-01-27T10:34:18.602Z",
        "2022-01-31T10:36:28.360Z"
      ],
      "featureFlags": [],
      "permissions": [],
      "_id": "60e6d46c5c581775d0e29c4a",
      "username": "michelle.whittock",
      "firstName": "Michelle",
      "lastName": "Whittock",
      "email": "MWhittock@orega.com",
      "password": "$2a$10$zX/wr7iwj420CEnYIIGKw.dhyRfopyEt8Mjy4w.JPDP.JdEfCpNtK",
      "createdAt": "2021-07-08T10:33:16.990Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [
        "60225a317fc8b7a5c3b924fb"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [],
      "featureFlags": [],
      "permissions": [],
      "_id": "60f18b35453f9fe60be41dab",
      "username": "michelle.handfield",
      "firstName": "Michelle",
      "lastName": "Handfield",
      "email": "acsm.ld@orega.com",
      "password": "$2a$10$K7UkP2wbEB1WFkQJJX99KuoKxviQvPX2o9rvET160Fadrnk4RT1rK",
      "createdAt": "2021-07-16T13:35:49.916Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [
        "609e8d94174b2a276ce76c3d"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [
        "2022-01-10T11:09:15.546Z",
        "2022-01-20T09:05:15.070Z",
        "2022-01-25T12:02:37.080Z",
        "2022-01-31T14:43:15.435Z",
        "2022-02-03T10:12:43.769Z",
        "2022-02-04T15:20:45.624Z"
      ],
      "featureFlags": [],
      "permissions": [],
      "_id": "60d321acf6a5d4f96664d456",
      "username": "lucy.earnshaw",
      "firstName": "Lucy",
      "lastName": "Earnshaw",
      "email": "lwoods@orega.com",
      "password": "$2a$10$SfGDMMS/OMYVdR/8DvVEFOrWag9gGkpU37J6LmEnSZAPqk2DaFL0e",
      "createdAt": "2021-06-23T11:57:32.221Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": true
      },
      "userType": "super",
      "siteAccess": [
        "602259e07fc8b7a5c3b924f9",
        "60225a3a7fc8b7a5c3b924fc",
        "609e8d94174b2a276ce76c3d",
        "60225a247fc8b7a5c3b924fa",
        "608968635825a23c5703d449",
        "60225a317fc8b7a5c3b924fb",
        "61790ec8a1c190ebdfa0deb5",
        "618a8f8b7762d674745810b5",
        "60d346a5f6a5d4f96664d5cb"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082",
        "618a8f7b7762d674745810b4"
      ],
      "lastLog": [
        "2022-01-13T15:51:13.146Z",
        "2022-01-14T10:39:34.563Z",
        "2022-01-14T16:26:35.276Z",
        "2022-01-17T09:06:10.568Z",
        "2022-01-17T16:30:01.328Z",
        "2022-01-18T09:27:22.574Z",
        "2022-01-24T11:10:58.667Z",
        "2022-01-24T16:19:34.266Z",
        "2022-01-26T08:55:14.338Z",
        "2022-01-28T15:01:27.488Z",
        "2022-01-31T09:49:03.269Z",
        "2022-02-01T10:25:41.147Z",
        "2022-02-01T10:25:41.423Z",
        "2022-02-03T11:17:36.805Z",
        "2022-02-04T15:57:00.474Z"
      ],
      "featureFlags": [],
      "permissions": [],
      "_id": "6023c5688a8c17d76f915f22",
      "username": "luke.quelch",
      "firstName": "Luke",
      "lastName": "Quelch",
      "email": "luke.quelch@silver-lining.com",
      "password": "$2a$10$.6lE1D/wTGZ/a4auDut6rOdESjyiFWBzgrWVItRz/MMz.li9ikc9i",
      "createdAt": "2021-02-10T11:37:12.240Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": true
      },
      "userType": "super",
      "siteAccess": [
        "602259e07fc8b7a5c3b924f9",
        "60225a247fc8b7a5c3b924fa",
        "60225a3a7fc8b7a5c3b924fc",
        "60225a317fc8b7a5c3b924fb",
        "608968635825a23c5703d449",
        "609e8d94174b2a276ce76c3d",
        "60d346a5f6a5d4f96664d5cb",
        "61790ec8a1c190ebdfa0deb5"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [
        "2022-02-02T14:43:47.202Z",
        "2022-02-05T12:56:26.216Z"
      ],
      "featureFlags": [
        {
          "_id": "6182910accdb0533bfbf713d",
          "name": "admin-delete-client-wizard",
          "description": "admin-delete-client-wizard",
          "type": "user",
          "__v": 0
        }
      ],
      "permissions": [
        "61829aba66f0ff36da9cf196"
      ],
      "_id": "605b27959bdaefba24b842a1",
      "username": "artur.balcerak",
      "firstName": "Artur",
      "lastName": "Balcerak",
      "email": "artur.balcerak@silver-lining.com",
      "password": "$2a$10$h78H139OcLHuqn5G25zLr.zOaLoJglJPc3uAvDbVOiJVXpdeS5gdq",
      "createdAt": "2021-03-24T11:50:45.586Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [
        "60225a247fc8b7a5c3b924fa"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [
        "2022-01-10T17:02:22.321Z",
        "2022-01-11T09:45:48.517Z",
        "2022-01-11T14:56:32.037Z",
        "2022-01-12T08:57:59.499Z",
        "2022-01-12T09:06:21.336Z",
        "2022-01-12T11:23:27.081Z",
        "2022-01-13T12:11:18.664Z",
        "2022-01-24T13:01:29.070Z",
        "2022-01-27T12:31:45.044Z",
        "2022-01-28T11:07:38.375Z",
        "2022-02-01T10:53:21.006Z",
        "2022-02-01T11:05:29.231Z",
        "2022-02-02T09:30:09.412Z",
        "2022-02-02T09:30:13.428Z",
        "2022-02-02T09:30:18.961Z",
        "2022-02-02T09:30:20.304Z",
        "2022-02-02T09:30:26.104Z",
        "2022-02-02T16:05:41.449Z",
        "2022-02-03T09:26:37.062Z"
      ],
      "featureFlags": [],
      "permissions": [],
      "_id": "60e575a8672ed4613e9f1be1",
      "username": "reception.uxbridge",
      "firstName": "Reception",
      "lastName": "Uxbridge",
      "email": "reception.uxbridge@orega.com",
      "password": "$2a$10$hKBlRHEMxdWv5Z15AHXWyOBEwNxSApLEs1/fjiJCHlaHE1AqNk.JO",
      "createdAt": "2021-07-07T09:36:40.172Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": true
      },
      "userType": "super",
      "siteAccess": [
        "602259e07fc8b7a5c3b924f9",
        "60225a247fc8b7a5c3b924fa",
        "60225a317fc8b7a5c3b924fb",
        "60225a3a7fc8b7a5c3b924fc",
        "608968635825a23c5703d449",
        "609e8d94174b2a276ce76c3d",
        "60d346a5f6a5d4f96664d5cb"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [],
      "featureFlags": [
        {
          "_id": "610173a34f2bf6cb697b2ef8",
          "name": "admin-bandwidth-overview",
          "description": "Overview of bandwidth of all sites with access"
        }
      ],
      "permissions": [],
      "_id": "60ffc2f23a1b186489a85642",
      "username": "nathan.bonwick",
      "firstName": "Nathan",
      "lastName": "Bonwick",
      "email": "nathan.bonwick@silver-lining.com",
      "password": "$2a$10$mt.kYMF/iTQQZTA18JHGSOEABmfOz82YN9T45FCQr.KAdpJcO40eO",
      "createdAt": "2021-07-27T08:25:22.815Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [
        "602259e07fc8b7a5c3b924f9"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [
        "2022-01-17T16:34:51.214Z",
        "2022-02-01T10:28:46.848Z"
      ],
      "featureFlags": [],
      "permissions": [],
      "_id": "6094fff949fabba9ac56ef4d",
      "username": "reception.slough",
      "firstName": "Reception",
      "lastName": "Slough",
      "email": "reception.slough@orega.com",
      "password": "$2a$10$7S8uhIU5OsCC2PSDstYIO.tOhXYEA8CwTNLf/ftAV9UZYp1NmuRZ.",
      "createdAt": "2021-05-07T08:53:13.138Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [
        "602259e07fc8b7a5c3b924f9",
        "60225a247fc8b7a5c3b924fa"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [],
      "featureFlags": [],
      "permissions": [],
      "_id": "610bc60be39d66f494576344",
      "username": "taruna.patel",
      "firstName": "Taruna",
      "lastName": "Patel",
      "email": "tpatel@orega.com",
      "password": "$2a$10$9RZJyvL3lezUPTv/C2VFuO..QWmdKLYxvwXtujnydOOuN9YSUZvtO",
      "createdAt": "2021-08-05T11:05:47.141Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": true
      },
      "userType": "super",
      "siteAccess": [
        "602259e07fc8b7a5c3b924f9",
        "60225a247fc8b7a5c3b924fa",
        "60225a3a7fc8b7a5c3b924fc",
        "608968635825a23c5703d449",
        "609e8d94174b2a276ce76c3d",
        "60225a317fc8b7a5c3b924fb",
        "60d346a5f6a5d4f96664d5cb"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [],
      "featureFlags": [],
      "permissions": [],
      "_id": "611a7e667e7de35ed4c7197e",
      "username": "ryan.todd",
      "firstName": "Ryan",
      "lastName": "Todd",
      "email": "ryan.todd@silver-lining.com",
      "password": "$2a$10$rEcm2bsyppLD2iendt9h7OiypKmplPrk6fGjOIiiz2RCd5XPoE27O",
      "createdAt": "2021-08-16T15:04:06.677Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": true
      },
      "userType": "super",
      "siteAccess": [
        "602259e07fc8b7a5c3b924f9",
        "60225a3a7fc8b7a5c3b924fc",
        "609e8d94174b2a276ce76c3d",
        "60225a247fc8b7a5c3b924fa",
        "608968635825a23c5703d449",
        "60d346a5f6a5d4f96664d5cb",
        "60225a317fc8b7a5c3b924fb"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [
        "2022-01-13T11:03:21.457Z",
        "2022-01-18T10:25:36.854Z",
        "2022-01-19T08:35:47.943Z",
        "2022-01-20T09:04:44.574Z",
        "2022-01-24T15:41:16.943Z",
        "2022-01-25T15:38:27.683Z",
        "2022-01-31T16:32:20.627Z",
        "2022-02-01T08:33:20.705Z",
        "2022-02-01T16:22:14.453Z",
        "2022-02-03T08:32:19.369Z",
        "2022-02-03T11:11:35.425Z",
        "2022-02-03T15:12:18.291Z",
        "2022-02-04T15:34:53.261Z"
      ],
      "featureFlags": [],
      "permissions": [
        "61829ad266f0ff36da9cf1a2"
      ],
      "_id": "60bf3b32f84d35cf43af7d69",
      "username": "tom.feaver",
      "firstName": "Tom",
      "lastName": "Feaver",
      "email": "tom.feaver@silver-lining.com",
      "password": "$2a$10$8wsv0INIPXqjARZn9jFnSuXHnGOWqzgMHPLaMC7GgtKBxRpcC4VKO",
      "createdAt": "2021-06-08T09:41:06.781Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [
        "60d346a5f6a5d4f96664d5cb"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [
        "2022-01-25T15:44:45.968Z"
      ],
      "featureFlags": [],
      "permissions": [],
      "_id": "60f14d8c8d52d6dd3f568159",
      "username": "reception.glasgow",
      "firstName": "Reception",
      "lastName": "Glasgow",
      "email": "reception.glasgow-svs@orega.com",
      "password": "$2a$10$bdyHocqDM4NXoG2mmZra2u1AuYQG.BD3oxSW0PMRqlU0ZagY5vTgi",
      "createdAt": "2021-07-16T09:12:44.028Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [
        "602259e07fc8b7a5c3b924f9"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [],
      "featureFlags": [],
      "permissions": [],
      "_id": "610bc49ae39d66f494576291",
      "username": "marta.ribeiro",
      "firstName": "Marta",
      "lastName": "Ribeiro",
      "email": "marta.ribeiro@orega.com",
      "password": "$2a$10$9DBgl76W.efa4EvgxcdSrulqmy6vraPPZTld9dqhltjK3xJk3Hm7q",
      "createdAt": "2021-08-05T10:59:38.536Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [
        "60d346a5f6a5d4f96664d5cb"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [],
      "featureFlags": [],
      "permissions": [],
      "_id": "6148ac99292a5fdc9c5c1f86",
      "username": "lynne.morrison",
      "firstName": "Lynne",
      "lastName": "Morrison",
      "email": "acsm.gl-svs@orega.com",
      "password": "$2a$10$8pjRIvc5ya5Ce1xPWnWq6.WEVWW.1V/0J4uGRQ1d0d/ZAWt8gLL6u",
      "createdAt": "2021-09-20T15:45:29.890Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [
        "618a8f8b7762d674745810b5"
      ],
      "groupAccess": [
        "618a8f7b7762d674745810b4"
      ],
      "lastLog": [],
      "featureFlags": [
        {
          "_id": "610173a34f2bf6cb697b2ef8",
          "name": "admin-bandwidth-overview",
          "description": "Overview of bandwidth of all sites with access",
          "type": "user"
        }
      ],
      "permissions": [],
      "_id": "61c32e3c5a606f2ef10c1ca0",
      "username": "reception.dukestreet",
      "firstName": "Reception",
      "lastName": "DukeStreet",
      "email": "dukestreet@theoffice.co.uk",
      "password": "$2a$10$n0sP6hVr3HBAfJXwjLk57.Mf2sg6yM6KdtfSoAkBw4W0zp99sjEOK",
      "createdAt": "2021-12-22T13:55:08.980Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": true
      },
      "userType": "super",
      "siteAccess": [
        "609e8d94174b2a276ce76c3d",
        "608968635825a23c5703d449",
        "60225a317fc8b7a5c3b924fb",
        "60d346a5f6a5d4f96664d5cb",
        "60225a3a7fc8b7a5c3b924fc",
        "60225a247fc8b7a5c3b924fa",
        "602259e07fc8b7a5c3b924f9",
        "61790ec8a1c190ebdfa0deb5",
        "61aa3cc269b5aa93ebd1fc4c",
        "61dadb83c7a359f6b71e57ec",
        "61db292305ddfb1281418c9c",
        "61db2c1505ddfb1281418deb"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [
        "2022-01-10T08:40:03.986Z",
        "2022-01-18T08:29:36.791Z",
        "2022-01-31T16:06:12.192Z"
      ],
      "featureFlags": [
        {
          "_id": "61dada7cc7a359f6b71e577e",
          "name": "admin-search-macaddress",
          "description": "admin-search-macaddress",
          "type": "user",
          "__v": 0
        }
      ],
      "permissions": [],
      "_id": "61c344cea505ac2fde51af3b",
      "username": "chris.burt",
      "firstName": "Chris",
      "lastName": "Burt",
      "email": "chris.burt@silver-lining.com",
      "password": "$2a$10$XTNXb3fu0dJnEBYJduIJIuLTCuFX0jRULExWXxoJxddHefWQIEWZa",
      "createdAt": "2021-12-22T15:31:26.648Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [
        "602259e07fc8b7a5c3b924f9",
        "609e8d94174b2a276ce76c3d",
        "60d346a5f6a5d4f96664d5cb",
        "60225a317fc8b7a5c3b924fb",
        "60225a3a7fc8b7a5c3b924fc",
        "60225a247fc8b7a5c3b924fa",
        "608968635825a23c5703d449"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [
        "2022-01-14T10:50:14.642Z",
        "2022-01-22T15:09:57.553Z",
        "2022-02-02T11:26:45.398Z"
      ],
      "featureFlags": [
        {
          "_id": "610173864f2bf6cb697b2ef7",
          "name": "admin-telephony-data",
          "description": "Overview of clients for telephony and data",
          "type": "user"
        }
      ],
      "permissions": [],
      "_id": "61c4931420ca6e446279e70a",
      "username": "accounts",
      "firstName": "Accounts",
      "lastName": "SL",
      "email": "accounts@silver-lining.com",
      "password": "$2a$10$NnegSROOAlNNceUUkqdncuBtLdcdcvwnutBQRnE91.Mz5ZO6Nz6y.",
      "createdAt": "2021-12-23T15:17:40.948Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [
        "618a8f8b7762d674745810b5"
      ],
      "groupAccess": [
        "618a8f7b7762d674745810b4"
      ],
      "lastLog": [
        "2022-01-18T15:05:34.786Z",
        "2022-01-18T15:11:10.528Z",
        "2022-01-20T11:51:45.484Z"
      ],
      "featureFlags": [],
      "permissions": [],
      "_id": "61d5be2ce19394ac9fb80d18",
      "username": "maria.kuldkepp",
      "firstName": "Maria",
      "lastName": "Kuldkepp",
      "email": "mk@theoffice.co.uk",
      "password": "$2a$10$6Za4uk6wN.ysPgT5ujTE0eOImPsYz1VCTdqY8uf0Augm0sdVWrkbi",
      "createdAt": "2022-01-05T15:50:04.041Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [
        "618a8f8b7762d674745810b5"
      ],
      "groupAccess": [
        "618a8f7b7762d674745810b4"
      ],
      "lastLog": [],
      "featureFlags": [],
      "permissions": [
        "61f00ab6cff526e92d18777c"
      ],
      "_id": "61f01a888b68a2ea3524b2f1",
      "username": "jade.dooley",
      "firstName": "Jade",
      "lastName": "Dooley",
      "email": "jade.dooley@theoffice.co.uk",
      "password": "$2a$10$qnS/O912pe5sAi5pRfEc4eSyzzyI8MI/5RIHD8NCbwjChuLNTrZIi",
      "createdAt": "2022-01-25T15:43:04.613Z",
      "__v": 0
    },
    {
      "portalSettings": {
        "rightSidebar": false
      },
      "userType": "user",
      "siteAccess": [
        "60d346a5f6a5d4f96664d5cb"
      ],
      "groupAccess": [
        "61828ececcdb0533bfbf7082"
      ],
      "lastLog": [
        "2022-01-25T16:17:13.918Z",
        "2022-01-25T16:19:05.904Z",
        "2022-01-27T09:19:09.809Z",
        "2022-01-28T09:13:14.231Z",
        "2022-01-28T12:03:06.494Z",
        "2022-01-31T12:23:02.156Z"
      ],
      "featureFlags": [],
      "permissions": [],
      "_id": "61f0220c8b68a2ea3524b5ca",
      "username": "hayley.heath",
      "firstName": "Hayley",
      "lastName": "Heath",
      "email": "hheath@orega.com",
      "password": "$2a$10$3TQchMDXgSCA14PUg8Ne7uFiFNYAuR2ZGwbjUxLMpfH46mPLsCdLG",
      "createdAt": "2022-01-25T16:15:08.980Z",
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
    if (log) {
      const formatedDate = format(log, "dd-MMM-yyyy")
      if (formatedDate === "01-Jan-1970") {
        return "Never Logged In"
      } else {
        return formatedDate
      }
    }
  };

  const header = [{ label: 'Username', onRowClick: 'username', width: '200px' }, { label: 'First Name', width: '150px' }, { label: 'Last Name', width: '150px' }, { label: 'Email' }, { label: '', width: '50px' }, { label: 'Last Log', width: '200px' }];

  const body = [{ key: 'username' }, { key: 'firstName' }, { key: 'lastName' }, { key: 'email' }, { key: 'userType', function: formatUserType }, { key: 'lastLog', function: formatLastLogs }];
  const options = {
    className: 'table table-sm table-hover',
    onRowClick: {
      function: handleOnRowClick,
      key: '_id',
    },
    perPage: 30,
    selection: {
      key: '_id',
      info: true,
      // onlyOne: true,
      buttons: [{
        className: "",
        onClickFunction: (result) => handleOnRowClick22(result)
      }, {
        className: "",
        onClickFunction: (result) => handleOnRowClick22(result)
      }],

    },
    // emptyRows: true,
    sortable: {
      excludeColumns: [],
    },
    lengthChange: true,
    debug: true
  };

  return (
    <div style={{ width: '500px' }}>
      <PaginationTable data={users.map(x => ({ ...x, lastLog: typeof x.lastLog.at(-1) === "string" ? new Date(x.lastLog.at(-1)) : new Date(null) }))} header={header} body={body} options={options} />
    </div>
  );
};

export default App;
