const contacts = [{
    "id": 1,
    "title": "title",
    "imageURL": "someUrl",
    "orderId": "OD123",
    "messageList": [{
        "messageId": "msg1",
        "message": "Hi",
        "messageType": "text"
    },
    {
        "messageId": "msg2",
        "message": "need assistance",
        "messageType": "text"
    }
    ]
},
{
    "id": 2,
    "title": "title2",
    "imageURL": "someUrl2",
    "orderId": "OD1234",
    "messageList": []
},
];

// load contacts in left panel

function displayContacts() {
    const contactList = document.getElementById('contact-list');
    contacts.forEach((contact) => {
        const contactDiv = document.createElement('div');
        contactDiv.innerHTML = `
  <div style='padding: 10px; border: 1px solid black; margin-bottom: 10px'>
  	<img src="${contact.imageURL}" alt="${contact.title}">
    <div>
      <h3>${contact.title}</h3>
      <p>${contact.orderId}</p>
    </div>
  </div>
  `;
        contactDiv.addEventListener('click', () => {
            displayChatWindow(contact);
        });
        contactList.appendChild(contactDiv);
    });
}

displayContacts()

// search contacts by id and title
const searchBox = document.getElementById('search-box');
searchBox.addEventListener('keyup', () => {
    const query = searchBox.value.toLowerCase();
    console.log(query);
    const filteredContacts = contacts.filter((contact) => {
        console.log(contact.id.toString().toLowerCase(), '===>')
        return contact.orderId.toString().toLowerCase().includes(query) ||
            contact.title.toLowerCase().includes(query);
    });
    contactList.innerHTML = '';
    filteredContacts.forEach((contact) => {
        const contactDiv = document.createElement('div');
        contactDiv.innerHTML = `
      <div style='padding: 10px; border: 1px solid black; margin-bottom: 10px'>
  	<img src="${contact.imageURL}" alt="${contact.title}">
    <div>
      <h3>${contact.title}</h3>
      <p>${contact.orderId}</p>
    </div>
  </div>
    `;
        contactDiv.addEventListener('click', () => {
            displayChatWindow(contact);
        });
        contactList.appendChild(contactDiv);
    });
});

// display chat window in right panel
function displayChatWindow(contact) {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.innerHTML = `
    <h3>${contact.title}</h3>
    <div id="message-list"></div>
    <input type="text" id="message-input" placeholder="Type a message...">
  `;
    const messageList = document.getElementById('message-list');
    const messages = contact.messageList;
    messages.forEach((message) => {
        const messageDiv = document.createElement('div');
        messageDiv.innerHTML = `
      <p>${message.message}</p>
    `;
        messageList.appendChild(messageDiv);
    });
    const messageInput = document.getElementById('message-input');
    messageInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const message = messageInput.value;
            const messageId = `msg${messages.length + 1}`;
            const newMessage = {
                "messageId": messageId,
                "message": message,
                "messageType": "text"
            };
            messages.push(newMessage);
            localStorage.setItem(`messages-${contact.id}`, JSON.stringify(messages));
            const messageDiv = document.createElement('div');
            messageDiv.innerHTML = `
        <p>${message}</p>
      `;
            messageList.appendChild(messageDiv);
            messageInput.value = '';
        }
    });
}

contacts.forEach((contact) => {
    const messages = JSON.parse(localStorage.getItem(`messages-${contact.id}`)) || [];
    if(messages?.length > 0) {
        contact.messageList = messages;
    }
});
