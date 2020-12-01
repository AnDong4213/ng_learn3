import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Inject,
  Injectable,
  Injector,
  Type,
} from '@angular/core';

import { DOCUMENT } from '@angular/common';

export interface DialogPos {
  top: string;
  left: string;
  width: string;
  height: string;
}

export interface ChildConfig {
  inputs: object;
  outputs: object;
  position?: DialogPos;
}

@Injectable({
  providedIn: 'root',
})
export class DomService {
  private childComponentRef: ComponentRef<any>;
  constructor(
    // 在angular中所有的组件都是通过一个工厂，组件工厂创建出来的，ComponentFactoryResolver要得到这样一个组件工厂，一个类
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef, // 得到angular程序本身的一个应用
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  public appendComponentTo(
    parentId: string,
    child: Type<any>,
    childConfig: ChildConfig
  ) {
    const childComponentRef = this.resolver
      .resolveComponentFactory(child) // 创建一个组件
      .create(this.injector); // 让ComponentFactoryResolver创建的组件能够接收到依赖注入的东西，比如注入http
    this.attachConfig(childConfig, childComponentRef); // 把@Input,@Output替换掉
    this.childComponentRef = childComponentRef;
    this.appRef.attachView(childComponentRef.hostView); //angular其实是个组件树，视图数，把创建好的组件加到angualr应用中去

    const childDOMElement = (childComponentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement; // 把组件的视图部分(模板部分),得到html一个渲染的表达
    this.document.getElementById(parentId).appendChild(childDOMElement);
  }

  public attachConfig(config: ChildConfig, componentRef: ComponentRef<any>) {
    const inputs = config.inputs;
    const outputs = config.outputs;
    for (const key in inputs) {
      if (inputs.hasOwnProperty(key)) {
        const element = inputs[key];
        componentRef.instance[key] = element;
      }
    }

    for (const key in outputs) {
      if (outputs.hasOwnProperty(key)) {
        const element = outputs[key];
        componentRef.instance[key] = element;
      }
    }
  }

  // removeComponent
  public removeComponent() {
    this.appRef.detachView(this.childComponentRef.hostView);
  }
}
