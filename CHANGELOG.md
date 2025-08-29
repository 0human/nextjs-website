## [1.2.9](https://github.com/0human/nextjs-website/compare/v1.2.8...v1.2.9) (2025-08-29)

### Bug Fixes

* fix deploy tags ([#20](https://github.com/0human/nextjs-website/issues/20)) ([45b6335](https://github.com/0human/nextjs-website/commit/45b6335d3015efa302df44ed02456f94f4a076f4))

## [1.2.8](https://github.com/0human/nextjs-website/compare/v1.2.7...v1.2.8) (2025-08-29)

### Bug Fixes

* fix read vercel env ([#19](https://github.com/0human/nextjs-website/issues/19)) ([083284c](https://github.com/0human/nextjs-website/commit/083284c9eaa8b9c061ed5837ed5b7bfe38f8b7f9))

## [1.2.7](https://github.com/0human/nextjs-website/compare/v1.2.6...v1.2.7) (2025-08-29)

### Bug Fixes

* fix show version and commit hash when merge into main ([#18](https://github.com/0human/nextjs-website/issues/18)) ([f3b6a28](https://github.com/0human/nextjs-website/commit/f3b6a28c904a73761867fa6cb2476e0b484c85d7))

## [1.2.6](https://github.com/0human/nextjs-website/compare/v1.2.5...v1.2.6) (2025-08-29)

### Bug Fixes

* Fix template grammatical errors ([#17](https://github.com/0human/nextjs-website/issues/17)) ([599ecfd](https://github.com/0human/nextjs-website/commit/599ecfd6b8aa8420f680f2f9d1adf30dd0fd9fd6))

## [1.2.5](https://github.com/0human/nextjs-website/compare/v1.2.4...v1.2.5) (2025-08-29)

### Bug Fixes

* Merge issue template to a template ([#16](https://github.com/0human/nextjs-website/issues/16)) ([abdc85a](https://github.com/0human/nextjs-website/commit/abdc85a0ce745b4f1ff8b8041db05a51dcd57701))

## [1.2.4](https://github.com/0human/nextjs-website/compare/v1.2.3...v1.2.4) (2025-08-29)

### Bug Fixes

* 如果是主分支则不显示版本号，直接显示 latest。不论什么情况都显示部署 hash 并链接到 github。 ([#15](https://github.com/0human/nextjs-website/issues/15)) ([d653b0d](https://github.com/0human/nextjs-website/commit/d653b0d7adbf123fe8b44e3487b1379cb52c8cab))

## [1.2.3](https://github.com/0human/nextjs-website/compare/v1.2.2...v1.2.3) (2025-08-29)

### Bug Fixes

* Use vercel command to deploy to vercel ([#14](https://github.com/0human/nextjs-website/issues/14)) ([759d30a](https://github.com/0human/nextjs-website/commit/759d30a7d9e6016c3a118935135c2e4f1f064fd4))

## [1.2.2](https://github.com/0human/nextjs-website/compare/v1.2.1...v1.2.2) (2025-08-29)

### Bug Fixes

* fix tag match ([#13](https://github.com/0human/nextjs-website/issues/13)) ([6d7be47](https://github.com/0human/nextjs-website/commit/6d7be470d15b43af8ada1bdde5a720369b4fe3e0))

## [1.2.1](https://github.com/0human/nextjs-website/compare/v1.2.0...v1.2.1) (2025-08-28)

### Bug Fixes

* 将自动部署从 release 中移除，并单独新建一个 action 监听有 tag 被 push 时触发部署到 vercel ([#12](https://github.com/0human/nextjs-website/issues/12)) ([8828374](https://github.com/0human/nextjs-website/commit/8828374cef7d80568b73a04fb478c04f97e91c7f))

## [1.2.0](https://github.com/0human/nextjs-website/compare/v1.1.0...v1.2.0) (2025-08-28)

### Features

* 自动部署 tag 到vercel 域名 nextjs-tag.0human.website ([#11](https://github.com/0human/nextjs-website/issues/11)) ([9619ecb](https://github.com/0human/nextjs-website/commit/9619ecb5bddb550101b7b3400607bf9bb9d9c10b))

## [1.1.0](https://github.com/0human/nextjs-website/compare/v1.0.0...v1.1.0) (2025-08-28)

### Features

* 只打 tag 不发布 release ([#10](https://github.com/0human/nextjs-website/issues/10)) ([6f12634](https://github.com/0human/nextjs-website/commit/6f12634f8fb1acaace189b8eca9229ce4208267f))

## 1.0.0 (2025-08-28)

### Features

* create issue template ([fe51448](https://github.com/0human/nextjs-website/commit/fe5144820e44db1561af3329990341d91abc36f8))
* https://github.com/0human/nextjs-website/issues/1 ([5f68fc5](https://github.com/0human/nextjs-website/commit/5f68fc5c932c61e16ff4288f25f388893f9384bd))
* 自动打 tag ([#4](https://github.com/0human/nextjs-website/issues/4)) ([d45c0c4](https://github.com/0human/nextjs-website/commit/d45c0c48cc508fafeaf0518aaf8084dc9d43cdff))

### Bug Fixes

* https://github.com/0human/nextjs-website/issues/1[#issuecomment](https://github.com/0human/nextjs-website/issues/issuecomment)-3226514207 ([912f933](https://github.com/0human/nextjs-website/commit/912f9338968ac9ba4fd6f62f5ad2d0cced8869f3))
* https://github.com/0human/nextjs-website/issues/1[#issuecomment](https://github.com/0human/nextjs-website/issues/issuecomment)-3226535044 ([28737af](https://github.com/0human/nextjs-website/commit/28737af723cbc78c0ff3d6c6d551ce49a8c88aba))
* Use github APP token ([#8](https://github.com/0human/nextjs-website/issues/8)) ([870250f](https://github.com/0human/nextjs-website/commit/870250f3f40748970a5e3cb3fb3f4c7816e218df))
* 运行 semantic-release.yml 报错 Cannot find module 'conventional-changelog-conventionalcommits' ([#7](https://github.com/0human/nextjs-website/issues/7)) ([f37be95](https://github.com/0human/nextjs-website/commit/f37be9564ceea7fa52518ac0e32ee851a0130ce8))
* 运行 semantic-release.yml 时提示找不到 pnpm，请修复 ([#5](https://github.com/0human/nextjs-website/issues/5)) ([004641a](https://github.com/0human/nextjs-website/commit/004641a617741eebd7235cd7210af1c387bd6280))
* 运行 Setup Node.js 时提示找不到 pnpm，请修复 ([#6](https://github.com/0human/nextjs-website/issues/6)) ([5e0efbf](https://github.com/0human/nextjs-website/commit/5e0efbf601cbdc433a467f6dcf780ff6596e6c7f))
