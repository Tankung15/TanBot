exports.run = (client, message, args, ops) => {

    message.channel.send('/play,/p : เพื่อใช้ในการเปิดเพลง โดยใส่ลิ้งค์หรือชื่อเพลง \n /volume : ปรับระดับความดังตั้งแต่ 1-150 \n /queue : ดูคิวของเพลงขณะนี้ \n /skip,/s : เพื่อใช้ในการโหวตข้ามเพลง \n /forceskip : เพื่อใช้ในการข้ามเพลงได้เลยโดยไม่ต้องโหวตแต่ต้องมี permission Manage Messages \n /leave : เพื่อให้บอทออกจากห้้องแต่ต้องมี permission Manage Messages')

}
