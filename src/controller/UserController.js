const User = require("../models/User");

const UserController = {
  create: async (req, res) => {
    try {
      const { nome, senha, email } = req.body;

      const userCriado = await User.create({ nome, senha, email });

      return res.status(200).json({
        msg: "Usuario criado com sucesso!",
        user: userCriado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params; // usuario/atualizar/423423243
      const { nome, senha, email } = req.body;

      console.log("Atualizando o objeto");
      console.log({ id });
      console.log({ nome, senha, email });

      const userUpdate = await User.findByPk(id);

      if (userUpdate == null) {
        return res.status(404).json({
          msg: "usuario nao encontrado"
        })
      }

      const updated = await userUpdate.update({
        nome, senha, email
      });

      if(updated) {
        return res.status(200).json({
          msg: "Usuario atualizado com sucesso!",
        });
      }

      return res.status(500).json({
        msg: "Erro ao atualizar usuario"
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  getAll: async (req, res) => {
    try {
      const usuarios = await User.findAll();
      return res.status(200).json({
        msg: "Usuarios encontrados!",
        usuarios,
      });
      /* 
      usuarios: [
        {..}, {..}, {..}
      ] */
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      // api/user/3516321
      // Primary Key
      // SELECT * FROM User WHERE id = {id}
      const usuarioEncontrado = await User.findByPk(id);

      if (usuarioEncontrado == null) {
        return res.status(404).json({
          msg: "Usuario nao encontrado!",
        });
      }

      return res.status(200).json({
        msg: "Usuario encontrado com sucesso!",
        usuario: usuarioEncontrado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  delete: async (req, res) => {
    try {
      // api/user/3178321
      const { id } = req.params;

      const userFinded = await User.findByPk(id);

      if(userFinded == null) {
        return res.status(404).json({
          msg: "user nao encontrado"
        })
      }
      // Destruindo -> Deletando
      // As same it deleted
      await userFinded.destroy();

      return res.status(200).json({
        msg: "Usuario deletado com sucesso!",
        user: userFinded,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
};

module.exports = UserController;