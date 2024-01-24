const express = require("express")
const app = express();

app.listen(() => console.log("Bot Made By Palladium"));
const {
    Client,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ModalBuilder,
    TextInputStyle,
    TextInputBuilder
} = require('discord.js');
const { PermissionsBitField } = require('discord.js');
const client = new Client({ intents: ['Guilds', 'MessageContent', 'GuildMessages','GuildMembers'] });
const config = require('./config.json');
const config1 = require('./config1.json');
const config2 = require('./config2.json');
const config3 = require('./config3.json');
require('dotenv').config();
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
})

client.on('messageCreate', (message) => {
    if (message.content === '!setup') {
        if(!message.member.permissions.has(PermissionsBitField.Flags.Administrator))return
        const embed = new EmbedBuilder()
        .setTitle(config.title)
        .setDescription('أضـغـط فـي الاسـفـل للتقـديـم')
        .setColor(config.embedcolor)

        const row = new ActionRowBuilder()
    .addComponents(

        new ButtonBuilder()
        .setStyle(ButtonStyle.Success)
        .setLabel(config.title)
        .setCustomId('apply')
        .setDisabled(false),

        new ButtonBuilder()
            .setStyle(ButtonStyle.Success)
            .setLabel(config1.title)
            .setCustomId('mediator')
            .setDisabled(false),

        new ButtonBuilder()
            .setStyle(ButtonStyle.Success)
            .setLabel(config2.title)
            .setCustomId('judge')
            .setDisabled(false),

        new ButtonBuilder()
            .setStyle(ButtonStyle.Success)
            .setLabel(config3.title)
            .setCustomId('zaid')
            .setDisabled(false)
    );
        const channel = message.guild.channels.cache.get(config.applyroom);
        if (!channel) return;
        channel.send({
            embeds: [embed],
            components: [row]
        })
    }
})

