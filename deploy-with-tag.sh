#!/bin/bash

# 获取当前标签
TAG=$(git describe --tags --abbrev=0)
VERSION=${TAG#v} # 移除 v 前缀

# 获取当前提交哈希
COMMIT_SHA=$(git rev-parse HEAD)

# 获取当前分支名
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)

# 生成唯一部署名称
DEPLOY_NAME="nextjs-${VERSION}"
DOMAIN="${DEPLOY_NAME}.0human.website"

echo "Building version ${VERSION}..."
echo "Current commit SHA: ${COMMIT_SHA}"
echo "Current branch: ${BRANCH_NAME}"

# 1. 部署到 Vercel
DEPLOY_OUTPUT=$(npx vercel deploy --yes \
  --scope 0human \
  --token $VERCEL_TOKEN \
  --build-env NEXT_PUBLIC_VERSION=$VERSION \
  --build-env NEXT_PUBLIC_COMMIT_SHA=$COMMIT_SHA \
  --build-env NEXT_PUBLIC_BRANCH=$BRANCH_NAME)

# 2. 获取部署 URL
DEPLOYMENT_URL=$(echo "$DEPLOY_OUTPUT" | grep -o 'https://[^ ]*\.vercel\.app' | head -1)

if [ -z "$DEPLOYMENT_URL" ]; then
  echo "Error: Failed to get deployment URL"
  exit 1
fi

# 3. 绑定自定义域名
echo "Binding domain ${DOMAIN}..."
npx vercel alias set $DEPLOYMENT_URL $DOMAIN \
  --scope 0human \
  --token $VERCEL_TOKEN

echo "Version ${VERSION} deployed to: https://${DOMAIN}"