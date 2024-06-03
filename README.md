# Chat Application using Chat Engine

This is a web-based chat application built with React and powered by Chat Engine for real-time messaging. The application allows users to create accounts, join multiple chat rooms, and send/receive messages in real-time.

## Project Deployed in: 
check this website on netlify: [Chat Application](https://chatappbychatengine.netlify.app).

## Features

- User Authentication
- Real-time Messaging
- Multiple Chat Rooms
- User-Friendly Interface
- Responsive Design

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **Chat Engine**: Backend as a service for chat applications.
- **Netlify**: Platform for deploying and hosting the web application.
- **Create React App**: Tool to set up a modern web app by configuring build tools like Webpack and Babel.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js and npm installed on your machine.
- Chat Engine account for managing chat rooms and users.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ShahriarAlvi/Chat-Application-using-Chat-Engine.git
   cd Chat-Application-using-Chat-Engine
   ```

2. **Install NPM packages:**

   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory and add your Chat Engine credentials:**

   ```plaintext
   REACT_APP_CHAT_ENGINE_PROJECT_ID=your-project-id
   REACT_APP_CHAT_ENGINE_USER_NAME=your-username
   REACT_APP_CHAT_ENGINE_USER_SECRET=your-secret
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

### Deployment

To deploy the application, follow these steps:

1. **Build the application:**

   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Link your GitHub repository to Netlify.
   - Choose the `build` directory as the deploy folder.

## Usage

### Running the Application

- **Development Mode:**

  ```bash
  npm start
  ```

- **Testing:**

  ```bash
  npm test
  ```

- **Building for Production:**

  ```bash
  npm run build
  ```

### Project Structure

```plaintext
public/
  index.html
src/
  components/
    ChatFeed.js
    MessageForm.js
    MyMessage.js
    TheirMessage.js
  App.js
  index.js
  index.css
.env
.gitignore
package.json
README.md
```

## Key Components

### `App.js`

Main component that sets up the Chat Engine with required credentials and renders the custom `ChatFeed` component.

### `ChatFeed.js`

Handles rendering of chat messages, including differentiating between user messages and other messages, and displays read receipts.

### `MessageForm.js`

Provides an input field for sending messages and manages the state of the input.

### `MyMessage.js`

Renders messages sent by the current user, handling both text and image attachments.

### `TheirMessage.js`

Renders messages sent by other users, including their avatars and message content.


## Acknowledgements

- [React](https://reactjs.org/)
- [Chat Engine](https://chatengine.io/)
- [Netlify](https://www.netlify.com/)
- [Create React App](https://create-react-app.dev/)

---

