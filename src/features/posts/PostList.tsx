import { useState, useEffect } from 'react';
import type { Post, LoadingState, ApiResponse } from '../../types';
import { formatDate, truncateExcerpt } from '../../utils';
import { API_BASE_URL } from '../../constants';

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [status, setStatus] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Bắt đầu tải → đặt trạng thái 'loading'
    setStatus('loading');
    setError(null);

    fetch(`${API_BASE_URL}/api/posts`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<ApiResponse<Post[]>>;
      })
      .then(json => {
        if (json.success) {
          setPosts(json.data);
          setStatus('success');
        } else {
          throw new Error(json.message);
        }
      })
      .catch(err => {
        setError(String(err.message));
        setStatus('error');
      });
  }, []); // [] = chỉ chạy một lần khi component mount

  // --- Xử lý từng trạng thái ---
  if (status === 'idle' || status === 'loading') {
    return <p>⏳ Đang tải danh sách bài viết...</p>;
  }

  if (status === 'error') {
    return (
      <div style={{ color: 'red' }}>
        <p>⚠ Không thể tải dữ liệu: {error}</p>
        <p>Hãy kiểm tra máy chủ API đang chạy tại {API_BASE_URL}</p>
      </div>
    );
  }

  return (
    <section>
      <h2>Danh sách bài viết ({posts.length} bài)</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map(post => (
          <li key={post.id} style={{ border: '1px solid #ddd', borderRadius: 8,
            padding: '1rem', marginBottom: '1rem' }}>
            <h3>{post.title}</h3>
            <p style={{ color: 'gray', fontSize: '0.9em' }}>
              Đăng ngày: {formatDate(post.publishedAt)}
            </p>
            <p>{truncateExcerpt(post.excerpt)}</p>
            <div>
              {post.tags.map(tag => (
                <span key={tag} style={{ marginRight: 6, background: '#f0f0f0',
                  padding: '2px 8px', borderRadius: 4, fontSize: '0.85em' }}>
                  #{tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}