import { IoCContainer, iocClass } from 'libioc';
import { httpService } from '../services/dataService';

export function createClientIoCContainer(window) {
  const container = new IoCContainer();
  const rawConfig = window.__CONFIG__;

  container.registerAll({
    rawConfig,
    httpService: iocClass(httpService)
  });

  return container;
}
