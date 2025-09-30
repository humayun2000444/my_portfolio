import { createServer } from 'http';
import { readFileSync, existsSync } from 'fs';
import { extname, join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml'
};

const server = createServer((req, res) => {
  let filePath = join(__dirname, req.url === '/' ? 'index.html' : req.url);

  if (!existsSync(filePath)) {
    res.writeHead(404);
    res.end('File not found');
    return;
  }

  const ext = extname(filePath);
  const contentType = mimeTypes[ext] || 'text/plain';

  try {
    const content = readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch (error) {
    res.writeHead(500);
    res.end('Server error');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🚀 Portfolio running at http://localhost:${PORT}`);
  console.log('📝 Click "Admin" in the header to customize your portfolio!');
});