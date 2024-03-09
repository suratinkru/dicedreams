module.exports.isAmdin = (req, res, next) => {
    const { role } = req.user;

    if ( role === 'amdin') {
        next();
    } else {
        return res.status(403).json({
            error: {
                message: 'ไม่มีสิทธิ์ใช้งานส่วนนี้ เฉพาะ amdin เท่านั้น'
            }
        });
    }
}

module.exports.isUser = (req, res, next) => {
    const { role } = req.user;

    if ( role === 'user') {
        next();
    } else {
        return res.status(403).json({
            error: {
                message: 'ไม่มีสิทธิ์ใช้งานส่วนนี้ เฉพาะ user เท่านั้น'
            }
        });
    }
}
