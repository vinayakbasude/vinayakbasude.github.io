export default function (req, res, next) {
    console.log(req.url, 'requested url')
    next()
}