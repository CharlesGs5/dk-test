# Stage 1: Dependencies and Build
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm i; \
  elif [ -f pnpm-lock.yaml ]; then pnpm install --frozen-lockfile; \
  else npm i; \
  fi

# Copy source code
COPY . .

# Disable Next.js telemetry (optional)
ENV NEXT_TELEMETRY_DISABLED=1

# Build Next.js application
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then pnpm build; \
  else npm run build; \
  fi

# Stage 2: Production Image
FROM node:20-alpine AS runner

WORKDIR /app

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Copy build output from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Expose the port Next.js runs on (default is 3000)
EXPOSE 3000

# Start the Next.js application
CMD ["node", "server.js"]
