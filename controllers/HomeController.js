class HomeController {
  async index(req, res) {
    res.send('TESTE!')
  }
}

export default new HomeController()
