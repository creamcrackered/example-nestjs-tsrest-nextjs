import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import contract from 'contract';
import {
  Api,
  nestControllerContract,
  NestControllerInterface,
  NestRequestShapes,
  TsRestRequest,
} from '@ts-rest/nest';

const c = nestControllerContract(contract.post);
type RequestShapes = NestRequestShapes<typeof c>;

@Controller()
export class AppController implements NestControllerInterface<typeof c> {
  constructor(private readonly appService: AppService) {}

  @Api(c.getPost)
  async getPost(@TsRestRequest() { params: { id } }: RequestShapes['getPost']) {
    const post = this.appService.getPost(id);

    return { status: 200 as const, body: post };
  }

  @Api(c.createPost)
  async createPost(@TsRestRequest() { body }: RequestShapes['createPost']) {
    const post = this.appService.createPost({
      title: body.title,
      body: body.body,
    });

    return { status: 201 as const, body: post };
  }
}
