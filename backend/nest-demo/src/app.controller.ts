import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import contract from "contract";
import { Api, ApiDecorator, initNestServer } from '@ts-rest/nest';

const s = initNestServer(contract.post); // Import post sub router
type ControllerShape = typeof s.controllerShape;
type RouteShape = typeof s.routeShapes;

@Controller()
export class AppController implements ControllerShape {
  constructor(private readonly appService: AppService) {}

  @Api(s.route.getPost)
  async getPost(@ApiDecorator() { params: { id } }: RouteShape['getPost']) {
    const post = this.appService.getPost(id);

    return { status: 200 as const, body: post };
  }

  @Api(s.route.createPost)
  async createPost(@ApiDecorator() { body }: RouteShape['createPost']) {
    const post = this.appService.createPost({
      title: body.title,
      body: body.body,
    });

    return { status: 201 as const, body: post };
  }
}