client.on('interactionCreate', async (interaction) => {
    if (interaction.isButton()) {
        if (interaction.customId === 'apply') {
            const modal = new ModalBuilder()
            .setTitle('التـقديـم لللأدارة')
            .setCustomId('staff_apply')
            const nameComponent = new TextInputBuilder()
            .setCustomId('q1')
            .setLabel(`${config.q1}`)
            .setMinLength(2)
            .setMaxLength(25)
            .setRequired(true)
            .setStyle(TextInputStyle.Short)
            const ageComponent = new TextInputBuilder()
            .setCustomId('q2')
            .setLabel(`${config.q2}`)
            .setMinLength(1)
            .setMaxLength(2)
            .setStyle(TextInputStyle.Short)
            .setRequired(true)
            const whyYou = new TextInputBuilder()
            .setCustomId(`q3`)
            .setLabel(`${config.q3}`)
            .setMinLength(2)
            .setMaxLength(120)
            .setStyle(TextInputStyle.Short)
            .setRequired(true)
            const q4 = new TextInputBuilder()
            .setCustomId('q4')
            .setLabel(`${config.q4}`)
            .setMaxLength(400)
            .setStyle(TextInputStyle.Short)
            .setRequired(true)
            const q5 = new TextInputBuilder()
            .setCustomId('q5')
            .setLabel(`${config.q5}`)
            .setMaxLength(400)
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(true)
            const rows = [nameComponent, ageComponent,whyYou,q4,q5].map(
                (component) => new ActionRowBuilder().addComponents(component)
            )
            modal.addComponents(...rows);
            interaction.showModal(modal);
        }
        if (interaction.customId === 'mediator') {
            const modal = new ModalBuilder()
            .setTitle('التـقديـم للوسيط')
            .setCustomId('mediator_apply')
            const nameComponent = new TextInputBuilder()
            .setCustomId('q1')
            .setLabel(`${config1.q1}`)
            .setMinLength(2)
            .setMaxLength(25)
            .setRequired(true)
            .setStyle(TextInputStyle.Short)
            const ageComponent = new TextInputBuilder()
            .setCustomId('q2')
            .setLabel(`${config1.q2}`)
            .setMinLength(1)
            .setMaxLength(2)
            .setStyle(TextInputStyle.Short)
            .setRequired(true)
            const whyYou = new TextInputBuilder()
            .setCustomId(`q3`)
            .setLabel(`${config1.q3}`)
            .setMinLength(2)
            .setMaxLength(120)
            .setStyle(TextInputStyle.Short)
            .setRequired(true)
            const q4 = new TextInputBuilder()
            .setCustomId('q4')
            .setLabel(`${config1.q4}`)
            .setMaxLength(400)
            .setStyle(TextInputStyle.Short)
            .setRequired(true)
            const q5 = new TextInputBuilder()
            .setCustomId('q5')
            .setLabel(`${config1.q5}`)
            .setMaxLength(400)
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(true)
            const rows = [nameComponent, ageComponent,whyYou,q4,q5].map(
                (component) => new ActionRowBuilder().addComponents(component)
            )
            modal.addComponents(...rows);
            interaction.showModal(modal);
        }
        if (interaction.customId === 'judge') {
            const modal = new ModalBuilder()
            .setTitle('التـقديـم للقاضــية')
            .setCustomId('judge_apply')
            const nameComponent = new TextInputBuilder()
            .setCustomId('q1')
            .setLabel(`${config2.q1}`)
            .setMinLength(2)
            .setMaxLength(25)
            .setRequired(true)
            .setStyle(TextInputStyle.Short)
            const ageComponent = new TextInputBuilder()
            .setCustomId('q2')
            .setLabel(`${config2.q2}`)
            .setMinLength(1)
            .setMaxLength(2)
            .setStyle(TextInputStyle.Short)
            .setRequired(true)
            const whyYou = new TextInputBuilder()
            .setCustomId(`q3`)
            .setLabel(`${config2.q3}`)
            .setMinLength(2)
            .setMaxLength(120)
            .setStyle(TextInputStyle.Short)
            .setRequired(true)
            const q4 = new TextInputBuilder()
            .setCustomId('q4')
            .setLabel(`${config2.q4}`)
            .setMaxLength(400)
            .setStyle(TextInputStyle.Short)
            .setRequired(true)
            const q5 = new TextInputBuilder()
            .setCustomId('q5')
            .setLabel(`${config2.q5}`)
            .setMaxLength(400)
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(true)
            const rows = [nameComponent, ageComponent,whyYou,q4,q5].map(
                (component) => new ActionRowBuilder().addComponents(component)
            )
            modal.addComponents(...rows);
            interaction.showModal(modal);
        }
        if (interaction.customId === 'zaid') {
            const modal = new ModalBuilder()
            .setTitle('التـقديـم لـزياد')
            .setCustomId('zaid_apply')
            const nameComponent = new TextInputBuilder()
            .setCustomId('q1')
            .setLabel(`${config3.q1}`)
            .setMinLength(2)
            .setMaxLength(25)
            .setRequired(true)
            .setStyle(TextInputStyle.Short)
            const ageComponent = new TextInputBuilder()
            .setCustomId('q2')
            .setLabel(`${config3.q2}`)
            .setMinLength(1)
            .setMaxLength(2)
            .setStyle(TextInputStyle.Short)
            .setRequired(true)
            const whyYou = new TextInputBuilder()
            .setCustomId(`q3`)
            .setLabel(`${config3.q3}`)
            .setMinLength(2)
            .setMaxLength(120)
            .setStyle(TextInputStyle.Short)
            .setRequired(true)
            const q4 = new TextInputBuilder()
            .setCustomId('q4')
            .setLabel(`${config3.q4}`)
            .setMaxLength(400)
            .setStyle(TextInputStyle.Short)
            .setRequired(true)
            const q5 = new TextInputBuilder()
            .setCustomId('q5')
            .setLabel(`${config3.q5}`)
            .setMaxLength(400)
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(true)
            const rows = [nameComponent, ageComponent,whyYou,q4,q5].map(
                (component) => new ActionRowBuilder().addComponents(component)
            )
            modal.addComponents(...rows);
            interaction.showModal(modal);
        }
    }
})

    





    client.on('interactionCreate', async (interaction) => {
        if (interaction.isModalSubmit()) {
            if (interaction.customId === 'staff_apply') {
                const q1 = interaction.fields.getTextInputValue('q1');
                const q2 = interaction.fields.getTextInputValue('q2');
                const q3 = interaction.fields.getTextInputValue('q3');
                const q4 = interaction.fields.getTextInputValue('q4');
                const q5 = interaction.fields.getTextInputValue('q5');
                interaction.reply({
                    content: `${config.donesend}`,
                    ephemeral: true
                })
                const staffSubmitChannel = interaction.guild.channels.cache.get(config.staffroom);
                if (!staffSubmitChannel) return;
                const embed = new EmbedBuilder()
                .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL() })
                .setColor(config.embedcolor)
                .setFooter({ text: interaction.user.id })
                .setTimestamp()
                .setThumbnail(interaction.user.displayAvatarURL())
                .addFields(
                    {
                        name: `${config.q1}`,
                        value: q1,
                        inline:true
                    },
                    {
                        name: `${config.q2}`,
                        value: q2,
                        inline:true
                    },
                    {
                        name: `${config.q3}`,
                        value: q3,
                        inline:true
                    },
                    {
                        name: `${config.q4}`,
                        value: q4,
                        inline:true
                    },
                    {
                        name: `${config.q5}`,
                        value: q5,
                        inline:true
                    }
                )
                const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId('staff_accept')
                    .setLabel('قبول')
                    .setStyle(ButtonStyle.Success)
                )
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId('staff_deny')
                    .setLabel('رفض')
                    .setStyle(ButtonStyle.Danger)
                )
    
                staffSubmitChannel.send({
                    embeds: [embed],
                    components: [row]
                })
            }
        }
    
    
    
    
        if (interaction.isModalSubmit()) {
            if (interaction.customId === 'mediator_apply') {
                const q1 = interaction.fields.getTextInputValue('q1');
                const q2 = interaction.fields.getTextInputValue('q2');
                const q3 = interaction.fields.getTextInputValue('q3');
                const q4 = interaction.fields.getTextInputValue('q4');
                const q5 = interaction.fields.getTextInputValue('q5');
                interaction.reply({
                    content: `${config1.donesend}`,
                    ephemeral: true
                })
                const staffSubmitChannel = interaction.guild.channels.cache.get(config1.staffroom);
                if (!staffSubmitChannel) return;
                const embed = new EmbedBuilder()
                .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL() })
                .setColor(config.embedcolor)
                .setFooter({ text: interaction.user.id })
                .setTimestamp()
                .setThumbnail(interaction.user.displayAvatarURL())
                .addFields(
                    {
                        name: `${config1.q1}`,
                        value: q1,
                        inline:true
                    },
                    {
                        name: `${config1.q2}`,
                        value: q2,
                        inline:true
                    },
                    {
                        name: `${config1.q3}`,
                        value: q3,
                        inline:true
                    },
                    {
                        name: `${config1.q4}`,
                        value: q4,
                        inline:true
                    },
                    {
                        name: `${config1.q5}`,
                        value: q5,
                        inline:true
                    }
                )
                const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId('staff_accept1')
                    .setLabel('قبول')
                    .setStyle(ButtonStyle.Success)
                )
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId('staff_deny1')
                    .setLabel('رفض')
                    .setStyle(ButtonStyle.Danger)
                )
    
                staffSubmitChannel.send({
                    embeds: [embed],
                    components: [row]
                })
            }
        }
    
    
        if (interaction.isModalSubmit()) {
            if (interaction.customId === 'judge_apply') {
                const q1 = interaction.fields.getTextInputValue('q1');
                const q2 = interaction.fields.getTextInputValue('q2');
                const q3 = interaction.fields.getTextInputValue('q3');
                const q4 = interaction.fields.getTextInputValue('q4');
                const q5 = interaction.fields.getTextInputValue('q5');
                interaction.reply({
                    content: `${config2.donesend}`,
                    ephemeral: true
                })
                const staffSubmitChannel = interaction.guild.channels.cache.get(config2.staffroom);
                if (!staffSubmitChannel) return;
                const embed = new EmbedBuilder()
                .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL() })
                .setColor(config2.embedcolor)
                .setFooter({ text: interaction.user.id })
                .setTimestamp()
                .setThumbnail(interaction.user.displayAvatarURL())
                .addFields(
                    {
                        name: `${config2.q1}`,
                        value: q1,
                        inline:true
                    },
                    {
                        name: `${config2.q2}`,
                        value: q2,
                        inline:true
                    },
                    {
                        name: `${config2.q3}`,
                        value: q3,
                        inline:true
                    },
                    {
                        name: `${config2.q4}`,
                        value: q4,
                        inline:true
                    },
                    {
                        name: `${config2.q5}`,
                        value: q5,
                        inline:true
                    }
                )
                const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId('staff_accept2')
                    .setLabel('قبول')
                    .setStyle(ButtonStyle.Success)
                )
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId('staff_deny2')
                    .setLabel('رفض')
                    .setStyle(ButtonStyle.Danger)
                )
    
                staffSubmitChannel.send({
                    embeds: [embed],
                    components: [row]
                })
            }
        }
    
        if (interaction.isModalSubmit()) {
            if (interaction.customId === 'zaid_apply') {
                const q1 = interaction.fields.getTextInputValue('q1');
                const q2 = interaction.fields.getTextInputValue('q2');
                const q3 = interaction.fields.getTextInputValue('q3');
                const q4 = interaction.fields.getTextInputValue('q4');
                const q5 = interaction.fields.getTextInputValue('q5');
                interaction.reply({
                    content: `${config3.donesend}`,
                    ephemeral: true
                })
                const staffSubmitChannel = interaction.guild.channels.cache.get(config3.staffroom);
                if (!staffSubmitChannel) return;
                const embed = new EmbedBuilder()
                .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL() })
                .setColor(config3.embedcolor)
                .setFooter({ text: interaction.user.id })
                .setTimestamp()
                .setThumbnail(interaction.user.displayAvatarURL())
                .addFields(
                    {
                        name: `${config3.q1}`,
                        value: q1,
                        inline:true
                    },
                    {
                        name: `${config3.q2}`,
                        value: q2,
                        inline:true
                    },
                    {
                        name: `${config3.q3}`,
                        value: q3,
                        inline:true
                    },
                    {
                        name: `${config3.q4}`,
                        value: q4,
                        inline:true
                    },
                    {
                        name: `${config3.q5}`,
                        value: q5,
                        inline:true
                    }
                )
                const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId('staff_accept3')
                    .setLabel('قبول')
                    .setStyle(ButtonStyle.Success)
                )
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId('staff_deny3')
                    .setLabel('رفض')
                    .setStyle(ButtonStyle.Danger)
                )
    
                staffSubmitChannel.send({
                    embeds: [embed],
                    components: [row]
                })
            }
        }

        if (interaction.customId === 'staff_accept') {
            // TODO: save user id in json or sum instead of getting id from embed footer
            const getIdFromFooter = interaction.message.embeds[0].footer.text;
            const getMember = await interaction.guild.members.fetch(getIdFromFooter);
            const channel = await interaction.guild.channels.fetch(config.channelid);
            
            await getMember.roles.add(config.staffid).catch((err) => {
                console.error(err)
                return interaction.reply({
                    content: ":x: ايرور حصلت مشكلة"
                });
            });
        
            if (channel) {
                console.log('done');
                await interaction.reply({
                    content: `تم قبول الاداري`
                });
        
                // إرسال رسالة في القناة
                await channel.send(`${config.yesmessage} <@${getMember.user.id}>`);
            }
        
            const newDisabledRow = new ActionRowBuilder()
                .setComponents(
                    new ButtonBuilder()
                    .setCustomId('staff_accept_ended')
                    .setDisabled()
                    .setStyle(ButtonStyle.Success)
                    .setLabel('قبول')
                )
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId('staff_deny_ended')
                    .setDisabled()
                    .setStyle(ButtonStyle.Danger)
                    .setLabel('رفض')
                );
        
            interaction.message.edit({ components: [newDisabledRow] });
        }
        








        if (interaction.customId === 'staff_accept1') {
            // TODO: save user id in json or sum instead of getting id from embed footer
            const getIdFromFooter = interaction.message.embeds[0].footer.text;
            const getMember = await interaction.guild.members.fetch(getIdFromFooter);
            const channel = await interaction.guild.channels.fetch(config1.channelid1);
            await getMember.roles.add(config1.staffid).catch((err) => {
                console.error(err)
                return interaction.reply({
                    content: ":x: ايرور حصلت مشكلة"
                })
            });
            if (channel) {
                console.log('done');
                await interaction.reply({
                    content: `تم قبول الاداري`
                });
        
                // إرسال رسالة في القناة
                await channel.send(`${config.yesmessage} <@${getMember.user.id}>`);
            }
            const newDisabledRow = new ActionRowBuilder()
            .setComponents(
                new ButtonBuilder()
                .setCustomId('staff_accept_ended1')
                .setDisabled()
                .setStyle(ButtonStyle.Success)
                .setLabel('قبول')
            )
            .addComponents(
                new ButtonBuilder()
                .setCustomId('staff_deny_ended1')
                .setDisabled()
                .setStyle(ButtonStyle.Danger)
                .setLabel('رفض')
            )
            interaction.message.edit({ components: [newDisabledRow] })
        }
        if (interaction.customId === 'staff_accept2') {
            // TODO: save user id in json or sum instead of getting id from embed footer
            const getIdFromFooter = interaction.message.embeds[0].footer.text;
            const getMember = await interaction.guild.members.fetch(getIdFromFooter);
            const channel = await interaction.guild.channels.fetch(config2.channelid2);
            await getMember.roles.add(config2.staffid).catch((err) => {
                console.error(err)
                return interaction.reply({
                    content: ":x: ايرور حصلت مشكلة"
                })
            });
            if (channel) {
                console.log('done');
                await interaction.reply({
                    content: `تم قبول الاداري`
                });
        
                // إرسال رسالة في القناة
                await channel.send(`${config.yesmessage} <@${getMember.user.id}>`);
            }
            const newDisabledRow = new ActionRowBuilder()
            .setComponents(
                new ButtonBuilder()
                .setCustomId('staff_accept_ended2')
                .setDisabled()
                .setStyle(ButtonStyle.Success)
                .setLabel('قبول')
            )
            .addComponents(
                new ButtonBuilder()
                .setCustomId('staff_deny_ended2')
                .setDisabled()
                .setStyle(ButtonStyle.Danger)
                .setLabel('رفض')
            )
            interaction.message.edit({ components: [newDisabledRow] })
        }

        if (interaction.customId === 'staff_accept3') {
            // TODO: save user id in json or sum instead of getting id from embed footer
            const getIdFromFooter = interaction.message.embeds[0].footer.text;
            const getMember = await interaction.guild.members.fetch(getIdFromFooter);
            const channel = await interaction.guild.channels.fetch(config3.channelid3);

            await getMember.roles.add(config3.staffid).catch((err) => {
                console.error(err)

                return interaction.reply({
                    content: ":x: ايرور حصلت مشكلة"
                })
            });
            if (channel) {
                console.log('done');
                await interaction.reply({
                    content: `تم قبول الاداري`
                });
        
                // إرسال رسالة في القناة
                await channel.send(`${config.yesmessage} <@${getMember.user.id}>`);
            }
            
            const newDisabledRow = new ActionRowBuilder()
            .setComponents(
                new ButtonBuilder()
                .setCustomId('staff_accept_ended3')
                .setDisabled()
                .setStyle(ButtonStyle.Success)
                .setLabel('قبول')
            )
            .addComponents(
                new ButtonBuilder()
                .setCustomId('staff_deny_ended3')
                .setDisabled()
                .setStyle(ButtonStyle.Danger)
                .setLabel('رفض')
            )
            interaction.message.edit({ components: [newDisabledRow] })
        }




        if (interaction.customId === 'staff_deny') {
            // TODO: save user id in json or sum instead of getting id from embed footer
            const getIdFromFooter = interaction.message.embeds[0].footer?.text;
            const getMember = await interaction.guild.members.fetch(getIdFromFooter);
            const channel = await interaction.guild.channels.fetch(config.channelid);
            
            if (channel) {
                console.log('done');
                await interaction.reply({
                    content: `تم رفض الاداري`
                });
        
                // إرسال رسالة في القناة
                await channel.send(`${config.nomessage} <@${getMember.user.id}>`);
            }
            
            const newDisabledRow = new ActionRowBuilder()
            .setComponents(
                new ButtonBuilder()
                .setCustomId('staff_accept_ended')
                .setDisabled()
                .setStyle(ButtonStyle.Success)
                .setLabel('قبول')
            )
            .addComponents(
                new ButtonBuilder()
                .setCustomId('staff_deny_ended')
                .setDisabled()
                .setStyle(ButtonStyle.Danger)
                .setLabel('رفض')
            )
            interaction.message.edit({ components: [newDisabledRow] })
        }

        if (interaction.customId === 'staff_deny1') {
            // TODO: save user id in json or sum instead of getting id from embed footer
            const getIdFromFooter = interaction.message.embeds[0].footer?.text;
            const getMember = await interaction.guild.members.fetch(getIdFromFooter);
            const channel = await interaction.guild.channels.fetch(config1.channelid1);
            if (channel) {
                console.log('done');
                await interaction.reply({
                    content: `تم رفض الاداري`
                });
        
                // إرسال رسالة في القناة
                await channel.send(`${config.nomessage} <@${getMember.user.id}>`);
            }
            const newDisabledRow = new ActionRowBuilder()
            .setComponents(
                new ButtonBuilder()
                .setCustomId('staff_accept_ended1')
                .setDisabled()
                .setStyle(ButtonStyle.Success)
                .setLabel('قبول')
            )
            .addComponents(
                new ButtonBuilder()
                .setCustomId('staff_deny_ended1')
                .setDisabled()
                .setStyle(ButtonStyle.Danger)
                .setLabel('رفض')
            )
            interaction.message.edit({ components: [newDisabledRow] })
        }
        if (interaction.customId === 'staff_deny2') {
            // TODO: save user id in json or sum instead of getting id from embed footer
            const getIdFromFooter = interaction.message.embeds[0].footer?.text;
            const getMember = await interaction.guild.members.fetch(getIdFromFooter);
            const channel = await interaction.guild.channels.fetch(config2.channelid2);
            if (channel) {
                console.log('done');
                await interaction.reply({
                    content: `تم رفض الاداري`
                });
        
                // إرسال رسالة في القناة
                await channel.send(`${config.nomessage} <@${getMember.user.id}>`);
            }
            const newDisabledRow = new ActionRowBuilder()
            .setComponents(
                new ButtonBuilder()
                .setCustomId('staff_accept_ended2')
                .setDisabled()
                .setStyle(ButtonStyle.Success)
                .setLabel('قبول')
            )
            .addComponents(
                new ButtonBuilder()
                .setCustomId('staff_deny_ended2')
                .setDisabled()
                .setStyle(ButtonStyle.Danger)
                .setLabel('رفض')
            )
            interaction.message.edit({ components: [newDisabledRow] })
        }


        if (interaction.customId === 'staff_deny3') {
            // TODO: save user id in json or sum instead of getting id from embed footer
            const getIdFromFooter = interaction.message.embeds[0].footer?.text;
            const getMember = await interaction.guild.members.fetch(getIdFromFooter);
            const channel = await interaction.guild.channels.fetch(config3.channelid3);
            if (channel) {
                console.log('done');
                await interaction.reply({
                    content: `تم رفض الاداري`
                });
        
                // إرسال رسالة في القناة
                await channel.send(`${config.nomessage} <@${getMember.user.id}>`);
            }
        
                const newDisabledRow = new ActionRowBuilder()
                    .setComponents(
                        new ButtonBuilder()
                            .setCustomId('staff_accept_ended3')
                            .setDisabled()
                            .setStyle(ButtonStyle.Success)
                            .setLabel('قبول')
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('staff_deny_ended3')
                            .setDisabled()
                            .setStyle(ButtonStyle.Danger)
                            .setLabel('رفض')
                    );
        
                interaction.message.edit({ components: [newDisabledRow] });
            } 
        }

    )






client.login("MTE4ODIyNDUwMTM0Mzg0NjU0MA.GWUlcc.f-_dXBr6QZWCm7FWPmMk76CwaILaENT2D75RoY");