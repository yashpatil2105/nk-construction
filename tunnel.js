import localtunnel from 'localtunnel';
import fs from 'fs';

(async () => {
  try {
    const ip = '42.104.225.15';
    console.log('Requesting localtunnel on port 3000...');
    const tunnel = await localtunnel({ port: 3000 });
    const info = {
      url: tunnel.url,
      password: ip
    };
    fs.writeFileSync('./tunnel_info.json', JSON.stringify(info, null, 2));
    console.log('PUBLIC_URL: ' + tunnel.url);
    console.log('TUNNEL_PASSWORD_IP: ' + ip);

    tunnel.on('close', () => {
      console.log('Tunnel connection closed');
    });
    tunnel.on('error', (err) => {
      console.error('Tunnel error:', err);
    });
  } catch (err) {
    console.error('Failed to start tunnel:', err);
  }
})();
