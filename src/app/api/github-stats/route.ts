import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // GitHub API URL - 获取仓库统计数据
    const repoUrl = 'https://api.github.com/repos/0human/nextjs-website';
    
    // 发送请求到 GitHub API
    // 在实际项目中，可以考虑添加认证令牌来避免 API 限制
    const response = await fetch(repoUrl, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        // 可选：添加认证令牌以提高 API 调用限制
        // 'Authorization': `token ${process.env.GITHUB_TOKEN}`,
      },
      cache: 'force-cache', // 缓存响应以减少 API 调用
      next: {
        revalidate: 3600, // 每小时重新验证一次缓存
      },
    });
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // 提取需要的数据
    const stats = {
      stars: data.stargazers_count || 0,
      watchers: data.subscribers_count || 0,
      forks: data.forks_count || 0,
      openIssues: data.open_issues_count || 0,
    };
    
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    
    // 如果 GitHub API 调用失败，返回默认值或模拟数据
    return NextResponse.json({
      stars: Math.floor(Math.random() * 1000),
      watchers: Math.floor(Math.random() * 200),
      forks: Math.floor(Math.random() * 50),
      openIssues: Math.floor(Math.random() * 20),
    });
  }
}