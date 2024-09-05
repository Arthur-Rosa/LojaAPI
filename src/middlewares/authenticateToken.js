const jwt = require('jsonwebtoken');

function authenticateToken (req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    /**
     *   Bearer token
     *   Bearer shdaudhq9ye718d3qj99hd91hd91hh83h9ds98
     *   ['Bearer', 'dh91hd1h9812d9ha9dhw8hda9h812'], 0, 1
     */
    if (!token) {
        return res.status(401).json({
            msg: 'Acesso negado'
        });
    }

    // Headers, Payload, SECRET
    jwt.verify(token, process.env.SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({
                msg: 'Acesso negado'
            })
        }
        // Armazenar usuario na requisição
        req.user = user;

        next();
    });
}

module.exports = authenticateToken;
