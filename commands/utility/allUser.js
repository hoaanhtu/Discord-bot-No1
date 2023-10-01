const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("alluser")
    .setDescription("all user information in server "),
  async execute(interaction) {
    const server = interaction.guild;
    const members = server.members.cache;
    const role = server.roles.cache;

    role.forEach((role) => {
      console.log(`Tên vai: ${role.name}, ID vai: ${role.id}`);
    });

    const userList = members.map((member) => {
      console.log(member.user.username);
      return `${member.user.username} (ID: ${member.user.id})`;
    });

    await interaction.reply(`Danh sách người dùng trong server:\n${userList}`);
  },
};
