export class getDataService {
  static $inject = ['httpService'];

  static $singleton = true;

  constructor(httpService) {
    this.httpService = httpService;
  }
}
