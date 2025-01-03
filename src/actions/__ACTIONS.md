## Actions

Action is a handler for a specific HTTP request. It contains the business logic for processing the request and returning a response. Actions are typically organized by resource or entity type, with each action file containing the logic for a specific operation on that resource.

### Structure

Actions are stored in the `src/actions` directory. Each action is a TypeScript file that exports a function to handle the request. The function takes the request and response objects as arguments and returns a response.


`src/actions/posts/createPostAction.ts`

```javascript
import { Request, Response } from "express";

export const perform = (req: Request, res: Response) => {
  // Business logic to create a new post
  const post = {
    title: req.body.title,
    content: req.body.content,
  };
  
  // Return a success response
  res.status(201).json({ post });
};
```