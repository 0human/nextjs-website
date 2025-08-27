'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [githubStats, setGithubStats] = useState({
    stars: 0,
    watchers: 0
  });
  
  useEffect(() => {
    // 从我们的服务端 API 路由获取 GitHub 统计数据
    const fetchGithubStats = async () => {
      try {
        // 调用我们的服务端 API 路由，避免客户端直接调用 GitHub API 导致的 CORS 问题和 API 限制
        const response = await fetch('/api/github-stats');
        
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // 更新统计数据状态
        setGithubStats({
          stars: data.stars || 0,
          watchers: data.watchers || 0
        });
      } catch (error) {
        console.error('Failed to fetch GitHub stats:', error);
        // 如果获取失败，保持默认值
      }
    };
    
    fetchGithubStats();
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8 flex flex-col items-center justify-center">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
          Next.js Website Project
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          这是一个基于 Next.js 的网站项目。项目遵循敏捷开发流程，通过 GitHub Issues 来追踪和管理新功能开发与 bug 修复。
        </p>
      </header>
      
      <main className="w-full max-w-4xl">
        <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-white">项目特点</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">1</span>
              </div>
              <span className="text-slate-700 dark:text-slate-200">基于 Next.js 14 构建</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">2</span>
              </div>
              <span className="text-slate-700 dark:text-slate-200">使用 TypeScript 确保类型安全</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">3</span>
              </div>
              <span className="text-slate-700 dark:text-slate-200">响应式设计，适配各种设备</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">4</span>
              </div>
              <span className="text-slate-700 dark:text-slate-200">通过 GitHub Issues 进行任务管理</span>
            </li>
          </ul>
        </section>
        
        <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-white">项目管理流程</h2>
          <div className="space-y-4">
            <p className="text-slate-700 dark:text-slate-200">本项目采用 AI 驱动的 Issue 开发模式：</p>
            <ol className="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-200">
              <li>所有新功能需求和 bug 修复都通过创建 GitHub Issue 来提出</li>
              <li>AI 根据 Issue 的描述自动生成相应的代码实现</li>
              <li>AI 会创建 Pull Request 并关联相关 Issue</li>
              <li>人工只需要预览 PR 并同意合并即可完成开发流程</li>
            </ol>
          </div>
        </section>
        
        <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-white">GitHub 统计</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-1">⭐</div>
              <div className="text-slate-500 dark:text-slate-400">Stars</div>
              <div className="text-2xl font-semibold text-slate-800 dark:text-white">{githubStats.stars.toLocaleString()}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-1">👁️</div>
              <div className="text-slate-500 dark:text-slate-400">Watch</div>
              <div className="text-2xl font-semibold text-slate-800 dark:text-white">{githubStats.watchers.toLocaleString()}</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="https://github.com/0human/nextjs-website" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              访问 GitHub 仓库
            </a>
          </div>
        </section>
      </main>
      
      <footer className="mt-12 text-center text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Next.js Website Project</p>
      </footer>
    </div>
  );
}
