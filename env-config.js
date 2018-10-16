const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.BACKEND_URL': prod ? 'https://api.example.com' : 'https://localhost:8080',
  'process.env.API_KEY:': prod ? 'prodKey' : '"AIzaSyBB-CAl9UfsFBI8-YPTvCk1yI30SsTYPt8"',
}