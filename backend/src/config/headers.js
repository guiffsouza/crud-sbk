export default class Headers {
  static config(req, res, next) {
    res.removeHeader("X-Powered-By");
    res.set("Processo-Seletivo", "SBK");
    next();
  }
}
