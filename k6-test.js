import { sleep } from 'k6';
import http from 'k6/http';

export let options = {
  duration: '20s',
  vus: 50,
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95 percent of response times must be below 500ms
  },
};

export default function () {
  http.get('http://test.k6.io/my_messages.php');
  sleep(1);
}
