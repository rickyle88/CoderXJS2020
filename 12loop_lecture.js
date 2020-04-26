// ## Tình huống 1: chúng ta muốn gửi email cho một danh sách các user

var users = [
    {name: 'A', email: 'a@gmail.com'},
    {name: 'B', email: 'b@gmail.com'}
]

function sendEmail(user){
    console.log('Sending email to ', user.email);
}

// How to send email to each user

// Idea
// sendEmail(users[0]);
// sendEmail(users[1]);
// sendEmail(users[2]);

// Câu hỏi đặt ra:

// - Sẽ phải viết bao nhiêu dòng như trên nếu như có 1000 users?
//     - Trả lời: Đơn giản, 1000 dòng
// - Sẽ phải viết bao nhiêu dòng như trên nếu không biết trước số users? (Giả sử mảng users được lấy từ database ra và tại thời điểm chạy chương trình)

// var users = getUsersFromDatabase(); // trả về 1 array gồm các user

