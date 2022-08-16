const Social = require('../models/Social');
const { HttpCodesEnum } = require('../enum/httpCodes');
class socialController {

    static async getAllSocial(req, res) {
        try {

            const socials = await Social.find();

            return res.status(HttpCodesEnum.OK).json(socials);

        } catch (err) {
            return res.status(HttpCodesEnum.SERVER_INTERNAL_ERROR).json({ message: err.message });
        }
    }



}


module.exports = socialController;