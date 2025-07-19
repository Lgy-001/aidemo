import {fetchEventSource} from '@microsoft/fetch-event-source';
export const sendMessageStream = async (message: string, onChunk: (chunk: string) => void) => {
  await fetchEventSource('http://localhost:3000/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: message }),
    onmessage: (event) => {
      console.log(event.id);
      
      const content = event.data;
      if (content === '[DONE]') return false;
      onChunk(content);
    }
  });
};


//   if (!reader) return;

//   let buffer = '';
//   while (true) {
//     const { done, value } = await reader.read();
//     if (done) break;
//     buffer += decoder.decode(value, { stream: true });

//     const lines = buffer.split('\n\n');
//     buffer = lines.pop() || '';
//     for (const line of lines) {
//       if (line.startsWith('data: ')) {
//         const content = line.replace('data: ', ''); 
//         if (content === '[DONE]') return false;
//         onChunk(content);
//       }
//     }
//   }
// };
