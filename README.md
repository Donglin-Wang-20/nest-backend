# Nest Backend

基于 NestJS 的后端服务骨架，已接入 Swagger 和 MySQL，并按模块组织业务代码。健康检查是其中一个独立模块，包含 Controller、Service 和 DTO。

## 技术栈

- NestJS 11
- TypeScript
- Swagger（@nestjs/swagger）
- TypeORM
- MySQL 8
- mysql2

## 目录结构

```text
src/
├── config/
│   └── database.config.ts
├── database/
│   └── database.module.ts
├── modules/
│   └── health/
│       ├── dto/
│       │   └── health-response.dto.ts
│       ├── health.controller.ts
│       ├── health.module.ts
│       └── health.service.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts
```

## 数据库

默认使用本地 MySQL：

```text
host: 127.0.0.1
port: 3306
username: root
database: nest_backend
```

项目启动前需要创建数据库：

```sql
CREATE DATABASE nest_backend
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
```

数据库连接参数放在项目根目录的 `.env` 中，可以从 `.env.example` 复制后修改：

```bash
cp .env.example .env
```

`.env` 已加入 `.gitignore`，不会被提交。

## 安装依赖

```bash
npm install
```

## 启动项目

```bash
# 开发模式（watch）
npm run start:dev

# 生产构建并启动
npm run build
npm run start:prod
```

默认端口为 `3000`，可通过环境变量 `PORT` 覆盖。

## 接口

| 方法 | 地址 | 说明 |
| --- | --- | --- |
| GET | `/` | 服务根接口 |
| GET | `/health` | 健康检查，包含 MySQL 连接状态 |
| GET | `/docs` | Swagger UI |
| GET | `/docs-json` | OpenAPI JSON |

健康检查返回示例：

```json
{
  "status": "ok",
  "service": "nest-backend",
  "database": "up",
  "databaseLatencyMs": 3,
  "timestamp": "2026-10-27T14:00:00.000Z",
  "uptime": 12.34,
  "content": "芜湖，起飞！"
}
```

## 测试

```bash
npm run test
npm run test:e2e
```
