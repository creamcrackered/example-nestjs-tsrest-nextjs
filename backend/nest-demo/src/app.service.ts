import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getPost(id: string) {
    return {
      id,
      title: "Test Post",
      body: "blagh"
    };
  }

  createPost({title, body}) {
    return {
      id: "example",
      title,
      body
    };
  }

}
