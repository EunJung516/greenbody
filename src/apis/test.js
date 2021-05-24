import axios from 'axios';

export default axios.create({
	baseURL: 'http://titanism2197.pythonanywhere.com/votes/',
})

async function handleSubmit() {
    const response = await vote.post('login/', this.state);
    if(response) {
      //다른 페이지로 이동
    }
  }