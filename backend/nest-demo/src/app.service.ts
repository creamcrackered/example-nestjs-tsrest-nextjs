import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getPost(id: string) {
    // .. Get Post
    return {
      id,
      title: "Test Post",
      body: "Some post body"
    };
  }

  createPost({title, body}) {
    // ... Create Post
    return {
      id: "example",
      title,
      body
    };
  }

}
