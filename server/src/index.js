import WebSocket from 'ws'

const wss = new WebSocket.Server({ port: 8989 })

const users = []
const messages = []

const broadcast = (data,ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client!== ws){
      client.send(JSON.stringify(data))
    }
  });
}

wss.on('connection', (ws)=>{
  let index

  ws.on('message', (message)=> {
    const data = JSON.parse(message)
    switch (data.type) {
      case 'ADD_USER': {
        index = users.length
        users.push({name: data.name, id: index+1})
        console.log(`hi user ${data.name}`)
        if (messages.length>1){
          console.log(messages[messages.length-1])
          messages.forEach(m=>{
            const {message, author}=m
            ws.send(JSON.stringify({
              type:'ADD_MESSAGE',
              message,
              author
            }))
          })

        }
        ws.send(JSON.stringify({
          type:'ADD_MESSAGE',
          message:`hello ${data.name}`,
          author: ''
        }))

        ws.send(JSON.stringify({
          type:'USERS_LIST',
          users
        }))

        broadcast({
          type:'USERS_LIST',
          users
        }, ws)
  

        break
      }
      case 'ADD_MESSAGE':
        messages.push({ message:data.message,
          author: data.author})
          
    
        broadcast({
          type:'ADD_MESSAGE',
          message:data.message,
          author: data.author
        },ws)
        break
      default:

        break
    }
  })
  ws.on('close', ()=>{
    users.splice(index,1)
    broadcast({
      type:'USERS_LIST',
      users
    }, ws)
  })
})
