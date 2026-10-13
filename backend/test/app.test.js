const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../src/app');

test('API root responds with a healthy service message', async () => {
  const server = app.listen(0);

  try {
    await new Promise((resolve, reject) => {
      server.once('listening', resolve);
      server.once('error', reject);
    });

    const address = server.address();
    const response = await fetch(`http://127.0.0.1:${address.port}/`);

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), {
      message: 'Ecommerce API is running...',
    });
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  }
});

test('unknown routes return a JSON 404 response', async () => {
  const server = app.listen(0);

  try {
    await new Promise((resolve, reject) => {
      server.once('listening', resolve);
      server.once('error', reject);
    });

    const address = server.address();
    const response = await fetch(`http://127.0.0.1:${address.port}/not-a-real-route`);
    const body = await response.json();

    assert.equal(response.status, 404);
    assert.match(body.message, /Not Found/);
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  }
});
