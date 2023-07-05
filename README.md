### electronics-store
- A used bike store web-application built with react 18 using the latest react 2023 best-practices
<hr>

### Tools
- Chackra ui
- Vite
- React.ts 18
<hr>

### Environment 

***API Key***
Potential issue:

API keys should not be included in the source code because they can be seen by anyone who has access to the repository. This includes not only the developers working on the project but also potential attackers or malicious users. They can use our API key to perform malicious attacks on behalf of our client app.

Solution:

 We should store them as environment variables. Environment variables are like secret configuration values that can be set outside the code.Environment variables are like secret configuration values that can be set outside the code.

 Also note that we can ecurely store api keys be avoid being stored in client apps as they can be inspedcted via chrome dev tools in network request. A custom backend is one solution
 <hr>