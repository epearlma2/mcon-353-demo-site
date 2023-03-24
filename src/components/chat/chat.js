import "./chat.css";
import * as React from "react";
import smile from "../../images/smile.png";
import { useEffect, useState } from "react";
import { useInterval } from "../../hooks/use-interval";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { AddBox } from "@mui/icons-material";
import {
  Box,
  Button,
  TextField,
  IconButton,
} from "@mui/material";

export const Chat = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [inputChat, setInputChat] = useState("");
  const [username, setUserName] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  function getChats() {
    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats")
      .then((response) => response.json())
      .then((data) => {
        console.log("chats:");
        console.log(data);
        setChats(data.Items);
      });
  }
  function getMessages(chatId) {
    fetch(
      `https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats/${chatId}/messages`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("messages:");
        console.log(data);
        setMessages(data.Items);
      });
  }
  function setChat(chat) {
    setCurrentChat(chat);
    getMessages(chat.id);
  }
  function postChat() {
    const chat = {
      name: inputChat, // required
    };

    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // tells REST that we will send the body data in JSON format
      },
      body: JSON.stringify(chat),
    });

    setInputChat("");
  }

  function postMessage() {
    if (currentChat != null) {
      const message = {
        chatId: currentChat.id, // required, must be an existing chat id
        username: username, // required
        text: inputMessage, // required
      };

      fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/messages", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // tells REST that we will send the body data in JSON format
        },
        body: JSON.stringify(message),
      });

      setInputMessage("");
    } else {
      console.log("cannot post a message because currentChat is null");
    }
  }

  function onMessageInput(event) {
    console.log(event);
    setInputMessage(event.target.value);
  }
  function onChatInput(event) {
    setInputChat(event.target.value);
  }

  function onUsernameInput(event) {
    setUserName(event.target.value);
  }



  useInterval(
    (params) => {
      const chatId = params[0];
      if (chatId) {
        getMessages(chatId);
      }
    },
    1000,
    currentChat && currentChat.id
  );

  useEffect(() => {
    getChats();
  }, []);

  return (
    <center>
      <div class="Chat">
        <Box >
          <h1>
            <img class="smile" src={smile} alt="smiley"></img>&nbsp; <b>CHAT</b>&nbsp;<img class="smile" src={smile} alt="smiley"></img>
          </h1>
          <br></br>
          <Box display="center">
            <Box width="50%">
              <Box display="flex" flexDirection="column">
                <Box>
                  <h4>Username:</h4>
                  <TextField
                    label="Your Username Here"
                    value={username}
                    onChange={onUsernameInput}
                    InputProps={{ style: { fontSize: "24px" } }}
                    sx={{ backgroundColor: 'pink' }}
                  />
                </Box>
              </Box>
              <Box>
                <Box component="form" flexDirection="column">
                  <h4>Option 1: New Chat</h4>
                  <TextField
                    label="New Chat Name"
                    value={inputChat}
                    onChange={onChatInput}
                    InputProps={{ style: { fontSize: "24px" } }}
                    sx={{ backgroundColor: 'pink' }}
                  />
                  <IconButton onClick={postChat} >
                    <AddBox
                      sx={{ color: 'pink' }}
                    />
                  </IconButton>
                </Box>
              </Box>
              <Box
                sx={{
                  alignContent: 'center',
                  textAlign: 'center'
                }}
              >
                <Box
                  sx={{
                    alignContent: 'center',
                    textAlign: 'center'
                  }}

                  flexDirection="column">
                  <FormControl size="medium">
                    <h4>Option 2: Use Existing Chat</h4>
                    <Select
                      sx={{ backgroundColor: 'pink' }}
                      value={currentChat ? currentChat.id : ""}
                      onChange={(e) =>
                        setChat(chats.find((chat) => chat.id === e.target.value))
                      }
                    >
                      {chats.map((chat) => (
                        <MenuItem key={chat.id} value={chat.id}>
                          {chat.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Box>
            <Box>
              <h4>
                Messages:<br></br>
              </h4>
              <p>
                Using Chat: {currentChat && currentChat.name}
              </p>
              <Box>
                <TextField
                  onInput={onMessageInput}
                  value={inputMessage}
                  label="Type your message here"
                  sx={{ backgroundColor: 'pink' }}
                />
                <Button onClick={() => postMessage()}><h5>POST</h5></Button>
              </Box>
              <div>
                {messages.map((message) => (
                  <div key={message.id}>
                    <p>{message.username}: {message.text}</p>
                  </div>
                ))}
              </div>
            </Box>
          </Box>
        </Box>
      </div>
    </center >
  );
};


