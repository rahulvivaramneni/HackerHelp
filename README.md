# HackerHelp

Many developer issues are lost in discord and Stack Overflow doesnt enable live debugging. Hacker Help enables live debugging with mentors (or volunteers, as we call them). Choose how much you pay the mentor by posting a bounty amount. Chat with the mentor using Push; debug live over Huddle01 and mint a video NFT using LivePeer over IPFS to let your debug session be available to others for watching and learning.

### Get Started :
```
npm install
npm start
```
And the application would run locally at http://localhost:3000/free

### Protocol Integrations:
1. Graph:

  - Subgraph deployed on goerli:
    https://thegraph.com/studio/subgraph/devangel
  - Hacker Help Graph Playground: 
    https://thegraph.com/studio/subgraph/devangel/playground
  - Subgraph Queries (HTTP) endpoint:
    https://api.studio.thegraph.com/query/21552/devangel/0.2
<img width="1289" alt="Screenshot 2023-01-04 at 6 56 05 PM" src="https://user-images.githubusercontent.com/7895856/205493094-65d3d4d5-abbe-4d78-88fa-f12f7a8b9045.png">


2. Huddle01:
    Integrated Video Calling using Huddle01 iFrame
<img width="1289" alt="Huddle01 Screenshot" src="https://user-images.githubusercontent.com/61940373/211158995-22f19b81-42aa-4396-aede-bc3ea2a2063a.png">

3. Push Chat 
For providing support, we integrated Push Chat uiweb and restapi npm packages
<img width="1359" alt="Screenshot 2022-01-04 at 9 26 09 AM" src="https://user-images.githubusercontent.com/61940373/211660419-c68476e2-94e5-4f47-8008-8aebb475b924.png">

4. LivePeer Video Mint:
We download the recording of the Huddle01 call and mint a video NFT from it using Livepeer NFT-Studio api.

<img width="1389" alt="Screenshot 2023-01-05 at 12 36 37 AM" src="https://user-images.githubusercontent.com/61940373/211660625-78b34604-ca32-40b8-93f2-a3fc63c44ebf.png"><img width="1397" alt="Screenshot 2022-12-05 at 12 37 01 AM" src="https://user-images.githubusercontent.com/61940373/211660850-9dabec22-26e5-4024-964d-3c1ee968fe1d.png">


### UX
We created UX by editing UI template from https://mui.com/store/items/mantis-react-admin-dashboard-template/

