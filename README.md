# Intro
This app is a random app to query repositories on GitHub. The server directory is a bare-bones server which the frontend proxies to request repositories from GitHub. Additionally I implemented a lightweight, vanilla cache to cache results. The client directory is a snapshot into React practices I enjoy in 2020.

# Setup

To set up this repo, follow the below instructions

1. cd ./server
2. yarn
3. yarn start (runs on localhost:5000)
4. go back up to root
5. cd ./client
6. yarn
7. yarn start (runs on localhost:3000)
8. examine & use app on localhost:3000
9. for tests, cd into client directory and run `yarn test` to run cypress tests. **Note:** Tests assume both server and client are running
