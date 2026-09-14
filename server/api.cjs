// Máy chủ HTTP tối giản — mô phỏng cấu trúc máy chủ API thật
// DÙNG CommonJS (require) vì đây là file Node.js thuần, nằm ngoài src/
const http = require('http');

// Dữ liệu mẫu — sau này thay bằng database thật
const posts = [
  { id: 1, title: 'Giới thiệu React', excerpt: 'Bài viết đầu tiên về React.',
    authorId: 1, publishedAt: '2026-08-23T08:00:00Z', tags: ['react'] },
  { id: 2, title: 'ES Modules trong thực tế', excerpt: 'CommonJS và ESM khác nhau thế nào?',
    authorId: 1, publishedAt: '2026-08-20T09:00:00Z', tags: ['javascript', 'module'] },
  { id: 3, title: 'Vite là gì?', excerpt: 'Tìm hiểu công cụ dựng nhanh nhất hiện nay.',
    authorId: 2, publishedAt: '2026-08-18T10:00:00Z', tags: ['vite', 'tooling'] },
];

// Headers dùng chung cho mọi phản hồi JSON
function jsonHeaders() {
  return {
    'Content-Type': 'application/json; charset=utf-8',
    // CORS: cho phép Vite dev server (localhost:5173) gọi sang máy chủ này
    'Access-Control-Allow-Origin': 'http://localhost:5173',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

const server = http.createServer((req, res) => {
  const url = req.url ?? '/';
  const method = req.method ?? 'GET';

  // Xử lý preflight CORS (trình duyệt gửi OPTIONS trước khi gửi GET/POST thật)
  if (method === 'OPTIONS') {
    res.writeHead(204, jsonHeaders());
    res.end();
    return;
  }

  console.log(`[API] ${method} ${url}`); // log mọi request

  // GET /api/posts → trả về danh sách tất cả bài viết
  if (url === '/api/posts' && method === 'GET') {
    res.writeHead(200, jsonHeaders());
    res.end(JSON.stringify({ success: true, data: posts }));
    return;
  }

  // GET /api/posts/:id → trả về 1 bài viết theo id
  const matchPost = url.match(/^\/api\/posts\/(\d+)$/);
  if (matchPost && method === 'GET') {
    const id = parseInt(matchPost[1], 10);
    const post = posts.find(p => p.id === id);
    if (post) {
      res.writeHead(200, jsonHeaders());
      res.end(JSON.stringify({ success: true, data: post }));
    } else {
      res.writeHead(404, jsonHeaders());
      res.end(JSON.stringify({ success: false, message: 'Không tìm thấy bài viết' }));
    }
    return;
  }

  // Tất cả route khác → 404
  res.writeHead(404, jsonHeaders());
  res.end(JSON.stringify({ success: false, message: `Route '${url}' không tồn tại` }));
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`✓ API server đang chạy tại http://localhost:${PORT}`);
  console.log(`  GET http://localhost:${PORT}/api/posts`);
  console.log(`  GET http://localhost:${PORT}/api/posts/1`);
});