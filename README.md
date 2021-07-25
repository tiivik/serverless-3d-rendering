## Getting Started

Read the article [Serverless 3D WebGL rendering with ThreeJS](https://rainer.im/blog/serverless-3d-rendering).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### View a 3D model in browser

First, you'll need a .glTF (or .GLB) formatted 3D model to render. [Here's one](http://serverless-3d-rendering.vercel.app/DamagedHelmet.glb) you can use.

`https://serverless-3d-rendering.vercel.app?model={URL}`

Example:

`https://serverless-3d-rendering.vercel.app?model=/DamagedHelmet.glb`

### Render a 2D image of a 3D model

`https://serverless-3d-rendering.vercel.app/api/render?model={URL}`

Example:

`https://serverless-3d-rendering.vercel.app/api/render?model=https://serverless-3d-rendering.vercel.app/DamagedHelmet.glb`

This image below was rendered serverlessly when this page was loaded through the API listed above:
![Server side rendered image](https://serverless-3d-rendering.vercel.app/api/render?model=https://serverless-3d-rendering.vercel.app/DamagedHelmet.glb)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
