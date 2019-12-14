// Typically, in production, you wouldn't use a default secret, but in a dev
// environment, it might make sense.
module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'wethotuwasatoad'
}