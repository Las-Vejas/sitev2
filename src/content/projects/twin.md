---
title: "Twin Macropad"
tags: ["hardware", "PCB"]
description: "A macropad with wireless connectivity"
image: "../../assets/projectimages/Twin3D.png"
github: "https://github.com/las-vejas/twin"
date: "01-07-2026"

featured: true
---

# About Twin

Twin is a macropad with both the RP2040 chip and the ESP32-C6 for wireless capabilities. The RP2040 acts as a master while the ESP32 acts as a slave. This project was very theoretical and I have yet to find out if it works.

I created this macropad as a way to control my smart home via the ESP32. It was made for [Stasis](https://stasis.hackclub.com), a hardware program run by [Hack Club](https://hackclub.com) and I got funding to build the actual product.

The two MCUs are connected via UART and were supposed to communicate that way. The project was designed with KiCad and manufactured by JLCPCB.

Turns out it's a miserable fail **(for now)**.

## Images

### Schematic 
![The schematic of the Twin macropad](https://private-user-images.githubusercontent.com/118309632/574618013-2b821480-df0c-4228-b97a-3df871d7446e.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODc2Njk2MjMsIm5iZiI6MTc4NzY2OTMyMywicGF0aCI6Ii8xMTgzMDk2MzIvNTc0NjE4MDEzLTJiODIxNDgwLWRmMGMtNDIyOC1iOTdhLTNkZjg3MWQ3NDQ2ZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwODI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDgyNVQxNDQ4NDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xZGMzMTg0ZGZmOWNmNjJiNjk5NThmMTBlYjE1ZDQwZWM5YWQxZWJlNGNkMzlkOWE2N2I3NDc2OWE1ZjNkZDkzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.-btgixd68ZgTab_kM0okKuAyYRRV3iU25NneffvxHh4)

### PCB
![Twin PCB in the 3d viewer](https://private-user-images.githubusercontent.com/118309632/574618473-8781912a-4340-458a-b71f-101d2d4f1a06.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODc2Njk2MjMsIm5iZiI6MTc4NzY2OTMyMywicGF0aCI6Ii8xMTgzMDk2MzIvNTc0NjE4NDczLTg3ODE5MTJhLTQzNDAtNDU4YS1iNzFmLTEwMWQyZDRmMWEwNi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwODI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDgyNVQxNDQ4NDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hMzBkNGViNTM5Yjc0NjU3ZDc5MGQzNGJjMDNlYjg4YThhMDYzMjVkY2VjNDExODQyZmE4ODExOGNhOTM4ZDJiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ._YgEGIfmZzaJvSdVFomoNVMtGpsQvlYgEcrOWksmOkM)