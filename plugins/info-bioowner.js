let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Maxy Botz MD
*✉️ Nama RL* : KAHFI-XD 
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 08 November 2005
*🎨 Umur* : 200
*🧮 Kelas* : kawin
*🧩 Hobby* : Nonton MplID, Chatting, Recode script bot
*💬 Sifat* : Idiot, Tidak Ramah, Kanjut, Prik, Pedofil
*🗺️ Tinggal* : Indo, Aceh, Aceh Timur, Peunarun 
*❤️ Suka* : warnah kuning & biru, kontol, memex, coli, trap, furry, kucing
*💔 Benci* : autis, anak epep, seleb

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @Kahfiofficial__
*🇫  Facebook* : Memek 
*🏮 Chanel Youtube* : Kahfi Official 🇮🇩
*🐈 Github:* XNXX.com

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
